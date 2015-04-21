define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("dashboard", {
      url: "/dash",
      templateUrl: "modules/dashboard/views/dashboard.tpl.html",
      controller: "DashboardController",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/dashboard/controllers/DashboardController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map