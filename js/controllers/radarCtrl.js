angular.module('weatherApp').controller('radarCtrl', function($scope, radarService){

$scope.getRadar = function(){
  radarService.getRadar().then(function(response){
    $scope.radars = response.config.url;
    console.log(response)
  })
}

})
