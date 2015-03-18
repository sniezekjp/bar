import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class BowlService extends Service {
  constructor() {
    this.endpoint = '/bowl';
  }
}

app.service('BowlService', BowlService);