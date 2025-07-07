import second from "../assets/main/second.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="about container flex color-background"
      role="region"
      aria-label="عن جي إتش باور"
    >
      <div className="content">
        <p className="before-heading">- من نحن -</p>
        <h2>مرحبا بكم في جي إتش باور</h2>
        <p className="paragraph">
          حيث نسلط الضوء على الهيدروجين الأخضر وإمكاناته ونشارك تحركات العالم
          تجاهه.
        </p>
        <p>
          يعد موقعنا الإلكتروني بمثابة منصة شاملة مخصصة لتعزيز الوعي والتعليم
          واعتماد الهيدروجين الأخضر كحل للطاقة النظيفة والمستدامة. نحن نهدف إلى
          إلهام الأفراد والشركات والحكومات لتبني تكنولوجيا الهيدروجين الأخضر من
          أجل مستقبل أكثر صداقة للبيئة وقابلية للحياة اقتصاديًا، ومن خلال
          التزامنا الثابت بالتعليم والدعوة والتعاون والابتكار، نحن ملتزمون
          بتعزيز التحول إلى الطاقة المستدامة. المستقبل مدعوم بالهيدروجين الأخضر.
        </p>
        <Link to="/ar/about-us" className="btn">
          للمزيد
        </Link>
      </div>
      <div className="img">
        <img src={second} alt="الهيدروجين الأخضر والطاقة المستدامة" />
      </div>
    </div>
  );
};

export default About;
