(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', DIController );
DIController.$inject = ["$scope","$filter"]; // protect the two variables from minification

function DIController($scope, $filter){
  $scope.name = "Jacob";
  $scope.sayHello = function () {
    return "Hello";
  };

  $scope.upper = function(){
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}

})();
