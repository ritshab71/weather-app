// app directive to display the individual forecast day panels

app.directive("individualForecast", function() {
  return {
    restrict: "E",
    // has access to the forecast API json data, scale type, and the index
    // of the current day
    scope: {
      scale: "=",
      forecast: "=",
      index: "="
    },
    templateUrl: "views/forecast.html"
  };
});
