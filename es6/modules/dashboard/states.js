import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dashboard',
    templateUrl: 'modules/dashboard/views/dashboard.tpl.html',
    controller: 'DashboardController',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/dashboard/controllers/DashboardController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('dashboard');
});