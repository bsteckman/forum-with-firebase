
app.controller('MainController', function ($scope) {
    var mc = this;
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
    
    $scope.resp = []
    $scope.respFunc = function (response) {
        if (response) {
            response.date = Date.now();
            response.likes = 0;
            response.dislikes = 0;
            $scope.resp.push(response);
            mc.response = "";
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
