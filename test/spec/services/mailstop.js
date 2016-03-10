'use strict';

describe('Service: MailStop', function () {

  // load the service's module
  beforeEach(module('buildingAddressesAppApp'));

  // instantiate service
  var MailStop;
  beforeEach(inject(function (_MailStop_) {
    MailStop = _MailStop_;
  }));

  it('should do something', function () {
    expect(!!MailStop).toBe(true);
  });

});
