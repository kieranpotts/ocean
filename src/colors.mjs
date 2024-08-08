import tokens from './tokens.json' assert { type: "json" }

const getColors = ({ theme }) => {

  switch(theme) {

    case 'vs': // light
      return {
        "borders": {
          "focusBorder": tokens.color.transparent,
          "contrastBorder": tokens.color.transparent,
        },
        "text": {
          "foreground": {
            "default": tokens.color.black,
            "light": tokens.color.neutral[500],
            "error": tokens.color.red[500],
          },
          "background": {
            "selected": tokens.color.neutral[400],
          }
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
