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
  .module('buildingAddressesApp', [
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
    'mapCtrl',
    'mailStopCtrl',
    'mailStopService',
    'angularUtils.directives.dirPagination'

    ]);

  app.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/main.html',
      controller: 'mainController',
      controllerAs: 'main'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'mainController',
      controllerAs: 'login'
    })
    .state('logout', {
      url: '/logout',
      templateUrl: 'views/login.html',
      controller: 'mainController',
      controllerAs: 'login'
    })
    .state('mail-stops', {
	 url: '/mail-stops',
	 $templateUrl: 'views/mail-stops.html',
	 controller: '',
	 controllerAs: ''
    })
    .state('developers', {
      url: '/developers',
      templateUrl: 'views/developer.html',
    })
    .state('list', {
      url: '/locations',
      templateUrl: 'views/list.html',
      controller: 'locationController',
      controllerAs: 'location'
    })
    .state('create', {
      url: '/locations/create',
      templateUrl: 'views/edit.html',
      controller: 'locationCreateController',
      controllerAs: 'location'
    })
    .state('edit', {
      url: '/locations/:location_id',
      templateUrl: 'views/edit.html',
      controller: 'locationEditController',
      controllerAs: 'location'
    })

    .state('users', {
	  url: '/users',
	  templateUrl: 'views/users/all.html',
	  controller: 'userController',
	  controllerAs: 'user'
    })
    .state('usersCreate', {
	  url: '/users/create',
	  templateUrl: 'views/users/single.html',
	  controller: 'userCreateController',
	  controllerAs: 'user'
    })
     .state('usersEdit', {
	  url: '/users/:user_id',
	  templateUrl: 'views/users/single.html',
	  controller: 'userEditController',
	  controllerAs: 'user'
    })
    .state('map', {
	  url: '/map',
	  templateUrl: 'views/map.html',
	  controller: 'mapController',
	  controllerAs: 'map'
    })
    .state('mailstops', {
      url: '/mailstops',
      templateUrl: 'views/mailstops.html',
      controller: 'mailStopController',
      controllerAs: 'mailstop'
    })
    .state('editmailstop', {
	 url: '/mailstops/:mailstop_id',
	 templateUrl: 'views/mailstopsedit.html',
	 controller: 'mailStopEditController',
	 controllerAs: 'mailstop'
    });

    // $locationProvider.html5Mode({
    //   enabled: true,
    //   requireBase: false
    // });

    $urlRouterProvider.otherwise('/');

  });

// application configuration to integrate token into requests
app.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});
