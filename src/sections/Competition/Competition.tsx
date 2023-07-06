import { CompetitionТableProps, StatsLeadersProps, TopthreeProps } from "collections";
import * as S from "./elements";
import { CompetitionDurationProps } from "components";
import { StoryblokComponent } from "@storyblok/react";

export interface CompetitionProps {
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
interface MoreProps {
  blok: CompetitionDurationProps;
}

export const Competition = ({
  rankedUsers,
  statsLeadersProps,
  topthreeProps,
  competitionТableProps,
  blok,
  ...props
}: CompetitionProps & MoreProps) => {
  const statLeaders = rankedUsers.filter(user => user.leaderOfStat !== undefined);
  return (
    <S.CompetitionWraper {...props}>
      <StoryblokComponent blok={blok} />
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
