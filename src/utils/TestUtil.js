import mocks from 'mocks';

class Utils {

  constructor(module) {
    this.module = module;
  }

  init() {
    beforeEach(this.module('app'));
  }
  
  directive(template, cb) {
    var $scope, elm;
    beforeEach(inject(function ($compile, $rootScope, $templateCache) {
      $scope = $rootScope.$new();
      elm = $compile(template)($scope);
      $rootScope.$digest();
      cb($scope, elm);
    }));
  }
}

export default Utils;