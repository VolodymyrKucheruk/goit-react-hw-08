import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../components/DocumentTitle"


const NotFound = () => {
  return (
    <>
      <DocumentTitle>NotFound</DocumentTitle>
      <p className={css.text}>NotFound</p>
    </>
  );
};

export default NotFound;
