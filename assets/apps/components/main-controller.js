
app.controller('MainController', function ($scope) {
    $scope.ourStack = [];
    $scope.discFunc = function () {
        if ($scope.newQ) {
            $scope.newQ.date = Date.now();
            $scope.newQ.likes = 0;
            $scope.newQ.dislikes = 0;
            $scope.newQ.ans = [];
            $scope.ourStack.push($scope.newQ);
            $scope.newQ = "";
        };
    };

    $scope.ultraDelete = function(index){
      $scope.ourStack.splice(index, 1);  
    };
    
    $scope.respFunc = function (quest) {
        if (quest.response) {
            quest.response.date = Date.now();
            quest.response.likes = 0;
            quest.response.dislikes = 0;
            quest.ans.push(quest.response);
            quest.response = "";
        }
    }

    $scope.destroy = function (quest, index) {
        quest.ans.splice(index, 1);
    }

    $scope.voteUp = function (index) {
        $scope.ourStack[index].likes += 1;
    }
    $scope.voteDown = function (index) {
        $scope.ourStack[index].dislikes -= 1;
    }
});
