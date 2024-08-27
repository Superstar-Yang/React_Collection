import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import Layout from "@/pages/Layout/index.jsx";
import Login from "@/pages/Login/index.jsx";
import AuthRoute from "@/components/AuthRoute.jsx";
// import Article from "@/pages/Article/index.jsx";
// import Publish from "@/pages/Publish/index.jsx";
// import Home from "@/pages/Home/index.jsx";
import {lazy, Suspense} from "react";

const Home = lazy(() => import("@/pages/Home"));
const Article = lazy(() => import("@/pages/Article"));
const Publish = lazy(() => import("@/pages/Publish"));

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AuthRoute><Layout/></AuthRoute>}>

                    <Route index path='home' element={<Suspense><Home/></Suspense>}></Route>
                    <Route path='article' element={<Suspense><Article/></Suspense>}></Route>
                    <Route path='publish' element={<Suspense><Publish/></Suspense>}></Route>
                    <Route path={'/'} element={<Navigate to={'/home'} />} />
                </Route>
                {/* 重定向到登录页 */}
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;