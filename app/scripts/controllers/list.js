'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the buildingAddressesAppApp
 * filter tutorial: https://scotch.io/tutorials/sort-and-filter-a-table-using-angular
 */
angular.module('buildingAddressesAppApp')
  .controller('ListCtrl', function($scope, LocationStore) {

    $scope.locations = {};
    $scope.searchLocation = ''; //default search term

    LocationStore.query(function(response) {
    	console.log('response ' + response);
    	$scope.locations = response;
    });
    
  });
