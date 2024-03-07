import css from "./ContactsPage.module.css";
import { FcContacts } from "react-icons/fc";
import { ContactList } from "../../components/ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { ContactForm } from "../ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import { selectIsLoading, selectError } from "../../redux/selectors";
import { Loader } from "../Loader/Loader";
import DocumentTitle from "../../components/DocumentTitle";

export const ContactsPage = () => {
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
        Phonebook
        <FcContacts className={css.bookItem} />
      </h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
};
