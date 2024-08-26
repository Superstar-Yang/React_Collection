import {useEffect, useState} from "react";


const App = () => {
    const [count, setCount] = useState(0);
    // 初始化+视图重新渲染执行
    // useEffect(() => {
    //     console.log('useEffect执行了。。。')
    // },)
    // 初始化只会执行一次
    // useEffect(() => {
    //     console.log('useEffect执行了。。。')
    // },[])
    // 初始化+依赖项发生变化执行
    useEffect(() => {
        console.log('useEffect执行了。。。')
    },[count])
    return (
        <div>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    );
};


export default App;