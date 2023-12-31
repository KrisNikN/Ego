import * as S from "./elements";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export interface DiscordProps {
  blok: ISbDiscord;
}

export interface ISbDiscord extends SbBlokData {
  paragraph: string;
  discordImage: {
    filename: string;
    alt: string;
  };
  discordLink: {
    url: string;
  };
}

export const Discord = ({ blok, ...props }: DiscordProps) => {
  return (
    <S.Container {...props}>
      <S.Discord {...storyblokEditable(blok)}>
        <S.Paragraph>{blok.paragraph}</S.Paragraph>
        <S.Link href={blok.discordLink.url} target='_blank' variant='discord'>
          <S.Image src={blok.discordImage.filename} width={32} height={36} layout='intrinsic' />
        </S.Link>
      </S.Discord>
    </S.Container>
  );
};
