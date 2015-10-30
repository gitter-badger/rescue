(function() {
  angular.module('rescue', ['ui.router', 'rescue.controllers', 'rescue.services'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html'
        })
        .state('register', {
          url: '/register',
          templateUrl: '/views/register.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        })
        .state('register.user', {
          url: 'register',
          templateUrl: '/views/userRegistration.html'
        })
        .state('register.rescue', {
          url: 'register',
          templateUrl: '/views/rescueRegistration.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: '/views/login.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth',
          onEnter: function($state, Users) {
              if(Users.isLoggedIn()) {
                $state.go('home');
              }
            }
        });
        $urlRouterProvider.otherwise('/home');
    }]);
angular.module('rescue.services', []);
angular.module('rescue.controllers', []);
})();
