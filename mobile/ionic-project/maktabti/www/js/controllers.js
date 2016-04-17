var story;

var firstStory = 2;
var lastStory = 7;

angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  var currentStory = firstStory;
  // var stories = Stories.all();
  
  getStory();
 
  function getStory() {
      var jsonStory = getJsonStory()
      return jsonStory;
  }

   function getJsonStory() {
      console.log("requesting article");
      // alert("requesting");
        $http.get("http://localhost:3000/api/articles", { params: { "id": currentStory} })
            .success(function(data) {
                console.log("success");
                console.log(currentStory);
                console.log(data.background);
                $scope.story = data;
                if (data.question) {
                  $scope.quiz = data.question.data;
                }
                story = data;
                console.log($scope.quiz.question);
                return data;
            })
            .error(function(data) {
              console.log("error");
                alert("ERROR")
                return null;
            });
    }
    
    $scope.nextStory = function() {
    currentStory++;
    if (currentStory > lastStory) {
        currentStory = firstStory;
    }
    var story = getStory();
  };

  $scope.previousStory = function() {
    currentStory--;
    if (currentStory < firstStory){
        currentStory = lastStory;
    }
    var story = getStory();
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
    $scope.getArticle = function() {
      console.log("requesting article");
      alert("requesting");
        $http.get("http://localhost/api/articles", { params: { "id": 1} })
            .success(function(data) {
              alert("working")
                console.log("success");
                $scope.article = data.article;
            })
            .error(function(data) {
              console.log("error");
                alert("ERROR");
            });
    }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  //   {
  //   answers: ['Rome','London', 'Paris'],
  //   correct: 'Rome',
  //   question: 'Where did this story take place?'
  // }
 $scope.quiz = story.question.data;
 console.log(story.question);
  
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

.controller('MainCtrl', function($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
})

.controller('StatsCtrl', function($scope) {
  $scope.numberReadBooks = 9;
  $scope.numberReadWords = 451;
  $scope.numberDays = 24;
})


 // $scope.createTask = function(radio_value) {
   // console.log("Submitting");
//window.alert("Submitting text");
  //};
