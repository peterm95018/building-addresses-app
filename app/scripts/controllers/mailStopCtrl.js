'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:MailstopsCtrl
 * @description
 * # MailstopsCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('mailStopCtrl', ['mailStopService', 'sharedService'])
  .controller('mailStopController', function($scope, MailStop, $location, Auth, SharedService) {

   var vm = this;

		// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in mailStopsController ' + vm.loggedIn);

  $scope.placeMarker = function(lat, lng, assetName) {
  	SharedService.placeMarker(lat, lng, assetName);
  };

	// set a processing variable to show loading things
	vm.processing = true;

	vm.searchLocation = ''; //default search term

	// grab all the mail stops at page load
	MailStop.all()
		.success(function(data) {

			// when all the locations come back, remove the processing variable
			vm.processing = false;

			// bind the mailstops that come back to vm.mailstops
			vm.mailstops = data;
		});

  })
  .controller('mailStopEditController', function($state, $location, MailStop, Auth) {
	var vm = this;

	// differentiates between create or edit pages
	vm.type = 'edit';

			// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in mailStopEditController ' + vm.loggedIn);


	// get the location data for the location you want to edit
	// $routeParams is the way we grab data from the URL
	//Location.get($routeParams.location_id)
	MailStop.get($state.params.mailstop_id)
		.success(function(data) {
			vm.mailStopData = data;
			console.log(vm.mailStopData);
		});


		// function to delete a location
	vm.deleteMailStop = function(id) {
		console.log('entered deleteMailStop');
		vm.processing = true;

		MailStop.delete(id)
			.success(function(data) {

				// get all users to update the table
				// you can also set up your api
				// to return the list of users with the delete call
				MailStop.all()
					.success(function(data) {
						vm.processing = false;
						vm.mailstops = data;
					});

			});
			$location.path('/mailstops');
	};



	// function to save the user
	vm.saveMailStop = function() {
		vm.processing = true;
		vm.message = '';

		// call the userService function to update
		// Location.update($routeParams.location_id, vm.locationData)
		MailStop.update($state.params.mailstop_id, vm.mailStopData)
			.success(function(data) {
				vm.processing = false;

				// clear the form
				vm.mailStopData = {};

				// bind the message from our API to vm.message
				vm.message = data.message;
			});
$location.path('/mailstops');
	};

});
