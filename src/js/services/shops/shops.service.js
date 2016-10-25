(function ShopsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('shops', ShopsService);
    ShopsService.$inject = ['_'];

    function ShopsService(_){
        var shops = [
            ["53.902257","27.561831", "375336563560"]
            ,
            ["53.902277","27.561831", "375336563560"]];
        return {
        	getCoord: getCoord
        };

        function getCoord(){
			for (var i = 0; i < shops.length; i++) {
			  var i1=shops[i][0];
			  var i2=shops[i][1];
			  var a =+i1;
			  var b =+i2;
			  var s =[s,[[a,b]]]; 
			}
        	return s[1]
        }
    }
    
})();

