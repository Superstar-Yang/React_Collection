import React, {useState} from 'react';

const Son1 = ({msg}) => {
    return <div>{msg}</div>
}

const Son = ({getMsg}) => {
    const sonMsg = 'this is a son'
    return <button type="reset" onClick={() => getMsg(sonMsg)}>click son</button>
}
const App = () => {
    const [name, setName] = useState('')
    const setMsg = (msg) => {
        setName(msg)
    }
    return (
        <div>
            <Son getMsg={(msg) => setMsg(msg)}/>
            <Son1 msg={name}></Son1>
        </div>
    );
};


export default App;