import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'modules/home/views/home.tpl.html',
    controller: 'HomeController',
    resolve: {
      lazyLoad: function(Lazy) {
        return Lazy.load('modules/home/controllers/HomeController');
      }
    }
  })
  /// states (do not remove)
;});