import React from 'react';
import {Link} from "react-router-dom";

const about = () => {
    return (
        <div>
            我是关于页面
            <Link to='/board'>切换到关于页面</Link>
        </div>
    );
};

export default about;