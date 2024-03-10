import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import css from "./Navigation.module.css";
import { FcHome, FcContacts } from "react-icons/fc";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/">
        <FcHome className={css.icon} size={35} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <FcContacts className={css.icon} size={37} />
        </NavLink>
      )}
    </nav>
  );
};
