import { CompetitiontableProps, StatsleadersProps, TopthreeProps } from "collections";
import * as S from "./elements";

export interface CompetitionProps {
  rankedUsers: {
    leaderOfStat: string | undefined;
    username: string;
    leadingStatNumber: number;
    score: number;
    matches: number;
    rank: number;
  }[];
  statsleadersProps: StatsleadersProps;
  competitiontableProps: CompetitiontableProps;
  topthreeProps: TopthreeProps;
}

export const Competition = ({
  rankedUsers,
  statsleadersProps,
  topthreeProps,
  competitiontableProps,
  ...props
}: CompetitionProps) => {
  const statLeaders = rankedUsers.filter(user => user.leaderOfStat !== undefined);

  return (
    <S.Competition {...props}>
      <S.CompetitionColumn>
        <S.Topthree rankedUsers={rankedUsers} {...topthreeProps} />
        <S.Statsleaders users={statLeaders} {...statsleadersProps} />
      </S.CompetitionColumn>
      <S.CompetitionColumn>
        <S.DetailsContainer>
          <S.Detail>Not in Competition</S.Detail>
          <S.Detail>Time remaining 02:30:50</S.Detail>
        </S.DetailsContainer>
        <S.Competitiontable {...competitiontableProps} users={rankedUsers} />
      </S.CompetitionColumn>
    </S.Competition>
  );
};
