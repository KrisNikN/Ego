import * as S from "./elements";

export interface StatsleadersProps {
  title: string;

  logoImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface UsersProps {
  users: {
    leaderOfStat: string | undefined;
    username: string;
    leadingStatNumber: number;
    score: number;
    matches: number;
    rank: number;
  }[];
}

export const Statsleaders = ({
  title,
  users,
  logoImage,
  ...props
}: StatsleadersProps & UsersProps) => {
  return (
    <S.StatsLeaders {...props}>
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
