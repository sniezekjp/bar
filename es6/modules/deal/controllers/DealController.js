import app from 'lazy';
import DealService from '../services/DealService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class DealController extends Controller {
  constructor(DealService) {
    this._service = DealService;
  }
}

app.controller('DealController', DealController);