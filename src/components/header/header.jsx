import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/dropMenu";

const Header = () => {
  const menuState = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleMenu());
  };
  const NavLinks = () => {
    return (
      <Fragment>
        <li>
          <Link to="/">الرئيسية</Link>
        </li>
        <li>
          <Link to="/ar/h2-about">عن الهيدروجين الاخضر</Link>
        </li>
        <li>
          <Link to="/ar/organizations">المؤسسات</Link>
        </li>
        <li>
          <Link to="/ar/conferences">المؤتمرات</Link>
        </li>
        <li>
          <Link to="/ar/projects">المشروعات</Link>
        </li>
        <li>
          <Link to="/ar/information-resources">الانتاج الفكري</Link>
        </li>
        <li>
          <Link to="/ar/about-us">عن الموقع</Link>
        </li>
        <li>
          <Link to="/ar/contact">تواصل معنا</Link>
        </li>
        <li>
          <Link to="/login" className="btn">
            تسجيل الدخول
          </Link>
        </li>
      </Fragment>
    );
  };

  return (
    <header
      className="container"
      role="navigation"
      aria-label="main navigation"
    >
      <Link to="/" className="logo">
        <img className="logo" src={logo} alt="GH-Power logo" />
      </Link>
      <ul className="nav-links">{<NavLinks />}</ul>
      <div className="bars" onClick={menuHandler}>
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>

      <div className={`small-devices container ${menuState ? "" : "hidden"}`}>
        <div className="close" onClick={menuHandler}>
          <FontAwesomeIcon icon={faXmark} className="icon" />
        </div>
        <ul className="small center-text">{<NavLinks />}</ul>
      </div>
    </header>
  );
};

export default Header;
