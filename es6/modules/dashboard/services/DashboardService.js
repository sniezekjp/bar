import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class DashboardService extends Service {
  constructor() {
    this.endpoint = '/dashboard';
  }
}

app.service('DashboardService', DashboardService);