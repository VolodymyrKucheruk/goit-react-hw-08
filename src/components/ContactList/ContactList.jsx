import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors.js";
import { selectFilter } from "../../redux/selectors.js";
import { motion } from "framer-motion";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.wrapper}>
      {filteredContacts.map((contact, index) => (
        <motion.div
          key={contact.id}
          className={css.item}
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ delay: index * 0.15, ease: "easeOut" }}
        >
          <Contact value={contact} />
        </motion.div>
      ))}
    </ul>
  );
};
