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
            "lightText": tokens.color.neutral[400],
            "icons": tokens.color.neutral[500],
            "errorText": tokens.color.red[500],
            "warningText": tokens.color.yellow[700],
            "hyperlinks": tokens.color.blue[500],
          }
        },
        "chrome": {
          "text": tokens.color.neutral[700],
          "lightText": tokens.color.neutral[400],
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
          },
          "remoteConnection": {
            "background": tokens.color.neutral[500],
            "foreground": tokens.color.neutral[200],
          },
        },
        "editor": {
          "background": tokens.color.neutral[100],
          "text": tokens.color.neutral[700],
          "comments": tokens.color.neutral[400],
          "selectedTextBackground": chroma(tokens.color.neutral[400]).alpha(0.3).hex(),
          "highlightedTextBackground": chroma(tokens.color.neutral[400]).alpha(0.15).hex(),
        },
        "terminal": {

        },
        "elements": { // "Items" in VS Code's UX Guidelines
          "badge": {
            background: tokens.color.neutral[500],
            foreground: tokens.color.neutral[100],
          },
          "inputs": {
            "background": tokens.color.neutral[100],
            "foreground": tokens.color.neutral[700],
            "placeholder": tokens.color.neutral[400],
            "selectedTextBackground": chroma(tokens.color.neutral[400]).alpha(0.3).hex(),
          },
          "button": {
            "primary": {
              "background": tokens.color.neutral[700],
              "foreground": tokens.color.neutral[100],
            },
            "secondary": {
              "background": tokens.color.neutral[400],
              "foreground": tokens.color.neutral[100],
            },
          },
        },
      }

    case 'vs-dark':
      throw new Error("Invalid theme")

    default:
      throw new Error("Invalid theme")

  }

}

export default getColors
