import BarCharts from "@/components/BarCharts.jsx";

const Home = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <BarCharts title={'三大框架满意度'} data={[10, 40, 70]}/>
            <BarCharts title={'三大框架使用度'} data={[70,40,100]}/>
        </div>
    );
};

export default Home;