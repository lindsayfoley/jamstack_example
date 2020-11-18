const success = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const url = `/.netlify/functions/weatherapi?lat=${lat}&lon=${long}&units=metric`;

  fetch(url)
    .then(response => response.json())
      .then(data => {
        document.querySelector(".region").textContent = data.name;
        document.querySelector(".summary").textContent =
          data.current.condition.text;
        document.querySelector(".temp").textContent = data.current.temp_c;
        document.querySelector(".icon").textContent = data.current.condition.icon;
        document.querySelector(".weather").classList.remove("hide");
      });

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
};