import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class CalllogService extends Service {
  constructor() {
    this.endpoint = '/calllog';
  }
}

app.service('CallLogService', function($http){

	var prefix = 'http://localhost:1337/calllog';
  
	  return {
	    create: function(calllog) {
	      return $http.post(prefix, calllog); 
	    },

	    update: function(id, calllog) {
	      return $http.put(prefix + '/' + id, calllog);
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

	  //   import: function(content) {
	  //     console.log(content);
	  //     return $http.post(prefix + '/import', content);
	  //   }
	  };
});