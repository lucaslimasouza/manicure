angular.module('manicure.controllers', [])

.controller('ManicureCtrl', function($rootScope, $scope, $state) {

  $rootScope.typeAccount = {
    isManicure: false
  };

  $scope.defineAccount = function(response){

    if(response === 'yes'){
      $rootScope.typeAccount.isManicure = true;
    }else{
      $rootScope.typeAccount.isManicure = false;
    };

    $state.go("tab.account");

  };

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

.controller('AccountCtrl', function($scope, Location) {

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

  $scope.updateCities = function(state){
    if(state.id != 0){
      $scope.cities = Location.cities(state.id);
    }

  };

  $scope.save = function(){
    console.log("-=-=saved=-=-", $scope.account);
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
