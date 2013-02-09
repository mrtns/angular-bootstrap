'use strict';

var angularBootstrapApp = angular.module('angularBootstrapApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/d3', {
        templateUrl: 'views/d3.html',
        controller: 'd3Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
