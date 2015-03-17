import router from 'router';
import lazy from 'lazy';
import angular from 'angular';
import components from '../components/components';
import dashboard from 'modules/dashboard/states';
import account from 'modules/account/states';
import main from 'modules/main/states';
import calllog from 'modules/calllog/states';
/// dependencies (do not remove)

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});