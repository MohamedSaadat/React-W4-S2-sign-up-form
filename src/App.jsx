import React from "react";
import "./App.css";
import { HeroUIProvider } from "@heroui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Feed from "./pages/Feed";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import AuthLayout from "./Layouts/AuthLayout";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      { index: true, element: <Feed /> },
      { path: "profile", element: <Profile /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);
export default function App() {
  return (
    <>
      <HeroUIProvider>
        <RouterProvider router={router} />
      </HeroUIProvider>
    </>
  );
}
