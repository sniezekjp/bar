import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('bowl', {
    url: '/bowl',
    templateUrl: 'modules/bowl/views/bowl.tpl.html',
    controller: 'BowlController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/bowl/controllers/BowlController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('bowl');
});