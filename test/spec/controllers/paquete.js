'use strict';

describe('Controller: PaqueteCtrl', function () {

  // load the controller's module
  beforeEach(module('paketurApp'));

  var PaqueteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaqueteCtrl = $controller('PaqueteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
