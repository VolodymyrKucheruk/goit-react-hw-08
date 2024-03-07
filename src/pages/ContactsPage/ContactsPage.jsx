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

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <div className={css.deviceHeader}>
        <div className={css.deviceSensors}></div>
      </div>

      <h1 className={css.title}>
        Phoneboock
        <FcContacts className={css.bookItem} />
      </h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
};
export default ContactsPage;
