(fcuntion(){ // stopping locals to bleed in to global scope
  'use strict';


  // create module [0]=name, [...]= independencies
  angular.module('myFirstApp',[])

      .controller('MyFirstController',function($scope){
          // this is the viewModel
          //$ betyder reserved for angular

          $scope.name ="jacob"; // "sets" a varaible thaht can be called in index
          $scope.great = function(){
            return "Hello sir";
          };

      });


})();
