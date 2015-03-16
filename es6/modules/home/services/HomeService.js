import app from 'lazy';
// dependencies (do not remove)

app.factory('HomeService', function() {
  return {
    get: function() {
      console.log('GET /request to server');
    },
    directive: function() {
      console.log('testing directive');
    }
  };
});