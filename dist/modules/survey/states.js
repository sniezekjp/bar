define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("survey", {
      url: "/survey",
      templateUrl: "modules/survey/views/survey.tpl.html",
      controller: "SurveyController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/survey/controllers/SurveyController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map