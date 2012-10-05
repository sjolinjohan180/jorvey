'use strict';

// Declare app level module which depends on filters, and services
var angularAppApp = angular.module('angularAppApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
        .when('/create', {
            templateUrl: 'views/create.html',
            controller: 'CreateCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  }]);
