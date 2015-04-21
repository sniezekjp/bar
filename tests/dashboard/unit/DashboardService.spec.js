define(["exports", "mocks", "modules/dashboard/services/DashboardService"], function (exports, _mocks, _modulesDashboardServicesDashboardService) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var mocks = _interopRequire(_mocks);

  var service = _interopRequire(_modulesDashboardServicesDashboardService);

  describe("DashboardService", function () {
    var $httpBackend, requestHandler, Service;

    beforeEach(module("app"));

    describe("get()", function () {
      beforeEach(inject(function (DashboardService, _$httpBackend_) {
        Service = DashboardService;
        $httpBackend = _$httpBackend_;
        requestHandler = $httpBackend.when("GET", "/data");
      }));

      it("should handle success", function () {
        requestHandler.respond(200, { data: {}, messages: [], success: true });
        Service.get().success(function (res) {
          expect(res.success).toBe(true);
        });
        $httpBackend.flush();
      });

      it("should handle errors", function () {
        requestHandler.respond(500, { data: {}, messages: ["500 Error!"], success: false });
        Service.get().error(function (res) {
          expect(res.success).toBe(false);
          expect(res.messages).toBeTruthy();
        });
        $httpBackend.flush();
      });
    });
  });
});
//# sourceMappingURL=DashboardService.spec.js.map