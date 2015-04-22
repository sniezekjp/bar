import app from 'app';

app.directive('nav', function() {
  return {
    templateUrl: 'components/nav/nav.tpl.html',
    link: function($scope) {
      console.log('nav directive');
    }
  };
});