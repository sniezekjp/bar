import app from 'app';

app.directive('modal', function() {
  return {
    templateUrl: 'components/modal/modal.tpl.html',
    link: function($scope) {
      console.log('modal directive');
    }
  };
});