import { NextPage } from "next";
import {
  getStoryblokApi,
  ISbStoriesParams,
  storyblokEditable,
  StoryblokComponent,
  useStoryblokState,
  ISbStoryData
} from "@storyblok/react";

interface HomeProps {
  story: ISbStoryData<{ sections: any[] }> | null;
}

const Home: NextPage<HomeProps> = ({ story }) => {
  const _story = useStoryblokState(story);
  return (
    <>
      {/* <Hero {...heroProps} />
      <Power {...powerProps} />
      <Competition {...competitionProps} />
      <HowItWorks {...howItWorksProps} />
      <Discord {...discordProps} /> */}
      {_story && <StoryblokComponent blok={_story.content} />}
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
