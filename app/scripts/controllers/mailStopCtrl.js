'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:MailstopsCtrl
 * @description
 * # MailstopsCtrl
 * Controller of the buildingAddressesAppApp
 */

 
angular.module('mailStopCtrl', ['mailStopService'])
  .controller('mailStopController', function(MailStop, $location, Auth) {
   
   var vm = this;

		// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();

	console.log('logged in mailStopsController ' + vm.loggedIn);

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



  });
