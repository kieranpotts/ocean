import chroma from 'chroma-js'
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
      "focusBorder": `${colors.borders.focusBorder}`,

      /* Overall foreground color. This color is used only if not overridden
      by a component. */
      "foreground": `${colors.text.foreground.default}`,

      /* Background color of text selections within text fields in the workbench.
      This does not apply to selections within the editor and terminal. */
      "selection.background": chroma(`${colors.text.background.selected}`).alpha(0.5).hex(),

      /* Foreground color for text providing additional information, eg labels. */
      "descriptionForeground": `${colors.text.foreground.light}`,

      /* Overall foreground color for error messages.
      This color is only used if not overridden by a component. */
      "errorForeground": `${colors.text.foreground.error}`,

      /* The default color for icons in the workbench. */
      "icon.foreground": `${colors.text.foreground.default}`,

      /**
       * High-Contrast Extras
       * Additional colors for high-contrast themes, to better separate items.
       */

      /* An extra border around elements */
      "contrastBorder": `${colors.borders.contrastBorder}`,
      "contrastActiveBorder": `${colors.borders.contrastBorder}`,

      /**
       * Title Bar
       */

      /* Title Bar background, varying when the window is active and inactive. */
      "titleBar.activeBackground": "#2b303b",
      "titleBar.inactiveBackground": "#2b303b",

      /* Title Bar foreground, varying the window is active and inactive. */
      "titleBar.activeForeground": "#c7ccd1",
      "titleBar.inactiveForeground": "#c7ccd1",

      /* Title Bar border color. */
      "titleBar.border": "#2b303b",

      /**
       * Menu Bar
       */

      /* Colors of the selected item in the menubar. */
      "menubar.selectionBorder":"#00000000",
      "menubar.selectionBackground":"#6b728033",
      "menubar.selectionForeground":"#c7ccd1",

      /* Default colors of menu items. */
      "menu.border": "#6b728033",
      "menu.background":"#2b303b",
      "menu.foreground":"#c7ccd1",

      /* Colors of the selected item in menus. */
      "menu.selectionBorder":"#00000000",
      "menu.selectionBackground": "#6b728033",
      "menu.selectionForeground":"#c7ccd1",

      /* Color of separator between items in menus. */
      "menu.separatorBackground":"#6b728033",

      /**
       * Activity Bar
       */

      /* Activity Bar colors. The foreground color is used for icons. */
      "activityBar.border": "#2b303b",
      "activityBar.background": "#2b303b",
      "activityBar.foreground": "#c7ccd1",

      /* Lighter background and border colors to indicate active item. */
      "activityBar.activeBorder": "#c7ccd1",
      "activityBar.activeBackground": "#6b728033",

      /* Darker foreground color to indicate inactive items. */
      "activityBar.inactiveForeground": "#6b7280",

      /* Variations for when the Activity Bar is moved to the top or
      bottom of the Side Bar. Without setting these, the Activity Bar in
      this position will inherit the colors of the Side Bar. */
      "activityBarTop.background": "#2b303b",
      "activityBarTop.foreground": "#c7ccd1",

      "activityBarTop.activeBorder": "#c7ccd1",
      "activityBarTop.activeBackground": "#6b728033",
      "activityBarTop.inactiveForeground": "#6b7280",

      /* Notification badge colors. */
      "activityBarBadge.background": "#5e81ac",
      "activityBarBadge.foreground": "#e4e7eb",

      /**
       * Side Bar
       * The Side Bar is the container for views like Explorer and Search.
       */

      "sideBar.border": "#c7ccd1",
      "sideBar.background": "#e4e7eb",
      "sideBar.foreground": "#2b303b",

      /* Side Bar title colors. */
      "sideBarTitle.background": "#e4e7eb",
      "sideBarTitle.foreground": "#2b303b",

      /* Section header colors. */
      "sideBarSectionHeader.border": "#c7ccd1",
      "sideBarSectionHeader.background": "#e4e7eb",
      "sideBarSectionHeader.foreground": "#2b303b",

      /* Override top/bottom border color when the Activity Bar is there. */
      "sideBarActivityBarTop.border": "#2b303b",

      /**
       * Panel
       * These colors are for the bottom panel.
       */

      "panel.border": "#c7ccd1",
      "panel.background": "#e4e7eb",

      /* Text color for inactive panel titles. */
      "panelTitle.inactiveForeground": "#6b7280",

      /*
       * Status Bar
       */

      "statusBar.border": "#2b303b",
      "statusBar.background": "#2b303b",
      "statusBar.foreground": "#e4e7eb",

      /* Status Bar colors when no folder is opened. */
      "statusBar.noFolderBackground": "#bf616a",
      "statusBar.noFolderForeground": "#e4e7eb",

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

      "badge.background": "#5e81ac",
      "badge.foreground": "#e4e7eb",

      /**
       * Symbol Icons
       * Symbol icons appear in the Outline view, breadcrumb navigation,
       * and suggest widget.
       */

      "symbolIcon.arrayForeground": "#2b303b",
      "symbolIcon.booleanForeground": "#2b303b",
      "symbolIcon.classForeground": "#2b303b",
      "symbolIcon.colorForeground": "#2b303b",
      "symbolIcon.constantForeground": "#2b303b",
      "symbolIcon.constructorForeground": "#2b303b",
      "symbolIcon.enumeratorForeground": "#2b303b",
      "symbolIcon.enumeratorMemberForeground": "#2b303b",
      "symbolIcon.eventForeground": "#2b303b",
      "symbolIcon.fieldForeground": "#2b303b",
      "symbolIcon.fileForeground": "#2b303b",
      "symbolIcon.folderForeground": "#2b303b",
      "symbolIcon.functionForeground": "#2b303b",
      "symbolIcon.interfaceForeground": "#2b303b",
      "symbolIcon.keyForeground": "#2b303b",
      "symbolIcon.keywordForeground": "#2b303b",
      "symbolIcon.methodForeground": "#2b303b",
      "symbolIcon.moduleForeground": "#2b303b",
      "symbolIcon.namespaceForeground": "#2b303b",
      "symbolIcon.nullForeground": "#2b303b",
      "symbolIcon.numberForeground": "#2b303b",
      "symbolIcon.objectForeground": "#2b303b",
      "symbolIcon.operatorForeground": "#2b303b",
      "symbolIcon.packageForeground": "#2b303b",
      "symbolIcon.propertyForeground": "#2b303b",
      "symbolIcon.referenceForeground": "#2b303b",
      "symbolIcon.snippetForeground": "#2b303b",
      "symbolIcon.stringForeground": "#2b303b",
      "symbolIcon.structForeground": "#2b303b",
      "symbolIcon.textForeground": "#2b303b",
      "symbolIcon.typeParameterForeground": "#2b303b",
      "symbolIcon.unitForeground": "#2b303b",
      "symbolIcon.variableForeground": "#2b303b",

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
      "tab.unfocusedActiveBackground":"#f2f4f8",
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
      "editorStickyScroll.shadow": "#00000000",
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
      "editor.selectionBackground": chroma(`${colors.text.background.selected}`).alpha(0.5).hex(),
      "editor.selectionHighlightBackground": chroma(`${colors.text.background.selected}`).alpha(0.5).hex(),

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
      "editorBracketMatch.background": "#00000000",
      "editorBracketMatch.border": "#00000000",

      /* Bracket pair colorization. Disabled by using text foreground color. */
      "editorBracketHighlight.foreground1": "#2b303b",
      "editorBracketHighlight.foreground2": "#2b303b",
      "editorBracketHighlight.foreground3": "#2b303b",
      "editorBracketHighlight.foreground4": "#2b303b",
      "editorBracketHighlight.foreground5": "#2b303b",
      "editorBracketHighlight.foreground6": "#2b303b",
      "editorBracketHighlight.unexpectedBracket.foreground": "#bf616a",

      /* Highlights for pair guides for active and inactive brackets. Disabled. */
      "editorBracketPairGuide.background1": "#00000000",
      "editorBracketPairGuide.background2": "#00000000",
      "editorBracketPairGuide.background3": "#00000000",
      "editorBracketPairGuide.background4": "#00000000",
      "editorBracketPairGuide.background5": "#00000000",
      "editorBracketPairGuide.background6": "#00000000",
      "editorBracketPairGuide.activeBackground1": "#00000000",
      "editorBracketPairGuide.activeBackground2": "#00000000",
      "editorBracketPairGuide.activeBackground3": "#00000000",
      "editorBracketPairGuide.activeBackground4": "#00000000",
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
