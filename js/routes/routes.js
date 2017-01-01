//CONFIG
weatherApp.config(config);

function config($stateProvider, $locationProvider){
	$stateProvider
	 	.state('home', {
			url:'/',
	 		templateUrl:'views/home.html',
	 		controller:'homeController'
	 	})
	 	.state('forcast', {
			url:'/forcast',
	 		templateUrl:'views/forcast.html', 
	 		controller:'forcastController'
	 	})
	 	.state('forcast-by-days', {
			url:'/forcast/:days',
	 		templateUrl:'views/forcast.html', 
	 		controller:'forcastController'
	 	});

	$locationProvider.html5Mode(true);
}