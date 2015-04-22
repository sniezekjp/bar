import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('form', {
    url: '/form',
    templateUrl: 'modules/form/views/form.tpl.html',
    controller: 'FormController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/form/controllers/FormController');
      }
    }
  })
  /// states (do not remove)
;});