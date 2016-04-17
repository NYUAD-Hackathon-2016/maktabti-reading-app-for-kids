angular.module('starter.services', [])

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
})


.factory('Stories', function() {

  var stories = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

return {
    all: function() {
      return stories;
    },
    get: function(id) {
      var article = $scope.getArticle();
      for (var i = 0; i < stories.length; i++) {
        if (stories[i].id === parseInt(storyId)) {
          return stories[i];
        }
      }
      return article;
    }
  };

  })

;
