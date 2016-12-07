'use strict';

/**
 * @ngdoc overview
 * @name clientePensionApp
 * @description
 * # clientePensionApp
 *
 * Main module of the application.
 */
angular
  .module('clientePensionApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/sustituto_registro',{
        templateUrl: 'views/sustituto_registro.html',
        controller:'SustitutoRegistroCtrl',
        controllerAs: 'sustitutoregistro'
      })
      .when('/nomina_registro', {
        templateUrl: 'views/nomina_registro.html',
        controller: 'NominaRegistroCtrl',
        controllerAs: 'nominaregistro'
      })
      .when('/preliquidacion_registro', {
        templateUrl: 'views/preliquidacion_registro.html',
        controller: 'PreliquidacionRegistroCtrl',
        controllerAs: 'preliquidacionregistro'
      })
      .when('/preliquidacion_detalle', {
        templateUrl: 'views/preliquidacion_detalle.html',
        controller: 'PreliquidacionDetalleCtrl',
        controllerAs: 'preliquidaciondetalle'
      })
      .when('/novedad', {
        templateUrl: 'views/novedad.html',
        controller: 'NovedadCtrl',
        controllerAs: 'novedad'
      })
      .when('/novedad_funcionario', {
        templateUrl: 'views/novedad_funcionario.html',
        controller: 'NoverdadFuncionarioCtrl',
        controllerAs: 'novedadFuncionario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
