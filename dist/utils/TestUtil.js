define(["exports", "module", "mocks"], function (exports, module, _mocks) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var mocks = _interopRequire(_mocks);

  var Utils = (function () {
    function Utils(module) {
      _classCallCheck(this, Utils);

      this.module = module;
    }

    _createClass(Utils, {
      init: {
        value: function init() {
          beforeEach(this.module("app"));
        }
      },
      directive: {
        value: function directive(template, cb) {
          var $scope, elm;
          beforeEach(inject(function ($compile, $rootScope, $templateCache) {
            $scope = $rootScope.$new();
            elm = $compile(template)($scope);
            $rootScope.$digest();
            cb($scope, elm);
          }));
        }
      }
    });

    return Utils;
  })();

  module.exports = Utils;
});
//# sourceMappingURL=TestUtil.js.map