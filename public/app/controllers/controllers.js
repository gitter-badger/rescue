(function() {
  angular.module('rescue.controllers')
    .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl($state, Users) {
      var vm = this;
      vm.user = {};
      vm.register = register;
      vm.login = login;

      function login() {
        Users.login(vm.user)
          .error( function(error) {
            vm.error = error;
          })
          .then( function() {
            $state.go('home');
          });
      }

      function register() {
        Users.register(vm.user).error( function(error) {
          vm.error = error;
        })
        .then( function() {
          $state.go('home');
        });
      }
    }
})();

(function(){
  angular.module('rescue.controllers')
    .controller('NavCtrl', NavCtrl);

    function NavCtrl(Users) {
      var vm = this;
      vm.isLoggedIn = Users.isLoggedIn;
      vm.logOut = Users.logout;
      vm.currentUser = Users.currentUser;
    }  
})();

(function() {
  angular.module('rescue.controllers')
    .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl($state, Users) {
      var vm = this;
      vm.user = {};
      vm.register = register;
      vm.login = login;

      function login() {
        Users.login(vm.user)
          .error( function(error) {
            vm.error = error;
          })
          .then( function() {
            $state.go('home');
          });
      }

      function register() {
        Users.register(vm.user).error( function(error) {
          vm.error = error;
        })
        .then( function() {
          $state.go('home');
        });
      }
    }
})();

(function(){
  angular.module('rescue.controllers')
    .controller('NavCtrl', NavCtrl);

    function NavCtrl(Users) {
      var vm = this;
      vm.isLoggedIn = Users.isLoggedIn;
      vm.logOut = Users.logout;
      vm.currentUser = Users.currentUser;
    }  
})();

(function() {
  angular.module('rescue.controllers')
    .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl($state, Users) {
      var vm = this;
      vm.user = {};
      vm.register = register;
      vm.login = login;

      function login() {
        Users.login(vm.user)
          .error( function(error) {
            vm.error = error;
          })
          .then( function() {
            $state.go('home');
          });
      }

      function register() {
        Users.register(vm.user).error( function(error) {
          vm.error = error;
        })
        .then( function() {
          $state.go('home');
        });
      }
    }
})();

(function(){
  angular.module('rescue.controllers')
    .controller('NavCtrl', NavCtrl);

    function NavCtrl(Users) {
      var vm = this;
      vm.isLoggedIn = Users.isLoggedIn;
      vm.logOut = Users.logout;
      vm.currentUser = Users.currentUser;
    }  
})();

(function() {
  angular.module('rescue.controllers')
    .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl($state, Users) {
      var vm = this;
      vm.user = {};
      vm.register = register;
      vm.login = login;

      function login() {
        Users.login(vm.user)
          .error( function(error) {
            vm.error = error;
          })
          .then( function() {
            $state.go('home');
          });
      }

      function register() {
        Users.register(vm.user).error( function(error) {
          vm.error = error;
        })
        .then( function() {
          $state.go('home');
        });
      }
    }
})();

(function(){
  angular.module('rescue.controllers')
    .controller('NavCtrl', NavCtrl);

    function NavCtrl(Users) {
      var vm = this;
      vm.isLoggedIn = Users.isLoggedIn;
      vm.logOut = Users.logout;
      vm.currentUser = Users.currentUser;
    }  
})();

(function() {
  angular.module('rescue.controllers')
    .controller('AuthCtrl', AuthCtrl);

    function AuthCtrl($state, Users) {
      var vm = this;
      vm.user = {};
      vm.register = register;
      vm.login = login;

      function login() {
        Users.login(vm.user)
          .error( function(error) {
            vm.error = error;
          })
          .then( function() {
            $state.go('home');
          });
      }

      function register() {
        Users.register(vm.user).error( function(error) {
          vm.error = error;
        })
        .then( function() {
          $state.go('home');
        });
      }
    }
})();

(function(){
  angular.module('rescue.controllers')
    .controller('NavCtrl', NavCtrl);

    function NavCtrl(Users) {
      var vm = this;
      vm.isLoggedIn = Users.isLoggedIn;
      vm.logOut = Users.logout;
      vm.currentUser = Users.currentUser;
    }  
})();
