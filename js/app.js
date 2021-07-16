// app.js - app module for "WeatherApp"

var app = angular.module("WeatherApp", ["ngRoute"]);

// Routing is provided so that the selected forecast day (by day_id) information can be displayed
// in a seperate page
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
