import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/App.Bar";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <div className={css.layout}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
