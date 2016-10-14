app.controller('EditController', ['$scope','$location', '$routeParams', '$firebaseObject', 'FBURL',   
    function($scope, $location, $routeParams, $firebaseObject, FBURL){
    
    var ref = new Firebase(FBURL + $routeParams.id);
	$scope.employee = $firebaseObject(ref);
    
    $scope.editEmployee = function() {
        $scope.employee.$save({
            name: $scope.employee.name,
            email: $scope.employee.email,
            date: $scope.employee.date.getTime()
        });
        $scope.edit_form.$setPristine();
        $scope.employee = {};
        $location.path('/products');
        
    };
     
}]);