const App = () => {
    // 1，定义组件
    const Button = ()=>{
        return <button type="reset">click me!</button>
    }
    return (
        <div className='App'>
            {/*2.挂载组件*/}
            {/*自闭合*/}
            <Button />
            {/* 成对标签*/}
            <Button></Button>
        </div>
    );
};

export default App;

