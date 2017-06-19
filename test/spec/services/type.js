'use strict';

describe('Service: type', function () {

  // load the service's module
  beforeEach(module('warningcomFrontendApp'));

  // instantiate service
  var type;
  beforeEach(inject(function (_type_) {
    type = _type_;
  }));

  it('should do something', function () {
    expect(!!type).toBe(true);
  });

});
