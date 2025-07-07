import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import Btn from "./btnSignToggle";

const SignForm = () => {
  const state = useSelector((state) => state.sign.signUp);

  const signInForm = (
    <form>
      <h1>تسجيل الدخول</h1>
      <div className="inp-container">
        <input type="email" placeholder="البريد الإلكترونى" />
      </div>
      <div className="inp-container">
        <input type="password" placeholder="كلمة المررو" />
      </div>
      <button>تسجيل الدخول</button>
      <div className="another-way">
        <p>هل تريد إنشاء حساب جديد ؟</p>
        <Btn />
      </div>
    </form>
  );

  const signUpForm = (
    <form>
      <h1>تسجيل الدخول</h1>
      <div className="inp-container">
        <input type="text" name="nam" id="name" placeholder="الإسم بالكامل" />
      </div>
      <div className="inp-container">
        <input type="email" placeholder="البريد الإلكترونى" />
      </div>
      <div className="inp-container">
        <input type="password" placeholder="كلمة المررو" />
      </div>
      <div className="inp-container">
        <input type="password" placeholder="تأكيد كلمة المرور" />
      </div>
      <button>تسجيل الدخول</button>
      <div className="another-way">
        <p>هل تملك حساب بالفعل ؟</p>
        <Btn />
      </div>
    </form>
  );

  return (
    <div className={!state ? "sign transform-right" : "sign"}>
      <div className="form-holder">
        {state ? signUpForm : signInForm}
        <div className="links">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faGoogle} className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default SignForm;
