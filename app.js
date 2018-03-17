var app1 = angular.module('app1',[]);

var tokenKey = "todo_list";

app1.controller('todoCtrl',function($scope) {
	$scope.todo = [];	
	if(localStorage.getItem(tokenKey)==null) {
		localStorage.setItem(tokenKey, JSON.stringify($scope.todo));		
	} else {
		$scope.todo = JSON.parse(localStorage.getItem(tokenKey));
	}
	$scope.task = "";
	$scope.addTask = function() {
		if ($scope.task!="" && $scope.todo.indexOf($scope.task)==-1) {
			$scope.todo.push($scope.task);
			localStorage.setItem(tokenKey, JSON.stringify($scope.todo));	
		} else {
			alert("Please enter something valid");
		}
	
	};

	$scope.removeTask = function(index) {
		$scope.todo.splice(index,1);
		localStorage.setItem(tokenKey, JSON.stringify($scope.todo));		
	}
});
