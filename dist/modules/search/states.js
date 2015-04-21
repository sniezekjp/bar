define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("search", {
      url: "/search",
      templateUrl: "modules/search/views/search.tpl.html",
      controller: "SearchController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/search/controllers/SearchController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map