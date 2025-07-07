import { Fragment } from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import About from "../../components/about";
import Information from "../../components/information/information";
import WhyGreenHydrogen from "../../components/whyGreenHydrogen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

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
      </div>
    </Fragment>
  );
};

export default Home;
