#!/usr/bin/env node

'use strict'

const fs = require('fs')
const readline = require('readline')

const main = () => {
  const packageJson = fs.readFileSync('./src/package.json', 'utf8')
  const packageData = JSON.parse(packageJson)
  const version = packageData.version

  console.log(`The current version is ${version}.`)

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Is this new release a "patch", "minor" or "major" update? ', (releaseType) => {
    console.log(`You selected ${releaseType} release.`)

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
      rl.close()
      return
    }

    const newVersion = updatedVersion.join('.')
    console.log(`The new version will be ${newVersion}.`)

    rl.close()
  })
}

main()
