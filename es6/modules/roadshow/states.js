import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('roadshow', {
    url: '/roadshow',
    templateUrl: 'modules/roadshow/views/roadshow.tpl.html',
    controller: 'RoadshowController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/roadshow/controllers/RoadshowController');
      }
    }
  })
  /// states (do not remove)
;});

app.run(function(ModuleList) {
  ModuleList.add('roadshow');
});