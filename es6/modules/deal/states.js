import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('deal', {
    url: '/deal',
    templateUrl: 'modules/deal/views/deal.tpl.html',
    controller: 'DealController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/deal/controllers/DealController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('deal');
});