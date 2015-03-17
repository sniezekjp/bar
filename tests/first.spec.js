define(["angular", "mocks", "modules/account/controllers/AccountController"], function(angular) {
  
  describe('AccountController', function() {
    
    beforeEach(module('app'));

    var AccountService = {
      create: function() {
        console.log('creating the world');
        return true;
      }
    };

    var $controller;
    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
    }));

    it('should exist', function() {
      
      var instance = $controller('AccountController', {
        AccountService: AccountService
      });

      expect(angular.isObject(instance)).toBe(true);
      expect(instance.edit()).toBe(true);
      expect(instance.create()).toBe(true);
    });
  });
});