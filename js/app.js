var app = angular.module('WeatherApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/weather-display/:day_id', {
        controller: 'ForecastController',
        templateUrl: 'views/forecast.html'
    })
    .otherwise({
        redirectTo: '/'
    })
});