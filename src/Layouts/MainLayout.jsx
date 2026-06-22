import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <h1>MainLayout</h1>
      <Outlet />
    </>
  );
}
