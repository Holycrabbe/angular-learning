(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', DIController )
.filter("custom", customFilterFactory) // name is then customFilter
.filter("crazy", customFilterFactory2); // name is then crazyFilter
DIController.$inject = ["$scope","$filter", "customFilter"];
function DIController($scope, $filter, customFilter){
  $scope.name = "Jacob";
  $scope.sayHello = function () {
    return "Hello";
  };

  $scope.upper1 = function(){ // filter 1
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  $scope.upper2 = function(){ // filter 2
    var msg = "im a msg";
    var output = $filter('uppercase')(msg);
    return output;
  };

  $scope.custom = function(){ // filter 3
    var msg = "im a msg";
    var output = customFilter(msg);
    return output;
  };

  $scope.custom2 = function(){ // filter 3
    var msg = "im a msg";
    var output = crazyFilter(msg,"arg1","arg2");
    return output;
  };

}

function customFilterFactory(){
  return function(input){
       var changedinput = input;
       return changedinput;
  }
}

function customFilterFactory2(){
  return function(input,arg1, arg2){
       var changedinput = input+arg1+arg2;
       return changedinput;
  }
}

})();
