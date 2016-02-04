
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

    // this.disc = {
    //     question: "What is love",
    //     tags: "noFilter",
    //     date: Date.now(),
    //     likes: 0,
    //     dislikes: 0
    // }
<<<<<<< HEAD
    


=======
    // $scope.resp = []
>>>>>>> 99176db785dd3dfffc9e352d8a52f1aaa2c2443b
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
<<<<<<< HEAD

=======
>>>>>>> 99176db785dd3dfffc9e352d8a52f1aaa2c2443b
    }

    $scope.voteUp = function (index) {
        $scope.ourStack[index].likes += 1;
    }
    $scope.voteDown = function (index) {
        $scope.ourStack[index].dislikes -= 1;
    }
});
