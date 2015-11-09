(function() {
    "use strict";

    angular.module('ng-lightstreamer-example').controller('Main',[
    	'$scope',
    	'lightstreamer',
    	function($scope,lightstreamer){

    		$scope.status = "Waiting";

    		lightstreamer.addStatusChangeListener(function(status){
				$scope.status = status;
			});

    		$scope.connect = lightstreamer.connect;
    	}
    ]);

}());