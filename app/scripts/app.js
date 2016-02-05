'use strict';

/**
 * @ngdoc overview
 * @name buildingAddressesAppApp
 * @description
 * # buildingAddressesAppApp
 *
 * Main module of the application.
 */
var app = angular
  .module('buildingAddressesAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('list', {
      url: '/list',
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'
    })
    .state('edit', {
      url: '/edit/:locationId',
      templateUrl: 'views/edit.html',
      controller: 'EditCtrl'
  });

    $urlRouterProvider.otherwise('/');

  });

  // app.config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl',
  //       controllerAs: 'main'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl',
  //       controllerAs: 'about'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
