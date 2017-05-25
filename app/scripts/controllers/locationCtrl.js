'use strict';
/* use the $locations service to route us back
 * locationService is a service that provides
 * create, edit and list of locations
 */

angular.module('locationCtrl',['locationService', 'ui.router', 'sharedService'])

.controller('locationController', function($scope, $location, Location, Auth, SharedService) {

	var vm = this;

		// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in locationController ' + vm.loggedIn);

// now we have to figure out how to pass these location scope vars to map controller vars. or a service


$scope.placeMarker = function(lat, lng, assetName) {
	SharedService.placeMarker(lat, lng, assetName);
};


$scope.mapObject = SharedService.mapObject;

$scope.$watch('mapObject', function() {
	SharedService.mapObject = $scope.mapObject;
});

	// set a processing variable to show loading things
	vm.processing = true;

	vm.searchLocation = ''; //default search term

	// grab all the locations at page load
	Location.all()
		.success(function(data) {

			// when all the locations come back, remove the processing variable
			vm.processing = false;

			// bind the locations that come back to vm.locations
			vm.locations = data;
		});
})

// controller applied to user creation page
.controller('locationCreateController', function($location, Location, Auth) {

	var vm = this;

			// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in locationCreateController ' + vm.loggedIn);

	// variable to hide/show elements of the view
	// differentiates between create or edit pages
	vm.type = 'create';

	// function to create a location
	vm.saveLocation = function() {
		vm.processing = true;
		vm.message = '';

		// use the create function in the userService
		Location.create(vm.locationData)
			.success(function(data) {
				vm.processing = false;
				vm.locationData = {};
				vm.message = data.message;
			});
			$location.path('/locations');
	};

})



// controller applied to user edit page
// remove $routeParams and subsititue $stateProvider equivalent so we can get location_id
.controller('locationEditController', function($state, $location, Location, Auth) {

	var vm = this;

	// variable to hide/show elements of the view
	// differentiates between create or edit pages
	vm.type = 'edit';

			// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in locationController ' + vm.loggedIn);



	// get the location data for the location you want to edit
	// $routeParams is the way we grab data from the URL
	//Location.get($routeParams.location_id)
	Location.get($state.params.location_id)
		.success(function(data) {
			vm.locationData = data;
		});


	// function to delete a location
	vm.deleteLocation = function(id) {
		console.log('entered deleteLocation');
		vm.processing = true;

		Location.delete(id)
			.success(function(data) {

				// get all locations to update the table
				// you can also set up your api
				// to return the list of locations with the delete call
				Location.all()
					.success(function(data) {
						vm.processing = false;
						vm.locations = data;
					});

			});
			$location.path('/locations');
	};



	// function to save the location
	vm.saveLocation = function() {
		vm.processing = true;
		vm.message = '';

		console.log('logged in locationController ' + vm.loggedIn);

		// call the locationService function to update location
		// Location.update($routeParams.location_id, vm.locationData)
		Location.update($state.params.location_id, vm.locationData)
			.success(function(data) {
				vm.processing = false;

				// clear the form
				vm.locationData = {};

				// bind the message from our API to vm.message
				vm.message = data.message;
			});
$location.path('/locations');
	};

});
