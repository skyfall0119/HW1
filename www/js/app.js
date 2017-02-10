// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'start', {
      url:'/start',
      templateUrl:'templates/view1.html'
    })

    .state( 'Q1', {
      url:'/Q1',
      templateUrl:'templates/view2.html'
    })

    .state( 'Q2', {
      url:'/Q2',
      templateUrl:'templates/view3.html'
    })

    .state( 'result', {
      url:'/result',
      templateUrl:'templates/view4.html'
    });

  $urlRouterProvider.otherwise("/start");

})



starter.controller('mainCtrl', function($scope, $ionicModal, $ionicLoading, $state, $stateParams) {





  // start button pressed
  $scope.start = function () { // Create onSubmit function


  };













})
