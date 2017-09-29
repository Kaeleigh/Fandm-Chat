(function() {
    function HomeCtrl(Room) {
      this.rooms = Room.all;         // array rooms is attached to HomeCtrl and array of objects retrieved by all method
    }

    angular
        .module('fandmChat')
        .controller('HomeCtrl', ['Room',  HomeCtrl]);   // Room is the $scope variable
})();
