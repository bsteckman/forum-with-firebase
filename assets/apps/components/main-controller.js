app.controller('MainController', function($scope){
    this.test = 'hello';
    
    $scope.disc = {
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
    
})