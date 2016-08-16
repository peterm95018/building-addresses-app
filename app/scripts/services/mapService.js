app.service('mapService', function() {
   
    var self = this;
    this.name = 'John Doe';

    var mapObject = {};
    
    this.namelength = function() {
      
        return self.name.length;
        
    };

    this.mapObject = function(lat, lng, assetName) {

		mapObject.lat = lat;
		mapObject.lng = lng;
		mapObject.assetName = assetName;

		return mapObject;
    };
    
});














// app.service('mapService', function() {
	
// 	var self = this;
// 	var items = [];
// 	var mapObject = {};

// 	mapObject.add = function(lat, lng, title) {
	
// 	items.push(lat);
// 	items.push(lng);
// 	items.push(title);
	
// 	};

// 	return mapObject;

// });




// angular.module('mapService', [])
// .factory('mapService', [function() {
	
// 	var self = this;
// 	var items = [];
// 	var mapObject = {};

// 	this.createArray = function(lat, lng, assetName) {
// 		items.lat = lat;
// 		items.lng = lng;
// 		items.assetName = assetName;

// 		console.log('items ' + items);

// 		return items;


// 	};

// 	return mapObject;

// }]);








// angular.module('mapService', [])
// .factory('basket', [function () {
	
// var mapObject = {};
// var items = [];

// 	mapObject.add = function(lat, lng, title) {
// 		items.push(lat);
// 		items.push(lng);
// 		items.push(title);

// 		console.log(lat);
// 		console.log(lng);
// 		console.log(title);

// 		console.log('items ' + items);
// 	}


// return mapObject;

// }]);