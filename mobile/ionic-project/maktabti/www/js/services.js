angular.module('starter.services')

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Art',
    face: 'img/paint.png',
    color: '#CE40AB'
  }, {
    id: 1,
    name: 'Science',
    face: 'img/science.png',
    color: '#FFB24F'
  }, {
    id: 2,
    name: 'Sports',
    face: 'img/summer.png',
    color: '#4289BC'
  }, {
    id: 3,
    name: 'Animals',
    face: 'img/animals.png',
    color: '#CCF64C'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
