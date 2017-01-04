angular.module('weatherApp').controller('homeCtrl', function($scope, currentLocService){

$scope.getWeather = function(){
  currentLocService.getCurrentLocation().then(function(response){
  currentLocService.getCondition(response).then(function(res){
    // $scope.todays = res.data.forecast.simpleforecast.forecastday
      $scope.todays = res.data.current_observation
    console.log($scope.todays);
  })

  })
}

});
