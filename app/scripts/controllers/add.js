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

  // set ng-show on edit.html to hide delete button in add mode
  $scope.editMode = false;

  $scope.save = function() {
  	  LocationStore.save($scope.location, function() {
  	});
  	  $state.go('list');
  };

});

