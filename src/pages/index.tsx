import { NextPage } from "next";
import { Hero, Power, CompetitionDuration } from "sections";
import { heroProps, powerProps, competitionDurationProps } from "data";

const Home: NextPage = () => {
  return (
    <>
      <Hero {...heroProps} />
      <Power {...powerProps} />
      <CompetitionDuration {...competitionDurationProps} />
    </>
  );
};

export default Home;
