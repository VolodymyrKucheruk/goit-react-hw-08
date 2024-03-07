import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import { GrLogin } from "react-icons/gr";


export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.link} to="/login">
        LogIn 
      </NavLink>
    </div>
  );
};
