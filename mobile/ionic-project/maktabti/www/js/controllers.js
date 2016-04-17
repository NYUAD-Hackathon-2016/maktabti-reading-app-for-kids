angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Stories) {
  var currentStory = 0;
  var stories = Stories.all();
  $scope.story = stories[currentStory];
  ;

  $scope.nextStory = function() {

    currentStory++;
    if (currentStory >= stories.length){
        currentStory--;
    }
    $scope.story = stories[currentStory];
  };

  $scope.previousStory = function() {
    currentStory--;
    if (currentStory == -1){
        currentStory++;
    }
    $scope.story = stories[currentStory];
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('RequestCtrl', function($scope, $http) {

    $scope.getArticle = function(id) {
        $http.get("http://localhost/api/articles", { params: { "id": id} })
            .success(function(data) {
                $scope.article = data.article;
            })
            .error(function(data) {
                alert("ERROR");
            });
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.quiz = {
    answers: ['Rome','London', 'Paris'],
    correct: 'Rome',
    question: 'Where did this story take place?'
  }
  $scope.settings = {
    answer: '',
    enableFriends: true
  };
  $scope.createTask = function() {
    if($scope.settings.answer == $scope.quiz.correct) {
      window.alert("TRUE!");
    }
    else {
      window.alert("FALSE!");
    }
  };
}
)


.controller('StatsCtrl', function($scope) {
  $scope.numberReadBooks = 10;
})


 // $scope.createTask = function(radio_value) {
   // console.log("Submitting");
//window.alert("Submitting text");
  //};
