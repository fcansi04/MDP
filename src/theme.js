import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66D36E",
    },
    background: {
      paper: "#030303",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 460,
      xsl: 600,
      sm: 700,
      md: 925,
      lm: 1150,
      lg: 1200,
      xl: 1300,
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export default theme;
