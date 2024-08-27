#!/usr/bin/env node

'use strict'

const fs = require('fs')
const readline = require('readline')
const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec)

const main = async () => {
  try {
    await execAsync('npm run build')
    await execAsync('mkdir -p pkg')
    await execAsync('cd dist && node ../node_modules/.bin/vsce package -o ../pkg/ocean-vscode-theme.vsix')
  } catch (error) {
    console.error(`Error running CLI commands: ${error.message}`)
  }
}

main()
