
angular.module('weatherApp').service('forecastService', function($http, $q){

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

  	this.getForecast = function(location){
  		return $http({
  			method: 'GET',
  			// url: 'http://api.wunderground.com/api/e9b69c867d15ed4c/conditions/q/' + location.state + '/' + location.city + '.json'
  			url: 'http://api.wunderground.com/api/e9b69c867d15ed4c/forecast/q/' + location.state + '/' + location.city + '.json'

  		})
  	}


  });

// var forecasts = null;
// this.getForecast = function(){
//   var defer = $q.defer();
//   if(forecasts){
//     defer.resolve(forecasts);
//   } else {
//     $http.get('http://api.wunderground.com/api/e9b69c867d15ed4c/forecast/q/UT/Provo.json')
//   .then(function(response){
//     forecasts = response.data.forecast;
//     defer.resolve(response.data.forecast);
//   })
// }
// return defer.promise;
//
// }
//
// });


// this.getForecast = function(){
// var defer = $q.defer();
//
//  $http({
//     method: 'GET',
//     url: 'http://api.wunderground.com/api/e9b69c867d15ed4c/forecast/q/UT/Salt_Lake_City.json'
// }).then(function(response){
//   defer.resolve('here is an example');
// })
// return defer.promise;
// }
// });



// }).then(function(response){
//   var weatherObj = response.data.forecast;
//
//   weatherObj.searchlocation = {state, city};
//
//   return deferred.resolve(weatherObj);
// });
// return deferred.promise;
// var deferred = $q.defer();
