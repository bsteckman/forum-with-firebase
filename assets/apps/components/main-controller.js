/* global $s */
app.controller('MainController', function($scope){
$scope.ourStack =[];
$scope.discFunc = function(){
    if($scope.newQ){
        $scope.ourStack.push($scope.newQ);
    $scope.newQ ="";
    };
};

    
});