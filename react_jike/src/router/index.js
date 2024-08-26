import {createBrowserRouter} from "react-router-dom";
import Layout from "@/pages/Layout/index.jsx";
import Login from "@/pages/Login/index.jsx";

const router = createBrowserRouter(
    [
        {
            path:"/",
            Component:Layout
        },
        {
            path:'/login',
            Component:Login
        }
    ]
)
export default router