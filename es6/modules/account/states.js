import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('account', {
    url: '/account',
    templateUrl: 'modules/account/views/account.tpl.html',
    controller: 'AccountController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/account/controllers/AccountController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('account');
});