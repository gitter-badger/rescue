(function() {
  angular.module('rescue.services')
    .factory('Users', userFactory);

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
