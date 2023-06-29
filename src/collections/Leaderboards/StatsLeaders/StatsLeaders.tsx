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
      <S.Title>{title}</S.Title>
      {users.map(user => (
        <S.Row key={user.rank}>
          <S.Stat>{user.leaderOfStat}</S.Stat>
          <S.Info>
            <S.UsernameImage>
              <S.Image
                src={logoImage.src}
                width={logoImage.width}
                height={logoImage.height}
                layout='intrinsic'
                alt={logoImage.alt}
              />
              <S.UsernameStatInfo>
                {user.username}: {user.leadingStatNumber}
              </S.UsernameStatInfo>
            </S.UsernameImage>
            <S.Button>PROFILE</S.Button>
          </S.Info>
        </S.Row>
      ))}
    </S.StatsLeaders>
  );
};
