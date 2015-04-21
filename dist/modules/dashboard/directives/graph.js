define(["exports", "lazy"], function (exports, _lazy) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_lazy);

  app.directive("graph", function () {
    return {
      templateUrl: "modules/dashboard/views/graph.tpl.html",
      link: function link($scope) {
        $scope.value = "value";
        $scope.click = function () {
          $scope.value = "value changed";
        };
      }
    };
  });
});
//# sourceMappingURL=graph.js.map