import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                element:<h2>HOme page here</h2>
            }
        ]
    }
])