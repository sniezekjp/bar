define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("quiz", {
      url: "/quiz",
      templateUrl: "modules/quiz/views/quiz.tpl.html",
      controller: "QuizController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/quiz/controllers/QuizController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map