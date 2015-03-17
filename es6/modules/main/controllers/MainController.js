import app from 'lazy';
import MainService from '../services/MainService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class MainController extends Controller {
  constructor(MainService) {
    this._service = MainService;
  }
}

app.controller('MainController', MainController);