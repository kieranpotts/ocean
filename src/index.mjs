import { copyFile, mkdir, writeFile } from 'node:fs/promises'

import getTheme from './theme.mjs'

const vs = getTheme({ theme: 'vs', name: 'Ocean Light' })

try {
  await mkdir('dist/themes/', { recursive: true })
  await mkdir('dist/_/', { recursive: true })

  await writeFile('dist/themes/vs.json', JSON.stringify(vs, null, 2))

  await copyFile('src/.vscodeignore', 'dist/.vscodeignore')
  await copyFile('src/CHANGELOG.md', 'dist/CHANGELOG.md')
  await copyFile('src/README.md', 'dist/README.md')
  await copyFile('src/LICENSE.txt', 'dist/LICENSE.txt')
  await copyFile('src/_/wave.png', 'dist/_/wave.png')
  await copyFile('src/package.json', 'dist/package.json')
} catch (err) {
  console.error(err)
  process.exit(1)
}
