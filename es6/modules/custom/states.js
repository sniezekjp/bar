import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('custom', {
    url: '/custom',
    templateUrl: 'modules/custom/views/custom.tpl.html',
    controller: 'CustomController',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/custom/controllers/CustomController');
      }
    }
  })
  /// states (do not remove)
;});