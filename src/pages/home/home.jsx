import { Fragment } from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import About from "../../components/about";
import Information from "../../components/information/information";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <div className="contents">
        <About />
        <Information />
      </div>
    </Fragment>
  );
};

export default Home;
