import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class BrokerService extends Service {
  constructor() {
    this.endpoint = '/broker';
  }
}

app.service('BrokerService', function($http){
	var prefix = 'http://localhost:1337/broker';
  
	return {
		create: function(account) {
		  return $http.post(prefix, account); 
		},

		update: function(id, account) {
		  return $http.put(prefix + '/' + id, account);
		},

		getAll: function() {
		  return $http.get(prefix);
		},

		list: function() {
		  return $http.get(prefix + '/list');  
		},

		find: function(query) {

		},

		findAll: function() {
		  return $http.get(prefix + '?limit=100');
		},

		destroy: function(id) {
		  return $http.delete(prefix + '/' + id);
		},

		import: function(file) {
		  return $http.post(prefix + '/import', file);
		}
	};

});