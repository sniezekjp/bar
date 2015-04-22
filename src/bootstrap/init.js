import router from 'router';
import lazy from 'lazy';
import angular from 'angular';
import components from 'components/components';
import dashboard from 'modules/dashboard/states';
import analysis from 'modules/analysis/states';
import search from 'modules/search/states';
import email from 'modules/email/states';
import form from 'modules/form/states';
import quiz from 'modules/quiz/states';
import survey from 'modules/survey/states';
import quartermaster from 'modules/quartermaster/states';
import socialmedia from 'modules/social-media/states';
/// dependencies (do not remove)

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});