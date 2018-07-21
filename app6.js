(function () {
'use strict';

angular.module('myFirstApp', [])
.controller('AddController', AddController )
.controller('ShowController', ShowController )
.service('CustomService', CustomService);
 // singelton design pattern : den er global ~ preaty much

AddController.$inject= ["CustomService"];
function AddController(CustomService){
  var itemAdder = this;
  itemAdder.itemName = "";
  itemAdder.itemQuantity ="";

  itemAdder.addItem = function(){
    CustomService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
  }

}



ShowController.$inject= ["CustomService"];
function ShowController(CustomService){
  var Show = this;
  Show.items = CustomService.getItems();

  Show.removeItem = function(itemIndex){
      CustomService.removeItem(itemIndex);
  }

}



function CustomService(){
  var service = this;
  var items = [
    {
      name: "juice",
      quantity: 40
    }
  ];

  service.addItem = function(item,quantity){
    var item = {
      name : item,
      quantity : quantity
    }
    items.push(item);
  }

  service.getItems = function(){
    return items;
  }

  service.removeItem = function(index){
    items.splice(index,1);
  }

}




})();
