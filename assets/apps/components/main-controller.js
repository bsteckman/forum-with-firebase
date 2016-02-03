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

