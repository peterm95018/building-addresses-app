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
    	},
        markers: {

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
