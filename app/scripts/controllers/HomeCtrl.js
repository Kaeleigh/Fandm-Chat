(function() {
    function HomeCtrl(Room, Message) {
      this.rooms = Room.all;         // array rooms is attached to HomeCtrl and array of objects retrieved by all method


      this.openRoom = function(room) {      //set value to and filters messages of current room
        var currentRoom = room;
        this.currentRoomName = currentRoom.$value;
        this.messages = Message.getByRoomId(currentRoom.$id);
      }

    }

    angular
        .module('fandmChat')
        .controller('HomeCtrl', ['Room', 'Message' , HomeCtrl]);   // Room is the $scope variable
})();
