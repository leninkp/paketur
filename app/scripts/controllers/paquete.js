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
      $scope.diaCheck = dia.numero;
      angular.forEach($scope.dias, function (current) {
        current.selected = dia.numero === current.numero;
      });
    };

    $scope.destinos = [
      {
        nombre: 'Catacocha',
        selected: false,
        image: 'images/shiriculapo.jpg'
      },
      {
        nombre: 'Celica',
        selected: false,
        image: 'images/celica.jpg'
      },
      {
        nombre: 'Alamor',
        selected: false,
        image: 'images/alamor-iglesia.png'
      },
      {
        nombre: 'Puyango',
        selected: false,
        image: 'images/puyango.jpg'
      },
      {
        nombre: 'Pindal',
        selected: false,
        image: 'images/pindal-piscina.jpg'
      },
      {
        nombre: 'Zapotillo',
        selected: false,
        image: 'images/zapotillo-ciudad.jpg'
      },
      {
        nombre: 'Macara',
        selected: false,
        image: 'images/macara-ciudad.jpg'
      }
    ];

    $scope.destinosCheck = [];

    $scope.destinoSeleccionado = function (destino) {
      destino.selected = !destino.selected;
      if (destino.selected) {
        $scope.destinosCheck.push(destino.nombre);
      }else{
        var index = $scope.destinosCheck.indexOf(destino.nombre);
        if (index > -1) {
          $scope.destinosCheck.splice(index, 1);
        }
      }
    };

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

    $scope.serviciosCheck = [];

    $scope.servicioSeleccionado = function (servicio) {
      servicio.selected = !servicio.selected;
      if (servicio.selected) {
        $scope.serviciosCheck.push(servicio.nombre);
      }else{
        var index = $scope.serviciosCheck.indexOf(servicio.nombre);
        if (index > -1) {
          $scope.serviciosCheck.splice(index, 1);
        }
      }
    };

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
    };

    $scope.opcionSelected = $scope.opciones[0];

    $scope.totalTour = function(){
      var value = 0;
      if ($scope.diaCheck && $scope.destinosCheck.length > 0 && $scope.serviciosCheck.length > 0) {
        if ($scope.diaCheck === 3) {
          value = 180;
        }
        if ($scope.diaCheck === 2) {
          value = 100;
        }
        if ($scope.diaCheck === 1) {
          value = 60;
        }
      }
      return value;
    };

  });
