app.directive("navigationBar", function() {
  return {
    restrict: "E",
    scope: {
      weather: "=",
      type: '=',
      farenheit: "=",
      celcius: "="
    },
    templateUrl: "views/navbar.html"
  };
});
