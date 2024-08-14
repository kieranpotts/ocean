import { defineConfig } from '@vscode/test-cli'

export default defineConfig([
  {
    label: 'unitTests',
    files: 'test/**/*.test.js',
    mocha: {
      ui: 'tdd',
      timeout: 20000
    }
  }
])
