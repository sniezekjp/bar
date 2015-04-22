import app from 'lazy';

app.directive('graph', function () {
  return {
    templateUrl: "modules/dashboard/views/graph.tpl.html",
    link: function($scope) {
      $scope.value = "value";
      $scope.click = function() {
        $scope.value = "value changed";
      };
    }
  }
});