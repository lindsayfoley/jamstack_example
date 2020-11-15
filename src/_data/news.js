const { default: Axios } = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const response = await Axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`);
    return response.data;
  } catch(error) {
    console.log(`Unable to get todays headlines because of ${error}`);
  }
};