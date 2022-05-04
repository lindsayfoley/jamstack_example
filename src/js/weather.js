const renderWeather = () => {
  const weatherApi = `/.netlify/functions/weatherapi`;

  fetch(weatherApi)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".region").textContent = data.location.name;
      document.querySelector(".summary").textContent =
        data.current.condition.text;
      document.querySelector(".temp").textContent = data.current.temp_c;
      document.querySelector(".icon").src = data.current.condition.icon;
      document.querySelector("#weather").classList.remove("hide");
    });
};

renderWeather();
