import app from 'app';

app.directive('input', function() {
  return {
    templateUrl: 'components/input/input.tpl.html',
    link: function($scope) {
      console.log('input directive');
    }
  };
});