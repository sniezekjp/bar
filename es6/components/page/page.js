import app from 'app';

app.directive('page', function() {
  return {
    templateUrl: 'components/page/page.tpl.html',
    link: function($scope) {
      console.log('page directive');
    }
  };
});