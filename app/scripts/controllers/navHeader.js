'use strict';

/**
 * @ngdoc function
 * @name paketurApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the paketurApp
 */
angular.module('paketurApp')
  .controller('NavCtrl', function ($scope, $rootScope) {

    $scope.links =  [
      {
        route: '',
        name: 'Inicio',
        active: true
      },
      {
        route: 'paquete',
        name: 'Arma tu Paquete',
        active: false
      },
      {
        route: 'about',
        name: 'Información',
        active: false
      },
    ];


    $scope.clickLink = function (link) {
      angular.forEach($scope.links, function (current) {
        current.active = link.route === current.route;
      });
    };

  });
