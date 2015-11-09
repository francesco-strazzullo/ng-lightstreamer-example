(function() {
    "use strict";

    angular.module('ng-lightstreamer-example', [
        'ng-lightstreamer'
    ]).config(['lightstreamerProvider',function(lightstreamerProvider){
    	lightstreamerProvider.setConfiguration({
    		server:'http://push.lightstreamer.com',
    		adapter:'DEMO'
    	});
    }]);

}());