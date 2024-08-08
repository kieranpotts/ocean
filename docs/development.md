# Theme development

Follow these steps to start the development environment:

1. Load this repository in Visual Studio Code, directly in its own workspace.

2. Press `F5` to open a new VS Code Extension Development Host window.

3. Go to `File > Preferences/Settings > Themes > Color Themes` and select "Ocean Light".

4. Return to the original VS Code window and make changes to the theme, and use the `npm run build` command to recompile. Alternatively, you can run `npm run dev` to watch for changes and automatically recompile.

Changes to the built artifacts (compiled to the `dist` directory) will be automatically loaded in the Extension Development Host window. (Sometimes you may need to reload the VS Code window to see the changes. This can be the case when working in WSL, for example.)

To terminate the extension development session, either close the Extension Development Host window or stop the Run and Debug session in the original window.
