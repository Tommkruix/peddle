import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      100: "hsl(231, 11%, 63%)", // Cool gray
      200: "hsl(229, 24%, 87%)", // Light gray
      300: "hsl(217, 100%, 97%)", // Magnolia gray
      400: "hsl(231, 100%, 99%)", // Alabaster gray
    },
    blue: {
      100: "hsl(213, 96%, 18%)", // Marine blue
      200: "hsl(243, 100%, 62%)", // Purplish blue
      300: "hsl(228, 100%, 84%)", // Pastel blue
      400: "hsl(206, 94%, 87%)", // Light blue
    },
    red: {
      100: "hsl(354, 84%, 57%)", // Strawberry red
    },
  },
});

export default theme;
