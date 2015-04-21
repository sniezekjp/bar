define(["exports", "mocks", "modules/dashboard/directives/graph"], function (exports, _mocks, _modulesDashboardDirectivesGraph) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var mocks = _interopRequire(_mocks);

  var graph = _interopRequire(_modulesDashboardDirectivesGraph);

  describe("graph", function () {
    var $scope, elm;
    beforeEach(module("app"));

    beforeEach(inject(function ($compile, $rootScope, $templateCache) {
      $scope = $rootScope.$new();
      elm = $compile("<div graph></div>")($scope);
      $rootScope.$digest();
    }));

    it("should have a value", function () {
      expect($scope.value).toBe("value");
    });
  });
});
//# sourceMappingURL=graph.spec.js.map