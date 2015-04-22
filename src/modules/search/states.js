import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('search', {
    url: '/search',
    templateUrl: 'modules/search/views/search.tpl.html',
    controller: 'SearchController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/search/controllers/SearchController');
      }
    }
  })
  /// states (do not remove)
;});