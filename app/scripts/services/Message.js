(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));      //filters messages by roomid
    };
    return Message;
  }

  angular
    .module('fandmChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
