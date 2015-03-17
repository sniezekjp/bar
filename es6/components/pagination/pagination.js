import app from 'app';

app.directive('pagination', function() {
  return {
    templateUrl: 'components/pagination/pagination.tpl.html',
    link: function($scope) {
      console.log('pagination directive');
    }
  };
});