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
	// by default 7 days
	var cnt = $stateParams.days || 7;
    $scope.days = cnt;
    // get weather details
	$scope.getWeather = function(place,cnt){
		HttpServiceCall.getWeather(place,cnt).then(function(res){
			$scope.weatherResult = res.data;
			$scope.country = $scope.weatherResult.city.country;
			
			// charting -------------------------------------------------------
			$scope.labels = [];
			$scope.data = [];
			var arrTemp1 = [];
			var arrTemp2 = [];
			
			$scope.series = ['Minimum Temprature (F) ', 'Maximum Temprature (F) '];
			$scope.optionsBar = { legend: { display: true } }; // for bar chart
			for(var i=1;i<=cnt;i++){
				// labels
				$scope.labels.push(i);
				var minTemp =  $scope.convertKToF($scope.weatherResult.list[i-1].temp.min);
				var maxTemp =  $scope.convertKToF($scope.weatherResult.list[i-1].temp.max);
				arrTemp1.push(minTemp);
				arrTemp2.push(maxTemp);
			}
			
			// minimum temprature
			$scope.data[0] = arrTemp1;
			// maximum temprature
			$scope.data[1] = arrTemp2;

			$scope.onClick = function (points, evt) {
				console.log(points, evt);
			};

			// for line chart
			$scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }]; 
			$scope.options = {
				scales: {	
				yAxes: [
					{
					id: 'y-axis-1',
					type: 'linear',
					display: true,
					position: 'left'
					},
					{
					id: 'y-axis-2',
					type: 'linear',
					display: true,
					position: 'right'
					}
				]
				},
				legend:{display:true}
			};
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
