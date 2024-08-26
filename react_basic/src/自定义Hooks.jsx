import {useEffect, useState} from "react";

const Son = ()=><div>this is son component</div>

const useToggle = () => {
    const [show, setShow] = useState(true);
    const toggle = () => setShow(!show);
    return {show, toggle};
}

const App = () => {
    const {show,toggle} = useToggle();
    return (
        <div>
            {show && <Son/>}
            <button onClick={toggle}>卸载Son组件
            </button>
        </div>
    );
};


export default App;