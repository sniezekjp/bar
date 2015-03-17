import app from 'lazy';
import MODULEService from '../services/MODULEService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class MODULEController extends Controller {
  constructor(MODULEService) {
    this._service = MODULEService;
  }
}

app.controller('MODULEController', MODULEController);