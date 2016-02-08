'use strict';

describe('Controller: DeveloperCtrl', function () {

  // load the controller's module
  beforeEach(module('buildingAddressesAppApp'));

  var DeveloperCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeveloperCtrl = $controller('DeveloperCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeveloperCtrl.awesomeThings.length).toBe(3);
  });
});
