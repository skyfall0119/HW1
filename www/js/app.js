// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var myApp = angular.module('myApp', ['ionic'])

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
        'q1_result_param' : null,
        'q2_result_param' : null
      },
      templateUrl:"templates/view4.html",
      controller: 'resultCtrl'
    });

  $urlRouterProvider.otherwise("/start");
})


// in the start page, nothing really happens. just clicking on start to proceed
myApp.controller('startCtrl', function($scope, $state) {
  // start button pressed
  $scope.start = function () {
    $state.go("q1")
  };
})

myApp.controller('q1Ctrl', function($scope, $state, $ionicLoading) {
  $scope.hour=null;
  $scope.minute=null;
  var result = null;



  $scope.check = function() {
    // get time from device
    var time = new Date();
    var h = time.getHours();
    var m = time.getMinutes();

    if ($scope.hour == null || $scope.minute == null ) {
      $ionicLoading.show({ template: 'put your answer.', noBackdrop: true, duration: 1000 });
    } else if ($scope.hour != h || $scope.minute != m ) {
      result = false;
    } else {
      result = true;
    }

    if (result != null) {
      $state.go("q2", {
        'q1_result_param' : result
      })
    }
  };

})

myApp.controller('q2Ctrl', function($scope, $state) {

  var random = Math.floor((Math.random() * 10) + 1);
  var ans = "";
  var result = false;


  if (random >= 1 && random <= 5) {
    ans = "ocean";
  } else {
    ans = "mountain";
  }



  $scope.ocean = function() {
      if (ans == "ocean") {
        result = true;
      }
    $state.go("result", {
      'q2_result_param' : result
    })
  }

  $scope.mountain = function () {
    if (ans == "mountain") {
      result = true;
    }
    $state.go("result", {
      'q2_result_param' : result
    })
  }


})


myApp.controller('resultCtrl', function($scope, $state, $stateParams) {


  if ($stateParams.q1_result_param) document.getElementById("q1Result").innerHTML = "correct";
  else document.getElementById("q1Result").innerHTML = "wrong";


  if ($stateParams.q2_result_param) document.getElementById("q2Result").innerHTML = "correct";
  else document.getElementById("q2Result").innerHTML = "wrong";






})
