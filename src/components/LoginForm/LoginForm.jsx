import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { FcAbout } from "react-icons/fc";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

export const LoginForm = () => {
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();
  const dispatch = useDispatch();

  const handleSubmit = (value, actions) => {
    dispatch(logIn(value))
      .unwrap()
      .then(() => {
        toast.success(<p>Success!!!</p>);
      })
      .catch(() => {
        toast.error(<p>Error!!!</p>);
      });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <h1 className={css.title}>LogIn</h1>
        <div className={css.formGroupEmail}>
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.formGroupPassword}>
          <div className={css.wrapper}>
            <label className={css.label} htmlFor={passwordFieldId}>
              Password
            </label>
            <div className={css.itemHints}>
              <div className={css.hint} data-position="4">
                <span className={css.hintDot}>
                  <FcAbout size={22} />
                </span>
                <div className={css.hintContent}>
                  <p className={css.infoText}>
                    Password must be at least 6 characters long(A-z). Password
                    must contain at least one uppercase letter(A-Z) and one
                    special character(@$!%*?&).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Sign In
        </button>
      </Form>
    </Formik>
  );
};
