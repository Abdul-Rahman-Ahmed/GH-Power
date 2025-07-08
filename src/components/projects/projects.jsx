import { Link } from "react-router-dom";
import first from "../../assets/main/first.jpg";
import "./projects.scss";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

const Projects = () => {
  const projects = [
    { to: "#", title: "المشروع الاول", img: first },
    { to: "#", title: "المشروع الثاني", img: first },
    { to: "#", title: "المشروع الثالث", img: first },
    { to: "#", title: "المشروع الرابع", img: first },
    { to: "#", title: "المشروع الخامس", img: first },
  ];
  return (
    <div className="projects container color-background">
      <h2>المشروعات المميزة</h2>

      <div className="swiper-wrapper-container">
        <div className="swiper-button-prev"></div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={index} className="cards">
              <Link to={proj.to} className="card">
                <div className="img">
                  <img src={proj.img} alt="project" />
                </div>
                <div className="text">
                  <h3>{proj.title}</h3>
                  <div className="btn">للمزيد</div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default Projects;
