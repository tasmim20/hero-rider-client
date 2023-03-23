import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../Shared/AppBar";

const Main = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default Main;
