define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("quartermaster", {
      url: "/quartermaster",
      templateUrl: "modules/quartermaster/views/quartermaster.tpl.html",
      controller: "QuartermasterController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/quartermaster/controllers/QuartermasterController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map