import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class AccountService extends Service {
  constructor() {
    this.endpoint = '/account';
  }
}

app.service('AccountService', function($http){

	var prefix = 'http://localhost:1337/account';

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
			return $http.post(prefix + '/find', query);
		},

		destroy: function(id) {
			return $http.delete(prefix + '/' + id);
		},

		import: function(file) {
			return $http.post(prefix + '/import', file);
		},

		page: function(page) {
			var skip = page * 30;
			return $http.get(prefix + '?skip=' + skip);
		}
	};

});