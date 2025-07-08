import { Link } from "react-router-dom";
import "./follow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Follow = () => {
  return (
    <div className="follow white-text dark background cover">
      <div className="content index center-text">
        <h2>تابعنا</h2>
        <p>انضم إلينا في وسائل التواصل الاجتماعي وانتظرنا!</p>
        <ul className="links">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61559090888098&mibextid=abWKwL"
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
    </div>
  );
};

export default Follow;
