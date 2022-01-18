import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../theme/theme";
import AppLayout from "../components/layout/AppLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default MyApp;
