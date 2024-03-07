import css from "./RegistrationForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { FcAbout } from "react-icons/fc";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("This is a required field"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <h1 className={css.title}>Register</h1>
        <div className={css.formGroupName}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

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
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
