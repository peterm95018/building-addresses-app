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
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'userCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .state('developer', {
      url: '/developer',
      templateUrl: 'views/developer.html',
      controller: 'DeveloperCtrl'
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
    })
    .state('add', {
      url: '/add',
      templateUrl: 'views/edit.html',
      controller: 'AddCtrl'
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
