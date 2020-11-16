const { default: Axios } = require("axios");
require('dotenv').config();

module.exports = async function () {
    try {
        const response = await Axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=rh2`);
        return {
            region: response.data.location.region,
            summary: response.data.current.condition.text,
            temp: response.data.current.temp_c,
            icon: response.data.current.condition.icon,
        };
    } catch(error) {
        console.log(`Unable to get todays weather because of ${error}`);
    }
};