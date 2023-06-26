import * as S from "./elements";

export const Competition = () => {
  return (
    <S.Competition>
      <S.CompetitionColumn>
        <S.Topthree />
        <S.Statsleaders />
      </S.CompetitionColumn>
      <S.CompetitionColumn>
        <S.DetailsContainer>
          <S.Detail>Not in Competition</S.Detail>
          <S.Detail>Time remaining 02:30:50</S.Detail>
        </S.DetailsContainer>
      </S.CompetitionColumn>
    </S.Competition>
  );
};
