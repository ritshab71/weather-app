// ForecastController.js - app controller for the daycast.html page

app.controller("ForecastController", [
  "$scope",
  "$routeParams",
  "weather",
  function($scope, $routeParams, weather) {
    // Uses the "weather" api service and upon a successful request, saves the data
    // into the below variables so that it can be accessed in the template html
    weather.getWeather().success(function(data) {
      $scope.data = data;
      $scope.location = data.location;
      $scope.daycast = data.forecast.forecastday[$routeParams.day_id];
      $scope.hourly = $scope.daycast.hour;
    });

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

    // Initialises a variable to display the hourly information to "false"
    $scope.showHourInfo = false;

    // When called, the selected hour to display the information is saved
    // and the variable is changed to true to display a div on the side
    $scope.toggleHourlyInfo = function(index) {
      $scope.selectedHour = $scope.hourly[index];
      $scope.showHourInfo = true;
    };

    // When called, it closes the hourly information div, by setting the
    // variable back to false to hide the display
    $scope.closeHourlyInfo = function() {
      $scope.showHourInfo = false;
    };
  }
]);
