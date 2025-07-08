import { Fragment } from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import About from "../../components/about";
import Information from "../../components/information/information";
import WhyGreenHydrogen from "../../components/whyGreenHydrogen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Explore from "../../components/explore/explore";
import SlideCards from "../../components/sliderCards/slideCards";
import { Link } from "react-router-dom";
import Contact from "../../components/contact/contact";
import first from "../../assets/main/first.jpg";

const Home = () => {
  const projects = [
    { to: "#", title: "المشروع الاول", img: first },
    { to: "#", title: "المشروع الثاني", img: first },
    { to: "#", title: "المشروع الثالث", img: first },
    { to: "#", title: "المشروع الرابع", img: first },
    { to: "#", title: "المشروع الخامس", img: first },
  ];
  const books = [
    { to: "#", title: "الإنتاج الفكرى الاول", img: first },
    { to: "#", title: "الإنتاج الفكرى الثاني", img: first },
    { to: "#", title: "الإنتاج الفكرى الثالث", img: first },
    { to: "#", title: "الإنتاج الفكرى الرابع", img: first },
    { to: "#", title: "الإنتاج الفكرى الخامس", img: first },
  ];
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
        <SlideCards data={projects} heading="المشروعات المميزة" />
        <div className="comeingConference dark background cover">
          <div className="index center-text">
            <h2>المؤتمر القادم</h2>
            <h3>قمة الهيدروجين العالمي 2024</h3>
            <p>13 – 15 مايو 2024 – روتردام أهوي، روتردام، هولندا</p>
            <div className="counter">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <Link className="btn">للمزيد</Link>
          </div>
        </div>
        <SlideCards data={books} heading="ابرز الإنتاج الفكرى" />
        <Contact />
      </div>
    </Fragment>
  );
};

export default Home;
