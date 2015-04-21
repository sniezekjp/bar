import mocks from 'mocks';
import graph from 'modules/dashboard/directives/graph';

describe('graph', function () {
  var $scope, elm;
  beforeEach(module('app'));

  beforeEach(inject(function ($compile, $rootScope, $templateCache) {
    $scope = $rootScope.$new();
    elm = $compile('<div graph></div>')($scope);
    $rootScope.$digest();
  }));

  it('should have a value', function () {
    expect($scope.value).toBe("value");
    elm.find('a').click();
    expect($scope.value).toBe("value changed");
    elm.find('input').val('hello').trigger('input');
    expect($scope.value).toBe("hello");
  });
});