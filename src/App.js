import React, { useState, useEffect } from "react";
import { Cards, Country, Charts } from "./component";
import { getAllCovidCases, getCountries } from "./api";
const App = () => {
    const [covidData, setCovidData] = useState([]);
    const [listSetCountry, setlistSetCountry] = useState([]);
    const [country, setCountry] = useState("");
    const getCounryData = (country) => {
        let newcountry = `countries/${country}`;
        setCountry(newcountry);
    };
    useEffect(() => {
        async function getCovidCases(country) {
            const data = await getAllCovidCases(country);
            const tempStore = [];
            const types = ["Infected", "Recovered", "Deaths"];
            const desc = [
                "Number of active cases from COVID-19",
                "Number of recoveries from COVID-19",
                "Number of deaths caused by COVID-19",
            ];
            const color = [
                "rgb(23, 176, 215)",
                "rgb(40, 167, 69)",
                "rgb(222, 53, 69)",
            ];
            let i = 0;
            for (let x in data) {
                if (data[x].value) {
                    let tempObj = {
                        title: types[i],
                        count: data[x].value,
                        desc: desc[i],
                        color: color[i],
                    };
                    tempStore.push(tempObj);
                    i++;
                } else {
                    tempStore.push(data[x]);
                }
            }
            setCovidData(tempStore);
        }
        getCovidCases(country);

        async function getCountry() {
            const dataCountry = await getCountries();
            setlistSetCountry(dataCountry["countries"]);
        }
        getCountry();
    }, [country]);
    return (
        <div className="container">
            <Cards covidData={covidData} />
            <Country
                listSetCountry={listSetCountry}
                getCountry={getCounryData}
            />
            <Charts covidData={covidData} />
        </div>
    );
};
export default App;
