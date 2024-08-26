const count = 10
const getName = ()=>{
    console.log('this is getName')
}
const App = () => {
    return (
        <div>
            this is a App
            {/* 使用引号传递字符串*/}
            {'this is message'}
            {/*识别js变量*/}
            {count}
        {/*  函数调用  */}
            {getName()}
        {/*    方法调用*/}
            {new Date().getDate()}
        {/*    使用js对象*/}
            <div style={{color:'red'}}> this is div</div>
        </div>
    );
};

export default App;
