import * as S from "./elements";
import { SbBlokData, storyblokEditable } from "@storyblok/react";

export interface CompetitionDurationProps {
  blok: ISbCompetitionDuration;
}

interface ISbCompetitionDuration extends SbBlokData {
  title: string;
}

export const CompetitionDuration = ({ blok, ...props }: CompetitionDurationProps) => {
  return (
    <S.CompetitionDuration {...props} {...storyblokEditable(blok)}>
      {blok.title}
    </S.CompetitionDuration>
  );
};
