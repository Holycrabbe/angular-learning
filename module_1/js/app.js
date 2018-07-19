(function () {
'use strict';

angular.module('eatingApp', [])
.controller('controller', DIController );
DIController.$inject = ["$scope"]; // protect the two variables from minification

function DIController($scope){
  $scope.msg = "";
  $scope.input = "";

  $scope.evalIntake = function () {
    var input = $scope.input.split(",");
    var length = input.length;

    setMsg(input.length);
  };

  function setMsg(length){
    if(length==0){
      $scope.msg = "Please enter data first";
    }else if(length<=3){
      $scope.msg = "Enjoy";
    }else{
      $scope.msg = "Too Much";
    }
  }


}

})();
