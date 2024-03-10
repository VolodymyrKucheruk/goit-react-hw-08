import css from "./NotFoundPage.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import image from "../../assets/image.png";

const NotFoundPage = () => {
  return (
    <>
      <div className={css.deviceHeader}></div>
      <DocumentTitle>NotFound</DocumentTitle>
      <img className={css.image} src={image} alt="Not found image" />;
      <h1 className={css.text}>Not found, please try again...</h1>
    </>
  );
};

export default NotFoundPage;
