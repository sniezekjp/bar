import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('analysis', {
    url: '/analysis',
    templateUrl: 'modules/analysis/views/analysis.tpl.html',
    controller: 'AnalysisController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/analysis/controllers/AnalysisController');
      }
    }
  })
  /// states (do not remove)
;});