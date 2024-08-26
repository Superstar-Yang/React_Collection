
const articleType = 0
function getArticleType(type) {
    if (articleType === 0) {
        return <div>我是无图模式</div>
    }else if (articleType === 1) {
        return <div>我是单图模式</div>
    }else{
        return <div>我是三图模式</div>
    }
}
const App = () => {
    return (
        <div>
            {getArticleType()}
        </div>
    );
};

export default App;