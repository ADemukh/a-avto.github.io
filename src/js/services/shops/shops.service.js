(function ShopsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('shops', ShopsService);
    ShopsService.$inject = ['_'];

    function ShopsService(_){
        var shops = {
            1:["27.561831","53.902257", "375336563560","Auto", "Минск"],
            2:["27.661831","53.902257", "375336563560", "Mashine","Минск1"],
            3:["27.761831","53.902257", "375336563560", "Avto","Минск2"]
        };

        return {
            getName: getName,
        	getCoord: getCoord,
            getAdress: getAdress
        };
        function getName(){
            var f=_.keys(shops);
            var k=[];
            for (var i = 1; i < f.length+1; i++) {
              var i1=shops[i][3];
              
              k[k.length]=i1;
          }
          return k;
        }

        function getCoord(){
            var f=_.keys(shops);
            var s=[];
			for (var i = 1; i < f.length+1; i++) {
			  var i1=shops[i][0];
			  var i2=shops[i][1];
			  var a =+i1;
			  var b =+i2;
			  s[s.length]=[a,b];
               
			}
        	return s
        }

        function getAdress(){
            var f=_.keys(shops);
            var s=[];
            for (var i = 1; i < f.length+1; i++) {
              var i1=shops[i][4];
              s[s.length]=i1;
               
            }
            return s
        }
    }
    
})();

