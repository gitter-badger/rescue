angular.module('rescue')
  .controller('MainCtrl', MainCtrl);

  function MainCtrl(Users) {
      var vm = this;
      vm.addUser = addUser;
      vm.title = '';

      function addUser() {
        Users.addUser(vm.title);
      }
  }
