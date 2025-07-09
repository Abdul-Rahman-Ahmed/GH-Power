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
import Follow from "../../components/follow/Follow";
import future from "../../assets/h2About/future.jpg";
import Footer from "../../components/footer/footer";

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
        <div className="flex container">
          <div className="img">
            <img src={future} alt="future" />
          </div>
          <div className="content">
            <p className="before-heading">- مستقبل الهيدروجين الأخضر -</p>
            <h2>مستقبل الهيدروجين الأخضر</h2>
            <p className="paragraph">
              عصر جديد من استدامة الطاقة والإشراف البيئي
            </p>
            <p>
              يستعد الهيدروجين الأخضر لإحداث ثورة في مشهد الطاقة لدينا، حيث يقدم
              حلاً مستدامًا لتحديات المناخ الملحة التي نواجهها. ومع استمرار
              ازدهار مصادر الطاقة المتجددة، سيزداد إنتاج الهيدروجين الأخضر، مما
              يؤدي إلى خفض التكاليف وتوسيع إمكانية الوصول إليه. ومن الصناعات
              التي تعمل على إزالة الكربون إلى تشغيل وسائل النقل الخالية من
              الانبعاثات، يحمل الهيدروجين الأخضر المفتاح لمستقبل أنظف وأكثر
              مرونة. ومع الابتكار المستمر والدعم العالمي المتزايد، فإن عصر
              الهيدروجين الأخضر يَعِد ببدء عصر جديد من استدامة الطاقة والإشراف
              البيئي.
            </p>
          </div>
        </div>
        <Contact />
        <SlideCards data={books} heading="ابرز الإنتاج الفكرى" />
        <Follow />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
