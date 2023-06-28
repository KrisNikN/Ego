import * as S from "./elements";

export const HowItWorks = ({ ...props }) => {
  return (
    <S.HowItWorks {...props}>
      <S.Title>How it works</S.Title>
      <S.BlocksContainer>
        <S.BlockCard />
      </S.BlocksContainer>
    </S.HowItWorks>
  );
};
