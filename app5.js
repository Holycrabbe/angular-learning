(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('controller_1', controller_1 )
.controller('controller_2', controller_2 );

controller_2.$inject= ["$scope"];
function controller_1($scope){
  var ctrl1 = this;
  ctrl1.msg = "who are you?";
  ctrl1.value = "ctrl1";
  $scope.type = "parent";
  $scope.parent_id = 3;
  $scope.global = [
    {value: 4}
  ];
}

controller_2.$inject= ["$scope"];
function controller_2($scope){
  var ctrl2 = this;
  ctrl2.anwser = "im ctrl2";
  ctrl2.value = "ctrl2";
  $scope.type = "child";

  $scope.global.value= 6;
  console.log($scope);
}


})();
