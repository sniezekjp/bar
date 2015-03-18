import app from 'lazy';
import RoadshowService from '../services/RoadshowService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class RoadshowController extends Controller {
  constructor(RoadshowService) {
    this._service = RoadshowService;
  }
}

app.controller('RoadshowController', RoadshowController);