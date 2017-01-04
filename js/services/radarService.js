angular.module('weatherApp').service('radarService', function($http, $q){


this.getRadar = function(response){
  return $http({
    method: 'GET',
    url: 'http://api.wunderground.com/api/e9b69c867d15ed4c/animatedradar/q/UT/Provo.gif?width=500&height=450&newmaps=1&timelabel=1&timelabel.y=10&num=5&delay=50'

  })
}

});
