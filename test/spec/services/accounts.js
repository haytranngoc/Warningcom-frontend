'use strict';

describe('Service: accounts', function () {

  // load the service's module
  beforeEach(module('warningcomFrontendApp'));

  // instantiate service
  var accounts;
  beforeEach(inject(function (_accounts_) {
    accounts = _accounts_;
  }));

  it('should do something', function () {
    expect(!!accounts).toBe(true);
  });

});
