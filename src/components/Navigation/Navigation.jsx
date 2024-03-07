import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import css from "./Navigation.module.css";
import { FcHome } from "react-icons/fc";

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.linkHome} to="/">
        <FcHome size={35} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.linkContacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
