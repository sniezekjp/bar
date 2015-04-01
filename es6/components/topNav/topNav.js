import app from 'app';

app.directive('topNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/topNav/topNav.tpl.html',
    link: function($scope) {
      console.log('topNav directive');
    }
  };
});