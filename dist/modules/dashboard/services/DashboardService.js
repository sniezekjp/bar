define(["exports", "lazy"], function (exports, _lazy) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_lazy);

  // dependencies (do not remove)

  app.service("DashboardService", function ($http) {
    return {
      get: function get() {
        return $http.get("/data");
      }
    };
  });
});
//# sourceMappingURL=DashboardService.js.map