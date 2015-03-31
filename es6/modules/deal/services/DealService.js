import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class DealService extends Service {
  constructor() {
    this.endpoint = '/deal';
  }
}

app.service('DealService', DealService);