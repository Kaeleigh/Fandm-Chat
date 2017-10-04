(function() {
    function HomeCtrl(Room, Message, $cookies) {

      var currentUser = $cookies.get('fandmChatCurrentUser');

      this.rooms = Room.all;         // array rooms is attached to HomeCtrl and array of objects retrieved by all method


      this.openRoom = function(room) {      //set value to and filters messages of current room
        var currentRoom = room;
        this.currentRoomName = currentRoom.$value;
        this.messages = Message.getByRoomId(currentRoom.$id);
      }

      this.sendMessage = function() {     // sets send method of sending messages to firebase
          Message.addMessage({
            roomId: this.currentRoom.$id,
            content: this.newMessage,
            username: this.currentUser
          });
          this.newMessage = "";       // sets newMessage in empty string
      };
    }

    angular
        .module('fandmChat')
        .controller('HomeCtrl', ['Room', 'Message' , '$cookies', HomeCtrl]);   // Room is the $scope variable
})();
