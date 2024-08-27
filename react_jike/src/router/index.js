import {createBrowserRouter} from "react-router-dom";
import Login from "@/pages/Login/index.jsx";

const router = createBrowserRouter(
    [
        {
            path: '/login',
            Component: Login
        }
    ]
)
export default router