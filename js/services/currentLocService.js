angular.module('weatherApp').service('currentLocService', function($http, $q){

var location = null;
this.getCurrentLocation = function(){
		var defer = $q.defer();
		if (location){
			defer.resolve(location);
		} else {
    $http.get('http://api.wunderground.com/api/e9b69c867d15ed4c/geolookup/q/autoip.json')
  .then(function(response){
		// console.log(response);
		location = {
			state: response.data.location.state,
			city: response.data.location.city
		}

		defer.resolve(location);
	})
}
	return defer.promise;

  }

	this.getCondition = function(location){
		return $http({
			method: 'GET',
			url: 'http://api.wunderground.com/api/e9b69c867d15ed4c/conditions/q/' + location.state + '/' + location.city + '.json'
			// url: 'http://api.wunderground.com/api/e9b69c867d15ed4c/forecast/q/' + location.state + '/' + location.city + '.json'

		})
	}


});


// var defer = $q.defer();
