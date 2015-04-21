import mocks from 'mocks';
import service from 'modules/dashboard/services/DashboardService';

describe('DashboardService', function () {
  var $httpBackend, requestHandler, Service;

  beforeEach(module('app'));

  describe('get()', function () {
    beforeEach(inject(function (DashboardService, _$httpBackend_) {
      Service = DashboardService;
      $httpBackend = _$httpBackend_;
      requestHandler = $httpBackend.when('GET', '/data');
    }));
    
    it('should handle success', function () {
      requestHandler.respond(200, {data:{}, messages:[], success: true});
      Service.get().success(function (res) {
        expect(res.success).toBe(true);
      });
      $httpBackend.flush();
    });

    it('should handle errors', function () {
      requestHandler.respond(500, {data:{}, messages:["500 Error!"], success: false});
      Service.get().error(function (res) {
        expect(res.success).toBe(false);
        expect(res.messages).toBeTruthy();
      });
      $httpBackend.flush();
    });    
  }); 
});