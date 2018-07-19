(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Jacob";
  $scope.sayHello = function () {
    return "Hello";
  };


});

})();
