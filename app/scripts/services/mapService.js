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

