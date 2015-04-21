define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("form", {
      url: "/form",
      templateUrl: "modules/form/views/form.tpl.html",
      controller: "FormController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/form/controllers/FormController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map