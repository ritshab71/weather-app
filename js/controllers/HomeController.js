// HomeController.js - app controller for the home.html page

app.controller("HomeController", [
  "$scope",
  "weather",
  function($scope, weather) {
    // Uses the "weather" api service and upon a successful request, saves the data
    // into the below variables so that it can be accessed in the template html
    weather.getWeather().success(function(data) {
      $scope.data = data;
      $scope.location = data.location;
      $scope.current = data.current;
      $scope.forecasts = data.forecast.forecastday;
      $scope.today = $scope.forecasts[0];
    });

    // Gets the current hour of the day (range: 0 - 23)
    $scope.date = new Date().getHours();

    // Provides a dynamic changing background that is dependent on the current time
    if (
      ($scope.date >= 18 && $scope.date <= 23) ||
      ($scope.date >= 0 && $scope.date <= 5)
    ) {
      document.body.className = "body-night";
    } else if ($scope.date >= 6 && $scope.date <= 7) {
      document.body.className = "body-rise";
    } else if ($scope.date >= 8 && $scope.date <= 15) {
      document.body.className = "body-day";
    } else if ($scope.date >= 16 && $scope.date <= 17) {
      document.body.className = "body-set";
    }

    // Initialises the scale, set to default "celcius"
    $scope.scale = weather.getToggle();

    // When called, it sets the scale to "celcius"
    $scope.toggleC = function() {
      weather.setToggle("c");
      $scope.scale = weather.getToggle();
    };

    // When called, it sets the scale to "farenheit"
    $scope.toggleF = function() {
      weather.setToggle("f");
      $scope.scale = weather.getToggle();
    };
  }
]);
