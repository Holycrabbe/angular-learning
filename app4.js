(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('MyFirstController', DIController );

DIController.$inject = ["$scope"];
function DIController($scope){
    $scope.name = "Jacob";


    $scope.array = ["milk","choko","banana","pherd"];

    $scope.array2 = [
      {
        name: "milk",
        quantity: "3"
      },
      {
        name: "choko",
        quantity: "3"
      },
      {
        name: "banana",
        quantity: "3"
      }
    ]

}



})();
