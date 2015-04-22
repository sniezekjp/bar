import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('quiz', {
    url: '/quiz',
    templateUrl: 'modules/quiz/views/quiz.tpl.html',
    controller: 'QuizController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/quiz/controllers/QuizController');
      }
    }
  })
  /// states (do not remove)
;});