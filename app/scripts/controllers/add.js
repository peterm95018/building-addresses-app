'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:AddCtrl
 * @description
 * # AddCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('buildingAddressesAppApp')
  .controller('AddCtrl', function($scope, $state, LocationStore) {

  $scope.location = new LocationStore();

  $scope.save = function() {
  	  LocationStore.save($scope.location, function() {
  	});
  	  $state.go('list');
  };

});

