import * as S from "./elements";

export interface UserProps {
  leaderOfStat: string | undefined;
  username: string;
  leadingStatNumber: number;
  score: number;
  matches: number;
  rank: number;
}

export interface TableCardProps {
  logoImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const TableCard = ({
  leaderOfStat,
  leadingStatNumber,
  matches,
  score,
  username,
  rank,
  logoImage,
  ...props
}: UserProps & TableCardProps) => {
  return (
    <S.Tablerow {...props}>
      <S.Tablecell>{rank}</S.Tablecell>
      <S.Tablecell>{username}</S.Tablecell>
      <S.Tablecell>{score}</S.Tablecell>
      <S.Tablecell>{matches}</S.Tablecell>
      <S.Tablecell>
        <S.Image src='/imgs/EgoLogo.png' width={46} height={46} layout='intrinsic' />
      </S.Tablecell>
    </S.Tablerow>
  );
};
