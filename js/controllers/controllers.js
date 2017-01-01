// CONTROLLERS
weatherApp.controller('homeController',['$scope', '$state', 'CityService',function($scope, $state, CityService){

	$scope.city = CityService.city;
	$scope.$watch('city', function(){
		CityService.city = $scope.city;
	});

    $scope.submit = function(){
        $state.go('forcast');
    }

}]);

weatherApp.controller('forcastController',['$scope','$stateParams','CityService','HttpServiceCall',function($scope, $stateParams, CityService, HttpServiceCall){
	$scope.city = CityService.city;
	var cnt = $stateParams.days || 2;
    $scope.days = cnt;
	$scope.getWeather = function(place,cnt){
		HttpServiceCall.getWeather(place,cnt).then(function(res){
			$scope.weatherResult = res.data;
			$scope.country = $scope.weatherResult.city.country;
		});
	}
	
	$scope.getWeather($scope.city,cnt);

	$scope.convertKToF = function(degK){
		return Math.round((1.8*(degK - 273)) + 32);
	}

	$scope.convertToDate = function(dt){
		return new Date(dt*1000)
	}
	
}]);
