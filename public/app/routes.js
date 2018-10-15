angular.module('appRoute', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$routeProvider

	.when('/', {
		templateUrl: 'app/views/pages/home.html'
	})
	.when('/about', {
		templateUrl: 'app/views/pages/about.html'
	})
	.when('/register', {
		templateUrl: 'app/views/pages/users/register.html',
		controller: 'userReg',
		controllerAs: 'register'
	})
	.when('/login', {
		templateUrl: 'app/views/pages/users/login.html'
	})
	.otherwise({redirectTo: '/'})

	$locationProvider.html5Mode(true);

}]);