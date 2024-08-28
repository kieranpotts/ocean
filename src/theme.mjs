import getColors from './colors.mjs'

const getTheme = ({ theme, name }) => {

  const colors = getColors({ theme })

  return {
    "$schema": "vscode://schemas/color-theme",

    "name": name,
    "type": theme,

    "colors": {

      /*
      References:
      https://code.visualstudio.com/api/references/theme-color
      https://github.com/primer/github-vscode-theme/blob/main/src/theme.js
      https://github.com/microsoft/vscode/blob/main/build/lib/stylelint/vscode-known-variables.json
      */

      /**
       * Base Colors
       */

      /* Overall border color for focused elements. This color is used only if not overridden by a component. */
      "focusBorder": `${colors.transparent}`,

      /* Overall foreground color. This color is used only if not overridden by a component. */
      "foreground": `${colors.text}`,

      /* Foreground color for text providing additional information, eg labels. */
      "descriptionForeground": `${colors.lightText}`,

      /* Overall foreground color for error messages. This color is only used if not overridden by a component. */
      "errorForeground": `${colors.errorText}`,

      /* Text links - eg in welcome page. */
      "textLink.foreground": `${colors.hyperlinks}`,
      "textLink.activeForeground": `${colors.hyperlinks}`,

      /* Block quotes - eg in help pages. */
      "textBlockQuote.border": `${colors.lightText}`,
      "textBlockQuote.background": `${colors.transparent}`,

      /* Code and preformatted text blocks - inverted colors, like the terminal. */
      "textCodeBlock.background": `${colors.alpha.hoverFocusBackground}`,

      "textPreformat.background": `${colors.alpha.hoverFocusBackground}`,
      "textPreformat.foreground": `${colors.text}`,

      /* Text separator (horizontal rule). */
      "textSeparator.foreground": `${colors.lightText}`,

      /* The default color for icons in the workbench. */
      "icon.foreground": `${colors.icons}`,

      /* This is the foreground color for <kbd> elements within the Keyboard Shortcuts (keybindings) picker. */
      "keybindingLabel.foreground": `${colors.text}`,

      /* Background color of text selections within text fields in the workbench. This does not apply to selections
      within the editor and terminal. */
      "selection.background": `${colors.alpha.selectionBackground}`,

      /* Default colors for popover widgets such as the find/replace widget in the editor. */
      "widget.border": `${colors.workbench.border}`,

      /**
       * High-Contrast Extras
       *
       * Additional colors for high-contrast themes, to better separate items.
       */

      /* An extra border around elements */
      "contrastBorder": `${colors.transparent}`,
      "contrastActiveBorder": `${colors.transparent}`,

      /**
       * Button Control
       *
       * A set of colors for button controls.
       */

      "button.border": `${colors.transparent}`,

      /* Primary button colors. */
      "button.background": `${colors.button.primary.background}`,
      "button.hoverBackground": `${colors.button.primary.background}`,
      "button.foreground": `${colors.button.primary.foreground}`,

      /* Secondary button colors. */
      "button.secondaryBackground": `${colors.button.secondary.background}`,
      "button.secondaryHoverBackground": `${colors.button.secondary.background}`,
      "button.secondaryForeground": `${colors.button.secondary.foreground}`,

      /**
       * Checkbox Control
       */

      "checkbox.border": `${colors.transparent}`,
      "checkbox.background": `${colors.inputs.background}`,
      "checkbox.foreground": `${colors.text}`,

      /**
       * Dropdown Control
       */

      "dropdown.border": `${colors.transparent}`,
      "dropdown.background": `${colors.inputs.background}`,
      "dropdown.listBackground": `${colors.inputs.background}`,
      "dropdown.foreground": `${colors.text}`,

      /**
       * Text Input Control
       */

      "input.border": `${colors.inputs.border}`,
      "input.background": `${colors.inputs.background}`,
      "input.foreground": `${colors.text}`,

      /* Placeholder text. */
      "input.placeholderForeground": `${colors.lightText}`,

      "inputOption.activeBackground": `${colors.alpha.hoverFocusBackground}`,
      "inputOption.activeBorder": `${colors.transparent}`,
      "inputOption.activeForeground": `${colors.text}`,

      "searchEditor.textInputBorder": `${colors.inputs.border}`,

      /**
       * Badges
       *
       * Badges are small information labels, for example, search results count.
       */

      "badge.background": `${colors.badge.background}`,
      "badge.foreground": `${colors.badge.foreground}`,

      /**
       * Title Bar
       *
       * Because the Menu Bar might be positioned within the Title Bar, we've merged these color settings together for
       * easier maintenance. The Title Bar inherits the colors of the Menu Bar – they must be consistent.
       */

      /* Title Bar border color - always transparent. */
      "titleBar.border": `${colors.transparent}`,

      /* Title Bar background, varying when the window is active and inactive. */
      "titleBar.activeBackground": `${colors.workbench.background}`,
      "titleBar.inactiveBackground": `${colors.workbench.background}`,

      /* Title Bar foreground, varying the window is active and inactive. */
      "titleBar.activeForeground": `${colors.text}`,
      "titleBar.inactiveForeground": `${colors.text}`,

      /**
       * Menu Bar
       */

      /* Background and foreground colors of menubar and drop-drop menus from the menubar. */
      "menu.background": `${colors.workbench.background}`,
      "menu.foreground": `${colors.text}`,

      /* Border around drop-down menus from the menubar, and separator between items in menus. */
      "menu.border": `${colors.workbench.border}`,
      "menu.separatorBackground": `${colors.workbench.separator}`,

      /* Colors of the hovered/focused item in the menubar. */
      "menubar.selectionBorder": `${colors.transparent}`,
      "menubar.selectionBackground": `${colors.alpha.hoverFocusBackground}`,
      "menubar.selectionForeground": `${colors.text}`,

      /* Colors of the selected item in menus. */
      "menu.selectionBorder": `${colors.transparent}`,
      "menu.selectionBackground": `${colors.alpha.hoverFocusBackground}`,
      "menu.selectionForeground": `${colors.text}`,

      /**
       * Activity Bar
       */

      /* Activity Bar colors. The foreground color is used for icons as well as text. The border with other containers is removed with transparency. */
      "activityBar.border": `${colors.transparent}`,
      "activityBar.background": `${colors.workbench.background}`,
      "activityBar.foreground": `${colors.icons}`,
      "activityBar.inactiveForeground": `${colors.icons}`,

      /* Lighter background and border colors to indicate active item. */
      "activityBar.activeBorder": `${colors.transparent}`,
      "activityBar.activeBackground": `${colors.alpha.hoverFocusBackground}`,

      /* Badges in the Activity Bar - replicated from the global Badge element. */
      "activityBarBadge.background": `${colors.badge.background}`,
      "activityBarBadge.foreground": `${colors.badge.foreground}`,

      /**
       * Side Bar Tabs
       *
       * "Side Bar Tabs" is not an actual UI component in VS Code. But when the Activity Bar is moved to the top or
       * bottom of the Side Bar, it looks like the Side Bar has tabs. Without these settings, the Side Bar Tabs will
       * inherit the default colors of the Side Bar component. These settings, when enabled, will also change the
       * presentation of the permanent tabs at the top of the secondary sidebar.
       */

      "activityBarTop.background": `${colors.workbench.background}`,
      "activityBarTop.foreground": `${colors.icons}`,
      "activityBarTop.inactiveForeground": `${colors.icons}`,

      "activityBarTop.activeBorder": `${colors.transparent}`,
      "activityBarTop.activeBackground": `${colors.alpha.hoverFocusBackground}`,

      /**
       * Side Bar
       *
       * The Side Bar is the container for views like Explorer and Search. There are two sidebars: the "primary" and
       * "secondary" sidebars. These style rules apply to both.
       */

      "sideBar.border": `${colors.transparent}`,
      "sideBar.background": `${colors.workbench.background}`,
      "sideBar.foreground": `${colors.text}`,

      /* Side Bar title colors. */
      "sideBarTitle.background": `${colors.workbench.background}`,
      "sideBarTitle.foreground": `${colors.text}`,

      /* Section header colors. */
      "sideBarSectionHeader.border": `${colors.workbench.separator}`,
      "sideBarSectionHeader.background": `${colors.workbench.background}`,
      "sideBarSectionHeader.foreground": `${colors.text}`,

      /* Color to mark "drop zones" when moving things in the sidebar. */
      "sideBar.dropBackground": `${colors.alpha.highlightBackground}`,

      /* Add a border to the top/bottom  of the sidebar when the Activity Bar is moved to that position. (This adds a
      matching border to the top of the secondary sidebar.) */
      "sideBarActivityBarTop.border": `${colors.transparent}`,

      /**
       * Lists and Trees
       *
       * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
       */

      /* The selected item when the list/tree is active. */
      "list.activeSelectionBackground": `${colors.alpha.selectionBackground}`,
      "list.activeSelectionForeground": `${colors.text}`,
      "list.activeSelectionIconForeground": `${colors.text}`,

      /* The selected item when the list/tree is inactive. */
      "list.inactiveSelectionBackground": `${colors.alpha.selectionBackground}`,
      "list.inactiveSelectionForeground": `${colors.text}`,

      /* The focused item when the list/tree is active. */
      "list.focusBackground": `${colors.alpha.hoverFocusBackground}`,
      "list.inactiveFocusBackground": `${colors.alpha.hoverFocusBackground}`,
      "list.focusForeground": `${colors.text}`,

      /* List/Tree outline color for the focused item when the list/tree is has keyboard focus and is selected. */
      "list.focusAndSelectionOutline": `${colors.alpha.selectionBackground}`,

      /* Hovering. */
      "list.hoverBackground": `${colors.alpha.hoverFocusBackground}`,
      "list.hoverForeground": `${colors.text}`,

      /* Match highlights when searching inside the list/tree. */
      "list.highlightForeground": `${colors.text}`,

      /* Foreground color overrides for item statuses. These colors will also be used to override the tab foreground
      color when the file is opened in an editor tab. */
      "list.errorForeground": `${colors.errorText}`,
      "list.warningForeground": `${colors.warningText}`,

      /* Color to mark "drop zones" when moving things in the list view. */
      "list.dropBackground": `${colors.alpha.highlightBackground}`,

      /* Tree Widget's stroke color for indent guides. */
      "tree.indentGuidesStroke": `${colors.workbench.border}`,

      /**
       * Notifications
       */

      "notificationCenter.border": `${colors.workbench.border}`,
      "notificationToast.border": `${colors.workbench.border}`,

      "notificationCenterHeader.background": `${colors.workbench.background}`,
      "notificationCenterHeader.foreground": `${colors.text}`,

      "notifications.border": `${colors.workbench.border}`,
      "notifications.background": `${colors.workbench.background}`,
      "notifications.foreground": `${colors.text}`,

      "notificationLink.foreground": `${colors.hyperlinks}`,

      "notificationsErrorIcon.foreground": `${colors.icons}`,
      "notificationsWarningIcon.foreground": `${colors.icons}`,
      "notificationsInfoIcon.foreground": `${colors.icons}`,

      /**
       * Quick Picker
       *
       * The quick picker widget is the container for pickers like the Command Palette and the Color Theme Picker.
       */

      "pickerGroup.border": `${colors.workbench.border}`,
      "pickerGroup.foreground": `${colors.text}`,

      /* Inputs within the Quick Picker widget. */
      "quickInput.background": `${colors.workbench.background}`,
      "quickInput.foreground": `${colors.text}`,
      "quickInputTitle.background": `${colors.workbench.background}`,

      /* Lists within the Quick Picker widget. */
      "quickInputList.focusBackground": `${colors.alpha.hoverFocusBackground}`,
      "quickInputList.focusForeground": `${colors.text}`,
      "quickInputList.focusIconForeground": `${colors.icons}`,

      /*
       * Status Bar
       */

      "statusBar.border": `${colors.workbench.separator}`,
      "statusBar.focusBorder": `${colors.transparent}`,

      "statusBar.background": `${colors.workbench.background}`,
      "statusBar.foreground": `${colors.text}`,

      /* Status Bar colors when no folder is opened. We just keep the defaults here. */
      "statusBar.noFolderBackground": `${colors.workbench.background}`,
      "statusBar.noFolderForeground": `${colors.text}`,

      /* Status Bar colors while a program is being debugged. */
      "statusBar.debuggingBackground": `${colors.workbench.debuggingBackground}`,
      "statusBar.debuggingForeground": `${colors.text}`,

      /* Colors for prominent items in the status bar. */
      "statusBarItem.prominentBackground": `${colors.alpha.highlightBackground}`,
      "statusBarItem.errorBackground": `${colors.alpha.errorBackground}`,

      /* Overlays for item hovers and clicks. */
      "statusBarItem.hoverBackground": `${colors.alpha.hoverFocusBackground}`,
      "statusBarItem.activeBackground": `${colors.alpha.hoverFocusBackground}`,

      /* Color for the remote indicator on the status bar. */
      "statusBarItem.focusBorder": `${colors.transparent}`,
      "statusBarItem.remoteBackground": `${colors.button.primary.background}`,
      "statusBarItem.remoteForeground": `${colors.button.primary.foreground}`,
      "statusBarItem.remoteHoverBackground": `${colors.button.primary.background}`,
      "statusBarItem.remoteHoverForeground": `${colors.button.primary.foreground}`,

      /**
       * Editor Groups
       */

      "editorGroup.border": `${colors.workbench.background}`,
      "editorGroupHeader.tabsBorder": `${colors.transparent}`,
      "editorGroupHeader.tabsBackground": `${colors.workbench.background}`,

      /* Color to mark "drop zones" when moving tabs around. */
      "editorGroup.dropBackground": `${colors.alpha.highlightBackground}`,

      /**
       * Editor Tabs
       */

      /* Borders to separate tabs from each other - disabled. */
      "tab.border": `${colors.transparent}`,
      "tab.lastPinnedBorder": `${colors.transparent}`,

      /* Active tab in the active (focused) editor group.*/
      "tab.activeBorder": `${colors.transparent}`,
      "tab.activeBorderTop": `${colors.transparent}`,
      "tab.activeBackground": `${colors.editor.background}`,
      "tab.activeForeground": `${colors.text}`,

      /* Inactive tabs in the active (focused) editor group. */
      "tab.inactiveBackground": `${colors.workbench.background}`,
      "tab.inactiveForeground": `${colors.text}`,

      /* Active tab in non-active (unfocused) editor groups. */
      "tab.unfocusedActiveBorder": `${colors.transparent}`,
      "tab.unfocusedActiveBorderTop": `${colors.transparent}`,
      "tab.unfocusedActiveBackground": `${colors.editor.background}`,
      "tab.unfocusedActiveForeground": `${colors.text}`,

      /* Other tabs in non-active (unfocused) editor groups. */
      "tab.unfocusedInactiveBackground": `${colors.workbench.background}`,
      "tab.unfocusedInactiveForeground": `${colors.text}`,

      /* Colors when selecting multiple tabs using Ctrl+select. */
      "tab.selectedBackground": `${colors.editor.background}`,
      "tab.selectedForeground": `${colors.text}`,
      "tab.selectedBorderTop": `${colors.transparent}`,

      /* Tab hover effects are disabled. */
      // "tab.hoverBackground": "",
      // "tab.unfocusedHoverBackground": "",

      /**
       * Progress Bar
       */

      "progressBar.background": `${colors.runningProcess}`,

      /**
       * Breadcrumb
       */

      "breadcrumb.background": `${colors.workbench.background}`,
      "breadcrumbPicker.background": `${colors.workbench.background}`,

      "breadcrumb.foreground": `${colors.lightText}`,
      "breadcrumb.focusForeground": `${colors.lightText}`,
      "breadcrumb.activeSelectionForeground": `${colors.lightText}`,

      /**
       * Editor Sticky Scroll
       *
       * Sticks the current indentation context at the top of the editor as you scroll down - useful for understanding
       * where you are in the code. Requires the "editor.stickyScroll.enabled" setting to be true.
       */

      "editorStickyScroll.border": `${colors.editor.border}`,
      "editorStickyScroll.shadow": `${colors.transparent}`,
      "editorStickyScroll.background": `${colors.editor.background}`,
      "editorStickyScrollHover.background": `${colors.workbench.background}`,

      /**
       * Editor
       */

      "editorCursor.foreground": `${colors.text}`,

      "editor.background": `${colors.editor.background}`,
      "editor.foreground": `${colors.text}`,

      /* Background color for the first line of a folded (collapsed) range. Opaque. */
      "editor.foldBackground": `${colors.alpha.hoverFocusBackground}`,

      /* Background color of the current line with the cursor. Must be opaque. */
      "editor.lineHighlightBackground": `${colors.alpha.hoverFocusBackground}`,

      /* Background color when the editor is in linked-editing mode. Alpha transparency. */
      "editor.linkedEditingBackground": `${colors.alpha.hoverFocusBackground}`,

      /* Selected text, and color for other text in the document that matches the current selection. */
      "editor.selectionBackground": `${colors.alpha.selectionBackground}`,
      "editor.selectionHighlightBackground": `${colors.alpha.matchesBackground}`,

      /* Selected text when the editor itself is not focused. */
      "editor.inactiveSelectionBackground": `${colors.alpha.matchesBackground}`,

      /* Current word/symbol highlight in read and write mode. */
      "editor.wordHighlightBackground": `${colors.alpha.hoverFocusBackground}`,
      "editor.wordHighlightStrongBackground": `${colors.alpha.hoverFocusBackground}`,

      /* In debugging mode, these are the background colors for the top stack frame and the focused stack frame
      respectively. */
      "editor.stackFrameHighlightBackground": `${colors.alpha.hoverFocusBackground}`,
      "editor.focusedStackFrameHighlightBackground": `${colors.alpha.hoverFocusBackground}`,

      /* Current search match in the editor, and for other search matches. */
      "editor.findMatchBackground": `${colors.alpha.matchesBackground}`,
      "editor.findMatchHighlightBackground": `${colors.alpha.otherMatchesBackground}`,

      /* Line numbers. */
      "editorLineNumber.foreground": `${colors.lightText}`,
      "editorLineNumber.activeForeground": `${colors.text}`,

      /* Indent guides - old. */
      "editorIndentGuide.background": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground": `${colors.editor.guides}`,

      /* Indent guides - new. */
      "editorIndentGuide.background1": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground1": `${colors.editor.guides}`,
      "editorIndentGuide.background2": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground2": `${colors.editor.guides}`,
      "editorIndentGuide.background3": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground3": `${colors.editor.guides}`,
      "editorIndentGuide.background4": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground4": `${colors.editor.guides}`,
      "editorIndentGuide.background5": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground5": `${colors.editor.guides}`,
      "editorIndentGuide.background6": `${colors.editor.guides}`,
      "editorIndentGuide.activeBackground6": `${colors.editor.guides}`,

      "editorWhitespace.foreground": `${colors.editor.guides}`,

      /* Highlight for the current matching pair of brackets. Disabled. */
      "editorBracketMatch.background": `${colors.transparent}`,
      "editorBracketMatch.border": `${colors.transparent}`,

      /* Bracket pair colorization. Disabled by using text foreground color. */
      "editorBracketHighlight.foreground1": `${colors.lightText}`,
      "editorBracketHighlight.foreground2": `${colors.lightText}`,
      "editorBracketHighlight.foreground3": `${colors.lightText}`,
      "editorBracketHighlight.foreground4": `${colors.lightText}`,
      "editorBracketHighlight.foreground5": `${colors.lightText}`,
      "editorBracketHighlight.foreground6": `${colors.lightText}`,

      "editorBracketHighlight.unexpectedBracket.foreground": `${colors.errorText}`,

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
      "editorInlayHint.foreground": `${colors.lightText}`,
      "editorInlayHint.typeBackground": `${colors.transparent}`,
      "editorInlayHint.typeForeground": `${colors.lightText}`,
      "editorInlayHint.paramBackground": `${colors.transparent}`,
      "editorInlayHint.paramForeground": `${colors.lightText}`,

      /* The Editor Widget is any dialog rendered in front of the editor, including the Find/Replace dialog and the
      suggestion widget. */
      "editorWidget.background": `${colors.workbench.background}`,
      "editorWidget.foreground": `${colors.text}`,

      "editorSuggestWidget.background": `${colors.workbench.background}`,

      /* Colors for input fields within the editor view, eg in PR comment threads. */
      "editorCommentsWidget.unresolvedBorder": `${colors.errorText}`,
      "editorCommentsWidget.resolvedBorder": `${colors.successText}`,
      // "editorCommentsWidget.rangeBackground": `${colors.workbench.background}`,
      // "editorCommentsWidget.rangeActiveBackground": `${colors.workbench.background}`,
      "editorCommentsWidget.rangeBackground": `${colors.replacement}`,
      "editorCommentsWidget.rangeActiveBackground": `${colors.replacement}`,
      "editorCommentsWidget.replyInputBackground": `${colors.inputs.background}`,

      /* Background color of the editor pane visible on the left and right side of the centered editor layout. */
      "editorPane.background": `${colors.workbench.background}`,

      /* Color to separate two editors from each other when shown by side in an editor group */
      "sideBySideEditor.horizontalBorder": `${colors.workbench.border}`,
      "sideBySideEditor.verticalBorder": `${colors.workbench.border}`,

      /**
       * Editor Gutter
       *
       * Diff highlights in the line number gutter.
       */

      /* "editorGutter.background" overrides "editor.background" for the gutter only. */
      "editorGutter.background": `${colors.transparent}`,

      /* Disable Git/SCM decorations in the gutter. */
      "editorGutter.addedBackground": `${colors.transparent}`,
      "editorGutter.modifiedBackground": `${colors.transparent}`,
      "editorGutter.deletedBackground": `${colors.transparent}`,

      "editorGutter.foldingControlForeground": `${colors.lightText}`,

      /* Editor gutter decoration color for commenting ranges and glyphs. */
      "editorGutter.commentRangeForeground": `${colors.workbench.background}`,
      "editorGutter.commentGlyphForeground": `${colors.text}`,
      "editorGutter.commentUnresolvedGlyphForeground": `${colors.errorText}`,

      /**
       * Diff Editor
       */

      "diffEditor.insertedLineBackground": `${colors.alpha.addedTextBackground}`,
      "diffEditor.insertedTextBackground": `${colors.alpha.addedTextBackground}`,
      "diffEditor.removedLineBackground": `${colors.alpha.deletedTextBackground}`,
      "diffEditor.removedTextBackground": `${colors.alpha.deletedTextBackground}`,

      "diffEditorOverview.insertedForeground": `${colors.alpha.addedTextBackground}`,
      "diffEditorOverview.removedForeground": `${colors.alpha.deletedTextBackground}`,

      "diffEditorGutter.insertedLineBackground": `${colors.transparent}`,
      "diffEditorGutter.removedLineBackground": `${colors.transparent}`,

      "diffEditor.unchangedRegionBackground": `${colors.transparent}`,

      /**
       * Editor Overview Ruler
       *
       * This component sits *under* the scrollbar on the right of the editor. It uses decorations to provide a map of
       * changes in the file.
       */

      /* These effectively give a background and border around the scrollbar. */
      "editorOverviewRuler.background": `${colors.transparent}`,
      "editorOverviewRuler.border": `${colors.transparent}`,

      /* Mark SCM changes - all disabled. */
      "editorOverviewRuler.addedForeground": `${colors.transparent}`,
      "editorOverviewRuler.modifiedForeground": `${colors.transparent}`,
      "editorOverviewRuler.deletedForeground": `${colors.transparent}`,

      /* Mark problems and warnings, but hide general info. */
      "editorOverviewRuler.errorForeground": `${colors.errorText}`,
      "editorOverviewRuler.warningForeground": `${colors.warningText}`,
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
       *
       * The theme is designed for these two controls to blend together. The following settings are recommended to work
       * best with this theme:
       *
       * {
       *   "editor.minimap.size": "fill",
       *   "editor.minimap.showSlider": "always",
       *   "editor.scrollbar.vertical": "visible",
       * }
       */

      "scrollbar.shadow": `${colors.transparent}`,
      "scrollbarSlider.background": `${colors.editor.scrollbar}`,
      "scrollbarSlider.hoverBackground": `${colors.editor.scrollbar}`,
      "scrollbarSlider.activeBackground": `${colors.editor.scrollbar}`,

      "minimapSlider.background": `${colors.editor.minimap}`,
      "minimapSlider.hoverBackground": `${colors.editor.minimap}`,
      "minimapSlider.activeBackground": `${colors.editor.minimap}`,

      /* TODO: Move this opacity config to colors.mjs. */
      /* Opacity level of the minimap's content. It's only the alpha value that's embedded directly in this config. */
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
       * Panel
       *
       * These colors are for the bottom panel.
       */

      "panel.border": `${colors.transparent}`,
      "panel.background": `${colors.workbench.background}`,

      "panelTitle.activeBorder": `${colors.transparent}`,
      "panelTitle.inactiveForeground": `${colors.text}`,
      "panelTitle.activeForeground": `${colors.text}`,

      /* Color to mark "drop zones" when moving panel sections around. */
      "panelSection.dropBackground": `${colors.alpha.highlightBackground}`,

      "panelInput.border": `${colors.inputs.border}`,

      /**
       * Debugging elements
       */

      "debugToolBar.border": `${colors.workbench.border}`,
      "debugToolBar.background": `${colors.workbench.background}`,

      /* Breakpoint blob color. */
      "debugIcon.breakpointForeground": `${colors.editor.breakpoint}`,

      /* Debug console. */
      "debugConsole.infoForeground": `${colors.lightText}`,
      "debugConsole.warningForeground": `${colors.warningText}`,
      "debugConsole.errorForeground": `${colors.errorText}`,
      "debugConsole.sourceForeground": `${colors.text}`,

      "debugConsoleInputIcon.foreground": `${colors.icons}`,

      "debugTokenExpression.name": `${colors.text}`,
      "debugTokenExpression.value": `${colors.text}`,
      "debugTokenExpression.string": `${colors.text}`,
      "debugTokenExpression.boolean": `${colors.text}`,
      "debugTokenExpression.number": `${colors.text}`,
      "debugTokenExpression.error": `${colors.text}`,

      /**
       * Integrated Terminal
       */

      "terminal.background": `${colors.terminal.background}`,
      "terminal.foreground": `${colors.terminal.foreground}`,

      "terminalCursor.background": `${colors.transparent}`,
      "terminalCursor.foreground": `${colors.terminal.foreground}`,

      /* Background for selected text. */
      "terminal.selectionBackground": `${colors.terminal.selectionBackground}`,
      "terminal.inactiveSelectionBackground": `${colors.terminal.selectionBackground}`,

      /* The background color when dragging on top of terminals. */
      "terminal.dropBackground": `${colors.alpha.highlightBackground}`,

      /* Current search match in the terminal. */
      "terminal.findMatchBackground": `${colors.terminal.alpha.matchesBackground}`,
      "terminal.findMatchBorder": `${colors.transparent}`,

      /* Other search matches in the terminal. */
      "terminal.findMatchHighlightBackground": `${colors.terminal.alpha.otherMatchesBackground}`,
      "terminal.findMatchHighlightBorder": `${colors.transparent}`,

      /* Border between split terminal panes. */
      "terminal.border": `${colors.terminal.border}`,

      /* Multi-terminal mode: border for active terminal tab. */
      "terminal.tab.activeBorder": `${colors.terminal.text}`,

      /* ANSI colors. */
      "terminal.ansiBlack": `${colors.terminal.ansiBlack}`,
      "terminal.ansiBlue": `${colors.terminal.ansiBlue}`,
      "terminal.ansiCyan": `${colors.terminal.ansiCyan}`,
      "terminal.ansiGreen": `${colors.terminal.ansiGreen}`,
      "terminal.ansiMagenta": `${colors.terminal.ansiMagenta}`,
      "terminal.ansiRed": `${colors.terminal.ansiRed}`,
      "terminal.ansiWhite": `${colors.terminal.ansiWhite}`,
      "terminal.ansiYellow": `${colors.terminal.ansiYellow}`,
      "terminal.ansiBrightBlack": `${colors.terminal.ansiBrightBlack}`,
      "terminal.ansiBrightBlue": `${colors.terminal.ansiBrightBlue}`,
      "terminal.ansiBrightCyan": `${colors.terminal.ansiBrightCyan}`,
      "terminal.ansiBrightGreen": `${colors.terminal.ansiBrightGreen}`,
      "terminal.ansiBrightMagenta": `${colors.terminal.ansiBrightMagenta}`,
      "terminal.ansiBrightRed": `${colors.terminal.ansiBrightRed}`,
      "terminal.ansiBrightWhite": `${colors.terminal.ansiBrightWhite}`,
      "terminal.ansiBrightYellow": `${colors.terminal.ansiBrightYellow}`,

      /**
       * Welcome Page buttons.
       */

      "welcomePage.tileBackground": `${colors.workbench.background}`,
      "welcomePage.buttonBackground": `${colors.button.primary.background}`,
      "welcomePage.buttonHoverBackground": `${colors.button.primary.background}`,

      /**
       * Settings Editor
       */

      "settings.headerForeground": `${colors.text}`,
      "settings.modifiedItemIndicator": `${colors.warningText}`,

      "settings.textInputBorder": `${colors.inputs.border}`,
      "settings.numberInputBorder": `${colors.inputs.border}`,

      "settings.dropdownBackground": `${colors.inputs.background}`,
      "settings.dropdownBorder": `${colors.inputs.border}`,

      /**
       * Notebooks
       */

      "notebook.cellBorderColor": `${colors.inputs.border}`,
      "notebook.selectedCellBackground": `${colors.inputs.background}`,

      /**
       * Peek view editor
       */

      /* Color of the peek view borders and arrow. */
      "peekView.border": `${colors.editor.border}`,

      /* Background color of the peek view editor. */
      "peekViewEditor.background": `${colors.editor.background}`,

      /* Background color of the gutter in the peek view editor. */
      "peekViewEditorGutter.background": `${colors.editor.background}`,

      /* Match highlight color in the peek view editor. */
      "peekViewEditor.matchHighlightBackground": `${colors.alpha.highlightBackground}`,

      /* Match highlight border color in the peek view editor. */
      "peekViewEditor.matchHighlightBorder": `${colors.transparent}`,

      /* Background color of the peek view result list. */
      "peekViewResult.background": `${colors.editor.breakoutBackground}`,

      /* Foreground color for file nodes in the peek view result list. */
      "peekViewResult.fileForeground": `${colors.text}`,

      /* Foreground color for line nodes in the peek view result list. */
      "peekViewResult.lineForeground": `${colors.editor.guides}`,

      /* Match highlight color in the peek view result list. */
      "peekViewResult.matchHighlightBackground": `${colors.alpha.highlightBackground}`,

      /* Background color of the selected entry in the peek view result list. */
      "peekViewResult.selectionBackground": `${colors.alpha.selectionBackground}`,

      /* Foreground color of the selected entry in the peek view result list. */
      "peekViewResult.selectionForeground": `${colors.text}`,

      /* Background color of the peek view title area. */
      "peekViewTitle.background": `${colors.workbench.background}`,

      /* Color of the peek view title info. */
      "peekViewTitleDescription.foreground": `${colors.text}`,

      /* Color of the peek view title. */
      "peekViewTitleLabel.foreground": `${colors.lightText}`,

      /* Background color of sticky scroll in the peek view editor. */
      "peekViewEditorStickyScroll.background": `${colors.editor.scrollbar}`,

      /**
       * Action Bar
       */

      /* TODO: Not entirely sure what this is, but is probably significant as this color property is
      referenced in VS Code's default / built-in themes.*/

      /* Background color for toggled action items in action bar. */
      "actionBar.toggledBackground": "#dddddd",

      /**
       * Chat
       */

      "chat.slashCommandBackground": `${colors.chat.command.background}`,
      "chat.slashCommandForeground": `${colors.chat.command.foreground}`,

      /**
       * Git Decorations
       *
       * These colors are used in the Source Control panel, but also reused in Editor Tabs and the File Explorer.
       */

      /* Disable SCM decorations by using default text foreground color. */
      "gitDecoration.addedResourceForeground": `${colors.text}`,
      "gitDecoration.modifiedResourceForeground": `${colors.text}`,
      "gitDecoration.deletedResourceForeground": `${colors.text}`,
      "gitDecoration.renamedResourceForeground": `${colors.text}`,
      "gitDecoration.stageModifiedResourceForeground": `${colors.text}`,
      "gitDecoration.stageDeletedResourceForeground": `${colors.text}`,
      "gitDecoration.untrackedResourceForeground": `${colors.text}`,
      "gitDecoration.ignoredResourceForeground": `${colors.lightText}`,
      "gitDecoration.conflictingResourceForeground": `${colors.text}`,
      "gitDecoration.submoduleResourceForeground": `${colors.text}`,

      /**
       * Symbol Icons
       *
       * Symbol icons appear in the Outline view, breadcrumb navigation, and suggest widget.
       */

      "symbolIcon.arrayForeground": `${colors.icons}`,
      "symbolIcon.booleanForeground": `${colors.icons}`,
      "symbolIcon.classForeground": `${colors.icons}`,
      "symbolIcon.colorForeground": `${colors.icons}`,
      "symbolIcon.constantForeground": `${colors.icons}`,
      "symbolIcon.constructorForeground": `${colors.icons}`,
      "symbolIcon.enumeratorForeground": `${colors.icons}`,
      "symbolIcon.enumeratorMemberForeground": `${colors.icons}`,
      "symbolIcon.eventForeground": `${colors.icons}`,
      "symbolIcon.fieldForeground": `${colors.icons}`,
      "symbolIcon.fileForeground": `${colors.icons}`,
      "symbolIcon.folderForeground": `${colors.icons}`,
      "symbolIcon.functionForeground": `${colors.icons}`,
      "symbolIcon.interfaceForeground": `${colors.icons}`,
      "symbolIcon.keyForeground": `${colors.icons}`,
      "symbolIcon.keywordForeground": `${colors.icons}`,
      "symbolIcon.methodForeground": `${colors.icons}`,
      "symbolIcon.moduleForeground": `${colors.icons}`,
      "symbolIcon.namespaceForeground": `${colors.icons}`,
      "symbolIcon.nullForeground": `${colors.icons}`,
      "symbolIcon.numberForeground": `${colors.icons}`,
      "symbolIcon.objectForeground": `${colors.icons}`,
      "symbolIcon.operatorForeground": `${colors.icons}`,
      "symbolIcon.packageForeground": `${colors.icons}`,
      "symbolIcon.propertyForeground": `${colors.icons}`,
      "symbolIcon.referenceForeground": `${colors.icons}`,
      "symbolIcon.snippetForeground": `${colors.icons}`,
      "symbolIcon.stringForeground": `${colors.icons}`,
      "symbolIcon.structForeground": `${colors.icons}`,
      "symbolIcon.textForeground": `${colors.icons}`,
      "symbolIcon.typeParameterForeground": `${colors.icons}`,
      "symbolIcon.unitForeground": `${colors.icons}`,
      "symbolIcon.variableForeground": `${colors.icons}`,

      "ports.iconRunningProcessForeground": `${colors.runningProcess}`,

    },

    /* TODO: Enable semantic highlighting once settled on TextMate configuration. */
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
          "foreground": `${colors.syntax.light}`
        }
      },
      {
        "scope": [
          "constant.other.placeholder",
          "constant.character"
        ],
        "settings": {
          "foreground": `${colors.syntax.red}`
        }
      },
      {
        "scope": [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings": {
          "foreground": `${colors.syntax.cyan}`
        }
      },
      {
        "scope": [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        "settings": {
          "foreground": `${colors.syntax.default}`
        }
      },
      {
        "scope": "entity.name.function",
        "settings": {
          "foreground": `${colors.syntax.magenta}`
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings": {
          "foreground": `${colors.syntax.green}`
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": `${colors.syntax.red}`
        }
      },
      {
        "scope": [
          "storage",
          "storage.type"
        ],
        "settings": {
          "foreground": `${colors.syntax.red}`
        }
      },
      {
        "scope": [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings": {
          "foreground": `${colors.syntax.default}`
        }
      },
      {
        "scope": [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings": {
          "foreground": `${colors.syntax.deepBlue}`
        }
      },
      {
        "scope": "support",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "meta.property-name",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "variable",
        "settings": {
          "foreground": `${colors.syntax.cyan}`
        }
      },
      {
        "scope": "variable.other",
        "settings": {
          "foreground": `${colors.syntax.default}`
        }
      },
      {
        "scope": "invalid.broken",
        "settings": {
          "fontStyle": "italic",
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": "invalid.deprecated",
        "settings": {
          "fontStyle": "italic",
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": "invalid.illegal",
        "settings": {
          "fontStyle": "italic",
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": "invalid.unimplemented",
        "settings": {
          "fontStyle": "italic",
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": "carriage-return",
        "settings": {
          "fontStyle": "italic underline",
          "background": `${colors.syntax.red}`,
          "foreground": `${colors.syntax.veryLightNeutral}`,
          "content": "^M"
        }
      },
      {
        "scope": "message.error",
        "settings": {
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": "string variable",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": [
          "source.regexp",
          "string.regexp"
        ],
        "settings": {
          "foreground": `${colors.syntax.deepBlue}`
        }
      },
      {
        "scope": [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        "settings": {
          "foreground": `${colors.syntax.deepBlue}`
        }
      },
      {
        "scope": "string.regexp constant.character.escape",
        "settings": {
          "fontStyle": "bold",
          "foreground": `${colors.syntax.green}`
        }
      },
      {
        "scope": "support.constant",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "support.variable",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": `${colors.syntax.green}`
        }
      },
      {
        "scope": "meta.module-reference",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": `${colors.syntax.cyan}`
        }
      },
      {
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "markup.quote",
        "settings": {
          "foreground": `${colors.syntax.green}`
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic",
          "foreground": `${colors.syntax.default}`
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": `${colors.syntax.default}`
        }
      },
      {
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "markup.strikethrough"
        ],
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings": {
          "background": `${colors.syntax.veryLightRed}`,
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": `${colors.syntax.red}`
        }
      },
      {
        "scope": [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings": {
          "background": `${colors.syntax.veryLightGreen}`,
          "foreground": `${colors.syntax.green}`
        }
      },
      {
        "scope": [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings": {
          "background": `${colors.syntax.veryLightCyan}`,
          "foreground": `${colors.syntax.cyan}`
        }
      },
      {
        "scope": [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings": {
          "foreground": `${colors.syntax.veryLightBlue}`,
          "background": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "meta.diff.range",
        "settings": {
          "foreground": `${colors.syntax.magenta}`,
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "meta.separator",
        "settings": {
          "fontStyle": "bold",
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": "meta.output",
        "settings": {
          "foreground": `${colors.syntax.blue}`
        }
      },
      {
        "scope": [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        "settings": {
          "foreground": `${colors.syntax.mid}`
        }
      },
      {
        "scope": "brackethighlighter.unmatched",
        "settings": {
          "foreground": `${colors.syntax.deepRed}`
        }
      },
      {
        "scope": [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": `${colors.syntax.deepBlue}`
        }
      }
    ]

  }

}

export default getTheme
