import React from 'react';

const App = () => {
    const [value,setValue] = React.useState('');
    return (
        <div>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        </div>
    );
};

export default App;