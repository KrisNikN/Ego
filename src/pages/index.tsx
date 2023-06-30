import { NextPage } from "next";
import { Hero, Power, CompetitionDuration, Competition, HowItWorks, Discord } from "sections";
import {
  heroProps,
  powerProps,
  competitionDurationProps,
  competitionProps,
  howItWorksProps,
  discordProps
} from "data";

const Home: NextPage = () => {
  return (
    <>
      <Hero {...heroProps} />
      <Power {...powerProps} />
      <CompetitionDuration {...competitionDurationProps} />
      <Competition {...competitionProps} />
      <HowItWorks {...howItWorksProps} />
      <Discord {...discordProps} />
    </>
  );
};

export default Home;
