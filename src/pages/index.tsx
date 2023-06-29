import { NextPage } from "next";
import { Hero, Power, CompetitionDuration, Competition, HowItWorks } from "sections";
import {
  heroProps,
  powerProps,
  competitionDurationProps,
  competitionProps,
  howItWorksProps
} from "data";

const Home: NextPage = () => {
  return (
    <>
      <Hero {...heroProps} />
      <Power {...powerProps} />
      <CompetitionDuration {...competitionDurationProps} />
      <Competition {...competitionProps} />
      <HowItWorks {...howItWorksProps} />
    </>
  );
};

export default Home;
