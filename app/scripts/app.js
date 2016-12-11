'use strict';

/**
 * @ngdoc overview
 * @name paketurApp
 * @description
 * # paketurApp
 *
 * Main module of the application.
 */
angular
  .module('paketurApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/paquete', {
        templateUrl: 'views/paquete.html',
        controller: 'PaqueteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
