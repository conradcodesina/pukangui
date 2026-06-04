import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const componentsDir = path.resolve(root, 'src/components')
const outputFile = path.resolve(root, 'src/exports.js')

const dirs = fs.readdirSync(componentsDir, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name)
    .sort()

const lines = [
    '// This file is auto-generated. Do not edit manually.',
    ''
]

for (const dir of dirs) {
    const indexVue = path.join(componentsDir, dir, 'index.vue')
    const indexJs = path.join(componentsDir, dir, 'index.js')

    if (fs.existsSync(indexVue) && !fs.existsSync(indexJs)) {
        lines.push(`export { default as ${dir} } from './components/${dir}/index.vue'`)
    }

    if (fs.existsSync(indexJs)) {
        lines.push(`export * from './components/${dir}/index.js'`)
    }
}

fs.writeFileSync(outputFile, `${lines.join('\n')}\n`)
