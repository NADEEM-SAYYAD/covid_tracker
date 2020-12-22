import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Charts = ({ covidData }) => {
    const [covidChartData, setCovidChartData] = useState({
        labels: ["Covid 19 Cases"],
        datasets: [],
    });
    const tempResult = [];
    if (covidData.length > 0) {
        covidData.map((data, index) => {
            if (data.count) {
                tempResult.push({
                    label: `# ${data.title}`,
                    data: [`${data.count}`],
                    backgroundColor: `${data.color}`,
                });
            }
        });
    }
    const covidDdata = {
        labels: ["Covid 19 Cases"],
        datasets: tempResult,
    };
    return (
        <div className="row" style={{ marginTop: "15px" }}>
            <div className="col-sm-12">
                <Bar data={covidDdata} options={options} />
            </div>
        </div>
    );
};
export default Charts;
