// SERVICES
weatherApp.service('CityService',function(){
	this.city = 'Delhi';
});

weatherApp.service('HttpServiceCall',function($q,$http){
	var baseURL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
	var appid = '04148c3c50040cb4559e1975e2f32ffd';
	this.getWeather = function(place,cnt){
		var deferred = $q.defer();
		var fullURL = baseURL + '?q=' + place +'&cnt='+ cnt +'&mode=json'+'&appid='+ appid;
		$http({
			method:'GET',
			url: fullURL
		}).then(function(res){
			deferred.resolve(res);
		});
		return deferred.promise;
	};
	
});