import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('survey', {
    url: '/survey',
    templateUrl: 'modules/survey/views/survey.tpl.html',
    controller: 'SurveyController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/survey/controllers/SurveyController');
      }
    }
  })
  /// states (do not remove)
;});