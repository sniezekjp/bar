import angular from 'angular';
import mocks from 'mocks';
import controller from 'modules/account/controllers/AccountController';

describe('AccountController', function() {
  
  beforeEach(module('app'));

  var AccountService = {
    create: function() {
      return true;
    },
    update: function() {
      return true;
    }
  };

  var $controller;
  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
  }));

  it('should exist', function() {
    
    var instance = $controller('AccountController', {
      AccountService: AccountService
    });

    expect(angular.isObject(instance)).toBe(true);
    expect(instance.edit()).toBe(true);
    expect(instance.create()).toBe(true);
    expect(instance.update()).toBe(true);
  });

  it('should do something else as well', function() {
    expect(true).toBe(true);
  });
});