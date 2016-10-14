app.controller('ListController', ['$scope', '$firebaseArray', '$firebaseObject', 'FBURL', 'orderByFilter', function($scope, $firebaseArray, $firebaseObject, FBURL, orderBy){
  
  var employees = new Firebase(FBURL);
  $scope.employees = $firebaseArray(employees);
  
  $scope.removeEmployee = function(id) {
    var ref = new Firebase(FBURL + id);
    var employee = $firebaseObject(ref)
    employee.$remove();
   };
   
}]);

 