define(["exports", "app"], function (exports, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  /// dependencies

  app.config(function ($stateProvider) {
    $stateProvider.state("social-media", {
      url: "/social-media",
      templateUrl: "modules/social-media/views/social-media.tpl.html",
      controller: "SocialMediaController as ctrl",
      resolve: {
        lazy: function lazy(Lazy) {
          return Lazy.load("modules/social-media/controllers/SocialMediaController");
        }
      }
    });
  });
});

/// states (do not remove)
//# sourceMappingURL=states.js.map