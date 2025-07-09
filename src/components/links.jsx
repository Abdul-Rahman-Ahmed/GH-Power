import { Link } from "react-router-dom";

const Links = () => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/" className="active">
          الرئيسية
        </Link>
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
    </ul>
  );
};

export default Links;
