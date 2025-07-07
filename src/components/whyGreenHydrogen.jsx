import third from "../assets/main/third.jpg";
import { Link } from "react-router-dom";

const WhyGreenHydrogen = () => {
  return (
    <div className="flex container color-background">
      <div className="img">
        <img src={third} alt="why" />
      </div>
      <div className="content">
        <p className="before-heading">- عن الهيدروجين الأخضر -</p>
        <h2>لماذا الهيدروجين الأخضر؟</h2>
        <p className="paragraph">تمكين مستقبل مستدام بالهيدروجين الأخضر</p>
        <p>
          مرحبًا بكم في قلب ثورة الهيدروجين الأخضر. في GH power، نحن ملتزمون
          بعرض الإمكانات التحويلية للهيدروجين الأخضر كحل طاقة نظيف ومتجدد ومتعدد
          الاستخدامات. وفي إطار البحث عن حلول الطاقة المستدامة، برز الهيدروجين
          الأخضر كمنارة للأمل. ومع وعده بالوقود الخالي من الانبعاثات والتطبيقات
          المتنوعة، يستعد الهيدروجين الأخضر لإحداث ثورة في الصناعات والنقل
          وأنظمة الطاقة في جميع أنحاء العالم. دعونا نتعمق في ماهية الهيدروجين
          الأخضر، وسبب أهميته، وقدرته على تشكيل مستقبل أنظف وأكثر اخضرارًا
          للأجيال القادمة.
        </p>
        <Link to="/ar/h2-about" className="btn">
          للمزيد
        </Link>
      </div>
    </div>
  );
};

export default WhyGreenHydrogen;
