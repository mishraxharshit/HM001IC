// Works on Windows / Mac / Linux. You do NOT need to install ffmpeg yourself.
//   1)  npm install --save-dev @ffmpeg-installer/ffmpeg
//   2)  node scripts/optimize-media.cjs
// Shrinks every public/media/**/*.mp4 (max 20 s, max 1280px wide, no audio, fast-start)
// and writes a light <name>-m.mp4 that phones download automatically.
const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')
let ffmpeg
try { ffmpeg = require('@ffmpeg-installer/ffmpeg').path } catch { console.error('Run first:  npm install --save-dev @ffmpeg-installer/ffmpeg'); process.exit(1) }
if (!fs.existsSync('public/media')) { console.error('Run this from the project root (folder that contains public/media).'); process.exit(1) }

const walk = (d) => fs.readdirSync(d).flatMap((n) => { const p = path.join(d, n); return fs.statSync(p).isDirectory() ? walk(p) : [p] })
const mb = (p) => (fs.statSync(p).size / 1048576).toFixed(1)
const run = (args) => { const r = spawnSync(ffmpeg, ['-y', '-loglevel', 'error', ...args], { stdio: 'inherit' }); if (r.status !== 0) { console.error('ffmpeg failed on', args[1]); process.exit(1) } }

const files = walk('public/media').filter((p) => p.endsWith('.mp4') && !p.endsWith('-m.mp4') && !p.endsWith('.opt.mp4'))
for (const f of files) {
  const base = f.slice(0, -4), tmp = base + '.opt.mp4', m = base + '-m.mp4', before = mb(f)
  run(['-i', f, '-t', '20', '-vf', "scale='min(1280,iw)':-2", '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-g', '48', '-an', '-movflags', '+faststart', '-pix_fmt', 'yuv420p', tmp])
  if (fs.statSync(tmp).size < fs.statSync(f).size) fs.renameSync(tmp, f); else fs.rmSync(tmp)
  run(['-i', f, '-vf', 'scale=854:-2', '-c:v', 'libx264', '-preset', 'slow', '-crf', '31', '-g', '48', '-an', '-movflags', '+faststart', '-pix_fmt', 'yuv420p', m])
  console.log(`${f}: ${before} MB -> ${mb(f)} MB   (phone version ${mb(m)} MB)`)
}
console.log(`\nDone: ${files.length} videos. Now commit (git add -A).`)
