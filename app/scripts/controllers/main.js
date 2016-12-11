'use strict';

/**
 * @ngdoc function
 * @name paketurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the paketurApp
 */
angular.module('paketurApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.destinations = [
      {
        image: 'images/puyango.jpg',
        title: 'Puyango',
        active: true
      },
      {
        image: 'images/shiriculapo.jpg',
        title: 'Shiriculapo',
        active: false
      },
      {
        image: 'images/celica.jpg',
        title: 'Celica',
        active: false,
      },
      {
        image: 'images/puyango.jpg',
        title: 'Puyango',
        active: false
      },
      {
        image: 'images/puyango.jpg',
        title: 'Puyango',
        active: false,
      }
    ];

  });
