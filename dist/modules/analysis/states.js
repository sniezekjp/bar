define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("analysis", {
      url: "/analysis",
      templateUrl: "modules/analysis/views/analysis.tpl.html",
      controller: "AnalysisController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/analysis/controllers/AnalysisController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map