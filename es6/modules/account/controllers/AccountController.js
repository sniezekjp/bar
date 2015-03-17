import app from 'lazy';
import AccountService from '../services/AccountService';
import Controller from 'base/Controller';
// dependencies (do not remove)

class AccountController extends Controller {
  constructor(AccountService) {
    this._service = AccountService;
  }
}

app.controller('AccountController', AccountController);