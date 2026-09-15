#!/usr/bin/env python3
"""
Strip the embedded Apple ICC profile from the hero AVIFs and replace it with
an nclx color box (matching the working stage AVIFs), without disturbing any
file offsets.

Strategy: the ICC `prof` colr box (548 bytes) lives inside meta -> iprp -> ipco.
We replace it with a 19-byte `nclx` colr box (delta = -529 bytes). To keep the
mdat box (and therefore every iloc item offset) at the exact same file position,
we insert a 529-byte `free` box as a new child of `meta` (sibling of iprp).
This keeps `meta`'s total size unchanged, so nothing after `meta` moves and no
iloc/idat offsets need updating. ipco/iprp shrink by 529 but their child box
order (and therefore ipma property indices) is preserved because the colr box
is replaced in place (still exactly one box at that slot).
"""
import struct
import sys

NCLR_BOX = bytes.fromhex("00000013636f6c726e636c7800020002000680")
# 19 bytes: size=19, type='colr', nclx, primaries=2, transfer=2, matrix=6, full_range=0x80

FULL_BOX_TYPES = {"meta", "hdlr", "pitm", "iloc", "iinf", "iref", "idat",
                  "ipma", "colr", "pixi", "clli", "stsd"}  # colr treated as full? No.


def read_box(data, pos):
    """Return (type, header_size, payload_start, payload_end, total_size)."""
    size = struct.unpack(">I", data[pos:pos + 4])[0]
    btype = data[pos + 4:pos + 8].decode("latin1")
    hdr = 8
    if size == 1:
        size = struct.unpack(">Q", data[pos + 8:pos + 16])[0]
        hdr = 16
    elif size == 0:
        size = len(data) - pos
    return btype, hdr, pos + hdr, pos + size, size


def walk_boxes(data, start, end):
    """Yield (btype, box_start, hdr, payload_start, box_end, size)."""
    pos = start
    while pos + 8 <= end:
        btype, hdr, p_start, b_end, size = read_box(data, pos)
        yield btype, pos, hdr, p_start, b_end, size
        pos = b_end


def fix_file(path):
    data = bytearray(open(path, "rb").read())

    # Locate top-level meta box.
    meta = None
    for btype, bs, hdr, ps, be, sz in walk_boxes(data, 0, len(data)):
        if btype == "meta":
            meta = (bs, hdr, ps, be, sz)
            break
    if meta is None:
        print(f"  {path}: no meta box, skipping")
        return False
    m_bs, m_hdr, m_ps, m_be, m_sz = meta
    # meta is a full box: payload starts after 4-byte version/flags.
    meta_children_start = m_ps + 4
    meta_children_end = m_be

    # Walk meta children to find iprp, and within it ipco, and within it colr.
    colr_found = None  # (box_start, box_end)
    iprp_box = None
    ipco_box = None
    for btype, bs, hdr, ps, be, sz in walk_boxes(data, meta_children_start, meta_children_end):
        if btype == "iprp":
            iprp_box = (bs, be, sz)
            for btype2, bs2, hdr2, ps2, be2, sz2 in walk_boxes(data, ps, be):
                if btype2 == "ipco":
                    ipco_box = (bs2, be2, sz2)
                    for btype3, bs3, hdr3, ps3, be3, sz3 in walk_boxes(data, ps2, be2):
                        if btype3 == "colr":
                            colr_found = (bs3, be3, sz3)
    if colr_found is None:
        print(f"  {path}: no colr box in ipco, skipping")
        return False
    c_bs, c_be, c_sz = colr_found
    # Verify it is an ICC 'prof' box (colr payload starts with b'prof' or b'rICC').
    colr_payload = data[c_bs + 8: c_bs + 12]
    if colr_payload not in (b"prof", b"rICC"):
        print(f"  {path}: colr is not ICC ({colr_payload}), skipping")
        return False

    delta = c_sz - len(NCLR_BOX)  # bytes saved (529)
    print(f"  {path}: colr sz={c_sz} -> nclx sz={len(NCLR_BOX)} (delta={delta})")

    # Build new meta children region:
    # - replace colr box with NCLOR_BOX (in place within ipco)
    # - shrink ipco size, iprp size
    # - append a `free` box of size `delta` as a new meta child to keep meta size constant
    new_meta_children = bytearray()
    for btype, bs, hdr, ps, be, sz in walk_boxes(data, meta_children_start, meta_children_end):
        if btype == "iprp":
            # Rebuild iprp: walk its children, rebuild ipco (replacing colr), copy ipma etc.
            new_iprp_payload = bytearray()
            for btype2, bs2, hdr2, ps2, be2, sz2 in walk_boxes(data, ps, be):
                if btype2 == "ipco":
                    new_ipco_payload = bytearray()
                    for btype3, bs3, hdr3, ps3, be3, sz3 in walk_boxes(data, ps2, be2):
                        if btype3 == "colr":
                            new_ipco_payload += NCLR_BOX
                        else:
                            new_ipco_payload += data[bs3:be3]
                    new_ipco = struct.pack(">I", 8 + len(new_ipco_payload)) + b"ipco" + new_ipco_payload
                    new_iprp_payload += new_ipco
                else:
                    new_iprp_payload += data[bs2:be2]
            new_iprp = struct.pack(">I", 8 + len(new_iprp_payload)) + b"iprp" + new_iprp_payload
            new_meta_children += new_iprp
        else:
            new_meta_children += data[bs:be]

    # Append free box of size `delta` to keep meta size identical.
    free_box = struct.pack(">I", delta) + b"free" + b"\x00" * (delta - 8)
    assert len(free_box) == delta
    new_meta_children += free_box

    # Reconstruct meta box: header (8) + version/flags (4) + new children.
    new_meta = data[m_bs:m_ps + 4] + new_meta_children  # m_ps+4 includes the 4 full-box bytes
    # meta size should be unchanged.
    if len(new_meta) != m_sz:
        print(f"  {path}: WARNING meta size changed {m_sz} -> {len(new_meta)}")
    # Patch meta size (should be same, but be correct).
    new_meta[0:4] = struct.pack(">I", len(new_meta))

    # Reassemble file: everything before meta + new meta + everything after meta.
    out = data[:m_bs] + new_meta + data[m_be:]
    open(path, "wb").write(out)
    print(f"  {path}: wrote {len(out)} bytes (was {len(data)})")
    return True


if __name__ == "__main__":
    for f in sys.argv[1:]:
        print(f"Fixing {f}")
        fix_file(f)
