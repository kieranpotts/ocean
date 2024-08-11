import chroma from 'chroma-js'
import tokens from './tokens.json' assert { type: "json" }

const getColors = ({ theme }) => {

  switch(theme) {

    case 'vs': // light
      return {
        transparent: tokens.color.transparent,

        text: tokens.color.neutral[700],
        lightText: tokens.color.neutral[400],
        icons: tokens.color.neutral[500],
        errorText: tokens.color.red[500],
        warningText: tokens.color.yellow[800],
        hyperlinks: tokens.color.blue[500],
        progressBar: tokens.color.blue[700],

        selectionBackground: chroma(tokens.color.neutral[500]).alpha(0.15).hex(),
        matchesBackground: chroma(tokens.color.neutral[500]).alpha(0.15).hex(),
        otherMatchesBackground: chroma(tokens.color.neutral[500]).alpha(0.05).hex(),
        hoverFocusBackground: chroma(tokens.color.neutral[500]).alpha(0.1).hex(),

        addedTextBackground: chroma(tokens.color.green[600]).alpha(0.2).hex(),
        modifiedTextBackground: chroma(tokens.color.blue[600]).alpha(0.2).hex(),
        deletedTextBackground: chroma(tokens.color.red[600]).alpha(0.2).hex(),

        workbench: {
          background: tokens.color.neutral[200],
          highlightBackground: tokens.color.neutral[300],
          debuggingBackground: tokens.color.yellow[500],
          border: tokens.color.neutral[300],
          separator: tokens.color.neutral[250],
        },

        editor: {
          background: tokens.color.neutral[100],
          border: tokens.color.neutral[250],
          guides: tokens.color.neutral[250],
          breakpoint: tokens.color.red[500],

          scrollbar: chroma(tokens.color.neutral[400]).alpha(0.5).hex(),
          minimap: chroma(tokens.color.neutral[400]).alpha(0.25).hex(),
        },

        terminal: {
          background: tokens.color.neutral[700],
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

          selectionBackground: chroma(tokens.color.neutral[500]).alpha(0.85).hex(),
          matchesBackground: chroma(tokens.color.neutral[500]).alpha(0.85).hex(),
          otherMatchesBackground: chroma(tokens.color.neutral[500]).alpha(0.95).hex(),
        },

        /* "Items" in VS Code's UX Guidelines: */
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
          foreground: tokens.color.neutral[700],
        },

      }

    case 'vs-dark':
      throw new Error("Invalid theme")

    default:
      throw new Error("Invalid theme")

  }

}

export default getColors
