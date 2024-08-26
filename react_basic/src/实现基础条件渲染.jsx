const App = () => {
    let isLogin;
    return (
        <div>
            {/*  逻辑与&&  */}
            {isLogin && <span>this is span</span>}
            {/*  三元运算符  */}
            {isLogin ? <span>jack</span> : <span>loading</span>}
        </div>
    );
};

export default App;
