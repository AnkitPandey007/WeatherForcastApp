// DIRECTIVES

weatherApp.directive('weatherReport', function(){
	return{
		restrict: 'E',
		replace: true,
		templateUrl:'views/directives-template/weatherReport.html',
		scope:{
			weatherDay : '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat :'@'
		}
	}
});
