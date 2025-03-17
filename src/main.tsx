import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/_global.scss";
import { ThemeProvider } from "@emotion/react";
import theme from "./assets/styles/theme.ts";
import { CssBaseline } from "@mui/material";
import { LoadingProvider } from "./hooks/useLoading.tsx";
import LoadingBackdrop from "./components/loadingBackdrop/LoadingBackdrop.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <LoadingProvider>
      <CssBaseline />
      <App />
      <LoadingBackdrop />
    </LoadingProvider>
  </ThemeProvider>
);
