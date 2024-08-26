import React from 'react';
const Son = (props)=>{
    console.log(props);
    props.name = 'jack'
    // App.jsx:4 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    return <div>this is a {props.name}</div>
}
const App = () => {
    const name = 'App'
    return (
        <div>
            <Son
                name={name}
                age={10}
                sex={'男'}
                isTrue={true}
                list={['Vue','React']}
                obj={{name:'jack'}}
                cb={()=>{console.log(name)}}
                child={<span>this is child</span>}
            />
        </div>
    );
};

export default App;