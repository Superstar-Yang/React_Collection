const App = () => {
    // 基础事件绑定
    // const handleClick = (e)=>{
    //     console.log('button 被点击了。。。。',e)
    // }
    // 事件参数e
    // const handleClick = (e)=>{
    //     console.log('button 被点击了。。。。',e)
    // }
    const handleClick = (name,e)=>{
        console.log('button 被点击了。。。。'+name,e)
    }
    // 传递自定义参数
    return (
        <div className='App'>
            <button onClick={e=>{handleClick('jack',e)}}>click me</button>
        </div>
    );
};

export default App;

