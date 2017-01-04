angular.module('weatherApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: './js/views/home.html',
    controller: 'homeCtrl'
  })
  .state('search', {
    url: '/search',
    templateUrl: './js/views/searchLoc.html',
    controller: 'currentLocCtrl'
  })
  .state('radar', {
    url: '/radar',
    templateUrl: './js/views/radar.html',
    controller: 'radarCtrl'
  })
});
