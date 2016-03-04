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
    // 'ngResource',
    // 'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'mainCtrl',
    'userCtrl',
    'locationCtrl',
    'navCtrl',
    'authService',
    'locationService',
    'userService',

    ]);

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'mainController',
      controllerAs: 'login'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'views/about.html',

    })
    .state('developer', {
      url: '/developer',
      templateUrl: 'views/developer.html',

    })
    .state('list', {
      url: '/locations',
      templateUrl: 'views/list.html',
      controller: 'locationController',
      controllerAs: 'location'
    })
    .state('edit', {
      url: '/locations/:location_id',
      templateUrl: 'views/edit.html',
      controller: 'locationEditController',
      controllerAs: 'location'
    })
    .state('create', {
      url: '/locations/create',
      templateUrl: 'views/edit.html',
      controller: 'locationCreateControl',
      controllerAs: 'location'
    });

    $urlRouterProvider.otherwise('/');

  });

// application configuration to integrate token into requests
app.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});
