
/* global $s */
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

<<<<<<< HEAD

    // this.disc = {
    //     question: "What is love",
    //     tags: "noFilter",
    //     date: Date.now(),
    //     ans: [{
    //         resp: false,
    //         com: "are you high?",
    //         up: 0,
    //         down: 0,
    //         date: Date.now(),
    //     }]
    // }
    
})

=======
    this.disc = {
        question: "What is love",
        tags: "noFilter",
        date: Date.now(),
        ans: [{
            resp: false,
            com: "are you high?",
            up: 0,
            down: 0,
            date: Date.now(),
        }]
    }
    $scope.testy= [];
    
    $scope.addNew = function(response){
        $scope.testy.push(response)
    }
    
        $scope.destroy = function(index){
        this.testy.splice(index, 1);
    }
    
});
>>>>>>> 9d7b6538c15b2ae84440b34bb8ad334c1d0bd72a
