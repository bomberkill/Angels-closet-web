import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { MantineProvider } from '@mantine/core';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { theme } from '../theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/angel-logo.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </MantineProvider>
  );
}
export default appWithTranslation(App);
