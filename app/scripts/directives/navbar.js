// navbar.js - app directive to display navigation bar template

app.directive("navigationBar", function() {
  return {
    restrict: "E",
    // has access to the weather API json data, scale type, and the celcius and
    // farenheit toggle
    scope: {
      weather: "=",
      type: "=",
      farenheit: "=",
      celcius: "="
    },
    templateUrl: "views/navbar.html"
  };
});
