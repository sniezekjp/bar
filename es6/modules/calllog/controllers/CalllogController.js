import app from 'lazy';
import CalllogService from '../services/CalllogService';
import AccountService from 'modules/account/services/AccountService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class CalllogController extends Controller {
  constructor(CalllogService) {
    this._service = CalllogService;
  }
}

app.controller('CalllogController', function(AccountService) {
  console.log(AccountService);
});