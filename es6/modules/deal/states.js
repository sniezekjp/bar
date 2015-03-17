import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('deal', {
    url: '/deal',
    templateUrl: 'modules/deal/views/deal.tpl.html',
    controller: 'DealController',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/deal/controllers/DealController');
      }
    }
  })
  /// states (do not remove)
;});