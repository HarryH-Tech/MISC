import type { AppProps } from "next/app";
import { globalStyles } from "../styles/Globals";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
