import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "./AppBar/App.Bar";

export const Layout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "95svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "spaceBetween",
        alignItems: "spaceBetween",
      }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
