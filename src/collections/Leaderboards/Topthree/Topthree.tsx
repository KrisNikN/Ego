import * as S from "./elements";

export const Topthree = () => {
  return (
    <S.Topthree>
      <S.CompetitionName>{"{Competition Name}"}</S.CompetitionName>
      <S.ColumnsContainer>
        <S.Column>
          <S.Image
            src='/imgs/Trophies/silver.png'
            width={32}
            height={31.77}
            layout='intrinsic'
            alt='trophie'
          />
          <S.Pedestrial variant='silver'>
            <S.Number>2</S.Number>
          </S.Pedestrial>
          <S.Name variant='silver'>{"{username}"}</S.Name>
        </S.Column>
        <S.Column>
          <S.Image
            src='/imgs/Trophies/gold.png'
            width={32}
            height={31.77}
            layout='intrinsic'
            alt='trophie'
          />
          <S.Pedestrial variant='gold'>
            <S.Number>1</S.Number>
          </S.Pedestrial>
          <S.Name variant='gold'>{"{username}"}</S.Name>
        </S.Column>
        <S.Column>
          <S.Image
            src='/imgs/Trophies/bronze.png'
            width={32}
            height={31.77}
            layout='intrinsic'
            alt='trophie'
          />
          <S.Pedestrial variant='bronze'>
            <S.Number>3</S.Number>
          </S.Pedestrial>
          <S.Name variant='bronze'>{"{username}"}</S.Name>
        </S.Column>
      </S.ColumnsContainer>
    </S.Topthree>
  );
};
