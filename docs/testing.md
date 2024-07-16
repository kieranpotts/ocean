# Testing the theme

To test theme changes over the long term before [publishing](./publishing.md) the changes, you can install the theme locally. The easiest way to do this is to create a symlink from `<user-home>/.vscode/extensions` to this repository's root directory.

On UNIX-like systems:

```
ln --symbolic --force /full/path/to/dev/ocean ~/.vscode/extensions/ocean
```

On Windows, running Powershell in administrator mode:

```
New-Item -ItemType SymbolicLink -Path "C:\Users\[User]\.vscode\extensions\ocean" -Target "C:\path\to\dev\ocean" -Force
```

Then go to `File > Preferences/Settings > Themes > Color Themes` and select "Ocean Light".

Unlike using the [Extension Development Host](./development.md), which hot-reloads changes, you will need to reload the VS Code window to see changes when using the symlink method. `Ctrl+P` > `Developer: Reload Window`.
