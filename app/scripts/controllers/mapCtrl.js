'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('mapCtrl', ['ui-leaflet'])
  .controller('mapController', ['$scope', '$location', function ($scope, $location) {
    
    angular.extend($scope, {
    	center: {
    		lat: 36.9944,
    		lng: -122.0622,
    		zoom: 15
    	}
  });

$scope.$on("centerUrlHash", function(event, centerHash) {
	console.log("url", centerHash);
	$location.search({ c: centerHash });
});

$scope.changeLocation = function(centerHash) {
                $location.search({ c: centerHash });
            };


}]);
