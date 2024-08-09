import getColors from './colors.mjs'

const getTheme = ({ theme, name }) => {

  const colors = getColors({ theme })

  return {
    "$schema": "vscode://schemas/color-theme",

    "name": name,
    "type": theme,

    "colors": {

      /*
      This theme uses only the colors used in GitHub's VS Code themes:
      https://github.com/primer/github-vscode-theme/blob/main/src/theme.js

      There are many more color tokens available, but GitHub's subset seem to be
      sufficient for a complete theme implementation.
      https://code.visualstudio.com/api/references/theme-color
      */

      /**
       * Base Colors
       */

      /* Overall border color for focused elements. This color is used only if
      not overridden by a component. */
      "focusBorder": `${colors.global.accessibility.focusBorder}`,

      /* Overall foreground color. This color is used only if not overridden
      by a component. */
      "foreground": `${colors.global.defaults.text}`,

      /* Background color of text selections within text fields in the workbench.
      This does not apply to selections within the editor and terminal. */
      "selection.background": `${colors.elements.inputs.selectedTextBackground}`,

      /* Foreground color for text providing additional information, eg labels. */
      "descriptionForeground": `${colors.global.defaults.lightText}`,

      /* Overall foreground color for error messages.
      This color is only used if not overridden by a component. */
      "errorForeground": `${colors.global.defaults.errorText}`,

      /* The default color for icons in the workbench. */
      "icon.foreground": `${colors.global.defaults.icons}`,

      /**
       * High-Contrast Extras
       * Additional colors for high-contrast themes, to better separate items.
       */

      /* An extra border around elements */
      "contrastBorder": `${colors.global.accessibility.contrastBorder}`,
      "contrastActiveBorder": `${colors.global.accessibility.contrastBorder}`,

      /**
       * Title Bar
       * Because the Menu Bar might be positioned within the Title Bar, we've
       * merged these color settings together for easier maintenance. The Title
       * Bar inherits the colors of the Menu Bar – they must be consistent.
       */

      /* Title Bar background, varying when the window is active and inactive. */
      "titleBar.activeBackground": `${colors.chrome.background}`,
      "titleBar.inactiveBackground": `${colors.chrome.background}`,

      /* Title Bar foreground, varying the window is active and inactive. */
      "titleBar.activeForeground": `${colors.chrome.text}`,
      "titleBar.inactiveForeground": `${colors.chrome.text}`,

      /* Title Bar border color - always transparent. */
      "titleBar.border": `${colors.transparent}`,

      /**
       * Menu Bar
       */

      /* Background and foreground colors of menubar and drop-drop menus
      from the menubar. */
      "menu.background": `${colors.chrome.background}`,
      "menu.foreground": `${colors.chrome.text}`,

      /* Border around drop-down menus from the menubar, and separator
      between items in menus. */
      "menu.border": `${colors.chrome.border}`,
      "menu.separatorBackground": `${colors.chrome.border}`,

      /* Colors of the selected item in the menubar. */
      "menubar.selectionBorder": `${colors.transparent}`,
      "menubar.selectionBackground": `${colors.chrome.onHoverFocusItem.background}`,
      "menubar.selectionForeground": `${colors.chrome.text}`,

      /* Colors of the selected item in menus. */
      "menu.selectionBorder": `${colors.transparent}`,
      "menu.selectionBackground": `${colors.chrome.onHoverFocusItem.background}`,
      "menu.selectionForeground": `${colors.chrome.text}`,

      /**
       * Activity Bar
       */

      /* Activity Bar colors. The foreground color is used for icons as well as text.
      The border with other containers is removed with transparency. */
      "activityBar.border": `${colors.transparent}`,
      "activityBar.background": `${colors.chrome.background}`,
      "activityBar.foreground": `${colors.chrome.icons}`,
      "activityBar.inactiveForeground": `${colors.chrome.icons}`,

      /* Lighter background and border colors to indicate active item. */
      "activityBar.activeBorder": `${colors.chrome.selectedTab.border}`,
      "activityBar.activeBackground": `${colors.chrome.selectedTab.background}`,

      /* Badges in the Activity Bar - replicated from the global Badge element. */
      "activityBarBadge.background": `${colors.elements.badge.background}`,
      "activityBarBadge.foreground": `${colors.elements.badge.foreground}`,

      /**
       * Side Bar Tabs
       * "Side Bar Tabs" is not an actual UI component in VS Code. But when
       * the Activity Bar is moved to the top or bottom of the Side Bar, it
       * looks like the Side Bar has tabs. Without these settings, the Side
       * Bar Tabs will inherit the default colors of the Side Bar component.
       * These settings, when enabled, will also change the presentation of
       * the permanent tabs at the top of the secondary sidebar.
       */

      "activityBarTop.background": `${colors.chrome.background}`,
      "activityBarTop.foreground": `${colors.chrome.icons}`,
      "activityBarTop.inactiveForeground": `${colors.chrome.icons}`,

      "activityBarTop.activeBorder": `${colors.chrome.selectedTab.border}`,
      "activityBarTop.activeBackground": `${colors.chrome.selectedTab.background}`,

      /**
       * Side Bar
       * The Side Bar is the container for views like Explorer and Search.
       * There are two sidebars: the "primary" and "secondary" sidebars.
       * These style rules apply to both.
       */

      "sideBar.border": `${colors.transparent}`,
      "sideBar.background": `${colors.chrome.background}`,
      "sideBar.foreground": `${colors.chrome.text}`,

      /* Side Bar title colors. */
      "sideBarTitle.background": `${colors.chrome.background}`,
      "sideBarTitle.foreground": `${colors.chrome.text}`,

      /* Section header colors. */
      "sideBarSectionHeader.border": `${colors.transparent}`,
      "sideBarSectionHeader.background": `${colors.chrome.background}`,
      "sideBarSectionHeader.foreground": `${colors.chrome.text}`,

      /* Add a border to the top/bottom  of the sidebar when the Activity
      Bar is moved to that position. (This adds a matching border to
      the top of the secondary sidebar.) */
      "sideBarActivityBarTop.border": `${colors.transparent}`,

      /**
       * Panel
       * These colors are for the bottom panel.
       */

      "panel.border": `${colors.transparent}`,
      "panel.background": `${colors.chrome.background}`,

      "panelTitle.inactiveForeground": `${colors.chrome.text}`,
      "panelTitle.activeForeground": `${colors.chrome.text}`,

      /*
       * Status Bar
       */

      "statusBar.border": `${colors.transparent}`,
      "statusBar.background": `${colors.chrome.background}`,
      "statusBar.foreground": `${colors.chrome.text}`,

      /* Status Bar colors when no folder is opened. We just keep the defaults here. */
      "statusBar.noFolderBackground": `${colors.chrome.background}`,
      "statusBar.noFolderForeground": `${colors.chrome.text}`,

      /* Status Bar colors while a program is being debugged. */
      "statusBar.debuggingBackground": `${colors.chrome.debuggingModeBackground}`,
      "statusBar.debuggingForeground": `${colors.chrome.text}`,

      /* Colors for prominent items in the status bar. */
      "statusBarItem.prominentBackground": `${colors.chrome.prominentItemBackground}`,

      /* Overlays for item hovers and clicks. */
      "statusBarItem.hoverBackground": `${colors.chrome.onHoverFocusItem.background}`,
      "statusBarItem.activeBackground": `${colors.chrome.onHoverFocusItem.background}`,

      /* Color for the remote indicator on the status bar. */
      "statusBarItem.remoteBackground": `${colors.chrome.remoteConnection.background}`,
      "statusBarItem.remoteForeground": `${colors.chrome.remoteConnection.foreground}`,
      "statusBarItem.remoteHoverBackground": `${colors.chrome.remoteConnection.background}`,
      "statusBarItem.remoteHoverForeground": `${colors.chrome.remoteConnection.foreground}`,

      /**
       * Badges
       * Badges are small information labels, for example, search results count.
       */

      "badge.background": `${colors.elements.badge.background}`,
      "badge.foreground": `${colors.elements.badge.foreground}`,

      /**
       * Symbol Icons
       * Symbol icons appear in the Outline view, breadcrumb navigation,
       * and suggest widget.
       */

      "symbolIcon.arrayForeground": `${colors.chrome.icons}`,
      "symbolIcon.booleanForeground": `${colors.chrome.icons}`,
      "symbolIcon.classForeground": `${colors.chrome.icons}`,
      "symbolIcon.colorForeground": `${colors.chrome.icons}`,
      "symbolIcon.constantForeground": `${colors.chrome.icons}`,
      "symbolIcon.constructorForeground": `${colors.chrome.icons}`,
      "symbolIcon.enumeratorForeground": `${colors.chrome.icons}`,
      "symbolIcon.enumeratorMemberForeground": `${colors.chrome.icons}`,
      "symbolIcon.eventForeground": `${colors.chrome.icons}`,
      "symbolIcon.fieldForeground": `${colors.chrome.icons}`,
      "symbolIcon.fileForeground": `${colors.chrome.icons}`,
      "symbolIcon.folderForeground": `${colors.chrome.icons}`,
      "symbolIcon.functionForeground": `${colors.chrome.icons}`,
      "symbolIcon.interfaceForeground": `${colors.chrome.icons}`,
      "symbolIcon.keyForeground": `${colors.chrome.icons}`,
      "symbolIcon.keywordForeground": `${colors.chrome.icons}`,
      "symbolIcon.methodForeground": `${colors.chrome.icons}`,
      "symbolIcon.moduleForeground": `${colors.chrome.icons}`,
      "symbolIcon.namespaceForeground": `${colors.chrome.icons}`,
      "symbolIcon.nullForeground": `${colors.chrome.icons}`,
      "symbolIcon.numberForeground": `${colors.chrome.icons}`,
      "symbolIcon.objectForeground": `${colors.chrome.icons}`,
      "symbolIcon.operatorForeground": `${colors.chrome.icons}`,
      "symbolIcon.packageForeground": `${colors.chrome.icons}`,
      "symbolIcon.propertyForeground": `${colors.chrome.icons}`,
      "symbolIcon.referenceForeground": `${colors.chrome.icons}`,
      "symbolIcon.snippetForeground": `${colors.chrome.icons}`,
      "symbolIcon.stringForeground": `${colors.chrome.icons}`,
      "symbolIcon.structForeground": `${colors.chrome.icons}`,
      "symbolIcon.textForeground": `${colors.chrome.icons}`,
      "symbolIcon.typeParameterForeground": `${colors.chrome.icons}`,
      "symbolIcon.unitForeground": `${colors.chrome.icons}`,
      "symbolIcon.variableForeground": `${colors.chrome.icons}`,

      /**
       * Quick Picker
       * The quick picker widget is the container for pickers like the Command
       * Palette and the Color Theme Picker.
       */

      "pickerGroup.border": `${colors.chrome.border}`,
      "pickerGroup.foreground": `${colors.chrome.text}`,

      /* Inputs within the Quick Picker widget. */
      "quickInput.background": `${colors.chrome.background}`,
      "quickInput.foreground": `${colors.chrome.text}`,
      "quickInputTitle.background": `${colors.chrome.background}`,

      /* Lists within the Quick Picker widget. */
      "quickInputList.focusBackground": `${colors.chrome.onHoverFocusItem.background}`,
      "quickInputList.focusForeground": `${colors.chrome.text}`,
      "quickInputList.focusIconForeground": `${colors.chrome.icons}`,

      /* This is the foreground color for <kbd> elements within the Keyboard
      Shortcuts (keybindings) picker. */
      "keybindingLabel.foreground": `${colors.chrome.text}`,

      /**
       * Text Colors
       * Colors inside a text document, such as the welcome page.
       */

      /* Block quotes. */
      "textBlockQuote.border": `${colors.global.defaults.lightText}`,
      "textBlockQuote.background": `${colors.transparent}`,

      /* Code and preformatted text blocks - inverted colors, like the terminal. */
      "textCodeBlock.background": `${colors.editor.highlightedTextBackground}`,
      "textPreformat.foreground": `${colors.editor.text}`,

      /* Separator. */
      "textSeparator.foreground": `${colors.global.defaults.lightText}`,

      /* Links. */
      "textLink.foreground": `${colors.global.defaults.hyperlinks}`,
      "textLink.activeForeground": `${colors.global.defaults.hyperlinks}`,

      /**
       * Lists and Trees
       * Colors for list and trees like the File Explorer. An active list/tree
       * has keyboard focus, an inactive does not.
       */

      /* The selected item when the list/tree is active. */
      "list.activeSelectionBackground": "#c7ccd166",
      "list.activeSelectionForeground": `${colors.chrome.text}`,

      /* The selected item when the list/tree is inactive. */
      "list.inactiveSelectionBackground": "#c7ccd166",
      "list.inactiveSelectionForeground": `${colors.chrome.text}`,

      /* The focused item when the list/tree is active. */
      "list.focusBackground": "#c7ccd133",
      "list.focusForeground": `${colors.chrome.text}`,

      /* Match highlights when searching inside the list/tree. */
      "list.highlightForeground": "#5e81ac",

      /* Hovering. */
      "list.hoverBackground": "#c7ccd133",
      "list.hoverForeground": `${colors.chrome.text}`,

      /* Foreground color overrides for item statuses. These colors will also be
      used to override the tab foreground color when the file is opened in an
      editor tab. */
      "list.errorForeground": `${colors.global.defaults.errorText}`,
      "list.warningForeground": `${colors.global.defaults.warningText}`,

      /* Tree Widget's stroke color for indent guides. */
      "tree.indentGuidesStroke": `${colors.chrome.border}`,

      /**
       * Button Control
       * A set of colors for button controls.
       */

      /* Primary button colors. */
      "button.border": `${colors.elements.button.primary.background}`,
      "button.background": `${colors.elements.button.primary.background}`,
      "button.hoverBackground": `${colors.elements.button.primary.background}`,
      "button.foreground": `${colors.elements.button.primary.foreground}`,

      /* Secondary button colors. */
      "button.secondaryBackground": `${colors.elements.button.secondary.background}`,
      "button.secondaryHoverBackground": `${colors.elements.button.secondary.background}`,
      "button.secondaryForeground": `${colors.elements.button.secondary.foreground}`,

      /**
       * Checkbox Control
       */

      "checkbox.border": `${colors.transparent}`,
      "checkbox.background": `${colors.elements.inputs.background}`,
      "checkbox.foreground": `${colors.elements.inputs.foreground}`,

      /**
       * Dropdown Control
       */

      "dropdown.border": `${colors.transparent}`,
      "dropdown.background": `${colors.elements.inputs.background}`,
      "dropdown.listBackground": `${colors.elements.inputs.background}`,
      "dropdown.foreground": `${colors.elements.inputs.foreground}`,

      /**
       * Text Input Control
       */

      "input.border": `${colors.transparent}`,
      "input.background": `${colors.elements.inputs.background}`,
      "input.foreground": `${colors.elements.inputs.foreground}`,

      /* Placeholder text. */
      "input.placeholderForeground": `${colors.elements.inputs.placeholder}`,

      /**
       * Editor Groups
       */

      "editorGroup.border": `${colors.chrome.background}`,
      "editorGroupHeader.tabsBorder": `${colors.chrome.background}`,
      "editorGroupHeader.tabsBackground": `${colors.chrome.background}`,

      /**
       * Editor Tabs
       */

      /* Border to separate tabs from each other. */
      "tab.border": `${colors.transparent}`,

      /* Active tab in the active (focused) editor group.*/
      "tab.activeBorder": `${colors.transparent}`,
      "tab.activeBorderTop": `${colors.transparent}`,
      "tab.activeBackground": `${colors.editor.background}`,
      "tab.activeForeground": `${colors.chrome.text}`,

      /* Inactive tabs in the active (focused) editor group. */
      "tab.inactiveBackground": `${colors.chrome.background}`,
      "tab.inactiveForeground": `${colors.chrome.text}`,

      /* Active tab in non-active (unfocused) editor groups. */
      "tab.unfocusedActiveBorder": `${colors.transparent}`,
      "tab.unfocusedActiveBorderTop": `${colors.transparent}`,
      "tab.unfocusedActiveBackground": `${colors.editor.background}`,
      "tab.unfocusedActiveForeground": `${colors.chrome.text}`,

      /* Other tabs in non-active (unfocused) editor groups. */
      "tab.unfocusedInactiveBackground": `${colors.chrome.background}`,
      "tab.unfocusedInactiveForeground": `${colors.chrome.text}`,

      /* Colors when selecting multiple tabs using Ctrl+select. */
      "tab.selectedBackground": `${colors.editor.background}`,
      "tab.selectedForeground": `${colors.chrome.text}`,

      /**
       * Settings Editor
       */

      "settings.headerForeground": `${colors.chrome.text}`,
      "settings.modifiedItemIndicator": `${colors.chrome.text}`,

      /**
       * Integrated Terminal
       */

      "terminal.background": "#2b303b",
      "terminal.foreground": "#c7ccd1",

      "terminalCursor.background": "#2b303b",
      "terminalCursor.foreground": "#e4e7eb",

      /* Background for selected text. */
      "terminal.selectionBackground": "#c7ccd166",

      /* Current search match in the terminal. */
      "terminal.findMatchBackground": "#5e81ac99",

      /* Other search matches in the terminal. */
      "terminal.findMatchHighlightBackground": "#5e81ac33",

      /* Border between split terminal panes. */
      "terminal.border": "#6b728033",

      /* ANSI colors. */
      "terminal.ansiBlack": "#2b303b",
      "terminal.ansiBlue": "#5e81ac",
      "terminal.ansiCyan": "#96b5b4",
      "terminal.ansiGreen": "#a3be8c",
      "terminal.ansiMagenta": "#b48ead",
      "terminal.ansiRed": "#bf616a",
      "terminal.ansiWhite": "#c7ccd1",
      "terminal.ansiYellow": "#ebcb8b",
      "terminal.ansiBrightBlack": "#6b7280",
      "terminal.ansiBrightBlue": "#5e81ac",
      "terminal.ansiBrightCyan": "#96b5b4",
      "terminal.ansiBrightGreen": "#a3be8c",
      "terminal.ansiBrightMagenta": "#b48ead",
      "terminal.ansiBrightRed": "#bf616a",
      "terminal.ansiBrightWhite": "#e4e7eb",
      "terminal.ansiBrightYellow": "#ebcb8b",

      /**
       * Progress Bar
       */

      "progressBar.background": "#5e81ac",

      /**
       * Breadcrumb
       */

      "breadcrumb.background": "#f2f4f8",
      "breadcrumbPicker.background": "#f2f4f8",

      "breadcrumb.foreground": "#6b7280",
      "breadcrumb.focusForeground": "#6b7280",
      "breadcrumb.activeSelectionForeground": "#6b7280",

      /**
       * Editor Sticky Scroll
       * Sticks the current indentation context at the top of the editor as
       * you scroll down - useful for understanding where you are in the code.
       * Requires the "editor.stickyScroll.enabled" setting to be true.
       */

      "editorStickyScroll.border": "#c7ccd1",
      "editorStickyScroll.shadow": `${colors.transparent}`,
      "editorStickyScroll.background": "#f2f4f8",
      "editorStickyScrollHover.background": "#f2f4f8",

      /**
       * Editor
       */

      "editorCursor.foreground": `${colors.editor.text}`,

      "editor.background": `${colors.editor.background}`,
      "editor.foreground": `${colors.editor.text}`,

      /* Background color for the first line of a folded (collapsed) range. Opaque. */
      "editor.foldBackground": `${colors.editor.highlightedTextBackground}`,

      /* Background color of the current line with the cursor. Must be opaque. */
      "editor.lineHighlightBackground": `${colors.editor.highlightedTextBackground}`,

      /* Selected text, and color for other text in the document that matches
      the current selection. */
      "editor.selectionBackground": `${colors.editor.selectedTextBackground}`,
      "editor.selectionHighlightBackground": `${colors.editor.highlightedTextBackground}`,

      /* Current word/symbol highlight in read and write mode. */
      "editor.wordHighlightBackground": `${colors.editor.highlightedTextBackground}`,
      "editor.wordHighlightStrongBackground": `${colors.editor.highlightedTextBackground}`,

      /* In debugging mode, these are the background colors for the top stack
      frame and the focused stack frame respectively. */
      "editor.stackFrameHighlightBackground": `${colors.editor.highlightedTextBackground}`,
      "editor.focusedStackFrameHighlightBackground": `${colors.editor.highlightedTextBackground}`,

      /* Current search match in the editor, and for other search matches. */
      "editor.findMatchBackground": "#5e81ac99",
      "editor.findMatchHighlightBackground": "#5e81ac33",

      /* Line numbers. */
      "editorLineNumber.foreground": `${colors.chrome.lightText}`,
      "editorLineNumber.activeForeground": `${colors.chrome.text}`,

      /* Indent guides. */
      "editorIndentGuide.background1": "#c7ccd1",
      "editorIndentGuide.activeBackground1": "#c7ccd1",
      "editorIndentGuide.background2": "#c7ccd1",
      "editorIndentGuide.activeBackground2": "#c7ccd1",
      "editorIndentGuide.background3": "#c7ccd1",
      "editorIndentGuide.activeBackground3": "#c7ccd1",
      "editorIndentGuide.background4": "#c7ccd1",
      "editorIndentGuide.activeBackground4": "#c7ccd1",
      "editorIndentGuide.background5": "#c7ccd1",
      "editorIndentGuide.activeBackground5": "#c7ccd1",
      "editorIndentGuide.background6": "#c7ccd1",
      "editorIndentGuide.activeBackground6": "#c7ccd1",
      "editorWhitespace.foreground": "#c7ccd1",

      /* Highlight for the current matching pair of brackets. Disabled. */
      "editorBracketMatch.background": `${colors.transparent}`,
      "editorBracketMatch.border": `${colors.transparent}`,

      /* Bracket pair colorization. Disabled by using text foreground color. */
      "editorBracketHighlight.foreground1": `${colors.editor.text}`,
      "editorBracketHighlight.foreground2": `${colors.editor.text}`,
      "editorBracketHighlight.foreground3": `${colors.editor.text}`,
      "editorBracketHighlight.foreground4": `${colors.editor.text}`,
      "editorBracketHighlight.foreground5": `${colors.editor.text}`,
      "editorBracketHighlight.foreground6": `${colors.editor.text}`,
      "editorBracketHighlight.unexpectedBracket.foreground": "#bf616a",

      /* Highlights for pair guides for active and inactive brackets. Disabled. */
      "editorBracketPairGuide.background1": `${colors.transparent}`,
      "editorBracketPairGuide.background2": `${colors.transparent}`,
      "editorBracketPairGuide.background3": `${colors.transparent}`,
      "editorBracketPairGuide.background4": `${colors.transparent}`,
      "editorBracketPairGuide.background5": `${colors.transparent}`,
      "editorBracketPairGuide.background6": `${colors.transparent}`,
      "editorBracketPairGuide.activeBackground1": `${colors.transparent}`,
      "editorBracketPairGuide.activeBackground2": `${colors.transparent}`,
      "editorBracketPairGuide.activeBackground3": `${colors.transparent}`,
      "editorBracketPairGuide.activeBackground4": `${colors.transparent}`,
      "editorBracketPairGuide.activeBackground5": `${colors.transparent}`,
      "editorBracketPairGuide.activeBackground6": `${colors.transparent}`,

      /* Inlay hints, enabled via the "editor.inlayHint.enabled" setting. */
      "editorInlayHint.background": `${colors.transparent}`,
      "editorInlayHint.foreground": `${colors.editor.comments}`,
      "editorInlayHint.typeBackground": `${colors.transparent}`,
      "editorInlayHint.typeForeground": `${colors.editor.comments}`,

      /* The Editor Widget is any dialog rendered in front of the editor,
      including the Find/Replace dialog and the suggestion widget. */
      "editorWidget.background": `${colors.chrome.background}`,
      "editorWidget.foreground": `${colors.chrome.text}`,

      /* Background color of the editor pane visible on the left and right side
      of the centered editor layout. */
      "editorPane.background": `${colors.chrome.background}`,

      /* Color to separate two editors from each other when shown
      by side in an editor group */
      "sideBySideEditor.horizontalBorder": `${colors.chrome.border}`,
      "sideBySideEditor.verticalBorder": `${colors.chrome.border}`,

      /**
       * Git Decorations
       * These colors are used in the Source Control panel, but also reused in
       * Editor Tabs and the File Explorer.
       */

      /* Disable SCM decorations by using default text foreground color. */
      "gitDecoration.addedResourceForeground": `${colors.chrome.text}`,
      "gitDecoration.modifiedResourceForeground": `${colors.chrome.text}`,
      "gitDecoration.deletedResourceForeground": `${colors.chrome.text}`,
      "gitDecoration.untrackedResourceForeground": `${colors.chrome.text}`,
      "gitDecoration.ignoredResourceForeground": `${colors.chrome.text}`,
      "gitDecoration.conflictingResourceForeground": `${colors.chrome.text}`,
      "gitDecoration.submoduleResourceForeground": `${colors.chrome.text}`,

      /**
       * Editor Gutter
       * Diff highlights in the line number gutter.
       */

      /* "editorGutter.background" overrides "editor.background" for the gutter only. */
      "editorGutter.background": `${colors.transparent}`,

      /* Disable Git/SCM decorations in the gutter. */
      "editorGutter.addedBackground": `${colors.transparent}`,
      "editorGutter.modifiedBackground": `${colors.transparent}`,
      "editorGutter.deletedBackground": `${colors.transparent}`,

      "editorGutter.foldingControlForeground": "#6b7280",
      "editorGutter.commentRangeForeground": "#6b7280",
      "editorGutter.commentGlyphForeground": "#6b7280",
      "editorGutter.commentUnresolvedGlyphForeground": "#6b7280",

      /**
       * Diff Editor
       */

      "diffEditor.insertedLineBackground": "#a3be8c33",
      "diffEditor.insertedTextBackground": "#a3be8c99",
      "diffEditor.removedLineBackground": "#b48ead33",
      "diffEditor.removedTextBackground": "#b48ead99",

      /**
       * Editor Overview Ruler
       * This component sits *under* the scrollbar on the right of the editor.
       * It uses decorations to provide a map of changes in the file.
       */

      /* These effectively give a background and border around the scrollbar. */
      "editorOverviewRuler.background": `${colors.transparent}`,
      "editorOverviewRuler.border": `${colors.transparent}`,

      /* Mark SCM changes - all disabled. */
      "editorOverviewRuler.addedForeground": `${colors.transparent}`,
      "editorOverviewRuler.modifiedForeground": `${colors.transparent}`,
      "editorOverviewRuler.deletedForeground": `${colors.transparent}`,

      /* Mark problems and warnings, but hide general info. */
      "editorOverviewRuler.errorForeground": `${colors.global.defaults.errorText}`,
      "editorOverviewRuler.warningForeground": `${colors.global.defaults.warningText}`,
      "editorOverviewRuler.infoForeground": `${colors.transparent}`,

      /* Disable other decorations. */
      "editorOverviewRuler.findMatchForeground": `${colors.transparent}`,
      "editorOverviewRuler.rangeHighlightForeground": `${colors.transparent}`,
      "editorOverviewRuler.selectionHighlightForeground": `${colors.transparent}`,
      "editorOverviewRuler.wordHighlightForeground": `${colors.transparent}`,
      "editorOverviewRuler.wordHighlightStrongForeground": `${colors.transparent}`,
      "editorOverviewRuler.wordHighlightTextForeground": `${colors.transparent}`,
      "editorOverviewRuler.bracketMatchForeground": `${colors.transparent}`,
      "editorOverviewRuler.inlineChatInserted": `${colors.transparent}`,
      "editorOverviewRuler.inlineChatRemoved": `${colors.transparent}`,

      /**
       * Scrollbar Control and MiniMap
       * The theme is designed for these two controls to blend together. The following
       * settings are recommended to work best with this theme:
       *
       * {
       *   "editor.minimap.size": "fit",
       *   "editor.minimap.showSlider": "always",
       *   "editor.scrollbar.vertical": "visible",
       * }
       */

      "scrollbar.shadow": `${colors.transparent}`,
      "scrollbarSlider.background": "#c7ccd166",
      "scrollbarSlider.hoverBackground": "#c7ccd166",
      "scrollbarSlider.activeBackground": "#c7ccd166",

      "minimapSlider.background": "#c7ccd166",
      "minimapSlider.hoverBackground": "#c7ccd166",
      "minimapSlider.activeBackground": "#c7ccd166",

      /* Opacity level of the minimap's content. */
      "minimap.foregroundOpacity": "#00000066",

      /* Disable changes, these exist in the editor overview ruler already. */
      "minimapGutter.addedBackground": `${colors.transparent}`,
      "minimapGutter.modifiedBackground": `${colors.transparent}`,
      "minimapGutter.deletedBackground": `${colors.transparent}`,

      /* Disable errors, warnings and general info. */
      "minimap.errorHighlight": `${colors.transparent}`,
      "minimap.warningHighlight": `${colors.transparent}`,
      "minimap.infoHighlight": `${colors.transparent}`,

      /* Hide other decorations. */
      "minimap.selectionOccurrenceHighlight": `${colors.transparent}`,
      "minimap.selectionHighlight": `${colors.transparent}`,
      "minimap.findMatchHighlight": `${colors.transparent}`,

      /**
       * Notifications
       */

      "notificationCenter.border": "#c7ccd1",
      "notificationToast.border": "#c7ccd1",

      "notificationCenterHeader.background": "#e4e7eb",
      "notificationCenterHeader.foreground": "#2b303b",

      "notifications.border": "#c7ccd1",
      "notifications.background": "#e4e7eb",
      "notifications.foreground": "#2b303b",

      "notificationLink.foreground": "#5e81ac",

      "notificationsErrorIcon.foreground": "#bf616a",
      "notificationsWarningIcon.foreground": "#ebcb8b",
      "notificationsInfoIcon.foreground": "#5e81ac",

      /**
       * Debug Toolbar
       */

      "debugToolBar.border": `${colors.chrome.border}`,
      "debugToolBar.background": `${colors.chrome.background}`,

      /**
       * Debug Icons
       * Used for breakpoints etc.
       */

      "debugIcon.breakpointForeground": "#bf616a",

      /**
       * Debug Console
       */

      "debugConsole.infoForeground": "#5e81ac",
      "debugConsole.warningForeground": "#ebcb8b",
      "debugConsole.errorForeground": "#bf616a",
      "debugConsole.sourceForeground": "#a3be8c",

      "debugConsoleInputIcon.foreground": `${colors.global.defaults.icons}`,

      "debugTokenExpression.name": `${colors.global.defaults.text}`,
      "debugTokenExpression.value": `${colors.global.defaults.text}`,
      "debugTokenExpression.string": `${colors.global.defaults.text}`,
      "debugTokenExpression.boolean": `${colors.global.defaults.text}`,
      "debugTokenExpression.number": `${colors.global.defaults.text}`,
      "debugTokenExpression.error": `${colors.global.defaults.text}`,

    },

    /* https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide */
    "semanticHighlighting": false,

    "tokenColors": [
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings": {
          "foreground": `${colors.editor.comments}`
        }
      },
    ]

  }

}

export default getTheme
