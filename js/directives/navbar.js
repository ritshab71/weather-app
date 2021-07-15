app.directive("navigationBar", function() {
  return {
    restrict: "E",
    scope: {
      weather: "=",
      farenheit: "=",
      celcius: "="
    },
    templateUrl: "views/navbar.html"
  };
});
