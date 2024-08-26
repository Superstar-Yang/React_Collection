
import React from 'react';
const Son = (props)=>{
    console.log(props);
    return <div>{props.children}</div>
}
const App = () => {
    const name = 'App'
    return (
        <div>
            <Son>
                <span>hello</span>
            </Son>
        </div>
    );
};

export default App;