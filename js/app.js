var app = angular.module("WeatherApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "HomeController",
        templateUrl: "views/home.html"
      })
      .when("/weather-display/:day_id", {
        controller: "ForecastController",
        templateUrl: "views/daycast.html"
      })
      .otherwise({
        redirectTo: "/"
      });
  }
]);
