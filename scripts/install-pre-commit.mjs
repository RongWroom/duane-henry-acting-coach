import { writeFileSync, mkdirSync, existsSync, chmodSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '..');

// Resolve the git dir (handles worktrees / custom GIT_DIR via env).
const gitDir = process.env.GIT_DIR
  ? join(repoRoot, process.env.GIT_DIR)
  : join(repoRoot, '.git');

// Support both a plain .git dir and a .git file (worktree/submodule).
const hooksDir = existsSync(gitDir) && existsSync(join(gitDir, 'hooks'))
  ? join(gitDir, 'hooks')
  : null;

if (!hooksDir) {
  console.log('[pre-commit] No .git/hooks directory found — skipping hook install.');
  process.exit(0);
}

const hookPath = join(hooksDir, 'pre-commit');

const hookScript = `#!/usr/bin/env bash
# Auto-installed by scripts/install-pre-commit.mjs (npm run prepare)
# Runs tailwind-lint --fix on staged TS/TSX/JS/JSX files and re-stages fixes.
set -e

staged=$(git diff --cached --name-only --diff-filter=ACM -- '*.ts' '*.tsx' '*.js' '*.jsx')
if [ -z "$staged" ]; then
  exit 0
fi

# Run the fixer over the staged files only.
printf '%s\\n' "$staged" | xargs npx --no-install tailwind-lint --fix 2>/dev/null || true

# Re-stage anything that was modified by the fixer.
git diff --cached --name-only --diff-filter=ACM -- '*.ts' '*.tsx' '*.js' '*.jsx' | while read -r f; do
  git add "$f"
done

exit 0
`;

writeFileSync(hookPath, hookScript);
chmodSync(hookPath, 0o755);
console.log(`[pre-commit] Installed hook at ${hookPath}`);
