import css from "./ContactsPage.module.css";
import { FcContacts } from "react-icons/fc";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations.js";
import { selectIsLoading, selectError } from "../../redux/selectors";
import { Loader } from "../../components/Loader/Loader.jsx";
import DocumentTitle from "../../components/DocumentTitle";
import { motion } from "framer-motion";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <motion.div
      style={{ height: "100%"}}
      initial={{ opacity: 0, y: -600 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2}}
    >
      <DocumentTitle>Your Contacts</DocumentTitle>
      <div className={css.deviceHeader}>
        <div className={css.deviceSensors}></div>
      </div>
      <div className={css.wrapper}>
        <h1 className={css.title}>
          Phoneboock
          <FcContacts size={75} />
        </h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <Loader />}
        <ContactList />
      </div>
    </motion.div>
  );
};
export default ContactsPage;
