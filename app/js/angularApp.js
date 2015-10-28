(function() {
  angular.module('rescue', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/views/home.html',
          controller: 'AuthCtrl as Main'
        })
        .state('register', {
          url: '/register',
          templateUrl: '/views/register.html',
          controller: 'AuthCtrl as auth'
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
    }])
    .controller('AuthCtrl', AuthCtrl)
    .controller('NavCtrl', NavCtrl)
    .factory('Users', userFactory);

    function AuthCtrl($state, Users) {
      var vm = this;
      vm.user = {};
      vm.register = register;
      vm.login = login;

      function register() {
        Users.register(vm.user);
      }

      function login() {
        Users.login(vm.user).error(function(error) {vm.error = error;}).then(function() {$state.go('home');});
      }
    }

    function NavCtrl(Users) {
      var vm = this;
      vm.isLoggedIn = Users.isLoggedIn;
      vm.logOut = Users.logout;
      vm.currentUser = Users.currentUser();
    }

    function userFactory($http, $window) {
      var auth = {};
      auth.currentUser = currentUser;
      auth.register = register;
      auth.getToken = getToken;
      auth.isLoggedIn = isLoggedIn;
      auth.login = login;
      auth.logout = logout;
      auth.saveToken = saveToken;

      function getToken() {
        return $window.localStorage['rescue-token'];
      }

      function isLoggedIn() {
        var token = auth.getToken();
          if(token) {
            console.log('token!!!!!!');
            var payload = JSON.parse($window.atob(token.split('.')[1]));
            return payload.exp > Date.now() / 1000;
          } else {
            return false;
          }
      }

      function login(user) {
        return $http.post('/login', user)
          .error(function(error) { return error ;} )
          .success(function(data) {
            auth.saveToken(data.token);
        });
      }

      function logout() {
        localStorage.removeItem('rescue-token');
      }

      function register(user) {
          return $http.post('/register',user)
            .error(function(error) { return error; })
            .success(function(data) {
              auth.saveToken(data.token);
          });
      }

      function saveToken(token) {
        $window.localStorage['rescue-token'] = token;
      }

      function currentUser() {
        var token = auth.getToken();
        if(token) {
          var payload = JSON.parse($window.atob(token.split('.')[1]));
          return payload.username;
        }
      }

      return auth;
    }

})();
