import DocumentTitle from "../../components/DocumentTitle";
import css from "./LoginPage.module.css";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { motion } from "framer-motion";

const LoginPage = () => {
  return (
    <>
      <div className={css.deviceHeader}></div>
      <DocumentTitle>Login</DocumentTitle>
      <motion.div
        className={css.wrapper}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 530,
          damping: 29,
        }}
      >
        <LoginForm />
      </motion.div>
    </>
  );
};
export default LoginPage;
