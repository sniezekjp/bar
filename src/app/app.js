
import angular from 'angular';

var app = angular.module('app', ['ui.router'])

.config(function($urlRouterProvider) {
  $urlRouterProvider.otherwise('/dash');
});

export default app;