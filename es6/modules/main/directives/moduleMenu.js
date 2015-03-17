import app from 'app';

app.directive('moduleMenu', function(ModuleList) {
  return {
    templateUrl: 'modules/main/views/directives/module-menu.tpl.html',
    link: function($scope) {
      $scope.menu = ModuleList.get();
    }
  };
});