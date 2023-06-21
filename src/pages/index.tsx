import { NextPage } from "next";
import {} from "sections";
import { SearchInput, Link } from "components";

const Home: NextPage = () => {
  return (
    <>
      <SearchInput placeholder='Search...' />
      <Link href='/'>Terms and Policies</Link>
    </>
  );
};

export default Home;
