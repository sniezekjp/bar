import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('quartermaster', {
    url: '/quartermaster',
    templateUrl: 'modules/quartermaster/views/quartermaster.tpl.html',
    controller: 'QuartermasterController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/quartermaster/controllers/QuartermasterController');
      }
    }
  })
  /// states (do not remove)
;});