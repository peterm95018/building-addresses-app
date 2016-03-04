'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:DeveloperCtrl
 * @description
 * # DeveloperCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('navCtrl', [])
  .controller('navigationController', ['$scope', '$location', function ($scope, $location) {
  	$scope.items = [
  		{path: '/', title: 'Home'},
		{path: '/locations', title: 'Addresses'},
		{path: '/developers', title: 'Developers'},
		{path: '/login', title: 'Login'},
		{path: '/mail-stops', title: 'Mail Stops'}

	];

	$scope.isActive = function(item) {
      if (item.path == $location.path()) {
        return true;
      }
      return false;
    };
    
  }]);


