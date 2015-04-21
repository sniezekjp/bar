define(["exports", "lazy"], function (exports, _lazy) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_lazy);

  // dependencies (do not remove)

  app.controller("DashboardController", function ($scope) {
    $scope.tester = function () {
      return "hi";
    };
    $scope.text = "hi";
    $scope.click = function () {
      $scope.text = "something else";
    };
  });
});
//# sourceMappingURL=DashboardController.js.map