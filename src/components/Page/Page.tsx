import { ISbStoryData, StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { Power, Competition } from "sections";
import { powerProps, competitionProps } from "data";
import React from "react";

const Page = ({ blok }: { blok: ISbStoryData["content"] }) => {
  return (
    <div className='text-center mt-4' {...storyblokEditable(blok)}>
      {blok?.sections?.map(nestedBlok => {
        if (nestedBlok.component === "competition") {
          return (
            <React.Fragment key={`${nestedBlok._uid}`}>
              <Power {...powerProps} />
              <Competition {...competitionProps} blok={nestedBlok} />
            </React.Fragment>
          );
        }
        return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />;
      })}
    </div>
  );
};

export default Page;
