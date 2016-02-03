/* global $s */
app.controller('MainController', function($scope){
$scope.ourStack =[];
$scope.discFunc = function(){
    if($scope.newQ){
        $scope.ourStack.push($scope.newQ);
    $scope.newQ ="";
    };
};

    
<<<<<<< HEAD
});
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
    
})
>>>>>>> b8f00f90384ef2a5c5e565435203bbfd03ece561
