import {useEffect, useState} from "react";

const Son = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('在执行..')
        }, 1000)
        return () => clearInterval(timer)
    },)
    return <div>this is son component</div>
}

const App = () => {
    const [show, setShow] = useState(true);
    return (
        <div>
            {show && <Son/>}
            <button onClick={() => {
                setShow(false)
            }}>卸载Son组件
            </button>
        </div>
    );
};


export default App;