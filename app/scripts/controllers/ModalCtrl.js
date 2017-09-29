(function() {
    function ModalCtrl($uibModal, Room) {
          this.open = function() {      // open method for $uibModal
              var modalInstance = $uibModal.open({        // open method attached to $ubiModal and stored in variable modalInstance
                controller: "ModalInstanceCtrl as modalInstance",
                templateUrl: "/templates/modal.html"
              })
          modalInstance.result.then(function(name) {
            console.log(name);
            Room.add(name);    // adding chat room
            
          }, function () {
              console.log('modal-component dismissed');
            });
         };
        }


    angular
        .module('fandmChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
})();
