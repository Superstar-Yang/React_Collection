import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login/login.jsx";
import Article from "../pages/article/article.jsx";
import Layout from "../pages/layout/index.jsx";
import About from "../pages/about/index.jsx";
import Board from "../pages/board/index.jsx";
import NotFound from "../pages/NotFound/index.jsx";

const router = createBrowserRouter([
    {
      path:'/',
      Component:Layout,
      //   配置二级路由
      children:[
          {
              // 默认二级路由配置
              index:true,
              // path:'/about',
              Component:About
          },
          {
              path:'/board',
              Component:Board
          }
      ]
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/article/:id/:name",
        Component: Article
    },
    {
        // 404路由配置
        path:"*",
        Component:NotFound,
    }
])
export default router;
