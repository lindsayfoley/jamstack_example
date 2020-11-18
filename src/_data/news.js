const axios = require("axios");
require("dotenv").config();

const formatDate = (dataTimeString) => new Date(dataTimeString).toLocaleString();

module.exports = async function () {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}&pageSize=5`
    );
    return {
      articles: response.data.articles.map(article => {
        article.publishedAt = formatDate(article.publishedAt);
        return article;
      }),
    };
  } catch (error) {
    console.log(`Unable to get todays headlines because of ${error}`);
  }
};
