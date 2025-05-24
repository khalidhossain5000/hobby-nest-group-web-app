import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AuthLayout from "../Layouts/AuthLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import CreateGroup from "../Pages/CreateGroup";
import MyGroup from "../Pages/MyGroup";
import AllGroup from "../Pages/AllGroup";
import GroupDetails from "../Pages/GroupDetails";
import UpdateGroup from "../Pages/UpdateGroup";
import ErrorPageGlobal from "../Pages/ErrorPageGlobal";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Compoents/Loading/Loading";
import MyGroupEmpty from "../Compoents/MyGroupIntitialMessage/MyGroupEmpty";

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
    element: (
      <PrivateRoute>
        <CreateGroup />
      </PrivateRoute>
    ),
  },
  {
    path: "all-group",
    element: <AllGroup />,
    loader: () =>fetch("https://assignment-10-server-cyan-one.vercel.app/groups"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "all-group/:id",
    loader: ({ params }) =>
      fetch(`https://assignment-10-server-cyan-one.vercel.app/groups/${params.id}`)
    ,
    element: <PrivateRoute><GroupDetails /></PrivateRoute>,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement:<ErrorPageGlobal/>
  },
  {
    path: "my-group/:email",
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-cyan-one.vercel.app/all-groups/${params.email}`
      ),
      
    element: (
      <PrivateRoute>
        <MyGroup />
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading></Loading>,
    errorElement:<MyGroupEmpty/>
  },
  {
    path: "update-group/:id",
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-server-cyan-one.vercel.app/groups/${params.id}`
      ),
    
    element: <PrivateRoute><UpdateGroup /></PrivateRoute>,
    hydrateFallbackElement: <Loading></Loading>,
    errorElement:<ErrorPageGlobal/>
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
  {
    path: "*",
    Component: ErrorPageGlobal,
  },
]);
