import app from 'app';

app.directive('button', function() {
  return {
    templateUrl: 'components/button/button.tpl.html',
    link: function($scope) {
      console.log('button directive');
    }
  };
});