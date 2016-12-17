'use strict';

/**
 * @ngdoc function
 * @name paketurApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the paketurApp
 */
angular.module('paketurApp')
  .controller('NavCtrl', function ($scope) {

    $scope.links =  [
      {
        route: '',
        name: 'Inicio',
        active: true,
        hash: '#/'
      },
      {
        route: 'paquete',
        name: 'Arma tu Paquete',
        active: false,
        hash: '#/paquete'
      },
      {
        route: 'about',
        name: 'Información',
        active: false,
        hash: '#/about'
      },
    ];


    $scope.clickLink = function (link) {
      angular.forEach($scope.links, function (current) {
        current.active = link.route === current.route;
      });
    };

    function init() {
      angular.forEach($scope.links, function (current) {
        current.active = window.location.hash === current.hash;
      });  
    }

    init();

  });
