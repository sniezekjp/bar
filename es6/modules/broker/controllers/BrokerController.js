import app from 'lazy';
import BrokerService from '../services/BrokerService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class BrokerController extends Controller {
  constructor(BrokerService) {
    this._service = BrokerService;
  }
}

app.controller('BrokerController', BrokerController);