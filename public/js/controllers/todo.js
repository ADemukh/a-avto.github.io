// todo.js
(function() {
	"use strict";

	angular.module("app")
		.controller("Todo", Todo);

	function Todo($scope){
		// API
		$scope.todo = {
			imgSrc: "images/alex.jpg"			
		};
	};
})();

