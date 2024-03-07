import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FcPhone, FcReading } from "react-icons/fc";
import { deleteContacts } from "../../redux/operations";
import { FcFullTrash, FcServices } from "react-icons/fc";

export const Contact = ({ value }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={css.items}>
        <p className={css.nameItem}>
          <FcReading className={css.icons} />
          {value.name}
        </p>

        <p className={css.numberItem}>
          <FcPhone className={css.icons} />
          {value.number}
        </p>
        <button
          className={css.btn}
          onClick={""}
        >
          <FcServices />
        </button>
        <button
          className={css.btn}
          onClick={() => dispatch(deleteContacts(value.id))}
        >
          <FcFullTrash />
        </button>
      </li>
    </>
  );
};
