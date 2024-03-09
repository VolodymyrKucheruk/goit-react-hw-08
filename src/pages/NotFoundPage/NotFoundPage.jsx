import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../components/DocumentTitle"


const NotFound = () => {
  return (
    <>
      <div className={css.deviceHeader}>
        <div className={css.deviceSensors}></div>
      </div>
      <DocumentTitle>NotFound</DocumentTitle>
      <p className={css.text}>NotFound</p>
    </>
  );
};

export default NotFound;
