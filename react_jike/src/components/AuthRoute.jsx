import React from 'react';
import {getToken} from "@/utils/index.js";
import {Navigate} from "react-router-dom";

const AuthRoute = ({children}) => {
    const token = getToken()
    if (token) {
        return <>{children}</>
    } else {
        return <Navigate to={'/login'} replace/>
    }
};

export default AuthRoute;