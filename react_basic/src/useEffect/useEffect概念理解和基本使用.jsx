import {useEffect, useState} from "react";

const URL = 'http://geek.itheima.net/v1_0/channels'
const App = () => {
    const [list, setList] = useState([])
    useEffect(() => {
        fetch(URL).then(res => res.json().then(res =>{
            setList(res.data.channels)
        }))
    },[])
    return (
        <div>
            <ul>
                {list.map(item=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};


export default App;