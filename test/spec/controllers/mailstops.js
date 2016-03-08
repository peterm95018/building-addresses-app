'use strict';

describe('Controller: MailstopsCtrl', function () {

  // load the controller's module
  beforeEach(module('buildingAddressesAppApp'));

  var MailstopsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MailstopsCtrl = $controller('MailstopsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MailstopsCtrl.awesomeThings.length).toBe(3);
  });
});
