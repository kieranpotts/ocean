# Testing the theme

To test theme changes over the long term before [publishing](./publishing.md) the changes to the VS Code Marketplace, you can package the theme as a VSIX file and install the theme locally.

From the repository root, run the following command:

```bash
npm run package
```

This will generate a `.vsix` file in the `pkg` directory. You can install this local extension in VS Code via the Extension sidebar > **Install from VSIX...** and select the `.vsix` file. Then enable the theme by going to `File > Preferences/Settings > Themes > Color Themes` and selecting "Ocean Light". Repeat these steps, and reload VS Code, whenever you make changes to the theme and want to re-test them.

> NOTE: It is meant to be possible to install the theme by using the `code --install-extension ./pkg/ocean-vscode-theme.vsix` command, but this does not seem to be working - at least on Windows.

For more information, see the [VS Code documentation](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions).
