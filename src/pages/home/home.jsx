import { Fragment } from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import About from "../../components/about/about";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <div className="contents">
        <About />
      </div>
    </Fragment>
  );
};

export default Home;
