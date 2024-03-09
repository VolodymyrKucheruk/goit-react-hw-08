import css from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import { FcPhoneAndroid } from "react-icons/fc";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <div className={css.deviceHeader}>
        <div className={css.deviceSensors}></div>
      </div>
      <DocumentTitle>Home</DocumentTitle>
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
        <FcPhoneAndroid className={css.icon} size={150} />
        <h1 className={css.title}>
          This is a contacts application where you can conveniently store and
          manage your contacts.
        </h1>
      </motion.div>
    </>
  );
};

export default HomePage;
