import app from 'lazy';
import DashboardService from '../services/DashboardService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class DashboardController extends Controller {
  constructor(DashboardService) {
    this._service = DashboardService;
  }
}

app.controller('DashboardController', DashboardController);