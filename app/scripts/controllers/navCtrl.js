'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:DeveloperCtrl
 * @description
 * # DeveloperCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('navCtrl', [])
  .controller('navigationControllerl', ['$scope', '$location', function ($scope, $location) {
  	$scope.items = [
		{path: '/locations', title: 'Addresses'},
		{path: '/developers', title: 'Developers'},
		{path: '/about', title: 'About'}
	];

	$scope.isActive = function(item) {
      if (item.path == $location.path()) {
        return true;
      }
      return false;
    };
    
  }]);


