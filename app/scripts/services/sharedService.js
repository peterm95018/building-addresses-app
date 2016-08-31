'use strict';
/**
 * This is the documentation for what this service factory
 * 
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
	}

});
