// useState实现一个计数器按钮

import React,{useState} from "react";

const App = () => {
    const [count, setCount] = useState(0);

    const handleCount = ()=>{
        setCount(count+1);
        console.log(count)
    }
    return (
        <div className='App'>
            <button onClick={handleCount}>click me </button>
        </div>
    );
};

export default App;

