import "./footer.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Links from "../links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="main container">
        <div className="info">
          <Link to="/">
            <img src={logo} className="logo" alt="code" />
          </Link>
          <p>لقد حان الوقت للانتقال الى الطاقة الخضراء لضمان غد افضل</p>
        </div>
        <Links />
        <ul className="follow-us">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61559090888098&mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/ghpower2024?igsh=MTdyMDZ3d2ttYnkyMA=="
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </li>
          <li>
            <Link>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
        </ul>
      </div>
      <div className="copy-right">&copy;2025 GH Power</div>
    </footer>
  );
};

export default Footer;
