const glob = require('glob')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

const htmlFiles = glob.sync("**/*.html")
const seenPaths = {}

for (const file of htmlFiles) {
    const html = fs.readFileSync(file, { encoding: 'utf8' })
    const $ = cheerio.load(html)

    for (const a of $("a").toArray()) {
        const href = a.attribs.href
        if (href && href.length > 1 && !href.match(/^http/)) {
            const relPath = path.join(path.dirname(file), a.attribs.href)
            if (!fs.existsSync(relPath) && !seenPaths[relPath]) {
                console.log(relPath)
                seenPaths[relPath] = true
            }
        }
    }

    for (const img of $("img").toArray()) {
        const src = img.attribs.src
        if (!src.match(/^http/)) {
            const relPath = path.join(path.dirname(file), img.attribs.src)
            if (!fs.existsSync(relPath) && !seenPaths[relPath]) {
                console.log(relPath)
                seenPaths[relPath] = true
            }
        }
    }
}