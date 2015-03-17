import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class MODULEService extends Service {
  constructor() {
    this.endpoint = '/_module';
  }
}

app.service('MODULEService', MODULEService);