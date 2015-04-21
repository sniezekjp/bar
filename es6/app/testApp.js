import angular from 'angular';
var app = angular.module('app', []);
app.config(function() { console.log('test app bootstrapped'); });
export default app;