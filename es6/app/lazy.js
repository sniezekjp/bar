import app from 'app';
import require from 'require';

app.provider('Lazy', function() {
  function factory($q) {
    return {
      load: function(info) {
        var defer = $q.defer();
        if(!angular.isArray(info)) {
          info = [info];
        }
        require(info, function() {
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

var provider: any = {};
app.config(function($provide, $controllerProvider, $compileProvider, $filterProvider) {
  provider.factory = $provide.factory;
  provider.service = $provide.service;
  provider.directive = $compileProvider.directive;
  provider.filter = $filterProvider.register;
  provider.controller = $controllerProvider.register;
});

export default provider;