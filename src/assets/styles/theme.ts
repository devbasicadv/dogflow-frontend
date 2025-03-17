import { createTheme } from "@mui/material/styles";

const $primaryColor = "#004a79";
const $primaryColorHover = "#045e97";
const $secondaryColor = "#ffffff";
const $errorColor = "#d32f2f";
const $backgroundColor = "#F4F4F4";
const $textColorPrimary = "#333333";
const $textColorSecondary = "#888888";

const theme = createTheme({
  palette: {
    primary: {
      main: $primaryColor,
      dark: $primaryColorHover,
      contrastText: $secondaryColor,
    },
    secondary: {
      main: $secondaryColor,
      contrastText: $primaryColor,
    },
    error: {
      main: $errorColor,
      contrastText: $secondaryColor,
    },
    background: {
      default: $backgroundColor,
    },
    text: {
      primary: $textColorPrimary,
      secondary: $textColorSecondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "1rem",
          transition: "all 0.3s ease-in-out",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: $primaryColorHover,
          },
        },
        outlinedError: {
          "&:hover": {
            backgroundColor: $errorColor,
            color: $secondaryColor,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          "&.Mui-disabled::before": {
            borderBottom: "0.8px solid !important",
            cursor: "not-allowed",
          },
        },
      },
    },
  },
});

export default theme;
