import React from "react";

const Country = ({ listSetCountry, getCountry }) => {
    return (
        <div className="row" style={{ marginTop: "25px" }}>
            <div className="col-sm-3">
                <div className="form-group">
                    <label htmlFor="sel1">Select Country:</label>
                    <select
                        className="form-control"
                        onChange={(e) => getCountry(e.target.value)}
                    >
                        <option>Select</option>
                        {listSetCountry.length > 0
                            ? listSetCountry.map((data) => (
                                  <option key={data.name} value={data.name}>
                                      {data.name}
                                  </option>
                              ))
                            : ""}
                    </select>
                </div>
            </div>
        </div>
    );
};
export default Country;
