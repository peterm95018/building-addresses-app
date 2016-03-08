'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:DeveloperCtrl
 * @description
 * # DeveloperCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('navCtrl', [])
  .controller('navigationController', ['$scope', '$location', 'Auth', function ($scope, $location, Auth) {

  	var vm = this;

  	// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in navigationController ' + vm.loggedIn);

  	$scope.items = [
  		{path: '/', title: 'Home'},
		{path: '/locations', title: 'Addresses'},
		{path: '/developers', title: 'Developers'},
		{path: '/login', title: 'Login'},
		{path: '/mailstops', title: 'Mail Stops'}

	];

	$scope.isActive = function(item) {
      if (item.path == $location.path()) {
        return true;
      }
      return false;
    };
    
  }]);


