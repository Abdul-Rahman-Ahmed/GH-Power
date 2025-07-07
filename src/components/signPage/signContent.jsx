import logo from "../../assets/logo.png";
import { useSelector } from "react-redux";

const SignContent = () => {
  const state = useSelector((state) => state.sign.signUp);

  const signInContent = (
    <div className="text">
      مرحبًا بعودتك 👋 <br />
      نحن سعداء بعودتك. طاقتك تصنع الفرق!
    </div>
  );

  const signUpContent = (
    <div className="text">
      كن جزءًا من مستقبل الطاقة النظيفة.
      <br /> انضم إلينا وساهم في نشر المعرفة حول الهيدروجين الأخضر.
    </div>
  );

  return (
    <div className={!state ? "content transform-left" : "content"}>
      <div className="img">
        <img src={logo} alt="logo" />
      </div>
      {state ? signUpContent : signInContent}
    </div>
  );
};

export default SignContent;
