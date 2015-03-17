import app from 'app';

app.directive('form', function() {
  return {
    templateUrl: 'components/form/form.tpl.html',
    link: function($scope) {
      console.log('form directive');
    }
  };
});