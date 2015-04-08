import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('broker', {
    url: '/broker',
    templateUrl: 'modules/broker/views/broker.tpl.html',
    controller: 'BrokerController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/broker/controllers/BrokerController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('broker');
});