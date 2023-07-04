import { CompetitionТableProps, StatsLeadersProps, TopthreeProps } from "collections";
import * as S from "./elements";

export interface CompetitionProps {
  competitionDuration: string;
  rankedUsers: {
    leaderOfStat: string | undefined;
    username: string;
    leadingStatNumber: number;
    score: number;
    matches: number;
    rank: number;
  }[];
  statsLeadersProps: StatsLeadersProps;
  competitionТableProps: CompetitionТableProps;
  topthreeProps: TopthreeProps;
}

export const Competition = ({
  rankedUsers,
  statsLeadersProps,
  topthreeProps,
  competitionТableProps,
  competitionDuration,
  ...props
}: CompetitionProps) => {
  const statLeaders = rankedUsers.filter(user => user.leaderOfStat !== undefined);

  return (
    <S.CompetitionWraper {...props}>
      <S.CompetitionDuration>{competitionDuration}</S.CompetitionDuration>

      <S.Competition>
        <S.CompetitionColumn>
          <S.TopthreeDesktop rankedUsers={rankedUsers} {...topthreeProps} />
          <S.Statsleaders users={statLeaders} {...statsLeadersProps} />
        </S.CompetitionColumn>
        <S.CompetitionColumn>
          <S.DetailsContainer>
            <S.Detail>Not in Competition</S.Detail>
            <S.Detail>Time remaining 02:30:50</S.Detail>
          </S.DetailsContainer>
          <S.TopthreeMobile rankedUsers={rankedUsers} {...topthreeProps} />
          <S.CompetitionТable {...competitionТableProps} users={rankedUsers} />
        </S.CompetitionColumn>
      </S.Competition>
    </S.CompetitionWraper>
  );
};
