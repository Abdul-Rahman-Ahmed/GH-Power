import { Link } from "react-router-dom";
import "./slideCards.scss";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

const Projects = ({ data, heading }) => {
  return (
    <div className="projects container color-background">
      <h2>{heading}</h2>

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
          {data.map((proj, index) => (
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
