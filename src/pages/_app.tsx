import { useEffect } from "react";
import App, { AppProps, AppContext } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "styles";
import { Header, Footer } from "collections";
import TagManager from "react-gtm-module";
import { headerProps } from "data";
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
import { Hero, Power, Competition, HowItWorks, Discord } from "sections";
import { CompetitionDuration } from "components";
import { SessionProvider } from "next-auth/react";

const tagManagerArgs = {
  gtmId: "GTM-XXXXXXX"
};

const components = {
  page: Page,
  hero: Hero,
  competition: CompetitionDuration,
  howItWorks: HowItWorks,
  discord: Discord,
  footer: Footer
};

storyblokInit({
  accessToken: process.env.storyblokApiToken || "",
  use: [apiPlugin],
  components
});

interface MoreProps {
  footer: ISbStoryData<any> | null;
}

function MyApp({ Component, pageProps: { ...pageProps }, footer }: AppProps & MoreProps) {
  const _footer = useStoryblokState(footer);
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Ego</title>
        <meta name='description' content='app description goes here' />

        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      <SessionProvider>
        <Header {...headerProps} />
        <Component {...pageProps} />
        {_footer?.content && <StoryblokComponent blok={_footer.content} />}
      </SessionProvider>
    </ThemeProvider>
  );
}
MyApp.getInitialProps = async (appContext: AppContext) => {
  const storyblokApi = getStoryblokApi();

  const sbParams: ISbStoriesParams = {
    version: "draft"
  };

  const slug = "footer";
  const { data: data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  let appProps = {};
  if (typeof App.getInitialProps === "function") {
    appProps = await App.getInitialProps(appContext);
  }

  return {
    ...appProps,
    footer: data ? data.story : null
  };
};

export default MyApp;
