var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope){
	console.log("In myController...");

	$scope.newUser = {};

	$scope.users = [
		{username:"Bob", fullName: "Md. Bob Thomson", email:"bob@gmail.com"}
		{username:"sam", fullName: "Md. sam lanister", email:"bob@gmail.com"}
		{username:"johnsnow", fullName: "Md. johnsnow Stark ", email:"bob@gmail.com"}
		
	];

	$scope.saveUser = function(){
		console.log($scope.newUser)
	};
});