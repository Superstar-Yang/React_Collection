import React from 'react';

const App = () => {
    const inputRef = React.useRef(null);
    const handleClick = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleClick}> 获取DOM </button>
        </div>
    );
};

export default App;