import * as S from "./elements";

export const BlockCard = () => {
  return (
    <S.BlockCard>
      <S.ImageContainer>
        <S.Image src='/imgs/Icons/TrophieIcon.png' width={55} height={44} layout='intrinsic' />
      </S.ImageContainer>
      <S.Title>1 - Compete</S.Title>
      <S.Paragraph>
        Join Competitions or create your own. Invite friends to compete when it begins.
      </S.Paragraph>
    </S.BlockCard>
  );
};
