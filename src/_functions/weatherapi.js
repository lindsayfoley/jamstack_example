const axios = require("axios");
require("dotenv").config();

exports.handler = async function (event, context, callback) {
  const weatherAPI = `https://api.weatherapi.com/v1/current.json?q=sw1&key=${process.env.WEATHER_API_KEY}`;

  const response = await axios.get(weatherAPI);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data),
  });
};
