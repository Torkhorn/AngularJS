var angular = require('angular')
require('angular-route')



var module = angular.module('demoApp', ['ngRoute'])

require('./routes/main/main.controller')

module.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/main.view.html',
		controller: 'MainController',
		controllerAs: 'main'
	})
	// .when('/utilisateur', {
	// 	templateUrl: '/templates/utilisateurs.html',
	// 	controller: 'MainController'
	// })
})
