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
import { PacmanLoader } from "react-spinners";

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
    element: <PrivateRoute><CreateGroup /></PrivateRoute>,
  },
  {
    path: "all-group",
    element: <AllGroup />,
    loader:()=>fetch('http://localhost:3000/groups'),
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path:'all-group/:id',
    loader:({params})=>fetch(`http://localhost:3000/groups/${params.id}`),
    element:<GroupDetails/>,
    hydrateFallbackElement:<PacmanLoader/>
  },
  {
    path: "my-group/:email",
    loader:({params})=>fetch(`http://localhost:3000/all-groups/${params.email}`),
    element: <PrivateRoute><MyGroup /></PrivateRoute>,
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path:'update-group/:id',
    loader:({params})=>fetch(`http://localhost:3000/groups/${params.id}`),
    element:<UpdateGroup/>,
    hydrateFallbackElement:<Loading></Loading>
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
    path:'*',
    Component:ErrorPageGlobal
  }
]);
