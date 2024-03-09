import DocumentTitle from "../../components/DocumentTitle";
import css from "./LoginPage.module.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className={css.deviceHeader}></div>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </>
  );
};
export default LoginPage;
