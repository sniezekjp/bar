import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class MainService extends Service {
  constructor() {
    this.endpoint = '/main';
  }
}

app.service('MainService', MainService);