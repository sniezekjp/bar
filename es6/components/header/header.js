import app from 'app';

app.directive('header', function() {
  return {
    templateUrl: 'components/header/header.tpl.html',
    link: function($scope) {
      console.log('header directive');
    }
  };
});