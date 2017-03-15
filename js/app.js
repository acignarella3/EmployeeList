var app = angular.module('myApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  $routeProvider
	.when('/', {
		controller: 'ListController',
		templateUrl: 'views/list.html'
	})
	.when('/add', {
		controller: 'AddController',
		templateUrl: 'views/add.html'
	})
	.when('/edit/:id', {
		controller: 'EditController',
		templateUrl: 'views/edit.html'
	})
	.when('/listnsa', {
		controller: 'ListController',
		templateUrl: 'views/listnsa.html'
	})
	.when('/listnsd', {
		controller: 'ListController',
		templateUrl: 'views/listnsd.html'
	})
	.when('/listesa', {
		controller: 'ListController',
		templateUrl: 'views/listesa.html'
	})
	.when('/listesd', {
		controller: 'ListController',
		templateUrl: 'views/listesd.html'
	})
	.when('/listdsa', {
		controller: 'ListController',
		templateUrl: 'views/listdsa.html'
	})
	.when('/listdsd', {
		controller: 'ListController',
		templateUrl: 'views/listdsd.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.constant("FBURL", 
  "https://employeelist-7ec3d.firebaseio.com/" //Use the URL of your project here
);
