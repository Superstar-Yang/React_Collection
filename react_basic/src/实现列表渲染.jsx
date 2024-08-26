const list = [
    {id:1,name:'张衡',scientist:'天文学家'},
    {id:2,name:'祖冲之',scientist:'天文学家'},
    {id:3,name:'沈括',scientist:'生物学、医药学家'},
    {id:4,name:'蔡伦',scientist:'发明家'},
    {id:5,name:'张仲景',scientist:'中医学家'},
    {id:6,name:'李时珍',scientist:'药理学家'},
]

const App = () => {
    return (
        <div>
            <ul>
                {
                    list.map(item=>(<li key={item.id}>{item.name}-{item.scientist}</li>))
                }
            </ul>
        </div>
    );
};

export default App;
