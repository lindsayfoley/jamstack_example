const { default: Axios } = require("axios");

exports.handler = async function (event, context, callback) {
  const { lat, long } = event.queryStringParameters;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY}`;

  const response = await Axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data)
  });
};