import { NextPage } from "next";
import { Hero, Power, Competition, HowItWorks, Discord } from "sections";
import { heroProps, powerProps, competitionProps, howItWorksProps, discordProps } from "data";
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokEditable,
  StoryblokComponent,
  useStoryblokState,
  ISbStoryData
} from "@storyblok/react";

interface HomeProps {
  story: ISbStoryData<{ Body: any[] }> | null;
}

const Home: NextPage<HomeProps> = ({ story }) => {
  console.log(story);
  return (
    <>
      <Hero {...heroProps} />
      <Power {...powerProps} />
      <Competition {...competitionProps} />
      <HowItWorks {...howItWorksProps} />
      <Discord {...discordProps} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";

  // load the draft version
  let sbParams: ISbStoriesParams = {
    version: "draft" // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  // console.log('getStaticProps executed');
  return {
    props: {
      story: data ? data.story : false
    },
    revalidate: 3600 // revalidate every hour
  };
}
