angular.module('userControllers', ['userServices'])

.controller('userReg', function($http, $location, $timeout, User) {

	this.regUser = function (regData) {

		var app = this;
		app.errorMsg = false;
		app.loading = true;
		User.create(app.regData).then(function(data) {
			if (data.data.success) {
				app.successMsg = data.data.message;
				app.loading = false;

				// set the timeout
				$timeout(function() {
					$location.path('/');	
				}, 2000)
				
			} else {
				app.errorMsg = data.data.message;
				app.loading = false;
			}
		});
	}
});