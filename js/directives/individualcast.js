app.directive("individualForecast", function() {
  return {
    restrict: "E",
    scope: {
      scale: "=",
      forecast: "="
    },
    templateUrl: "views/forecast.html"
  };
});
