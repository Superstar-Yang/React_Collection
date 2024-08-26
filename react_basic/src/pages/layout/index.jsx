import React from 'react';
import {Outlet} from "react-router-dom";

const Login = () => {
    return (
        <div>
            <div>我是layout</div>
            {/*配置二级路由的出口*/}
            <Outlet />
        </div>
    );
};

export default Login;