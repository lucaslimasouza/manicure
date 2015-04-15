// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('manicure', ['ionic', 'manicure.controllers', 'manicure.services', 'ionic.utils', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
   $ionicConfigProvider.tabs.position('bottom');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('app', {
      abstract: true,
      url: '/',
      templateUrl: 'index.html',
      controller: 'AppCtrl'
  })

  .state('app.account', {
    url: 'account',
    templateUrl: 'templates/login/index.html',
    controller: 'AccountCtrl'
  })

  .state('app.prof', {
    url: '/prof',
    templateUrl: 'templates/login/prof-account.html',
    controller: 'AccountCtrl'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // // Each tab has its own nav history stack:
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/client/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('tab.professionals', {
      url: '/professionals',
      views: {
        'tab-professionals': {
          templateUrl: 'templates/professional/tab-list.html',
          controller: 'ProfessionalsCtrl'
        }
      }
    })
    .state('tab.professional-detail', {
      url: '/professionals/:profId',
      views: {
        'tab-professionals': {
          templateUrl: 'templates/professional/professional-detail.html',
          controller: 'ProfDetailCtrl'
        }
      }
    })

  // .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/account.html',
  //       controller: 'AccountCtrl'
  //     },
  //     'account-professional@tab.account':{
  //       templateUrl: 'templates/login/prof-account.html'
  //       },
  //     'account-client@tab.account':{
  //       templateUrl: 'templates/login/client-account.html'
  //     }
  //   }
  // })

  // .state('tab.chats', {
  //     url: '/chats',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/tab-chats.html',
  //         controller: 'ChatsCtrl'
  //       }
  //     }
  //   })
  //   .state('tab.chat-detail', {
  //     url: '/chats/:chatId',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/chat-detail.html',
  //         controller: 'ChatDetailCtrl'
  //       }
  //     }
  //   })





  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/account');

});
