// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var puzzle = angular.module('puzzle', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state( 'start', {
      url:"/start",
      templateUrl:"templates/view1.html",
      controller: 'startCtrl'
    })

    .state( 'q1', {
      url:"/q1",
      templateUrl:"templates/view2.html",
      controller: 'q1Ctrl'

    })

    .state( 'q2', {
      url:"/q2",
      templateUrl:"templates/view3.html",
      controller: 'q2Ctrl'

    })

    .state( 'result', {
      url:"/result",
      params: {
        'q1_answer_param' : null,
        'q2_answer_param' : null
      },
      templateUrl:"templates/view4.html",
      controller: 'resultCtrl'
    });

  $urlRouterProvider.otherwise("/start");
})


// in the start page, nothing really happens. just clicking on start to proceed
puzzle.controller('startCtrl', function($scope, $state, $stateParams) {


  // start button pressed
  $scope.start = function () {
    $state.go("q1")
  };
})

hwApp.controller('q1Ctrl', function($scope, $state, $stateParams) {



})

hwApp.controller('q2Ctrl', function($scope, $state, $stateParams) {



})
hwApp.controller('resultCtrl', function($scope, $state, $stateParams) {



})
