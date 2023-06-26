import * as S from "./elements";

export const Statsleaders = () => {
  return (
    <S.StatsLeaders>
      <S.Title>Inidivual Stats Leaders</S.Title>
      <S.Row>
        <S.Stat>{"{Stat Name}"}</S.Stat>
        <S.Info>
          <S.UsernameImage>
            <S.Image src='/imgs/EgoLogo.png' width={46} height={46} layout='intrinsic' alt='Logo' />
            <S.UsernameStatInfo>{"{username}"}: 7</S.UsernameStatInfo>
          </S.UsernameImage>
          <S.Button>PROFILE</S.Button>
        </S.Info>
      </S.Row>
      <S.Row>
        <S.Stat>{"{Stat Name}"}</S.Stat>
        <S.Info>
          <S.UsernameImage>
            <S.Image src='/imgs/EgoLogo.png' width={46} height={46} layout='intrinsic' alt='Logo' />
            <S.UsernameStatInfo>{"{username}"}: 7</S.UsernameStatInfo>
          </S.UsernameImage>
          <S.Button>PROFILE</S.Button>
        </S.Info>
      </S.Row>
      <S.Row>
        <S.Stat>{"{Stat Name}"}</S.Stat>
        <S.Info>
          <S.UsernameImage>
            <S.Image src='/imgs/EgoLogo.png' width={46} height={46} layout='intrinsic' alt='Logo' />
            <S.UsernameStatInfo>{"{username}"}: 7</S.UsernameStatInfo>
          </S.UsernameImage>
          <S.Button>PROFILE</S.Button>
        </S.Info>
      </S.Row>
      <S.Row>
        <S.Stat>{"{Stat Name}"}</S.Stat>
        <S.Info>
          <S.UsernameImage>
            <S.Image src='/imgs/EgoLogo.png' width={46} height={46} layout='intrinsic' alt='Logo' />
            <S.UsernameStatInfo>{"{username}"}: 7</S.UsernameStatInfo>
          </S.UsernameImage>
          <S.Button>PROFILE</S.Button>
        </S.Info>
      </S.Row>
    </S.StatsLeaders>
  );
};
