import * as S from "./elements";
import { BlockCardProps } from "collections";

export interface HowItWorksProps {
  title: string;
  cards: BlockCardProps[];
}

export const HowItWorks = ({ cards, title, ...props }: HowItWorksProps) => {
  return (
    <S.HowItWorks {...props}>
      <S.Title>{title}</S.Title>
      <S.BlocksContainer>
        {cards.map(card => (
          <S.BlockCard {...card} />
        ))}
      </S.BlocksContainer>
    </S.HowItWorks>
  );
};
