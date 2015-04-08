import router from 'router';
import lazy from 'lazy';
import angular from 'angular';
import components from '../components/components';
import account from 'modules/account/states';
import calllog from 'modules/calllog/states';
import deal from 'modules/deal/states';
import roadshow from 'modules/roadshow/states';
import broker from 'modules/broker/states';
import dashboard from 'modules/dashboard/states';
/// dependencies (do not remove)

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});