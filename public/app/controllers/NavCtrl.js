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
