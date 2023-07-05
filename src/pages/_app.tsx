import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import TagManager from "react-gtm-module";
import { headerProps, footerProps } from "data";
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokInit,
  apiPlugin,
  StoryblokComponent,
  useStoryblokState,
  ISbStoryData
} from "@storyblok/react";
import Page from "components/Page/Page";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXXX"
};

const components = {
  page: Page
};

storyblokInit({
  accessToken: process.env.storyblokApiToken || "",
  use: [apiPlugin]
});

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  useEffect(() => {
    // TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ego</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <Header {...headerProps} />
      <Component {...pageProps} />
      <Footer {...footerProps} />
    </ThemeProvider>
  );
}

export default MyApp;
