// eslint-disable-next-line consistent-return
const getWeather = async (woeid) => {
  try {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
    const data = await response.json();
    const todaysTemperature = data.consolidated_weather[0];
    const minTemp = Math.floor(todaysTemperature.min_temp);
    const maxTemp = Math.floor(todaysTemperature.max_temp);
    const city = data.title;
    console.log(`Temperature in ${city} will stay b/w ${minTemp}°C and ${maxTemp}°C.`);

    return data;
  } catch (error) {
    console.error(`Error message: ${error.message}`);
  }
};

// Weather of New Delhi
// https://www.metaweather.com/api/location/search/?query=delhi
getWeather(28743736)
  .then((data) => { console.log(`Full Data of ${data.title}`, data); });

// Weather of San Francisco
// https://www.metaweather.com/api/location/search/?query=san
getWeather(2487956)
  .then((data) => { console.log(`Full Data of ${data.title}`, data); });

// Weather of London
// https://www.metaweather.com/api/location/search/?query=london
getWeather(44418)
  .then((data) => { console.log(`Full Data of ${data.title}`, data); });

// Catch error by wrong woeid
/* getWeather(193882726272)
  .then((data) => { console.log(`Full Data of ${data.title}`, data); }); */
