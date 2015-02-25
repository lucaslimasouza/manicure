angular.module('manicure.services', [])

.factory('Location', function() {

  return {
    states: function() {
      return DataGlobal.states;
    },
    cities: function(stateId) {
      // Simple index lookup
      citiesSelected = [];
      cities = DataGlobal.cities;

      cities.forEach(function(city){
        if(city.state == stateId){
          citiesSelected.push(city);
        }
      });

      return citiesSelected;
      // return friends[friendId];
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Professionals', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var professionails = [{
    id: 0,
    name: 'Ben Sparrow',
    cellphone: "(35) 99999-9999",
    price: {feet: 25.0, hands: 20.0},
    selectedCity: {id: 11},
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    cellphone: "(35) 99999-9999",
    price: {feet: 25.0, hands: 20.0},
    selectedCity: {id: 13},
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    cellphone: "(35) 99999-9999",
    price: {feet: 25.0, hands: 20.0},
    selectedCity: {id: 12},
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    cellphone: "(35) 99999-9999",
    price: {feet: 25.0, hands: 20.0},
    selectedCity: {id: 11},
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    cellphone: "(35) 99999-9999",
    price: {feet: 25.0, hands: 20.0},
    selectedCity: {id: 11},
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {

    all: function(city) {
      professionailsSelected = [];

      professionails.forEach(function(professional){

        if(city.id === professional.selectedCity.id){
          professionailsSelected.push(professional);
        }

      });
      return professionailsSelected;
    },
    get: function(profId) {
      // Simple index lookup
      return professionails[profId];
    }
  }
});
