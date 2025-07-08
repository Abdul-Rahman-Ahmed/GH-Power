import first from "../../assets/main/first.jpg";
import second from "../../assets/main/second.jpg";
import third from "../../assets/main/third.jpg";
import { Link } from "react-router-dom";
import "./main.scss";
import { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

const Main = () => {
  const dataSlides = [
    {
      imgSrc: first,
      text: (
        <h2 className="first-head">
          لقد حان الوقت للانتقال الى
          <span> الطاقة الخضراء </span>
          لضمان غد افضل
        </h2>
      ),
    },
    {
      imgSrc: second,
      text: (
        <Fragment>
          <h2>من نحن</h2>
          <p>
            يعد موقعنا الإلكتروني بمثابة منصة شاملة مخصصة لتعزيز الوعي والتعليم
            واعتماد الهيدروجين الأخضر كحل للطاقة النظيفة والمستدامة.
          </p>
          <Link to="/ar/h2-about" className="btn">
            للمزيد
          </Link>
        </Fragment>
      ),
    },
    {
      imgSrc: third,
      text: (
        <Fragment>
          <h2>لماذا الهيدروجين الاخضر</h2>
          <p>تمكين مستقبل مستدام بالهيدروجين الأخضر</p>
          <Link to="/ar/h2-about" className="btn">
            للمزيد
          </Link>
        </Fragment>
      ),
    },
  ];

  return (
    <div className="main-section swiper-wrapper-container">
      <div className="swiper-button-next"></div>
      <Swiper
        className="content"
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: ".swiper-button-next",
          nextEl: ".swiper-button-prev",
        }}
      >
        {dataSlides.map((el, key) => {
          return (
            <SwiperSlide className="slide" key={key}>
              <div className="img">
                <img src={el.imgSrc} alt="slider background" />
              </div>
              <div className="text container center-text">{el.text}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default Main;
