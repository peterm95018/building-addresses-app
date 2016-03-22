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

// We can't get a maker until the $scope.$on() function fires.
// So, we may want to pluck off the componens in the URL


    var theHash = $location.search(); // just the good stuff separated by ":"
    var tempLatLng = theHash.c;
    var ourResult = tempLatLng.split(":");
    console.log(ourResult);

$scope.ourLat = parseFloat(ourResult[0]);
$scope.ourLng = parseFloat(ourResult[1]);
$scope.ourTitle = $location.search().title;


    angular.extend($scope, {
    	center: {
    		lat: 36.9944,
    		lng: -122.0622,
    		zoom: 15
    	},
        markers: {
            markers: {
            //mainMarker: angular.copy($scope.markers)
            lat: $scope.ourLat,
            lng: $scope.ourLng,
            message: $scope.ourTitle,
            draggable: false,
            focus: true
        }
        },

        defaults: {
            scrollWheelZoom: false
        }
  });

   

$scope.$on("centerUrlHash", function(event, centerHash) {

    //set our title from URL
    $scope.ourTitle = $location.search().title;

    // centerHash is a format from map directive map?c:lat:lng:z
    var theHash = centerHash;
    var ourResult = theHash.split(":");

    $scope.markers = [];
    $scope.markers.push({
        lat: parseFloat(ourResult[0]),
        lng: parseFloat(ourResult[1]),
        message: $scope.ourTitle,
        draggable: false
    });


	$location.search({ c: centerHash });
});

    $scope.changeLocation = function(centerHash) {
            $location.search({ c: centerHash });
    };


}]);
