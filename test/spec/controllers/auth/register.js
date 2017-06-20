'use strict';

describe('Controller: AuthRegisterCtrl', function () {

  // load the controller's module
  beforeEach(module('warningcomFrontendApp'));

  var AuthRegisterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AuthRegisterCtrl = $controller('AuthRegisterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AuthRegisterCtrl.awesomeThings.length).toBe(3);
  });
});
