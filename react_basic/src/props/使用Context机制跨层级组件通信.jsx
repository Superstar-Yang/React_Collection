import React, {createContext, useState, useContext} from 'react';
// 使用createContext创建一个上下文对象
const ctxMsg = createContext()
// 在顶层组件使用上下文对象.Provide组件提供数据
// 在底层组件中通过useContext钩子函数获取消费数据
const Son1 = () => {
    const msg = useContext(ctxMsg);
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
           <ctxMsg.Provider value={name}>
               <Son getMsg={(msg) => setMsg(msg)}/>
               <Son1 msg={name}></Son1>
           </ctxMsg.Provider>
        </div>
    );
};


export default App;