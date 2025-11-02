import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout";
import "../firebase/clientApp";
import "../styles/globals.css";

import { insecureEvalTrigger } from "../temp_vulnerability";

function MyApp({ Component, pageProps }: AppProps) {

  if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
    insecureEvalTrigger();
  }

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default MyApp;
