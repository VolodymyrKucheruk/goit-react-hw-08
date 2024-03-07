import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";
import DocumentTitle from "../../components/DocumentTitle.jsx";

const RegisterPage = () => {
  return (
    <div>
      <DocumentTitle>Register</DocumentTitle>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
