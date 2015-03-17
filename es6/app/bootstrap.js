import router from 'router';
import lazy from 'lazy';
import angular from 'angular';
import $ from 'jquery';
import home from 'modules/home/states';
import deal from 'modules/deal/states';
import account from 'modules/account/states';
import dashboard from 'modules/dashboard/states';
import email from 'modules/email/states';
import calllog from 'modules/calllog/states';
import custom from 'modules/custom/states';
import roadshow from 'modules/roadshow/states';
/// dependencies (do not remove)

$(document).ready(function() {
  angular.bootstrap(document, ['app']);
});