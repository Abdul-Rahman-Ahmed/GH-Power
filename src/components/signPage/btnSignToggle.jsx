import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../store/sign";

const Btn = () => {
  const state = useSelector((state) => state.sign.signUp);
  const dispatch = useDispatch();
  const toggleHandle = () => {
    dispatch(toggle());
  };
  return <a onClick={toggleHandle}>{state ? "تسجيل الدخول" : "إنشاء حساب"}</a>;
};

export default Btn;
