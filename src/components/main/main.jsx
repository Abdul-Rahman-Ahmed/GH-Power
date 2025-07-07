import first from "../../assets/main/first.jpg";
import second from "../../assets/main/second.jpg";
import third from "../../assets/main/third.jpg";
import { Link } from "react-router-dom";
import "./main.scss";
import { useRef, useEffect, Fragment } from "react";

const Main = () => {
  let myarrow = useRef();
  let trans = useRef();
  let sections = useRef();
  let intervalRef = useRef(null);
  const bulletsRef = useRef([]);

  const dataSlides = [
    {
      imgSrc: first,
      text: (
        <h2>
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

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      const next = (trans.current / 100 + 1) % dataSlides.length;
      updateSlide(next);
    }, 10000);
  };

  const updateSlide = (index) => {
    clearInterval(intervalRef.current);
    trans.current = index * 100;
    myarrow.current.style.transform = `translateX(${trans.current}%)`;

    bulletsRef.current.forEach((el, i) =>
      el.classList.toggle("active", i === index)
    );

    startAutoSlide();
  };

  useEffect(() => {
    sections.current = document.querySelectorAll(
      ".projects .sections .section"
    );
    myarrow.current = document.querySelector(".main-section .content");
    trans.current = 0;

    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="main-section">
      <div className="content">
        {dataSlides.map((el, key) => {
          return (
            <div className="slide" key={key}>
              <div className="img">
                <img src={el.imgSrc} alt={el.imgSrc} />
              </div>
              <div className="text container center-text">{el.text}</div>
            </div>
          );
        })}
      </div>
      <div className="bullets">
        {[...Array(dataSlides.length)].map((ele, i) => (
          <div
            className={`bullet ${i === 0 ? "active" : ""}`}
            key={i}
            ref={(el) => (bulletsRef.current[i] = el)}
            onClick={() => updateSlide(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Main;
