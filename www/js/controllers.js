angular.module('manicure.controllers', [])

.controller('AppCtrl', function($scope) {
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

.controller('AccountCtrl', function($scope, $state, Location) {

  $scope.states = Location.states();
  $scope.account = {
    isProf: false,
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
    if($scope.account.isProf){
      console.log("entrou")
      $state.go('app.prof');
    }
    console.log("-=-=saved=-=-", $scope.account);
  };

  $scope.defineAccount = function(response){

    if(response === 'yes'){
      $scope.account.isProf = true;
    }

    console.log("========-=-=",$scope.account.isProf);

  };

});
