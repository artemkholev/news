import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Используем цвета из Tailwind-конфига
const theme = createTheme({
  palette: {
    primary: {
      main: "#3B82F6", // blue-6
      light: "#93C5FD", // blue-4
      dark: "#1E40AF", // blue-9
    },
    secondary: {
      main: "#EF4444", // red-6
    },
    background: {
      default: "#F5F5F5", // base-1
      paper: "#FFFFFF", // base-0
    },
    text: {
      primary: "#171717", // base-9
      secondary: "#737373", // base-5
    },
    error: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: "40px",
      lineHeight: "50px",
      "@media (max-width:640px)": {
        fontSize: "28px",
        lineHeight: "36px",
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      "@media (max-width:640px)": {
        fontSize: "22px",
        lineHeight: "30px",
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "28px",
      "@media (max-width:640px)": {
        fontSize: "18px",
        lineHeight: "26px",
      },
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      "@media (max-width:640px)": {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    caption: {
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "20px",
      "@media (max-width:640px)": {
        fontSize: "12px",
        lineHeight: "18px",
      },
    },
  },
});

export default theme;
