import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact white-text dark background cover">
      <div className="content index center-text">
        <h2>تواصل معنا</h2>
        <h3>
          هل لديك أسئلة أو ترغب في معرفة المزيد عن مبادراتنا للهيدروجين الأخضر؟
        </h3>
        <p>
          فريقنا موجود للإجابة على استفساراتك ومناقشة كيفية التعاون لتعزيز حلول
          الطاقة المستدامة.
        </p>
        <Link to="/ar/contact" className="btn">
          تواصل معانا
        </Link>
      </div>
    </div>
  );
};

export default Contact;
