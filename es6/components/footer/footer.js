import app from 'app';

app.directive('footer', function() {
  return {
    templateUrl: 'components/footer/footer.tpl.html',
    link: function($scope) {
      console.log('footer directive');
    }
  };
});