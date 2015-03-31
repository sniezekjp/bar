import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class RoadshowService extends Service {
  constructor() {
    this.endpoint = '/roadshow';
  }
}

app.service('RoadshowService', RoadshowService);