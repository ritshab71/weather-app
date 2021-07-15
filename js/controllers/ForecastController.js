app.controller("ForecastController", [
  "$scope",
  "$routeParams",
  "weather",
  function($scope, $routeParams, weather) {
    weather.getWeather().success(function(data) {
      $scope.data = data;
      $scope.location = data.location;
      $scope.daycast = data.forecast.forecastday[$routeParams.day_id];
      $scope.hourly = $scope.daycast.hour;
    });

    $scope.scale = weather.getToggle();

    $scope.toggleC = function() {
      weather.setToggle("c");
      $scope.scale = weather.getToggle();
    };

    $scope.toggleF = function() {
      weather.setToggle("f");
      $scope.scale = weather.getToggle();
    };

    $scope.showHourInfo = false;

    $scope.toggleHourlyInfo = function(index) {
      $scope.selectedHour = $scope.hourly[index];
      $scope.showHourInfo = true;
    };

    $scope.closeHourlyInfo = function() {
      $scope.showHourInfo = false;
    };
  }
]);
