import css from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle";
import { FcHome } from "react-icons/fc";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>
        <FcHome />
      </DocumentTitle>
      <div>
        <h1 className={css.title}>This is Application Phoneboock</h1>
      </div>
    </>
  );
};

export default HomePage;
