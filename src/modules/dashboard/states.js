import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('dashboard', {
    url: '/dash',
    templateUrl: 'modules/dashboard/views/dashboard.tpl.html',
    controller: 'DashboardController',
    resolve: {
      lazy: function(Lazy, $http) {
        return Lazy.load('modules/dashboard/controllers/DashboardController');
      }
    }
  })
  /// states (do not remove)
;});