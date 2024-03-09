import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { FcSearch } from "react-icons/fc";
import { changeFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/selectors.js";
import { selectFilter } from "../../redux/selectors.js";

export const SearchBox = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const onFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  
  const filteredContactsCount = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  ).length;

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <p className={css.description}>
          Find contacts <FcSearch className={css.icon} size={22} />
        </p>
        <input
          className={css.input}
          type="text"
          value={filterValue}
          onChange={onFilterChange}
        />
      </div>
      <p className={css.countContacts}>
        Your contacts: {filteredContactsCount}
      </p>
    </div>
  );
};
