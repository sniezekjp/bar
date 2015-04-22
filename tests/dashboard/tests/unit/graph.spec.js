define(["exports", "mocks", "modules/dashboard/directives/graph", "utils/TestUtil"], function (exports, _mocks, _modulesDashboardDirectivesGraph, _utilsTestUtil) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var mocks = _interopRequire(_mocks);

  var graph = _interopRequire(_modulesDashboardDirectivesGraph);

  var Util = _interopRequire(_utilsTestUtil);

  var util = new Util(module);

  describe("graph", function () {
    var $scope, elm;

    util.init();

    util.directive("<div graph></div>", function (scope, element) {
      $scope = scope;
      elm = element;
    });

    it("should have a value", function () {
      expect($scope.value).toBe("value");
      elm.find("a").click();
      expect($scope.value).toBe("value changed");
      elm.find("input").val("hello").trigger("input");
      expect($scope.value).toBe("hello");
    });

    it("should b awesome", function () {
      expect(true).toBe(true);
    });
  });
});
//# sourceMappingURL=graph.spec.js.map