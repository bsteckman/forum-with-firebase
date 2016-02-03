
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
    
        $scope.destroy = function(index){
        this.testy.splice(index, 1);
    }
    
});

// Each item needs a like and dislike property-->

//   $scope.plusOne = function(index) {
  	// $scope.products[index].likes += 1;
//   }
//   $scope.minusOne = function(index) {
  	// $scope.products[index].dislikes += 1;