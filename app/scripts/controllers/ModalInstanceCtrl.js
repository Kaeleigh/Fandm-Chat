(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {       //$uibModalInstance represents a modal window dependency
        this.cancel = function() {            // option to cancel choice
          $uibModalInstance.dismiss('cancel');      // dismiss method dismiss modal
        };

        this.createRoom = function() {      // option to create chat room
          console.log(this.name);
          $uibModalInstance.close(this.name);
             // add
        }
    }

  angular
    .module('fandmChat')
    .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
