import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('calllog', {
    url: '/calllog',
    templateUrl: 'modules/calllog/views/calllog.tpl.html',
    controller: 'CalllogController',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/calllog/controllers/CalllogController');
      }
    }
  })
  /// states (do not remove)
;});