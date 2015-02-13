angular.module('manicure.controllers', [])

.controller('AppCtrl', function($scope, $state) {
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ProfessionalsCtrl', function($scope, Professionals) {
  $scope.friends = Professionals.all({id:11});
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Professionals) {
  $scope.friend = Professionals.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope, $ionicSlideBoxDelegate, $state, Location) {

  console.log($ionicSlideBoxDelegate.enableSlide());

  $scope.states = Location.states();
  $scope.account = {
    name: "",
    cellphone: "",
    selectedState: {id: 0},
    selectedCity: {id: 0},
    time: {
      feet: 0,
      hands: 0
    },
    price: {
      feet: 0,
      hands: 0
    }
  };

  $scope.typeAccount = {
    isManicure: false,
    isClient: false,
    valid: false
  };

  var validation = function(){

    var message = "Preecha por favor";

    if($scope.account.name === "") $scope.message.name = message;
    if($scope.account.cellphone === "") $scope.message.cellphone = message;
    if($scope.account.selectedState.id === 0 ) $scope.message.selectedState = message;
    if($scope.account.selectedCity.id === 0 ) $scope.message.selectedCity = message;

    if($scope.typeAccount.isManicure){

      if($scope.account.time.feet === 0 ) $scope.message.time.feet = message;
      if($scope.account.time.hands === 0) $scope.message.time.hands = message;
      if($scope.account.price.feet === 0) $scope.message.price.feet = message;
      if($scope.account.price.hands === 0) $scope.message.price.hands = message;
    }

  };

  $scope.updateCities = function(state){
    if(state.id != 0){
      $scope.cities = Location.cities(state.id);
    }

  };

  $scope.save = function(){
    console.log("vlaidation", $scope.account.name.$valid);
    console.log("-=-=saved=-=-", $scope.account);
  };

  $scope.next = function(){
    $ionicSlideBoxDelegate.next();
  };

  $scope.previous = function(){
    $ionicSlideBoxDelegate.previous();
  };


  $scope.defineAccount = function(response){

    if(response === 'yes'){
      $scope.typeAccount.isManicure = true;
    }else{
      $scope.typeAccount.isClient = true;
    };

  };

})

.controller('ClientCtrl', function($scope, Location) {

  $scope.states = Location.states();
  $scope.account = {
      name: "",
      cellphone: "",
      selectedState: {id: 0},
      selectedCity: {id: 0}
    };

  $scope.save = function(){

  };

  $scope.updateCities = function(state){
    if(state.id != 0){
      $scope.cities = Location.cities(state.id);
    }

  };

});
