app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider

	 .state('home', {
		  url: '/home',
			templateUrl : 'home.html',
			controller  : 'homeController'
		})

    //END-MOCKAPP:ROUTERS
    $urlRouterProvider.otherwise('/home');
});
