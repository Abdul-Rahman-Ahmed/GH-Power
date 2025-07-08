import { Link } from "react-router-dom";
import "./explore.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Explore = () => {
  return (
    <div className="explore color-background">
      <h2 className="content">اكتشف معنا</h2>
      <div className="sections">
        <Link to="/ar/organizations" className="section background dark">
          <div className="text index">
            <h3>مؤسسات</h3>
            <p>تعرف علي ابرز مؤسسات الهيدروجين الاخضر</p>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </div>
        </Link>
        <Link to="/ar/projects" className="section background dark">
          <div className="text index">
            <h3>مشروعات</h3>
            <p>تعرف علي ابرز مشروعات الهيدروجين الاخضر</p>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </div>
        </Link>
        <Link to="/ar/conferences" className="section background dark">
          <div className="text index">
            <h3>المؤتمرات</h3>
            <p>تعرف علي ابرز مؤتمرات الهيدروجين الاخضر</p>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </div>
        </Link>
        <Link
          to="/ar/information-resources"
          className="section background dark"
        >
          <div className="text index">
            <h3>إنتاج فكري</h3>
            <p>تعرف علي ابرز الانتاج الفكري عن الهيدروجين الاخضر</p>
            <FontAwesomeIcon icon={faArrowLeft} className="icon" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Explore;
