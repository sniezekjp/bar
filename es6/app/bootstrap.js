import router from 'router';
import lazy from 'lazy';
import angular from 'angular';
import components from '../components/components';
import dashboard from 'modules/dashboard/states';
import account from 'modules/account/states';
import main from 'modules/main/states';
import calllog from 'modules/calllog/states';
import bowl from 'modules/bowl/states';
import autocomplete from 'modules/autocomplete/states';
import input from 'modules/input/states';
import chair from 'modules/chair/states';
import table from 'modules/table/states';
import sidebar from 'modules/sidebar/states';
import footer from 'modules/footer/states';
import bigButton from 'modules/bigButton/states';
import modal from 'modules/modal/states';
import roadshow from 'modules/roadshow/states';
/// dependencies (do not remove)

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});