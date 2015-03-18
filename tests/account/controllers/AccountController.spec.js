define(["exports", "angular", "mocks", "modules/account/controllers/AccountController"], function (exports, _angular, _mocks, _modulesAccountControllersAccountController) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var angular = _interopRequire(_angular);

  var mocks = _interopRequire(_mocks);

  var controller = _interopRequire(_modulesAccountControllersAccountController);

  describe("AccountController", function () {

    beforeEach(module("app"));

    var AccountService = {
      create: function create() {
        return true;
      },
      update: function update() {
        return true;
      }
    };

    var $controller;
    beforeEach(inject(function ($injector) {
      $controller = $injector.get("$controller");
    }));

    it("should exist", function () {

      var instance = $controller("AccountController", {
        AccountService: AccountService
      });

      expect(angular.isObject(instance)).toBe(true);
      expect(instance.edit()).toBe(true);
      expect(instance.create()).toBe(true);
      expect(instance.update()).toBe(true);
    });

    it("should do something else as well", function () {
      expect(true).toBe(true);
    });
  });
});
//# sourceMappingURL=AccountController.spec.js.map