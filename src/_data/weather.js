const { default: Axios } = require("axios");
require('dotenv').config();

module.exports = async function () {
    try {
        const response = await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=rh2`);
        return response.data;
    } catch(error) {
        console.log(`Unable to get todays weather because of ${error}`);
    }
};