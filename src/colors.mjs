import chroma from 'chroma-js'
import tokens from './tokens.json' assert { type: "json" }

const getColors = ({ theme }) => {

  switch(theme) {

    case 'vs': // light
      return {
        /* https://code.visualstudio.com/api/ux-guidelines/overview */
        "global": {
          "border": {
            "focus": tokens.color.transparent,
            "contrast": tokens.color.transparent,
          },
          "text": {
            "foreground": {
              "default": tokens.color.black,
              "light": tokens.color.neutral[500],
              "error": tokens.color.red[500],
            },
            "background": {
              "selected": chroma(tokens.color.neutral[400]).alpha(0.5).hex(),
            }
          },
        },
        "containers": {
          "activityBar": {
            "background": tokens.color.blue[700],
            "border": tokens.color.transparent,
            "foreground": tokens.color.blue[400],
            "selectedTab": {
              "background": chroma(tokens.color.blue[500]).alpha(0.25).hex(),
              "border": tokens.color.blue[300],
              "foreground": tokens.color.blue[200],
            },
          },
          "sideBarTabs": {
            "background": tokens.color.neutral[200],
            "border": tokens.color.neutral[300],
            "foreground": tokens.color.neutral[700],
            "selectedTab": {
              "background": tokens.color.transparent,
              "border": tokens.color.neutral[700],
              "foreground": tokens.color.neutral[700],
            },
          },
          "sideBar": {
            "background": tokens.color.neutral[200],
            "border": tokens.color.neutral[300],
            "foreground": tokens.color.neutral[700],
          },
          "panel": {
            "background": tokens.color.neutral[200],
            "border": tokens.color.neutral[300],
            "foreground": tokens.color.neutral[700],
          },
          "editor": {},
          "statusBar": {
            "background": tokens.color.neutral[200],
            "border": tokens.color.neutral[300],
            "foreground": tokens.color.neutral[700],
          },
          "menuBar": {
            "background": tokens.color.blue[700],
            "border": chroma(tokens.color.blue[500]).alpha(0.25).hex(),
            "foreground": tokens.color.blue[200],
            "hoverFocusItem": {
              "background": chroma(tokens.color.blue[500]).alpha(0.25).hex(),
              "border": tokens.color.transparent,
              "foreground": tokens.color.blue[200],
            }
          },
        },
        "components": { // "Elements" in VS Code's UX Guidelines
          "commandPalette": {},
          "quickPick": {},
          "notifications": {},
          "webViews": {},
          "contextMenus": {},
          "walkthroughs": {},
          "settings": {},
        },
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
