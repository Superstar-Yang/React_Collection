import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './store'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/login",
        element:<div>login 页面</div>
    },
    {
        path:"/article",
        element:<div>文章 页面</div>
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </StrictMode>
)
