// weatherdata.js - service that dynamically fetches the weather and 3-day forecast data from the
// user's detected IP location

app.factory("weather", [
  "$http",
  function($http) {
    // Weather API used from "https://www.weatherapi.com/"
    var apiKey = "44d2fe2850d0459182b121052210307";
    // "&q=auto:ip" means the API detects the user's current IP to find the region's weather (not that accurate)
    // "&days=3" means the outputted JSON data will also contain forecast information for 3 days (could not find one for 5)
    var urlApi = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=3`;

    // Sets default scale to celcius when accessing page
    var tempScale = "c";

    return {
      // Returns get function to get the current scale set
      getToggle: function() {
        return tempScale;
      },
      // Returns set function to set the desired scale
      setToggle: function(toggleTempScale) {
        tempScale = toggleTempScale;
      },
      // Returns a fetch promise from the weather API
      getWeather: function() {
        return $http.get(urlApi);
      }
    };
  }
]);
