const getWeather = (woeid) => {
  fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const todaysTemperature = data.consolidated_weather[0];
      const minTemp = Math.floor(todaysTemperature.min_temp);
      const maxTemp = Math.floor(todaysTemperature.max_temp);
      const city = data.title;
      console.log(`Temperature in ${city} will stay b/w ${minTemp}°C and ${maxTemp}°C.`);
    })
    .catch((error) => {
      console.error(error);
    });
};

// Weather of New Delhi
// https://www.metaweather.com/api/location/search/?query=delhi
getWeather(28743736);

// Weather of San Francisco
// https://www.metaweather.com/api/location/search/?query=san
getWeather(2487956);

// Weather of London
// https://www.metaweather.com/api/location/search/?query=london
getWeather(44418);

// Catch error by wrong woeid
/* getWeather(193882726272); */
