define(["exports", "module", "app"], function (exports, module, _app) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var app = _interopRequire(_app);

  app.provider("Lazy", function () {
    function factory($q) {
      return {
        load: function load(deps) {
          var defer = $q.defer();
          if (!angular.isArray(deps)) {
            deps = [deps];
          }
          require(deps, function () {
            defer.resolve();
          });
          return defer.promise;
        }
      };
    }
    return {
      $get: factory
    };
  });

  var provider = {};
  app.config(function ($provide, $controllerProvider, $compileProvider, $filterProvider) {
    provider.factory = $provide.factory;
    provider.service = $provide.service;
    provider.directive = $compileProvider.directive;
    provider.filter = $filterProvider.register;
    provider.controller = $controllerProvider.register;
  });

  module.exports = provider;
});
//# sourceMappingURL=lazy.js.map