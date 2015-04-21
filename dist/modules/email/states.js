define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("email", {
      url: "/email",
      templateUrl: "modules/email/views/email.tpl.html",
      controller: "EmailController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/email/controllers/EmailController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map