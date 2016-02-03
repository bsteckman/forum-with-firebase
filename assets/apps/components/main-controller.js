
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

    this.disc = {
        question: "What is love",
        tags: "noFilter",
        date: Date.now(),
        likes: 0,
        dislikes: 0
    }
    
    this.resp = {
        comment: "String",
        date: Date.now(),
        likes: 0,
        dislikes: 0
    }
    
    
    $scope.testy= [];
    
    $scope.addNew = function(response){
        $scope.testy.push(response)
    }

    $scope.destroy = function (index) {
        this.testy.splice(index, 1);
    }

});
