'use strict';

describe('Controller: WarningnewsCtrl', function () {

  // load the controller's module
  beforeEach(module('warningcomFrontendApp'));

  var WarningnewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WarningnewsCtrl = $controller('WarningnewsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WarningnewsCtrl.awesomeThings.length).toBe(3);
  });
});
