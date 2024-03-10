import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";
import DocumentTitle from "../../components/DocumentTitle.jsx";
import { motion } from "framer-motion";

const RegisterPage = () => {
  return (
    <div>
      <div className={css.deviceHeader}></div>
      <DocumentTitle>Register</DocumentTitle>
      <div className={css.deviceHeader}></div>
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
        <RegistrationForm />
      </motion.div>
    </div>
  );
};

export default RegisterPage;
