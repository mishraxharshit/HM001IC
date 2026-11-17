// Shrinks big photos in place (same file names, so no code changes needed).
//   npm install
//   node scripts/optimize-images.cjs
// Every public/**/*.jpg|jpeg is resized to max 1800px wide and recompressed (progressive, quality 78).
const fs = require('fs'), path = require('path')
let sharp; try { sharp = require('sharp') } catch { console.error('Run first:  npm install'); process.exit(1) }
if (!fs.existsSync('public')) { console.error('Run this from the project root.'); process.exit(1) }
const walk = (d) => fs.readdirSync(d).flatMap((n) => { const p = path.join(d, n); return fs.statSync(p).isDirectory() ? walk(p) : [p] })
const files = walk('public').filter((p) => /\.jpe?g$/i.test(p))
;(async () => {
  let saved = 0
  for (const f of files) {
    const before = fs.statSync(f).size
    const buf = await sharp(f).rotate().resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 78, progressive: true, mozjpeg: true }).toBuffer()
    if (buf.length < before) { fs.writeFileSync(f, buf); saved += before - buf.length; console.log(`${f}: ${(before / 1024).toFixed(0)} KB -> ${(buf.length / 1024).toFixed(0)} KB`) }
  }
  console.log(`\nDone. Saved ${(saved / 1048576).toFixed(1)} MB across ${files.length} images.`)
})()
