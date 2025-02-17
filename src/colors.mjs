import chroma from 'chroma-js'
import tokens from './tokens.json' assert { type: "json" }

const getColors = ({ theme }) => {

  switch(theme) {

    case 'vs': // light
      return {
        /* Transparent color - this MUST NOT change between themes. */
        transparent: tokens.color.transparent,

        /* Replacement color - use this to highlight bits of the UI temporarily. */
        replacement: tokens.color.replacement,

        text: tokens.color.neutral[700],
        lightText: tokens.color.neutral[400],
        icons: tokens.color.neutral[500],
        errorText: tokens.color.red[500],
        successText: tokens.color.green[500],
        warningText: tokens.color.yellow[800],
        hyperlinks: tokens.color.blue[500],
        runningProcess: tokens.color.green[700],

        alpha: {
          highlightBackground: chroma(tokens.color.neutral[500]).alpha(0.25).hex(),
          errorBackground: chroma(tokens.color.neutral[500]).alpha(0.25).hex(),
          selectionBackground: chroma(tokens.color.neutral[500]).alpha(0.15).hex(),
          matchesBackground: chroma(tokens.color.neutral[500]).alpha(0.15).hex(),
          otherMatchesBackground: chroma(tokens.color.neutral[500]).alpha(0.05).hex(),
          hoverFocusBackground: chroma(tokens.color.neutral[500]).alpha(0.1).hex(),

          addedTextBackground: chroma(tokens.color.green[600]).alpha(0.2).hex(),
          deletedTextBackground: chroma(tokens.color.red[600]).alpha(0.2).hex(),
        },

        workbench: {
          background: tokens.color.neutral[200],
          debuggingBackground: tokens.color.yellow[500],
          border: tokens.color.neutral[300],
          separator: tokens.color.neutral[250],
        },

        editor: {
          background: tokens.color.neutral[100],

          /* breakout = peek view and other insertions within the editor view,
          background should be midway between workbench and editor colors. */
          breakoutBackground: tokens.color.neutral[150],
          border: tokens.color.neutral[250],
          guides: tokens.color.neutral[250],
          breakpoint: tokens.color.red[500],
          scrollbar: chroma(tokens.color.neutral[400]).alpha(0.25).hex(),
          minimap: chroma(tokens.color.neutral[400]).alpha(0.25).hex(),
        },

        chat: {
          command: {
            background: tokens.color.blue[200] ,
            foreground: tokens.color.blue[700],
          }
        },

        terminal: {
          background: tokens.color.neutral[700],
          selectionBackground: tokens.color.neutral[650], /* Cannot be transparent */
          border: tokens.color.neutral[600],
          foreground: tokens.color.neutral[300],

          ansiBlack: tokens.color.neutral[700],
          ansiBlue: tokens.color.blue[500],
          ansiCyan: tokens.color.cyan[500],
          ansiGreen: tokens.color.green[500],
          ansiMagenta: tokens.color.magenta[500],
          ansiRed: tokens.color.red[500],
          ansiWhite: tokens.color.neutral[300],
          ansiYellow: tokens.color.yellow[500],
          ansiBrightBlack: tokens.color.neutral[500],
          ansiBrightBlue: tokens.color.blue[300],
          ansiBrightCyan: tokens.color.cyan[300],
          ansiBrightGreen: tokens.color.green[300],
          ansiBrightMagenta: tokens.color.magenta[300],
          ansiBrightRed: tokens.color.red[300],
          ansiBrightWhite: tokens.color.neutral[300],
          ansiBrightYellow: tokens.color.yellow[300],

          alpha: {
            matchesBackground: chroma(tokens.color.neutral[500]).alpha(0.85).hex(),
            otherMatchesBackground: chroma(tokens.color.neutral[500]).alpha(0.95).hex(),
          },
        },

        badge: {
          background: tokens.color.neutral[500],
          foreground: tokens.color.neutral[100],
        },

        button: {
          primary: {
            background: tokens.color.neutral[700],
            foreground: tokens.color.neutral[100],
          },
          secondary: {
            background: tokens.color.neutral[400],
            foreground: tokens.color.neutral[100],
          },
        },

        inputs: {
          background: tokens.color.neutral[100],
          border: tokens.color.neutral[200],
          foreground: tokens.color.neutral[700],
        },

        syntax: {
          default: tokens.color.neutral[700],
          mid: tokens.color.neutral[500],
          light: tokens.color.neutral[400],
          veryLightNeutral: tokens.color.neutral[200],
          green: tokens.color.green[500],
          veryLightGreen: tokens.color.green[100],
          blue: tokens.color.blue[500],
          deepBlue: tokens.color.blue[800],
          veryLightBlue: tokens.color.blue[100],
          cyan: tokens.color.cyan[500],
          veryLightCyan: tokens.color.cyan[100],
          magenta: tokens.color.magenta[500],
          red: tokens.color.red[500],
          deepRed: tokens.color.red[700],
          veryLightRed: tokens.color.red[100],
        }

      }

    // TODO: Add more themes here.
    // case 'vs-dark':
    //   throw new Error("Invalid theme")

    default:
      throw new Error("Invalid theme")

  }

}

export default getColors
