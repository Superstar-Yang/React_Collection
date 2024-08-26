// useState实现一个计数器按钮

import React, {useState} from "react";

const App = () => {
    let [count, setCount] = useState(0);
    const [form, setForm] = useState({name: 'jack'})
    const handleCount = () => {
        // 直接修改，不会引发视图更新
        count++
        console.log(count)
        // 相当于每次重新赋值
        setCount(count + 1);
        console.log(count)
    }
    const handleForm = () => {
        setForm({...form,name: 'john'})
    }
    return (
        <div className='App'>
            <button onClick={handleCount}>click me ------ {count} </button>
            <button onClick={handleForm}>form --- {form.name}</button>
        </div>
    );
};

export default App;

