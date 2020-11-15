const { default: Axios } = require("axios");
require('dotenv').config();

module.exports = async function() {
  try {
    const BBCNewsTopHeadlines = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`;
    const response = await Axios.get(BBCNewsTopHeadlines);
    return response.data;
  } catch(error) {
    console.log(error);
  }
};