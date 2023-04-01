import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "../components/atoms/NavbarContainer";
import Register from "../pages/auth/Register";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "../pages/auth/Login";
import { useSelector } from "react-redux";
import LoadingComponent from "../components/molecular/LoadingComponent";

function AppRoute() {
  const storeData = useSelector((store) => store?.global);
  const { isLoading } = storeData;
  return (
    <Fragment>
      <NavbarContainer />
      <ToastContainer />
      {isLoading && <LoadingComponent />}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default AppRoute;
