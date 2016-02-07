'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('buildingAddressesAppApp')
  .controller('ListCtrl', function($scope, LocationStore) {

    $scope.locations = {};

    LocationStore.query(function(response) {
    	console.log('response ' + response);
    	$scope.locations = response;
    });
    
  });
