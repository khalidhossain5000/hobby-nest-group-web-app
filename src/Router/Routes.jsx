import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";
import MyGroup from "../Pages/MyGroup";
import AllGroup from "../Pages/AllGroup";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "create-group",
    element: <CreateGroup />,
  },
  {
    path: "all-group",
    element: <AllGroup />,
    loader:()=>fetch('http://localhost:3000/groups')
  },
  {
    path: "my-group",
    element: <MyGroup />,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
