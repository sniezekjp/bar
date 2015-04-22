import mocks from 'mocks';
import dash from 'modules/dashboard/controllers/DashboardController';

describe('DashboardController', function() {
  beforeEach(module('app'));

  var $controller;
  beforeEach(inject(function (_$controller_) {
    $controller = _$controller_;
  }));

  describe('tester()', function () {
    var $scope, ctrl;

    beforeEach(function () {  
      $scope = {};
      ctrl = $controller('DashboardController', { $scope: $scope, User: {} });
    });

    it('should change the text to changed', function () {
      expect($scope.text).toBe("hi");
      $scope.click();
      expect($scope.text).toBe("something else");
    });
  });
});