import app from 'app';

app.directive('dropdown', function() {
  return {
    templateUrl: 'components/dropdown/dropdown.tpl.html',
    link: function($scope) {
      console.log('dropdown directive');
    }
  };
});