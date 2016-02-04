
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
    $scope.resp = []
    $scope.respFunc = function () {
        if ($scope.response) {
            $scope.resp.date = Date.now();
            $scope.resp.likes = 0;
            $scope.resp.dislikes = 0;
            $scope.resp.push($scope.response);
            $scope.response = "";
        }
    }




    $scope.destroy = function (index) {
        $scope.resp.splice(index, 1);
=======
    // $scope.resp = []
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
>>>>>>> a14f0ea0ea3f4b7574b5b217446671efb58e1347
    }

    $scope.voteUp = function (index) {
        $scope.ourStack[index].likes += 1;
    }
    $scope.voteDown = function (index) {
        $scope.ourStack[index].dislikes += 1;
    }
});
