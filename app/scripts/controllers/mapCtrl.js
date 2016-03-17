'use strict';

/**
 * @ngdoc function
 * @name buildingAddressesAppApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the buildingAddressesAppApp
 */
angular.module('mapCtrl', ['ui-leaflet'])
  .controller('mapController', ['$scope', '$location', function ($scope, $location, MapService) {



    $scope.mapGoTo = function(lat,lng,title) {

        var mapObject = new Object();

        alert('hello from mapController ' + lat + ' ' + lng + ' ' + title);

        mapObject.lat = lat;
        mapObject.lng = lng;
        mapObject.title = title;
        console.log(mapObject);


        return mapObject;
    };



    angular.extend($scope, {
    	center: {
    		lat: 36.9944,
    		lng: -122.0622,
    		zoom: 15
            // lat: $scope.lat,
            // lng: $scope.lng,
            // zoom: 15
    	},
        markers: {
            // ourMarker: {
            //     lat: $scope.lat,
            //     lng: $scope.lng,
            //     message: $scope.title,
            //     focus: true,
            //     draggable: false
            // }
        },
        defaults: {
            scrollWheelZoom: false
        }
  });

    // have to add $scope to the controller



 

    // Pass the incoming lat,lng,title to a map object
    // then draw the map. 


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
