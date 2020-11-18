const formatDate = (dataTimeString) =>
  new Date(dataTimeString).toLocaleString();

const renderNews = () => {
  
  const url = `/.netlify/functions/newsapi`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let list = "";
      data.articles.forEach(article =>
        list += `<li><a target="_blank" href="${article.url}">${article.title}</a>, published ${formatDate(article.publishedAt)}</li>`
      );
      document.querySelector(".newsList").innerHTML = '<ol>' + list + '</ol>';
    });
};

renderNews();
