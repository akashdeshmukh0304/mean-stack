angular.module('mainController', ['authServices'])

.controller('mainCtrl', function(Auth, $location, $timeout) {
		
	this.doLogin = function (loginData) {
		
		var app = this;
		app.errorMsg = false;
		app.loading = true;
		app.successMsg = false;
		Auth.login(app.loginData).then(function (data) {
			if (data.data.success) {
				app.successMsg = data.data.message;
				app.loading = false;

				// set the timeout
				$timeout(function () {
					$location.path('/about');
				}, 2000);

			} else {
				app.errorMsg = data.data.message;
				app.loading = false;
			}
		}); 
	}

});