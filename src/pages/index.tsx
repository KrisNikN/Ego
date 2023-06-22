import { NextPage } from "next";
import { Hero } from "sections";
import { heroProps } from "data";

const Home: NextPage = () => {
  return (
    <>
      <Hero {...heroProps} />
    </>
  );
};

export default Home;
