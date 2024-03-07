import css from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";


const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.wrapper}>
        <h1 className={css.title}>This is Application Phoneboock</h1>
      </div>
    </>
  );
};

export default HomePage;
