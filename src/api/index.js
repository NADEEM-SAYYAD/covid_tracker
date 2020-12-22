import axios from "axios";
const url = "https://covid19.mathdro.id/api/";

export const getAllCovidCases = async (country = "") => {
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(`${url}${country}`);
        return {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
    } catch (error) {
        return error;
    }
};
export const getCountries = async () => {
    try {
        const {
            data: { countries },
        } = await axios.get(`${url}countries`);
        return {
            countries,
        };
    } catch (error) {
        return error;
    }
};
