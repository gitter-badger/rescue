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
