const axios = require("axios");
require("dotenv").config();

exports.handler = async function (event, context, callback) {
  const url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}&pageSize=10`;

  const response = await axios.get(url);
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(response.data),
  });
};
