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
  // PASSAR O ID DA LOCALIDADE DO USUÁRIO
  $scope.friends = Professionals.all({id:11});
})

.controller('ProfDetailCtrl', function($scope, $stateParams, $state, Professionals) {
  $scope.prof = Professionals.get($stateParams.profId);

  // $scope.time = {
  //   hours: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","00"],
  //   minutes: ["00","15","30","45"]
  // };

  $scope.schedule = {
    client: "",
    prof: $scope.prof,
    date: "",
    time: {hour: "", minutes: ""}
  };

  $scope.save = function(){
    console.log("agendamento =====");
    $state.go('tab.home');
  };
})

.controller('AccountCtrl', function($scope, $state, $localstorage, Location) {

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

  var init = function(){
    var jsonUser = $localstorage.get('jsonUser', undefined);

    if(jsonUser !== undefined){
      $state.go("tab.home");
    }

  };

  $scope.updateCities = function(state){
    if(state.id != 0){
      $scope.cities = Location.cities(state.id);
    }

  };

  $scope.save = function(){
    var jsonUser = JSON.stringify($scope.account);
    $localstorage.set('jsonUser', jsonUser);

    if($scope.account.isProf){
      $state.go('app.prof');
    }else{
      $state.go('tab.home');
    }
  };

  init();

});
