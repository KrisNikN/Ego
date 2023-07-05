import {
  ISbStoryData,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';

const Page = ({ blok }: { blok: ISbStoryData['content'] }) => {
  // console.log(blok);
  return (
    <div className='text-center mt-4' {...storyblokEditable(blok)}>
      {blok?.sections?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
export default Page;
