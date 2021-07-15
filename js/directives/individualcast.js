app.directive("individualForecast", function() {
  return {
    restrict: "E",
    scope: {
      scale: "=",
      forecast: "=",
      index: "="
    },
    templateUrl: "views/forecast.html"
  };
});
