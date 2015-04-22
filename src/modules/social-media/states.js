import app from 'app';
/// dependencies

app.config(function($stateProvider) {
  $stateProvider.state('social-media', {
    url: '/social-media',
    templateUrl: 'modules/social-media/views/social-media.tpl.html',
    controller: 'SocialMediaController as ctrl',
    resolve: {
      lazy: function(Lazy) {
        return Lazy.load('modules/social-media/controllers/SocialMediaController');
      }
    }
  })
  /// states (do not remove)
;});