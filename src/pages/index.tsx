import { NextPage } from "next";
import { Hero, Power, CompetitionDuration, Competition } from "sections";
import { heroProps, powerProps, competitionDurationProps, competitionProps } from "data";

const Home: NextPage = () => {
  return (
    <>
      <Hero {...heroProps} />
      <Power {...powerProps} />
      <CompetitionDuration {...competitionDurationProps} />
      <Competition {...competitionProps} />
    </>
  );
};

export default Home;
