'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('buildingAddressesAppApp')
  .controller('EditCtrl', function($scope, $state, $stateParams, LocationStore) {

  	// we use save on the Edit form to kick off the $update process
    $scope.save = function() {
        $scope.location.$update(function() {
            
        });
        $state.go('list');
    };

    $scope.loadLocationStore = function() {
        $scope.location = LocationStore.get({locationId: $stateParams.locationId});
    };

    $scope.loadLocationStore();


});


