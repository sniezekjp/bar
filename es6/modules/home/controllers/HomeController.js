import app from 'lazy';
import HomeService from '../services/HomeService';
import homeDir from '../directives/homeDir';
// dependencies (do not remove)

app.controller('HomeController', function(HomeService) {
  console.log('home controller');
  HomeService.get();
});