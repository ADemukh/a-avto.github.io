(function CarsServiceInit() {
    'use strict';

    angular.module('services')
        .factory('cars', StatisticsService);

    function StatisticsService(){
    	return {
    		getStatistic: getStatistic
    	};

    	function getStatistic(){
    		return ['shopTotals','clientTotal','everageOrteusTotal'];
    	} 
    }

})();