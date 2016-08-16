angular.module('mapService', [])

.factory('MapService', function() {

	// create a new object
	var mapFactory = {};

	return {
		mapFactory: function mapGoTo(lat,lng) {
			mapFactory.lat = lat,
			mapFactory.lng = lng

			return mapFactory;
		}
	}
});