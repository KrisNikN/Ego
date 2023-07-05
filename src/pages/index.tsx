import { NextPage } from "next";
import { Hero, Power, Competition, HowItWorks, Discord } from "sections";
import { heroProps, powerProps, competitionProps, howItWorksProps, discordProps } from "data";

const Home: NextPage = () => {
  return (
    <>
      <Hero {...heroProps} />
      <Power {...powerProps} />
      <Competition {...competitionProps} />
      <HowItWorks {...howItWorksProps} />
      <Discord {...discordProps} />
    </>
  );
};

export default Home;
