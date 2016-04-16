angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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
  $scope.settings = {
    enableFriends: true
  };
  $scope.createTask = function(radio_value) {
    console.log("Submitting");
window.alert("Submitting text");
  };
});


