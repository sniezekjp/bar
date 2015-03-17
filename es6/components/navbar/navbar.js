import app from 'app';

app.directive('navbar', function() {
  return {
    templateUrl: 'components/navbar/navbar.tpl.html',
    link: function($scope) {
      console.log('navbar directive');
    }
  };
});