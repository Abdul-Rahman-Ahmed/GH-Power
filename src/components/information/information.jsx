import { faBolt, faSolarPanel, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./information.scss";
const Information = () => {
  return (
    <div className="information white-text dark background cover">
      <h2 className="index">هل تعلم ان</h2>
      <div className="knows index">
        <div className="know">
          <div>
            <FontAwesomeIcon icon={faSun} className="icon" />
          </div>
          <h3>وقود بدون انبعاثات</h3>
          <p>
            يتم إنتاج الهيدروجين الأخضر باستخدام مصادر الطاقة المتجددة، مما يؤدي
            إلى عدم انبعاثات الكربون أثناء إنتاجه واستخدامه. فهو يوفر بديلاً
            نظيفًا ومستدامًا للوقود الأحفوري، مما يساعد على التخفيف من تغير
            المناخ.
          </p>
        </div>
        <div className="know">
          <div>
            <FontAwesomeIcon icon={faBolt} className="icon" />
          </div>
          <h3>حاملة طاقة متعددة الاستخدامات</h3>
          <p>
            يمكن استخدام الهيدروجين الأخضر في مجموعة متنوعة من التطبيقات، بما في
            ذلك تخزين الطاقة والنقل والعمليات الصناعية وتوليد الطاقة. إن تنوعها
            يجعلها عنصرا رئيسيا في التحول إلى اقتصاد منخفض الكربون.
          </p>
        </div>
        <div className="know">
          <div>
            <FontAwesomeIcon icon={faSolarPanel} className="icon" />
          </div>
          <h3>تكامل الطاقة المتجددة</h3>
          <p>
            يلعب الهيدروجين الأخضر دورًا حاسمًا في دمج مصادر الطاقة المتجددة في
            الشبكة من خلال توفير وسيلة لتخزين فائض الكهرباء المتجددة. فهو يتيح
            الاستخدام الأفضل لموارد الطاقة المتجددة المتقطعة، مما يساعد على
            استقرار الشبكة وتلبية الطلب على الطاقة حتى عندما يتقلب إنتاج الطاقة
            المتجددة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
