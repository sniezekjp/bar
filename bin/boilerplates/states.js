import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('_module', {
    url: '/_module',
    templateUrl: 'modules/_module/views/_module.tpl.html',
    controller: 'MODULEController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/_module/controllers/MODULEController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('_module');
});