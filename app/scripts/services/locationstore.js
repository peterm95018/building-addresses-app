'use strict';

/**
 * @ngdoc service
 * @name buildingAddressesAppApp.LocationStore
 * @description
 * # LocationStore
 * Factory in the buildingAddressesAppApp.
 */
angular.module('buildingAddressesAppApp')
  .factory('LocationStore', function($resource) {

  	// http://www.sitepoint.com/creating-crud-app-minutes-angulars-resource/
  	return $resource('http://128.114.96.140:8080/api/locations/:locationId',
  		{locationId: '@_id'}, {
  			update: {
  				method: 'PUT'
  			}
  		});

  });

  