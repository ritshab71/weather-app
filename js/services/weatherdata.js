app.factory("weather", [
  "$http",
  function($http) {
    var apiKey = "44d2fe2850d0459182b121052210307";
    var urlApi = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=auto:ip&days=3`;

    var tempScale = "c";

    return {
      getToggle: function() {
        return tempScale;
      },
      setToggle: function(toggleTempScale) {
        tempScale = toggleTempScale;
      },
      getWeather: function() {
        return $http.get(urlApi);
      }
    };
  }
]);
