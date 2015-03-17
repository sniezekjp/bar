import app from 'app';

app.directive('table', function() {
  return {
    templateUrl: 'components/table/table.tpl.html',
    link: function($scope) {
      console.log('table directive');
    }
  };
});