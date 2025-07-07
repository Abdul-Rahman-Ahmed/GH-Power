import "./sign.scss";
import SignContent from "../../components/signPage/signContent";
import SignForm from "../../components/signPage/signForm";

const SignPage = () => {
  return (
    <div className="page-container">
      <div className="sign-page">
        <SignContent />
        <SignForm />
      </div>
    </div>
  );
};

export default SignPage;
