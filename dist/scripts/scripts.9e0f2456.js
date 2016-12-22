"use strict";angular.module("paketurApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/paquete",{templateUrl:"views/paquete.html",controller:"PaqueteCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("paketurApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.destinations=[{image:"images/puyango.jpg",title:"Puyango",active:!0},{image:"images/shiriculapo.jpg",title:"Shiriculapo",active:!1},{image:"images/celica.jpg",title:"Celica",active:!1},{image:"images/guayacanes.jpg",title:"Zapotillo",active:!1},{image:"images/pindal-piscina.jpg",title:"Pindal",active:!1}]}]),angular.module("paketurApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("paketurApp").controller("PaqueteCtrl",["$scope",function(a){a.dias=[{numero:1,selected:!1},{numero:2,selected:!1},{numero:3,selected:!1}],a.diaSeleccionado=function(b){a.diaCheck=b.numero,angular.forEach(a.dias,function(a){a.selected=b.numero===a.numero})},a.destinos=[{nombre:"Catacocha",selected:!1,image:"images/shiriculapo.jpg"},{nombre:"Celica",selected:!1,image:"images/celica.jpg"},{nombre:"Alamor",selected:!1,image:"images/alamor-iglesia.png"},{nombre:"Puyango",selected:!1,image:"images/puyango.jpg"},{nombre:"Pindal",selected:!1,image:"images/pindal-piscina.jpg"},{nombre:"Zapotillo",selected:!1,image:"images/zapotillo-ciudad.jpg"},{nombre:"Macara",selected:!1,image:"images/macara-ciudad.jpg"}],a.destinosCheck=[],a.destinoSeleccionado=function(b){if(b.selected=!b.selected,b.selected)a.destinosCheck.push(b.nombre);else{var c=a.destinosCheck.indexOf(b.nombre);c>-1&&a.destinosCheck.splice(c,1)}},a.servicios=[{nombre:"Hospedaje",icon:"glyphicon glyphicon-home",selected:!1},{nombre:"Transporte",icon:"glyphicon glyphicon-road",selected:!1},{nombre:"Alimentación",icon:"glyphicon glyphicon-cutlery",selected:!1},{nombre:"Guia",icon:"glyphicon glyphicon-user",selected:!1}],a.serviciosCheck=[],a.servicioSeleccionado=function(b){if(b.selected=!b.selected,b.selected)a.serviciosCheck.push(b.nombre);else{var c=a.serviciosCheck.indexOf(b.nombre);c>-1&&a.serviciosCheck.splice(c,1)}},a.opciones=[{nombre:"Disponibilidad",selected:!0,key:"disp"},{nombre:"Elije Tu Destino",selected:!1,key:"dest"},{nombre:"Elije Servicios",selected:!1,key:"serv"}],a.opcionSeleccionado=function(b){a.opcionSelected=b},a.opcionSelected=a.opciones[0],a.totalTour=function(){var b=0;return a.diaCheck&&a.destinosCheck.length>0&&a.serviciosCheck.length>0&&(3===a.diaCheck&&(b=180),2===a.diaCheck&&(b=100),1===a.diaCheck&&(b=60)),b}}]),angular.module("paketurApp").controller("NavCtrl",["$scope",function(a){function b(){angular.forEach(a.links,function(a){a.active=window.location.hash===a.hash})}a.links=[{route:"",name:"Inicio",active:!0,hash:"#/"},{route:"paquete",name:"Arma tu Paquete",active:!1,hash:"#/paquete"},{route:"about",name:"Información",active:!1,hash:"#/about"}],a.clickLink=function(b){angular.forEach(a.links,function(a){a.active=b.route===a.route})},b()}]);