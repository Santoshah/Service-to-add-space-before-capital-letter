	var app = angular.module("myApp", []);



	app.controller('myController',  function($scope, stringOperation){
		$scope.transformString = function(unFilter){
			$scope.filtered  = stringOperation.processString(unFilter);
			$scope.unFilter = "angularJsTutorial";
		}			
	})

	app.factory('stringOperation', function(){
		return {
			processString: function(unFilter){
				if(!unFilter) {
					return unFilter;
				}	


				var filtered  = "";
				for(i=0; i < unFilter.length; i++) {
					if(i>0 && unFilter[i]  == unFilter[i].toUpperCase() ) {
						filtered = filtered+" ";
					} 
					filtered = filtered+unFilter[i];
				}				
				return filtered;
			}
		};
	})

	app.filter("capitalizeFirstLetter", function(){

		return function(unFilter) {
			return (unFilter) ? unFilter.charAt(0).toUpperCase() + unFilter.substr(1) : " "; 
		}
	})


