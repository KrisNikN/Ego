import { SbBlokData, storyblokEditable } from "@storyblok/react";
import * as S from "./elements";
import { BlockCardProps } from "collections";

export interface HowItWorksProps {
  blok: ISbHowItWorks;
}

export interface ISbHowItWorks extends SbBlokData {
  title: string;
  cards: BlockCardProps[];
}

export const HowItWorks = ({ blok, ...props }: HowItWorksProps) => {
  return (
    <S.HowItWorks {...props} {...storyblokEditable(blok)}>
      <S.Title>{blok.title}</S.Title>
      <S.BlocksContainer>
        {blok.cards.map(card => (
          <S.BlockCard {...card} key={card.title} />
        ))}
      </S.BlocksContainer>
    </S.HowItWorks>
  );
};
