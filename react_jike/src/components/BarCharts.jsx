import React, {useEffect, useRef} from 'react';
import * as echarts from "echarts";

const BarCharts = ({title, data}) => {
    const barRef = useRef(null);
    useEffect(() => {
        const chartDom = barRef.current;
        if (chartDom !== null && chartDom !== undefined && chartDom !== '') {
            echarts.dispose(chartDom)
        }
        const charts = echarts.init(chartDom);
        const options = {
            title: {
                text: title
            },
            xAxis: {
                type: 'category',
                data: ['vue', 'react', 'javascript']
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    type: 'bar',
                    data
                }
            ]
        }
        options && charts.setOption(options);
    })
    return (
        <>
            <div ref={barRef} style={{width: 500, height: 500}}></div>
        </>
    );
};

export default BarCharts;