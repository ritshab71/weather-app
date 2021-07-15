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

    $scope.date = new Date().getHours();

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
