import { CompetitionТableProps, StatsLeadersProps, TopthreeProps } from "collections";
import * as S from "./elements";
import { CompetitionDurationProps } from "components";
import { StoryblokComponent } from "@storyblok/react";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<
    {
      leaderOfStat: string | undefined;
      username: string;
      leadingStatNumber: number;
      score: number;
      matches: number;
      rank: number;
    }[]
  >([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/users?data=users");
        console.log(response.data);
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching users:", error);
      }
    };

    fetchData();
  }, []);

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
