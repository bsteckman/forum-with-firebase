
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
    
    $scope.resp = [{
        comment: "String",
        date: Date.now(),
        likes: 0,
        dislikes: 0
    }]
    

    $scope.addNew = function(){
        if($scope.response){
        $scope.resp.push($scope.response);
        $scope.response = '';
        }
    }

    $scope.destroy = function (index) {
        $scope.resp.splice(index, 1);
    }

});

//Each item needs a like and dislike property
//   $scope.plusOne = function(index) {
  	// $scope.products[index].likes += 1;
//   }
//   $scope.minusOne = function(index) {
  	// $scope.products[index].dislikes += 1;
//   }