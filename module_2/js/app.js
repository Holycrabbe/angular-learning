(function () {
'use strict';

angular.module('ListApp', [])
.controller('BuyController', BuyController )
.controller('BoughtController', BoughtController )
.service('CustomService', CustomService);



BuyController.$inject = ["CustomService"];
function BuyController(CustomService){
    var buy = this;
    buy.items = CustomService.getShoppingList();

    buy.bought= function(index){
      CustomService.boughtItem(index);
    }

    buy.length = function(){
      var array = buy.items;
      return array.length;
    }

}

BoughtController.$inject = ["CustomService"];
function BoughtController(CustomService){
    var bought = this;
    bought.items = CustomService.getBoughtItems();

    bought.buy = function(index){
      CustomService.buyItem(index);
    }

    bought.length = function(){
      var array = bought.items;
      return array.length;
    }

}

function CustomService(){
  var service = this;
  var shoppingList = [
    {name: "juice",quantity: 12},
    {name: "cookies",quantity: 2},
    {name: "bread",quantity: 3},
    {name: "cake",quantity: 10},
    {name: "candy",quantity: 20}
  ];

  var boughtItems = [];

  service.getShoppingList = function(){
    return shoppingList;
  }

  service.getBoughtItems = function(){
    return boughtItems;
  }

  service.boughtItem = function(index){
    boughtItems.push( shoppingList[index] ); // add element to bought
    shoppingList.splice(index,1); // remove from buy
  }

  service.buyItem = function(index){
    shoppingList.push(boughtItems[index] ); // add element to buy
    boughtItems.splice(index,1); // remove from bought
  }


}




})();
