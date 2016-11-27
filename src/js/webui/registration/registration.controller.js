(function RegistrationControllerInit() {
    'use strict';

    angular.module('webui').
	controller('registration', RegistrationController);

	RegistrationController.$inject = ['newBid','cars', 'shops', '$scope'];

function RegistrationController (newBid, cars, shops, $scope) {
	var _map, vm;

	vm = this;

	vm.afterMapInit=function (map){
			_map=map;
	};
	var map;
	$scope.afterInit = function($map){
	    map = $map;
	};
	$scope.mapClick = function(e){
	    if (!map.balloon.isOpen()) {
	        var coords = e.get('coords');
	        map.balloon.open(coords, {
	            contentHeader:'Событие!',
	            contentBody:'Кто-то щелкнул по карте.' +'Координаты щелчка: ' + [coords[0].toPrecision(6),coords[1].toPrecision(6)].join(', ') + '', contentFooter:'Щелкните еще раз'

	        });
	        vm.dolgota=coords[0].toPrecision(6);
	        vm.shirota=coords[1].toPrecision(6)
	    }
	    else {
	        map.balloon.close();
	    }
	};
	$scope.handleContext = function(e){
	    map.hint.open(e.get('coords'), 'Кто-то щелкнул правой кнопкой');
	};
	$scope.balloonOpen=function(){
	    map.hint.close();
	}
	vm.clientRegistration ='Регистрация клиента';
	vm.registerClient ='Зарегистрироваться';
	vm.q ='Нажимая кнопку зарегистрироваться вы соглашаетесь с ';
	vm.w ='Пользовательским соглашением';
	vm.e=' и даёте ';
	vm.r='Согласие на обработку перносальных данных';
	vm.carRegistration='Регистрация автосервиса';
	vm.authorizedDealer='Официальный дилер';
	vm.registerCar='Зарегистрироваться';
	
}
})();