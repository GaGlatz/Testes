import { Header } from "../components/Header";
import { Player } from "../components/Player";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/global.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className={styles.app__wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
