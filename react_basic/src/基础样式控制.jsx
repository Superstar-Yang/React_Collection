import './index.css'
const App = () => {

    return (
        <div className='App'>
            {/*行内样式控制*/}
            <span style={{color: "red"}}>this is a span</span>
            {/*通过class类名控制*/}
            <span className='span'>this is a span</span>
        </div>
    );
};

export default App;

