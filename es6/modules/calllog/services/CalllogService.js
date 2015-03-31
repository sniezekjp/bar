import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class CalllogService extends Service {
  constructor() {
    this.endpoint = '/calllog';
  }
}

app.service('CalllogService', CalllogService);