
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
    }

    $scope.voteUp = function (index) {
        $scope.ourStack[index].likes += 1;
    }
    $scope.voteDown = function (index) {
        $scope.ourStack[index].dislikes += 1;
    }
});
