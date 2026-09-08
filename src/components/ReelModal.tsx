import React, { useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { SELECTED_WORKS_DATA } from '../data/portfolioData';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(42); // Seconds in
  const totalDuration = 258; // 04:18

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const scenes = [
    { title: 'NCIS: Clayton Reeves Confrontation Scene', time: '00:15', role: 'Clayton Reeves' },
    { title: 'Captain Marvel: Starforce Extraction', time: '01:30', role: 'Kree Officer' },
    { title: 'BBC Doctors: Emotional Hospital Turning Point', time: '02:45', role: 'Gareth Broadhurst' },
    { title: 'King Lear: Edmund Monologue (Live UK Tour)', time: '03:40', role: 'Edmund' },
  ];

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#09090d] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-white/10 bg-black/50">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <span className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white">
              Duane Henry — Theatrical Dramatic Reel (2018–2024)
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Showreel"
            className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Screen Simulation */}
        <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={SELECTED_WORKS_DATA.featuredReel.stillUrl}
            alt="Reel scene preview"
            className={`w-full h-full object-cover brightness-[0.75] transition-all duration-700 ${
              isPlaying ? 'scale-102' : 'scale-100'
            }`}
          />

          {/* Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-black/80" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-black/80" />

          {/* Play/Pause Overlay Icon */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-20 h-20 rounded-full bg-[#E5A93C] text-black flex items-center justify-center hover:scale-110 hover:bg-white transition-all shadow-2xl"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </button>

          {/* Timecode overlay */}
          <div className="absolute top-6 left-6 font-mono text-[12px] text-white/90 bg-black/70 px-3 py-1 rounded border border-white/15">
            TC 01:04:{formatTime(currentTime)}:12
          </div>

          {/* Reel Current Scene Label */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[12px] text-white bg-black/80 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/15">
            <span className="font-medium text-[#E5A93C]">
              CBS NCIS • Special Agent Clayton Reeves
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              {formatTime(currentTime)} / {formatTime(totalDuration)}
            </span>
          </div>
        </div>

        {/* Playback Controls & Scene Markers */}
        <div className="p-4 sm:p-6 bg-[#0c0c10] text-zinc-300">
          {/* Progress Scrubber */}
          <div className="relative w-full h-1.5 bg-white/20 mb-5 rounded-full cursor-pointer group">
            <div
              className="h-full bg-[#E5A93C] relative rounded-full"
              style={{ width: `${(currentTime / totalDuration) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Playback action buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-[11px] tracking-wider uppercase font-bold transition-colors"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 hover:bg-white/10 text-white rounded-full transition-colors"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <span className="text-[12px] font-mono text-zinc-400">
                {formatTime(currentTime)} / {formatTime(totalDuration)}
              </span>
            </div>

            {/* Jump to specific dramatic chapter */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-wider uppercase">
              <span className="text-zinc-500 font-medium">Jump Scene:</span>
              {scenes.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTime(idx * 60 + 15)}
                  className="px-3 py-1.5 rounded-full border border-white/15 hover:border-[#E5A93C] text-zinc-300 hover:text-white transition-colors"
                >
                  {s.role} ({s.time})
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
