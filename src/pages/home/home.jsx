import { Fragment } from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import About from "../../components/about";
import Information from "../../components/information/information";
import WhyGreenHydrogen from "../../components/whyGreenHydrogen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Explore from "../../components/explore/explore";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <div className="contents">
        <About />
        <Information />
        <WhyGreenHydrogen />
        <div className="qoute white-text dark background cover">
          <div className="center-text">
            "من الرؤية إلى الواقع: الهيدروجين الأخضر يدفعنا نحو مستقبل مدعوم
            بالطاقة النظيفة والمتجددة."
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>
        <Explore />
      </div>
    </Fragment>
  );
};

export default Home;
