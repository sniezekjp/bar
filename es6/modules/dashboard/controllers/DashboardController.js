import app from 'lazy';
import DashboardService from '../services/DashboardService';
import AccountService from 'modules/account/services/AccountService';
import BrokerService from '../../broker/services/BrokerService';
import Controller from 'base/Controller';
// import Handsontable from '../../../../src/vendor/handsontable/dist/handsontable.full.js';
// dependencies (do not remove)

class DashboardController extends Controller {
  constructor(DashboardService) {
    this._service = DashboardService;
  }
}

app.controller('DashboardController', function($scope, AccountService, $state){
  
  $scope.accounts = [];
  $scope.account = {};

  $scope.getAccounts = function() {
    AccountService.getAll().success(function(res) {
      $scope.accounts = res;
    });
  };

  $scope.getAccounts();

	 var
    data = [
      ['Year', 'Maserati', 'Mazda', 'Mercedes', 'Mini', 'Mitsubishi'],
      ['2009', 0, 2941, 4303, 354, 5814],
      ['2010', 3, 2905, 2867, 412, 5284],
      ['2011', 4, 2517, 4822, 552, 6127],
      ['2012', 2, 2422, 5399, 776, 4151]
    ],
    container = document.getElementById('example'),
    hot;
  
  hot = new Handsontable(container, {
    data: data,
    minSpareRows: 1,
    colHeaders: false,
    contextMenu: true
  });
  
  
  function bindDumpButton() {
  
      Handsontable.Dom.addEvent(document.body, 'click', function (e) {
  
        var element = e.target || e.srcElement;
  
        if (element.nodeName == "BUTTON" && element.name == 'dump') {
          var name = element.getAttribute('data-dump');
          var instance = element.getAttribute('data-instance');
          var hot = window[instance];
          console.log('data of ' + name, hot.getData());
        }
      });
    }
  bindDumpButton();


});