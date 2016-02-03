
/* global $s */
<<<<<<< HEAD
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


=======
app.controller('MainController', function($scope){
$scope.ourStack =[];
$scope.discFunc = function(){
    if($scope.newQ){
        $scope.newQ.date = Date.now();
        $scope.newQ.ans =[];
        $scope.ourStack.push($scope.newQ);
        $scope.newQ ="";
    };
};
>>>>>>> bb593db0c45b0008c34690d0d1246b1bf7dd39e1


    this.disc = {
        question: "What is love",
        tags: "noFilter",
        date: Date.now(),
<<<<<<< HEAD
        ans: [{
            resp: false,
            com: "are you high?",
            up: 0,
            down: 0,
            date: Date.now(),
        }]
    }
    $scope.testy = [];

    $scope.addNew = function (response) {
=======
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
>>>>>>> bb593db0c45b0008c34690d0d1246b1bf7dd39e1
        $scope.testy.push(response)
    }

    $scope.destroy = function (index) {
        this.testy.splice(index, 1);
    }

});

<<<<<<< HEAD
=======
// Each item needs a like and dislike property-->

//   $scope.plusOne = function(index) {
  	// $scope.products[index].likes += 1;
//   }
//   $scope.minusOne = function(index) {
  	// $scope.products[index].dislikes += 1;

>>>>>>> bb593db0c45b0008c34690d0d1246b1bf7dd39e1
