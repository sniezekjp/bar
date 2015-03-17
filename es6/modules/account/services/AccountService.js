import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class AccountService extends Service {
  constructor() {
    this.endpoint = '/account';
  }
}

app.service('AccountService', AccountService);