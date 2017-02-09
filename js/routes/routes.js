//CONFIG
weatherApp.config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider, ChartJsProvider){
	$stateProvider
	 	.state('home', {
			url:'/home',
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

	$urlRouterProvider.otherwise('/home');
	
	ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
	chartColors: ['#DCDCDC', '#949FB1'], responsive: false, showLines: true, showSeries: true});
	 
}