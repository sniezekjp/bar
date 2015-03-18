import app from 'lazy';
import BowlService from '../services/BowlService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class BowlController extends Controller {
  constructor(BowlService) {
    this._service = BowlService;
  }
}

app.controller('BowlController', BowlController);