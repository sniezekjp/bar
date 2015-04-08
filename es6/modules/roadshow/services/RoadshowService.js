import app from 'lazy';
import Service from 'base/Service';
// dependencies (do not remove)

class RoadshowService extends Service {
  constructor() {
    this.endpoint = '/roadshow';
  }
}

app.service('RoadshowService', function($http){
	
	var prefix = 'http://localhost:1337/roadshow';
	  
	  return {
	    create: function(roadshow) {
	      return $http.post(prefix, roadshow); 
	    },

	    update: function(id, roadshow) {
	      return $http.put(prefix + '/' + id, roadshow);
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

	    import: function(content) {
	      console.log(content);
	      return $http.post(prefix + '/import', content);
	    }
	  };
});