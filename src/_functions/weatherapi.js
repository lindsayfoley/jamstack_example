const axios = require("axios");
require("dotenv").config();

exports.handler = async function (event, context, callback) {
  const getUsersGeoLocation =
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined" &&
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition()
      : undefined;

  const usersGeoLocation = getUsersGeoLocation();

  if (!usersLatLong) {
    return null;
  }

  const lat = usersGeoLocation.coords.latitude;
  const long = sersGeoLocation.coords.longitude;
  console.log("lat", lat, "long", long);

  const weatherApi = `https://api.weatherapi.com/v1/current.json?q=${lat},${long}&key=${process.env.WEATHER_API_KEY}`;

  const response = await axios.get(weatherApi);

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data),
  });
};
