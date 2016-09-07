'use strict';
/**
 * This is the documentation for what this service factory
 * I take the parameters lat, lng, assetName from the ng-click 
 * in the sidebar list. I create an empty mapObject and then
 * assign the values coming in and then return the mapObject.
 */

 angular.module('sharedService', [])

.service('SharedService', function(){
	var self = this;
	this.mapObject = {};


	this.placeMarker = function(lat, lng, assetName) {
	self.mapObject.lat = lat;
	self.mapObject.lng = lng;
	self.mapObject.message = assetName;
	//console.log(self.mapObject);
	return self.mapObject;
	};

});
