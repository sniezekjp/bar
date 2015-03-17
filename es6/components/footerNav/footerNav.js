import app from 'app';

app.directive('footerNav', function() {
  return {
    templateUrl: 'components/footerNav/footerNav.tpl.html',
    link: function($scope) {
      console.log('footerNav directive');
    }
  };
});