'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('mapCtrl', ['ui-leaflet'])
  .controller('mapController', ['$scope', '$location', 'SharedService', 'leafletData',
  	function ($scope, $location, SharedService, leafletData) {

// BEGIN Shared Services rewrite
$scope.mapObject = SharedService.mapObject;
var mainMarker = {
  lat: parseFloat($scope.mapObject.lat),
  lng: parseFloat($scope.mapObject.lng),
  message: $scope.mapObject.message,
  focus: true,
  draggable: false
};

// condition to setup default map if we reload the page
if (Object.getOwnPropertyNames($scope.mapObject).length === 0) {
  // empty, use default map and no markers, zoom out to 14
  angular.extend($scope, {
      center: {
          lat: 36.9944,
          lng: -122.0609,
  		    zoom: 14
      },
          defaults: {
          scrollWheelZoom: false,
          zoomControlPosition: 'topright'
      }
  });
}
// our dynamic data coming from a click in the list of addresses
else {
  angular.extend($scope, {
      center: {
          lat: parseFloat($scope.mapObject.lat),
          lng: parseFloat($scope.mapObject.lng),
  		    zoom: 16
      },
          markers: {
            theMarker: angular.copy(mainMarker)
          },
          defaults: {
          scrollWheelZoom: false,
          zoomControlPosition: 'topright'
      }
  });
}

}]);
