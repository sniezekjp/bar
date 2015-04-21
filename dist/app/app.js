define(["exports", "module", "angular"], function (exports, module, _angular) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var angular = _interopRequire(_angular);

  var app = angular.module("app", ["ui.router"]).config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise("/dash");
  }).factory("ModuleList", function () {
    var list = [];
    return {
      add: function add(module) {
        list.push(module);
      },
      get: function get() {
        return list;
      }
    };
  });

  module.exports = app;
});
//# sourceMappingURL=app.js.map