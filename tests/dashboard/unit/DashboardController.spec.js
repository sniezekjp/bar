define(["exports", "mocks", "modules/dashboard/controllers/DashboardController"], function (exports, _mocks, _modulesDashboardControllersDashboardController) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var mocks = _interopRequire(_mocks);

  var dash = _interopRequire(_modulesDashboardControllersDashboardController);

  describe("DashboardController", function () {
    beforeEach(module("app"));

    var $controller;
    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
    }));

    describe("tester()", function () {
      var $scope, ctrl;

      beforeEach(function () {
        $scope = {};
        ctrl = $controller("DashboardController", { $scope: $scope, User: {} });
      });

      it("should change the text to changed", function () {
        expect($scope.text).toBe("hi");
        $scope.click();
        expect($scope.text).toBe("something else");
      });
    });
  });
});
//# sourceMappingURL=DashboardController.spec.js.map