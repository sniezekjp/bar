import app from 'app';

app.directive('_component', function() {
  return {
    templateUrl: 'components/_component/_component.tpl.html',
    link: function($scope) {
      console.log('_component directive');
    }
  };
});