import app from 'app';

app.directive('autocomplete', function() {
  return {
    templateUrl: 'components/autocomplete/autocomplete.tpl.html',
    link: function($scope) {
      console.log('autocomplete directive');
    }
  };
});