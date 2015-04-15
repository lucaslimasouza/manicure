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

.controller('ProfDetailCtrl', function($scope, $stateParams, $state, $localstorage, Professionals) {

  var firebaseRef = new Firebase("https://manicure.firebaseio.com/profs/"+$stateParams.profId+"");

  $scope.prof = Professionals.get($stateParams.profId);

  // $scope.time = {
  //   hours: ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","00"],
  //   minutes: ["00","15","30","45"]
  // };

  $scope.schedule = {
    client: null,
    prof: $scope.prof,
    date: "",
    time: {hour: "", minutes: ""}
  };

  var updateProfAtClient = function(){

    var client = JSON.parse($localstorage.get('jsonUser'));
    client.profLastSchedule = $stateParams.profId;
    $scope.schedule.client = client;
    $localstorage.set('jsonUser', JSON.stringify(client));
  };

  $scope.save = function(){
    updateProfAtClient();

    var scheduleCopy = angular.copy($scope.schedule);
    scheduleCopy.date = $scope.schedule.date.toString();

    firebaseRef.child("schedules").push(scheduleCopy);

    $state.go('tab.home');
  };

})

.controller('HomeCtrl', function($scope, $localstorage, $firebaseArray) {

  var client = JSON.parse($localstorage.get('jsonUser'));
  var firebaseRef = new Firebase("https://manicure.firebaseio.com/profs/"+client.profLastSchedule+"/schedules");

  $scope.schedules = $firebaseArray(firebaseRef);

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

    if(jsonUser !== "undefined"){
      $state.go("tab.home");
    }

  };

  $scope.updateCities = function(state){
    if(state.id != 0){
      $scope.cities = Location.cities(state.id);
    }

  };

  $scope.save = function(){
    var jsonUser = undefined;

    if($scope.account.isProf && ($scope.account.price.hands == 0) && ($scope.account.price.feet == 0) ){
      $state.go('app.prof');
    }

    // DEFINIR REGRA PARA PROF COM TODOS OS DADOS INSERIDOS - DIRECIONAR PARA HOME DE PROF

    if(!$scope.account.isProf){

      delete $scope.account.time;
      delete $scope.account.price;

      $state.go('tab.home');
    }

    jsonUser = JSON.stringify($scope.account);
    $localstorage.set('jsonUser', jsonUser);
  };

  init();

});
