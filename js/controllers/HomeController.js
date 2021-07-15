app.controller("HomeController", [
  "$scope",
  "weather",
  function($scope, weather) {
    weather.getWeather().success(function(data) {
      $scope.data = data;
      $scope.location = data.location;
      $scope.current = data.current;
      $scope.forecasts = data.forecast.forecastday;
      $scope.today = $scope.forecasts[0];
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
  }
]);
