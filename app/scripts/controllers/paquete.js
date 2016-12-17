'use strict';

/**
 * @ngdoc function
 * @name paketurApp.controller:PaqueteCtrl
 * @description
 * # PaqueteCtrl
 * Controller of the paketurApp
 */
angular.module('paketurApp')
  .controller('PaqueteCtrl', function ($scope) {

    $scope.dias = [
      {
        numero: 1,
        selected: false
      },
      {
        numero: 2,
        selected: false
      },
      {
        numero: 3,
        selected: false
      },
    ];

    $scope.diaSeleccionado = function (dia) {
      angular.forEach($scope.dias, function (current) {
        current.selected = dia.numero === current.numero;
      });
    }

    $scope.destinos = [
      {
        nombre: 'Catacocha',
        selected: false
      },
      {
        nombre: 'Celica',
        selected: false
      },
      {
        nombre: 'Alamor',
        selected: false
      },
      {
        nombre: 'Puyango',
        selected: false
      },
      {
        nombre: 'Pindal',
        selected: false
      },
      {
        nombre: 'Zapotillo',
        selected: false
      },
      {
        nombre: 'Macara',
        selected: false
      }
    ];

    $scope.destinoSeleccionado = function (destino) {
      destino.selected = !destino.selected;
    }

    $scope.servicios = [
      {
        nombre: 'Hospedaje',
        icon: 'glyphicon glyphicon-home',
        selected: false
      },
      {
        nombre: 'Transporte',
        icon: 'glyphicon glyphicon-road',
        selected: false
      },
      {
        nombre: 'Alimentación',
        icon: 'glyphicon glyphicon-cutlery',
        selected: false
      },
      {
        nombre: 'Guia',
        icon: 'glyphicon glyphicon-user',
        selected: false
      }
    ];

    $scope.servicioSeleccionado = function (servicio) {
      servicio.selected = !servicio.selected;
    }

    $scope.opciones = [
      {
        nombre: 'Disponibilidad',
        selected: true,
        key: 'disp'
      },
      {
        nombre: 'Elije Tu Destino',
        selected: false,
        key: 'dest'
      },
      {
        nombre: 'Elije Servicios',
        selected: false,
        key: 'serv'
      }
    ];

    $scope.opcionSeleccionado = function (opcion) {
      $scope.opcionSelected = opcion;
    }

    $scope.opcionSelected = $scope.opciones[0];

  });
