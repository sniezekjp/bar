import app from 'lazy';
// dependencies (do not remove)

app.service('DashboardService', function($http) {
  return {
    get: function() {
      return $http.get('/data');
    }
  };
});