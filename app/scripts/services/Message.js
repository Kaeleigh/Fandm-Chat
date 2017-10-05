(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
  //  console.log("Message Service");
  //  console.log(messages);

    Message.getByRoomId = function(roomId) {
    //  console.log(roomId);
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));      //filters messages by roomid, set return list of messages quered from all attribute
    //  console.log(results);
    //  return results;
    };

    Message.sendMessage = function(newMessage) {
          messages.$add(newMessage); // adds messages from site to firebase
      };
    return Message;
  }

  angular
    .module('fandmChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
