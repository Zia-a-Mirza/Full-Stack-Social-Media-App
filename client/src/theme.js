export const colorTokens = {
  gray: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0f0f0f",
    1000: "#000000",
  },
  primary: {
    //Oranges
    50: "#ffb600",
    100: "#ffaa00",
    200: "#ff9e00",
    300: "#ff9100",
    400: "#ff8500",
    500: "#ff7900",
    600: "#ff6d00",
    700: "#ff6000",
    800: "#ff5400",
    900: "#ff4800",

    //Purples
    150: "#dec9e9",
    1100: "#dac3e8",
    1200: "#d2b7e5",
    1300: "#c19ee0",
    1400: "#b185db",
    1500: "#a06cd5",
    1600: "#9163cb",
    1700: "#815ac0",
    1800: "#7251b5",
    1900: "#6247aa",

    //Gradients
    2000: "#FF4E00",
    2100: "#f0cb81",
    2200: "#5721df",
  },
};

//Theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            //Colors for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[800],
            },
            neutral: {
              dark: colorTokens.gray[100],
              main: colorTokens.gray[200],
              mediumMain: colorTokens.gray[300],
              medium: colorTokens.gray[400],
              light: colorTokens.gray[700],
            },
            background: {
              default: colorTokens.gray[900],
              alt: colorTokens.gray[800],
            },
            gradient: {
              logoLeft: colorTokens.primary[2000],
              logoRight: colorTokens.primary[2100],
              sunsetLeft: colorTokens.primary[500],
              sunsetRight: colorTokens.primary[2200],
            },
          }
        : {
            //Colors for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.gray[700],
              main: colorTokens.gray[500],
              mediumMain: colorTokens.gray[400],
              medium: colorTokens.gray[300],
              light: colorTokens.gray[50],
            },
            background: {
              default: colorTokens.gray[10],
              alt: colorTokens.gray[0],
            },
            gradient: {
              logoLeft: colorTokens.primary[2000],
              logoRight: colorTokens.primary[50],
              sunsetLeft: colorTokens.primary[500],
              sunsetRight: colorTokens.primary[2200],
            },
          }),
    },
    typography: {
      fontFamily: ["Lora", "serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Lora", "serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Lora", "serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Lora", "serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Lora", "serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Lora", "serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Lora", "serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
