import app from 'lazy';
// dependencies (do not remove)

app.controller('DashboardController', function($scope) {
  $scope.tester = function() {
    return 'hi';
  };
  $scope.text = "hi";
  $scope.click = function() {
    $scope.text = "something else";
  };
});