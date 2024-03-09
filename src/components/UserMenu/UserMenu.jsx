import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";
import css from "./UserMenu.module.css";
import { FcBusinessman, FcImport } from "react-icons/fc";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <FcBusinessman className={css.iconBusinessman} size={35} />
      <p className={css.userName}>{user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <FcImport className={css.icon} size={35} />
      </button>
    </div>
  );
};
