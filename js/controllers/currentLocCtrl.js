angular.module('weatherApp').controller('currentLocCtrl', function($scope, forecastService){

$scope.getCurrentLocation = function(){
forecastService.getCurrentLocation().then(function(response){
  // $scope.locations = response.data; //response.location
  forecastService.getForecast(response).then(function(res){
    // $scope.days = res.data
    $scope.days = res.data.forecast.simpleforecast.forecastday //.txt_forecast.forecastday
    // $scope.location = res.data
    console.log($scope.days);
  })
})
  // console.log(response)
// }, function (){
//
// })
// }
// function resolve(){
//
// }
// function reject(){

}

})
