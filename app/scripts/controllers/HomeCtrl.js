(function() {
    function HomeCtrl(Room, Message, $cookies) {
      var currentUser = $cookies.get('FandmChatCookies');

      this.rooms = Room.all;         // array rooms is attached to HomeCtrl and array of objects retrieved by all method


      this.openRoom = function(room) {      //set value to and filters messages of current room
        //var currentRoom = room;
        this.currentRoom = room;
        console.log(room);
        this.currentRoomName = room.$value;
        this.messages = Message.getByRoomId(room.$id);
      }

      this.sendMessage = function() {     // sets send method of sending messages to firebase
          //console.log(this);
          var date = new Date();
          Message.add({
            roomId: this.currentRoom.$id,
            username: currentUser,
            sentAt: firebase.database.ServerValue.TIMESTAMP,
            content: this.newMessage
          });
          //console.log(Message);
          //this.newMessage = "";
      };
    }

    angular
        .module('fandmChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);   // Room is the $scope variable
})();
