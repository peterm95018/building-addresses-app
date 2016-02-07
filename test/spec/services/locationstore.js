'use strict';

describe('Service: LocationStore', function () {

  // load the service's module
  beforeEach(module('buildingAddressesAppApp'));

  // instantiate service
  var LocationStore;
  beforeEach(inject(function (_LocationStore_) {
    LocationStore = _LocationStore_;
  }));

  it('should do something', function () {
    expect(!!LocationStore).toBe(true);
  });

});
