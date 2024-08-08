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
      "focusBorder": `${colors.global.border.focus}`,

      /* Overall foreground color. This color is used only if not overridden
      by a component. */
      "foreground": `${colors.global.text.foreground.default}`,

      /* Background color of text selections within text fields in the workbench.
      This does not apply to selections within the editor and terminal. */
      "selection.background": `${colors.global.text.background.selected}`,

      /* Foreground color for text providing additional information, eg labels. */
      "descriptionForeground": `${colors.global.text.foreground.light}`,

      /* Overall foreground color for error messages.
      This color is only used if not overridden by a component. */
      "errorForeground": `${colors.global.text.foreground.error}`,

      /* The default color for icons in the workbench. */
      "icon.foreground": `${colors.global.text.foreground.default}`,

      /**
       * High-Contrast Extras
       * Additional colors for high-contrast themes, to better separate items.
       */

      /* An extra border around elements */
      "contrastBorder": `${colors.global.border.contrast}`,
      "contrastActiveBorder": `${colors.global.border.contrast}`,

      /**
       * Title Bar
       * Because the Menu Bar might be positioned within the Title Bar, we've
       * merged these color settings together for easier maintenance. The Title
       * Bar inherits the colors of the Menu Bar – they must be consistent.
       */

      /* Title Bar background, varying when the window is active and inactive. */
      "titleBar.activeBackground": `${colors.containers.menuBar.background}`,
      "titleBar.inactiveBackground": `${colors.containers.menuBar.background}`,

      /* Title Bar foreground, varying the window is active and inactive. */
      "titleBar.activeForeground": `${colors.containers.menuBar.foreground}`,
      "titleBar.inactiveForeground": `${colors.containers.menuBar.foreground}`,

      /* Title Bar border color - always transparent. */
      "titleBar.border": "#FFFFFF00",

      /**
       * Menu Bar
       */

      /* Background and foreground colors of menubar and drop-drop menus
      from the menubar. */
      "menu.background": `${colors.containers.menuBar.background}`,
      "menu.foreground": `${colors.containers.menuBar.foreground}`,

      /* Border around drop-down menus from the menubar, and separator
      between items in menus. */
      "menu.border": `${colors.containers.menuBar.border}`,
      "menu.separatorBackground": `${colors.containers.menuBar.border}`,

      /* Colors of the selected item in the menubar. */
      "menubar.selectionBorder": `${colors.containers.menuBar.hoverFocusItem.border}`,
      "menubar.selectionBackground": `${colors.containers.menuBar.hoverFocusItem.background}`,
      "menubar.selectionForeground": `${colors.containers.menuBar.hoverFocusItem.foreground}`,

      /* Colors of the selected item in menus. */
      "menu.selectionBorder": `${colors.containers.menuBar.hoverFocusItem.border}`,
      "menu.selectionBackground": `${colors.containers.menuBar.hoverFocusItem.background}`,
      "menu.selectionForeground": `${colors.containers.menuBar.hoverFocusItem.foreground}`,

      /**
       * Activity Bar
       */

      /* Activity Bar colors. The foreground color is used for icons. */
      "activityBar.border": `${colors.containers.activityBar.border}`,
      "activityBar.background": `${colors.containers.activityBar.background}`,
      "activityBar.foreground": `${colors.containers.activityBar.selectedTab.foreground}`,

      /* Lighter background and border colors to indicate active item. */
      "activityBar.activeBorder": `${colors.containers.activityBar.selectedTab.border}`,
      "activityBar.activeBackground": `${colors.containers.activityBar.selectedTab.background}`,

      /* Darker foreground color to indicate inactive items. */
      "activityBar.inactiveForeground": `${colors.containers.activityBar.foreground}`,

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

      "activityBarTop.background": `${colors.containers.sideBarTabs.background}`,
      "activityBarTop.foreground": `${colors.containers.sideBarTabs.selectedTab.foreground}`,

      "activityBarTop.activeBorder": `${colors.containers.sideBarTabs.selectedTab.border}`,
      "activityBarTop.activeBackground": `${colors.containers.sideBarTabs.selectedTab.background}`,
      "activityBarTop.inactiveForeground": `${colors.containers.sideBarTabs.foreground}`,

      /* Override top/bottom border color of Side Bar when the Activity Bar
      is in that position. This should always be transparent for consistent
      rendering of the Secondary Side Bar's tabs, regardless of the position
      of the Activity Bar. */
      "sideBarActivityBarTop.border": "#00000000",

      /**
       * Side Bar
       * The Side Bar is the container for views like Explorer and Search.
       * There are two sidebars: the "primary" and "secondary" sidebars.
       * These style rules apply to both.
       */

      "sideBar.border": `${colors.containers.sideBar.border}`,
      "sideBar.background": `${colors.containers.sideBar.background}`,
      "sideBar.foreground": `${colors.containers.sideBar.foreground}`,

      /* Side Bar title colors. */
      "sideBarTitle.background": `${colors.containers.sideBar.background}`,
      "sideBarTitle.foreground": `${colors.containers.sideBar.foreground}`,

      /* Section header colors. */
      "sideBarSectionHeader.border": `${colors.containers.sideBar.border}`,
      "sideBarSectionHeader.background": `${colors.containers.sideBar.background}`,
      "sideBarSectionHeader.foreground": `${colors.containers.sideBar.foreground}`,

      /**
       * Panel
       * These colors are for the bottom panel.
       */

      "panel.border": `${colors.containers.panel.border}`,
      "panel.background": `${colors.containers.panel.background}`,

      "panelTitle.inactiveForeground": `${colors.containers.panel.foreground}`,
      "panelTitle.activeForeground": `${colors.containers.panel.foreground}`,

      /*
       * Status Bar
       */

      "statusBar.border": `${colors.containers.statusBar.border}`,
      "statusBar.background": `${colors.containers.statusBar.background}`,
      "statusBar.foreground": `${colors.containers.statusBar.foreground}`,

      /* Status Bar colors when no folder is opened. We just keep the defaults here. */
      "statusBar.noFolderBackground": `${colors.containers.statusBar.background}`,
      "statusBar.noFolderForeground": `${colors.containers.statusBar.foreground}`,

      /* Status Bar colors while a program is being debugged. */
      "statusBar.debuggingBackground": "#ebcb8b",
      "statusBar.debuggingForeground": "#2b303b",

      /* Colors for prominent items in the status bar. */
      "statusBarItem.prominentBackground": "#5e81ac",

      /* Overlays for item hovers and clicks. */
      "statusBarItem.hoverBackground": "#c7ccd133",
      "statusBarItem.activeBackground": "#c7ccd133",

      /* Color for the remote indicator on the status bar. */
      "statusBarItem.remoteBackground": "#5e81ac",
      "statusBarItem.remoteForeground": "#e4e7eb",
      "statusBarItem.remoteHoverBackground": "#5e81ac",
      "statusBarItem.remoteHoverForeground": "#e4e7eb",

      /**
       * Badges
       * Badges are small information labels, for example, search results count.
       */

      "badge.background": `${colors.elements.badge.background}`,
      "badge.foreground": `${colors.elements.badge.foreground}`,

      /**
       * Symbol Icons
       * Symbol icons appear in the Outline view, breadcrumb navigation,
       * and suggest widget. In this theme, we use the same color as the
	   * default text.
       */

      "symbolIcon.arrayForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.booleanForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.classForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.colorForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.constantForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.constructorForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.enumeratorForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.enumeratorMemberForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.eventForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.fieldForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.fileForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.folderForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.functionForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.interfaceForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.keyForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.keywordForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.methodForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.moduleForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.namespaceForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.nullForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.numberForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.objectForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.operatorForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.packageForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.propertyForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.referenceForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.snippetForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.stringForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.structForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.textForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.typeParameterForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.unitForeground": `${colors.global.text.foreground.default}`,
      "symbolIcon.variableForeground": `${colors.global.text.foreground.default}`,

      /**
       * Quick Picker
       * The quick picker widget is the container for pickers like the Command
       * Palette and the Color Theme Picker.
       */

      "pickerGroup.border": "#c7ccd1",
      "quickInput.background": "#e4e7eb",
      "pickerGroup.foreground": "#6b7280",

      /* Inputs within the Quick Picker widget. */
      "quickInput.foreground": "#2b303b",
      "quickInputTitle.background": "#e4e7eb",

      /* Lists within the Quick Picker widget. */
      "quickInputList.focusBackground": "#c7ccd133",
      "quickInputList.focusForeground": "#2b303b",
      "quickInputList.focusIconForeground": "#2b303b",

      /* This is the foreground color for <kbd> elements within the Keyboard
      Shortcuts (keybindings) picker. */
      "keybindingLabel.foreground": "#2b303b",

      /**
       * Text Colors
       * Colors inside a text document, such as the welcome page.
       */

      /* Block quotes. */
      "textBlockQuote.border": "#c7ccd1",
      "textBlockQuote.background": "#f2f4f8",

      /* Code and preformatted text blocks. */
      "textCodeBlock.background": "#c7ccd1",
      "textPreformat.foreground": "#2b303b",

      /* Separator. */
      "textSeparator.foreground": "#f2f4f8",

      /* Links. */
      "textLink.foreground": "#5e81ac",
      "textLink.activeForeground": "#5e81ac",

      /**
       * Lists and Trees
       * Colors for list and trees like the File Explorer. An active list/tree
       * has keyboard focus, an inactive does not.
       */

      /* The selected item when the list/tree is active. */
      "list.activeSelectionBackground": "#c7ccd166",
      "list.activeSelectionForeground": "#2b303b",

      /* The selected item when the list/tree is inactive. */
      "list.inactiveSelectionBackground": "#c7ccd166",
      "list.inactiveSelectionForeground": "#2b303b",

      /* The focused item when the list/tree is active. */
      "list.focusBackground": "#c7ccd133",
      "list.focusForeground": "#2b303b",

      /* Match highlights when searching inside the list/tree. */
      "list.highlightForeground": "#5e81ac",

      /* Hovering. */
      "list.hoverBackground": "#c7ccd133",
      "list.hoverForeground": "#2b303b",

      /* Foreground color overrides for item statuses. These colors will also be
      used to override the tab foreground color when the file is opened in an
      editor tab. This theme has effectively turned off "warning" colors but
      enabled "error" ones. */
      "list.errorForeground": "#bf616a",
      "list.warningForeground": "#2b303b",

      /* Tree Widget's stroke color for indent guides. */
      "tree.indentGuidesStroke": "#c7ccd1",

      /**
       * Button Control
       * A set of colors for button controls.
       */

      /* Primary button colors. */
      "button.border": "#5e81ac",
      "button.background": "#5e81ac",
      "button.hoverBackground": "#5e81ac",
      "button.foreground": "#e4e7eb",

      /* Secondary button colors. */
      "button.secondaryBackground": "#6b7280",
      "button.secondaryHoverBackground": "#6b7280",
      "button.secondaryForeground": "#e4e7eb",

      /**
       * Checkbox Control
       */

      "checkbox.border": "#c7ccd1",
      "checkbox.background": "#e4e7eb",
      "checkbox.foreground": "#2b303b",

      /**
       * Dropdown Control
       */

      "dropdown.border": "#c7ccd1",
      "dropdown.background": "#e4e7eb",
      "dropdown.listBackground": "#e4e7eb",
      "dropdown.foreground": "#2b303b",

      /**
       * Input Control
       */

      "input.border": "#c7ccd1",
      "input.background": "#e4e7eb",
      "input.foreground": "#2b303b",

      /* Placeholder text. */
      "input.placeholderForeground": "#6b7280",

      /**
       * Editor Groups
       */

      "editorGroup.border": "#c7ccd1",
      "editorGroupHeader.tabsBackground": "#e4e7eb",
      "editorGroupHeader.tabsBorder": "#c7ccd1",

      /**
       * Editor Tabs
       */

      /* Border to separate tabs from each other. */
      "tab.border": "#c7ccd1",

      /* Active tab in the active (focused) editor group.*/
      "tab.activeBorder": "#e4e7eb",
      "tab.activeBorderTop": "#2b303b",
      "tab.activeBackground": "#f2f4f8",
      "tab.activeForeground": "#2b303b",

      /* Inactive tabs in the active (focused) editor group. */
      "tab.inactiveBackground": "#e4e7eb",
      "tab.inactiveForeground": "#2b303b",

      /* Active tab in non-active (unfocused) editor groups. */
      "tab.unfocusedActiveBorder": "#e4e7eb",
      "tab.unfocusedActiveBorderTop": "#e4e7eb",
      "tab.unfocusedActiveBackground": "#f2f4f8",
      "tab.unfocusedActiveForeground": "#6b7280",

      /* Other tabs in non-active (unfocused) editor groups. */
      "tab.unfocusedInactiveBackground": "#e4e7eb",
      "tab.unfocusedInactiveForeground": "#6b7280",

      /* Colors when selecting multiple tabs using Ctrl+select. */
      "tab.selectedBackground": "#c7ccd1",
      "tab.selectedForeground": "#2b303b",

      /**
       * Settings Editor
       */

      "settings.headerForeground": "#2b303b",
      "settings.modifiedItemIndicator": "#c7ccd133",

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
      "editorStickyScroll.shadow": "#FFFFFF00",
      "editorStickyScroll.background": "#f2f4f8",
      "editorStickyScrollHover.background": "#f2f4f8",

      /**
       * Editor
       */

      "editorCursor.foreground": "#2b303b",

      "editor.background": "#f2f4f8",
      "editor.foreground": "#2b303b",

      /* Background color for the first line of a folded (collapsed) range. Opaque. */
      "editor.foldBackground": "#c7ccd133",

      /* Background color of the current line with the cursor. Must be opaque. */
      "editor.lineHighlightBackground": "#c7ccd133",

      /* Selected text, and color for other text in the document that matches
      the current selection. */
      "editor.selectionBackground": `${colors.global.text.background.selected}`,
      "editor.selectionHighlightBackground": `${colors.global.text.background.selected}`,

      /* Current word/symbol highlight in read and write mode. */
      "editor.wordHighlightBackground": "#c7ccd133",
      "editor.wordHighlightStrongBackground": "#c7ccd133",

      /* In debugging mode, these are the background colors for the top stack
      frame and the focused stack frame respectively. */
      "editor.stackFrameHighlightBackground": "#c7ccd133",
      "editor.focusedStackFrameHighlightBackground": "#c7ccd133",

      /* Current search match in the editor, and for other search matches. */
      "editor.findMatchBackground": "#5e81ac99",
      "editor.findMatchHighlightBackground": "#5e81ac33",

      /* Line numbers. */
      "editorLineNumber.foreground": "#8c959f",
      "editorLineNumber.activeForeground": "#2b303b",

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
      "editorBracketMatch.background": "#FFFFFF00",
      "editorBracketMatch.border": "#FFFFFF00",

      /* Bracket pair colorization. Disabled by using text foreground color. */
      "editorBracketHighlight.foreground1": "#2b303b",
      "editorBracketHighlight.foreground2": "#2b303b",
      "editorBracketHighlight.foreground3": "#2b303b",
      "editorBracketHighlight.foreground4": "#2b303b",
      "editorBracketHighlight.foreground5": "#2b303b",
      "editorBracketHighlight.foreground6": "#2b303b",
      "editorBracketHighlight.unexpectedBracket.foreground": "#bf616a",

      /* Highlights for pair guides for active and inactive brackets. Disabled. */
      "editorBracketPairGuide.background1": "#FFFFFF00",
      "editorBracketPairGuide.background2": "#FFFFFF00",
      "editorBracketPairGuide.background3": "#FFFFFF00",
      "editorBracketPairGuide.background4": "#FFFFFF00",
      "editorBracketPairGuide.background5": "#FFFFFF00",
      "editorBracketPairGuide.background6": "#FFFFFF00",
      "editorBracketPairGuide.activeBackground1": "#FFFFFF00",
      "editorBracketPairGuide.activeBackground2": "#FFFFFF00",
      "editorBracketPairGuide.activeBackground3": "#FFFFFF00",
      "editorBracketPairGuide.activeBackground4": "#FFFFFF00",
      "editorBracketPairGuide.activeBackground5": "#00000000",
      "editorBracketPairGuide.activeBackground6": "#00000000",

      /* Inlay hints, enabled via the "editor.inlineSuggest.enabled" setting. */
      "editorInlayHint.background": "#6b7280",
      "editorInlayHint.foreground": "#afb8c1",
      "editorInlayHint.typeBackground": "#6b7280",
      "editorInlayHint.typeForeground": "#afb8c1",

      /* The Editor Widget is any dialog rendered in front of the editor,
      including the Find/Replace dialog and the suggestion widget. */
      "editorWidget.background": "#e4e7eb",
      "editorWidget.foreground": "#2b303b",

      /* Background color of the editor pane visible on the left and right side
      of the centered editor layout. */
      "editorPane.background": "#e4e7eb",

      /* Color to separate two editors from each other when shown
      by side in an editor group */
      "sideBySideEditor.horizontalBorder": "#c7ccd1",
      "sideBySideEditor.verticalBorder": "#c7ccd1",

      /**
       * Git Decorations
       * These colors are used in the Source Control panel, but also reused in
       * Editor Tabs and the File Explorer.
       */

      // "gitDecoration.addedResourceForeground": "#a3be8c",
      // "gitDecoration.modifiedResourceForeground": "#5e81ac",
      // "gitDecoration.deletedResourceForeground": "#b48ead",
      // "gitDecoration.untrackedResourceForeground": "#6b7280",
      // "gitDecoration.ignoredResourceForeground": "#6b7280",
      // "gitDecoration.conflictingResourceForeground": "#bf616a",
      // "gitDecoration.submoduleResourceForeground": "#6b7280",

      /* Disable SCM decorations by using default text foreground color. */
      "gitDecoration.addedResourceForeground": "#2b303b",
      "gitDecoration.modifiedResourceForeground": "#2b303b",
      "gitDecoration.deletedResourceForeground": "#2b303b",
      "gitDecoration.untrackedResourceForeground": "#2b303b",
      "gitDecoration.ignoredResourceForeground": "#2b303b",
      "gitDecoration.conflictingResourceForeground": "#2b303b",
      "gitDecoration.submoduleResourceForeground": "#2b303b",

      /**
       * Editor Gutter
       * Diff highlights in the line number gutter.
       */

      /* "editorGutter.background" overrides "editor.background" for the gutter only. */
      // "editorGutter.background": "#e4e7eb",

      "editorGutter.addedBackground": "#a3be8c99",
      "editorGutter.modifiedBackground": "#5e81ac99",
      "editorGutter.deletedBackground": "#b48ead99",

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
      "editorOverviewRuler.background": "#00000000",
      "editorOverviewRuler.border": "#00000000",

      /* Mark changes. */
      "editorOverviewRuler.addedForeground": "#a3be8c99",
      "editorOverviewRuler.modifiedForeground": "#5e81ac99",
      "editorOverviewRuler.deletedForeground": "#b48ead99",

      /* Mark problems, hide general info. */
      "editorOverviewRuler.errorForeground": "#bf616a",
      "editorOverviewRuler.warningForeground": "#ebcb8b",
      "editorOverviewRuler.infoForeground": "#00000000",

      /* Disable other decorations. */
      "editorOverviewRuler.findMatchForeground": "#00000000",
      "editorOverviewRuler.rangeHighlightForeground": "#00000000",
      "editorOverviewRuler.selectionHighlightForeground": "#00000000",
      "editorOverviewRuler.wordHighlightForeground": "#00000000",
      "editorOverviewRuler.wordHighlightStrongForeground": "#00000000",
      "editorOverviewRuler.wordHighlightTextForeground": "#00000000",
      "editorOverviewRuler.bracketMatchForeground": "#00000000",
      "editorOverviewRuler.inlineChatInserted": "#00000000",
      "editorOverviewRuler.inlineChatRemoved": "#00000000",

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

      "scrollbar.shadow": "#00000000",
      "scrollbarSlider.background": "#c7ccd166",
      "scrollbarSlider.hoverBackground": "#c7ccd166",
      "scrollbarSlider.activeBackground": "#c7ccd166",

      "minimapSlider.background": "#c7ccd166",
      "minimapSlider.hoverBackground": "#c7ccd166",
      "minimapSlider.activeBackground": "#c7ccd166",

      /* Opacity level of the minimap's content. */
      "minimap.foregroundOpacity": "#00000066",

      /* Disable changes, these exist in the editor overview ruler already. */
      "minimapGutter.addedBackground": "#00000000",
      "minimapGutter.modifiedBackground": "#00000000",
      "minimapGutter.deletedBackground": "#00000000",

      /* Disable errors, warnings and general info. */
      "minimap.errorHighlight": "#00000000",
      "minimap.warningHighlight": "#00000000",
      "minimap.infoHighlight": "#00000000",

      /* Hide other decorations. */
      "minimap.selectionOccurrenceHighlight": "#00000000",
      "minimap.selectionHighlight": "#00000000",
      "minimap.findMatchHighlight": "#00000000",

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

      "debugToolBar.border": "#6b7280",
      "debugToolBar.background": "#2b303b",

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

      "debugConsoleInputIcon.foreground": "#2b303b",

      "debugTokenExpression.name": "#2b303b",
      "debugTokenExpression.value": "#2b303b",
      "debugTokenExpression.string": "#2b303b",
      "debugTokenExpression.boolean": "#2b303b",
      "debugTokenExpression.number": "#2b303b",
      "debugTokenExpression.error": "#2b303b",

    },

    // https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide
    "semanticHighlighting": false,

    "tokenColors": [
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings": {
          "foreground": "#6b728099"
        }
      },
    ]

  }

}

export default getTheme
