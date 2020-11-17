const success = (position) => {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const url = `/.netflify/functions/weatherapi/?lat=${lat}&lon=${long}`;

  fetch(url)
    .then((response) => response.json())
    .then(data => {
      document.querySelector('region').append(data.location.region);
      document.querySelector('summary').append(data.current.condition.text);
      document.querySelector('temp').append(data.current.temp_c);
      document.querySelector('icon').append(data.current.condition.icon);
      document.querySelector('icon').append(data.current.condition.icon);
      document.getElementById('weather').classList.remove('hide');
    });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
};
