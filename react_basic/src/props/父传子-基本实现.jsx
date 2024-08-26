import React from 'react';
const Son = ({name})=>{
    console.log(name);
    return <div>this is a {name}</div>
}
const App = () => {
    return (
        <div>
            <Son name='App'/>
        </div>
    );
};

export default App;