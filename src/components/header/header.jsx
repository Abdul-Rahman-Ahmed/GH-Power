import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../store/dropMenu";
import Links from "../links";

const Header = () => {
  const menuState = useSelector((state) => state.menu.menu);
  const dispatch = useDispatch();

  const menuHandler = () => {
    dispatch(toggleMenu());
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
      <ul className="nav-links">{<Links />}</ul>
      <div className="bars" onClick={menuHandler}>
        <FontAwesomeIcon icon={faBars} className="icon" />
      </div>

      <div className={`small-devices container ${menuState ? "" : "hidden"}`}>
        <div className="close" onClick={menuHandler}>
          <FontAwesomeIcon icon={faXmark} className="icon" />
        </div>
        <ul className="small container center-text">
          <Links />
        </ul>
      </div>
    </header>
  );
};

export default Header;
