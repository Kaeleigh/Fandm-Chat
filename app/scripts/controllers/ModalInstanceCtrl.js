(function() {
    function ModalInstanceCtrl($uibModalInstance, Room, $cookies) {       //$uibModalInstance represents a modal window dependency
        this.cancel = function() {            // option to cancel choice
          $uibModalInstance.dismiss('cancel');      // dismiss method dismiss modal
        };

        this.createRoom = function() {      // option to create chat room
          $uibModalInstance.close(this.name);
        };

        this.createUsername = function() {        // saves username user types in

          if (this.username) {
            $cookies.putObject('FandmChatCookies', this.username);
            $uibModalInstance.close();
          }

        };

        
    }

  angular
    .module('fandmChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$cookies',  ModalInstanceCtrl]);
})();
