import * as S from "./elements";

export const CompetitionPagination = () => {
  return (
    <>
      <S.CompetitionPagination>
        <S.ArrowButton>
          <S.Image src='/imgs/leftArrow.png' width={5} height={10} layout='intrinsic' alt='Arrow' />
        </S.ArrowButton>
      </S.CompetitionPagination>
    </>
  );
};
