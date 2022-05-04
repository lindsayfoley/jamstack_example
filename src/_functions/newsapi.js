import NEWS_API_URL from "./constants";

const axios = require("axios");
require("dotenv").config();

exports.handler = async function (event, context, callback) {
  const response = await axios.get(NEWS_API_URL);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data),
  });
};
