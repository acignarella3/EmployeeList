app.controller('AddController', ['$scope', '$firebaseArray', '$location', 'FBURL', function($scope, $firebaseArray, $location, FBURL){
	
	$scope.addEmployee = function() {
		var ref = new Firebase(FBURL);
		var employee = $firebaseArray(ref);
		employee.$add({
			name: $scope.employee.name,
			email: $scope.employee.email,
			date: $scope.employee.date.getTime()
		});
		$location.path('/');
	};
	
}]);


