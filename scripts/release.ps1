# One-shot release for Windows PowerShell. Run from the project root:
#   powershell -ExecutionPolicy Bypass -File scripts\release.ps1
# It: installs deps -> shrinks videos -> refuses to continue if any file > 50 MB
#     -> branches fresh from origin/main -> commits -> pushes (never commits out/ or node_modules).
$ErrorActionPreference = 'Stop'
$branch = 'release-v12'

Write-Host '1/5 npm install' -ForegroundColor Cyan
npm install
Write-Host '2/5 shrinking videos' -ForegroundColor Cyan
node scripts/optimize-media.cjs

Write-Host '3/5 checking for files over 50 MB' -ForegroundColor Cyan
$big = Get-ChildItem -Recurse -File -Force | Where-Object { $_.Length -gt 50MB -and $_.FullName -notmatch 'node_modules|\\\.git\\|\\\.next\\' }
if ($big) { $big | ForEach-Object { Write-Host ("TOO BIG: " + $_.FullName) -ForegroundColor Red }; throw 'Fix the files above, then run again.' }

Write-Host "4/5 fresh branch '$branch' from origin/main" -ForegroundColor Cyan
git fetch origin
git rm -r --cached out -q 2>$null
$dirty = git status --porcelain
if ($dirty) { git stash push -u -m release-v12 | Out-Null }
git switch -C $branch origin/main
if ($dirty) { git stash pop }

Write-Host '5/5 commit + push' -ForegroundColor Cyan
git rm -r --cached out -q 2>$null
git add -A
git status --short
git commit -m 'Release v12: optimized media, new divisions, SmartVideo, Next 14.2.35, Node 26'
git push -u origin $branch
Write-Host "Done. Now open a Pull Request: $branch -> main on GitHub." -ForegroundColor Green
