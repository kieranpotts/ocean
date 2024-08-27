#!/usr/bin/env node

'use strict'

const fs = require('fs')
const readline = require('readline')
const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec)

const main = () => {
  const packageJson = fs.readFileSync('./src/package.json', 'utf8')
  const packageData = JSON.parse(packageJson)
  const version = packageData.version

  console.log(`The current version is v${version}.`)

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Is this new release a "patch", "minor" or "major" update? ', async (releaseType) => {
    console.log(`You selected ${releaseType} release.`)

    rl.close()

    let updatedVersion = version.split('.')

    if (releaseType === 'patch') {
      updatedVersion[2] = String(Number(updatedVersion[2]) + 1)
    } else if (releaseType === 'minor') {
      updatedVersion[1] = String(Number(updatedVersion[1]) + 1)
      updatedVersion[2] = 0
    } else if (releaseType === 'major') {
      updatedVersion[0] = String(Number(updatedVersion[0]) + 1)
      updatedVersion[1] = 0
      updatedVersion[2] = 0
    } else {
      console.error('Invalid semantic release type.')
      return
    }

    const newVersion = updatedVersion.join('.')
    console.log(`The new release will be v${newVersion}.`)

    packageData.version = newVersion
    fs.writeFileSync('./src/package.json', JSON.stringify(packageData, null, 2))

    try {
      await execAsync('npm run build')
      await execAsync('cd dist && node ../node_modules/.bin/vsce publish')
    } catch (error) {
      console.error(`Error running CLI commands: ${error.message}`)
    }

    console.log(`The Ocean v${newVersion} is being published and will be available from the marketplace shortly.`)
  })
}

main()
