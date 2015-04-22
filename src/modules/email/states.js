import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('email', {
    url: '/email',
    templateUrl: 'modules/email/views/email.tpl.html',
    controller: 'EmailController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/email/controllers/EmailController');
      }
    }
  })
  /// states (do not remove)
;});