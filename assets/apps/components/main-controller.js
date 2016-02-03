
/* global $s */
app.controller('MainController', function($scope){
$scope.ourStack =[];
$scope.discFunc = function(){
    if($scope.newQ){
        $scope.ourStack.push($scope.newQ);
    $scope.newQ ="";
    };
};

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