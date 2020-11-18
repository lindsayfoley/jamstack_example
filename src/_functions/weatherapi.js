const axios = require("axios");
require("dotenv").config();

exports.handler = async function(event, context, callback) {

  const { lat, lon } = event.queryStringParameters;
  const url = `//api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${lat},${lon}`

  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });
};
  