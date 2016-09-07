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


// var theHash = $location.search(); // just the good stuff separated by ":"
// var tempLatLng = theHash.c;
// var ourResult = tempLatLng.split(":");
// //console.log(ourResult);

// $scope.ourLat = parseFloat(ourResult[0]);
// $scope.ourLng = parseFloat(ourResult[1]);
// $scope.ourTitle = $location.search().title;


//     angular.extend($scope, {
//     	center: {
//     		lat: 36.9944,
//     		lng: -122.0622,
//     		zoom: 15
//     	},
//         markers: {
//             markers: {
//             //mainMarker: angular.copy($scope.markers)
//             lat: $scope.ourLat,
//             lng: $scope.ourLng,
//             message: $scope.ourTitle,
//             draggable: false,
//             focus: true
//         }
//         },

//         defaults: {
//             scrollWheelZoom: false
//         }
//   });

// BEGIN Shared Services rewrite
$scope.mapObject = SharedService.mapObject;
//$scope.myMarkers = {};
//$scope.markers = new Array();

$scope.$watch('mapObject["lat"]', function() {
	$scope.mapObject = SharedService.mapObject;

	// destroy markers before recreating
	// keep one marker on map at a time
	$scope.markers = new Array();

	
	// create the marker object
	$scope.markers.push({
		lat: $scope.mapObject.lat,
		lng: $scope.mapObject.lng,
		message: $scope.mapObject.message,
		draggable: false,
		focus: true
	});


	// move center of map to selected items coords and zoom in
    leafletData.getMap().then(function(map) {
    	map.setView(new L.LatLng($scope.mapObject.lat, $scope.mapObject.lng),17);
    });

}, true);

// END Shared Services

angular.extend($scope, {
    center: { 
        lat: 36.9944,
        lng: -122.0622,
		zoom: 16
    },
        defaults: {
        scrollWheelZoom: false,
        zoomControlPosition: 'topright'
    }
});



   

// $scope.$on("centerUrlHash", function(event, centerHash) {

//     //set our title from URL
//     $scope.ourTitle = $location.search().title;

//     // centerHash is a format from map directive map?c:lat:lng:z
//     var theHash = centerHash;
//     var ourResult = theHash.split(":");

//     $scope.markers = [];
//     $scope.markers.push({
//         lat: parseFloat(ourResult[0]),
//         lng: parseFloat(ourResult[1]),
//         message: $scope.ourTitle,
//         draggable: false
//     });


// 	$location.search({ c: centerHash });
// });

//     $scope.changeLocation = function(centerHash) {
//             $location.search({ c: centerHash });
//     };


}]);
