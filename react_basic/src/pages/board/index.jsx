import React from 'react';
import {Link} from "react-router-dom";

const board = () => {
    return (
        <div>
            我是面板页面
            <Link to='/'>切换到关于页面</Link>
        </div>
    );
};

export default board;