
import angular from 'angular';

var app = angular.module('app', ['ui.router'])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})

.factory('ModuleList', function() {
  var list = [];
  return {
    add: function(module) {
      list.push(module);
    },
    get: function() {
      return list;
    }
  };
});

export default app;