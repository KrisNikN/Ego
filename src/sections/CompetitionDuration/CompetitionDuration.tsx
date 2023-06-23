import * as S from "./elements";

export interface CompetitionDurationProps {
  text: string;
}

export const CompetitionDuration = ({ text, ...props }: CompetitionDurationProps) => {
  return <S.CompetitionDuration {...props}>{text}</S.CompetitionDuration>;
};
