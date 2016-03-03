'use strict';

/**
 * @ngdoc service
 * @name buildingAddressesAppApp.LocationStore
 * @description
 * # LocationStore
 * Factory in the buildingAddressesAppApp.
 * REF: http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
 */

/*
angular.module('buildingAddressesAppApp')
  .factory('LocationStore', function($resource) {

  	return $resource('http://128.114.96.140:8080/api/locations/:locationId',
  		{locationId: '@_id'}, {
  			update: {
  				method: 'PUT'
  			}
  		});

  });
  */

  /** 
   * Note that the change from $routeParams to $state.params.location_id 
   * just uses the placeholder id here
   */

angular.module('locationService', [])

.factory('Location', function($http) {

	// create a new object
	var locationFactory = {};

	// get a single user
	locationFactory.get = function(id) {
		return $http.get('http://128.114.96.140:8080/api/locations/' + id);
	};

	// get all users
	locationFactory.all = function() {
		return $http.get('http://128.114.96.140:8080/api/locations/');
	};

	// create a user
	locationFactory.create = function(userData) {
		return $http.post('http://128.114.96.140:8080/api/locations/', locationData);
	};

	// update a user
	locationFactory.update = function(id, userData) {
		return $http.put('http://128.114.96.140:8080/api/locations/' + id, locationData);
	};

	// delete a user
	locationFactory.delete = function(id) {
		return $http.delete('http://128.114.96.140:8080/api/locations/' + id);
	};

	// return our entire userFactory object
	return locationFactory;

});

  