import mocks from 'mocks';
import graph from 'modules/dashboard/directives/graph';
import Util from 'utils/TestUtil';

var util = new Util(module);

describe('graph', function () {
  var $scope, elm;
  
  util.init();
  
  util.directive('<div graph></div>', function(scope, element) {
    $scope = scope;
    elm = element;
  });

  it('should have a value', function () {
    expect($scope.value).toBe("value");
    elm.find('a').click();
    expect($scope.value).toBe("value changed");
    elm.find('input').val('hello').trigger('input');
    expect($scope.value).toBe("hello");
  });
});