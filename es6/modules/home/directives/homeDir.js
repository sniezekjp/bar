import app from 'lazy';
// dependencies (do not remove)

app.directive('homeDir', function(HomeService) {
  return {
    link: function($scope, elm) {
      HomeService.directive();
      elm.html("directive");
    }
  };
});