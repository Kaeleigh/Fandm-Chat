(function() {
    function HomeCtrl(Room) {
      rooms = Room.all;
      this.rooms = rooms;
    }

    angular
        .module('fandmChat')
        .controller('HomeCtrl', ['Room',  HomeCtrl]);
})();
