const axios = require("axios");
require("dotenv").config();

exports.handler = async function (event, context, callback) {
  const getUsersLatLong = navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(showPosition)
    : undefined;

  const usersLatLong = getUsersLatLong();

  if (!usersLatLong) {
    return null;
  }

  const weatherApi = `https://api.weatherapi.com/v1/current.json?q=${usersLatLong}&key=${process.env.WEATHER_API_KEY}`;

  const response = await axios.get(weatherApi);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data),
  });
};
