import {useSelector, useDispatch} from "react-redux";
import {increment, decrement,add} from "./store/modules/counter.js";
import {useEffect} from "react";
import {getChannels} from "./store/modules/channels.js";

const App = () => {
    const {count} = useSelector((state) => state.counter);
    const {channels} = useSelector((state) => state.channel);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getChannels())
    },[dispatch])
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(add(10))}>+10</button>
            <ul>
                {
                    channels.map(channel=>(
                        <li key={channel.id}>{channel.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};


export default App;