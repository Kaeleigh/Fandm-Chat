(function() {
  function FandmChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('fandmChatCurrentUser');
    // console.log(currentUser);
    if (!currentUser || currentUser === '') {     // if there is no current user value or current user is empty value
      $uibModal.open ({   // modal configuaration ; open modal
          templateUrl: "/templates/username.html",
          controller: "ModalInstanceCtrl as modalInstance",
          backdrop: 'static'        // prevents users from clicking backdrop
      });
        // allow user to set username
    }
  }

  angular
    .module('fandmChat')
    .run(['$cookies', '$uibModal', FandmChatCookies]);
})();
