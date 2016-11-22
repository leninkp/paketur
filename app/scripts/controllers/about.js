'use strict';

/**
 * @ngdoc function
 * @name paketurApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the paketurApp
 */
angular.module('paketurApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
