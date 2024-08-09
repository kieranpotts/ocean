import chroma from 'chroma-js'
import tokens from './tokens.json' assert { type: "json" }

const getColors = ({ theme }) => {

  switch(theme) {

    case 'vs': // light
      return {
        /* https://code.visualstudio.com/api/ux-guidelines/overview */
        "transparent": tokens.color.transparent,
        "global": {
          "accessibility": {
            "focusBorder": tokens.color.transparent,
            "contrastBorder": tokens.color.transparent,
          },
          "defaults": {
            "text": tokens.color.neutral[700],
            "lightText": tokens.color.neutral[500],
            "icons": tokens.color.neutral[500],
            "errorText": tokens.color.red[500],
          }
        },
        "chrome": {
          "text": tokens.color.neutral[700],
          "selectedTextBackground": chroma(tokens.color.neutral[400]).alpha(0.5).hex(),
          "icons": tokens.color.neutral[500],
          "background": tokens.color.neutral[200],
          "border": tokens.color.neutral[300],
          "debuggingModeBackground": tokens.color.yellow[500],
          "prominentItemBackground": tokens.color.neutral[300],
          "selectedTab": {
            "border": tokens.color.neutral[500],
            "background": tokens.color.transparent,
          },
          "onHoverFocusItem": {
            "background": chroma(tokens.color.neutral[500]).alpha(0.15).hex(),
            "border": tokens.color.transparent,
          },
          "remoteConnection": {
            "background": tokens.color.blue[500],
            "foreground": tokens.color.neutral[200],
          }
        },
        "editor": {
          "selectedTextBackground": chroma(tokens.color.neutral[400]).alpha(0.5).hex(),
          "highlightedTextBackground": chroma(tokens.color.neutral[400]).alpha(0.15).hex(),
        },
        "terminal": {

        },
        // "components": { // "Elements" in VS Code's UX Guidelines
        //   "commandPalette": {},
        //   "quickPick": {},
        //   "notifications": {},
        //   "webViews": {},
        //   "contextMenus": {},
        //   "walkthroughs": {},
        //   "settings": {},
        // },
        "elements": { // "Items" in VS Code's UX Guidelines
          "badge": {
            background: tokens.color.blue[500],
            foreground: tokens.color.neutral[100],
          },
          "treeView": {},
          "welcomeView": {},
          "viewToolbar": {},
          "sidebarToolbar": {},
          "editorToolbar": {},
          "panelToolbar": {},
          "statusBarItems": {},
        },
      }

    case 'vs-dark':
      return {
        "focusBorder": tokens.color.transparent,
      }

    default:
      throw new Error("Invalid theme")

  }

}

export default getColors
