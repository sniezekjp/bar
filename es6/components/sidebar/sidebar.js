import app from 'app';

app.directive('sidebar', function() {
  return {
    templateUrl: 'components/sidebar/sidebar.tpl.html',
    link: function($scope) {
      console.log('sidebar directive');
    }
  };
});