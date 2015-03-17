import app from 'app';
import moduleMenu from './directives/moduleMenu';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('main', {
    url: '/main',
    templateUrl: 'modules/main/views/main.tpl.html',
    controller: 'MainController',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/main/controllers/MainController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  //ModuleList.add('main');
});