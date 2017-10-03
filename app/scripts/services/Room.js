(function() {
  function Room($firebaseArray) {         //object Room
    var Room = {};
    var ref = firebase.database().ref().child("rooms");   // reference to firebase database
    var rooms = $firebaseArray(ref);    // the array

    Room.all = rooms;     // attaches all of the rooms to the object Room

    Room.add = function(room) {     // add method to link function to Room object
        rooms.$add(room);      // use firebase $add method to add rooms to database
    }

    return Room;      // returns Room object that has the array of database rooms
  }

  angular
    .module('fandmChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
