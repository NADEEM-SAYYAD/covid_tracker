import React, { useState } from "react";
import "./Cards.css";
const Cards = ({ covidData }) => {
    if (covidData.length === 0) {
        return "Loading...";
    }
    return (
        <div className="row">
            {covidData.map((covidDetails, index) => {
                if (covidDetails.count) {
                    return (
                        <div className="col-sm-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <h5
                                        className={`${covidDetails.title} card-title text-center`}
                                    >
                                        {covidDetails.title}
                                    </h5>
                                    <p
                                        className={`${covidDetails.title} card-title text-center`}
                                    >
                                        {covidDetails.desc}
                                    </p>
                                    <h5
                                        className={`${covidDetails.title} card-title text-center`}
                                    >
                                        {covidDetails.count}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};
export default Cards;
