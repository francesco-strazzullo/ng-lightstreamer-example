(function() {
    "use strict";

    angular.module('ng-lightstreamer-example').controller('Main',[
    	'$scope',
    	'lightstreamer',
    	'Items',
    	'Fields',
    	function(
    		$scope,
    		lightstreamer,
    		Items,
    		Fields){

    		$scope.status = "Waiting";
    		
    		$scope.items = Items;
    		$scope.fields = Fields;

    		var options = {
    			items:_.pluck(Items,'key'),
    			fields:Fields,
    			dataAdapter:"QUOTE_ADAPTER",
    			requestedSnapshot:true,
    			onUpdate:function(updateInfo) {
    				var item = _.findWhere(Items,{key:updateInfo.item});
    				if(item){
    					_.each(Fields,function(field,index){
    						item[field] = updateInfo.values[index];
    					});
    				}
    			}
    		}

    		lightstreamer.addStatusChangeListener(function(status){
				$scope.status = status;
			});

			lightstreamer.addSubscriber(options);

    		lightstreamer.connect();
    	}
    ]);

}());