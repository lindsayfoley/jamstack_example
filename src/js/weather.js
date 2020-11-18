const success = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `/.netlify/functions/weatherapi?q=${lat},${lon}`;

  fetch(url)
    .then(response => response.json())
      .then(data => {
        document.querySelector(".region").textContent = data.location.name;
        document.querySelector(".summary").textContent = data.current.condition.text;
        document.querySelector(".temp").textContent = data.current.temp_c;
        document.querySelector(".icon").src = data.current.condition.icon;
        document.querySelector("#weather").classList.remove("hide");
      });
};

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
}