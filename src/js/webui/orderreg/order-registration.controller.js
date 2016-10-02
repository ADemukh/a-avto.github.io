(function OrderRegistrationControllerInit() {
    'use strict';

    angular.module('webui').
	controller('orderRegistration', OrderRegistrationController);

function OrderRegistrationController () {
	var vm;

	vm = this;
	vm.repair = 'Ремонт автомобиля на ваших условиях';
	vm.information = 'Укажите информацию по автомобилю';
	vm.auto = 'Марка';
	vm.modell = 'Модель';
	vm.yea = 'Год';
	vm.what = 'Что именно нужно починить?';
	vm.application = 'Заявка во все сервисы';
	vm.departure = 'Ваша заявка будет отправлена во все сервисы, и вы сможете выбрать лучший';
	vm.search = 'Искать на карте';
	vm.price = 'Вы можете сразу выбрать работы из прайс-листов, и записаться на ремонт';
	vm.cars = getCars();


	vm.click = function click (car) {
		// body...
	}

	vm.click1 = function click (model) {
		// body...
	}


	vm.k= function click (username){
		
		if (vm.car=='Audi')
			vm.models=getModelsAudi();
		else
			vm.models=0;
			vm.years=0;
	}


	vm.f=function click (username){

		if (vm.model=='A5')
			vm.years=getYearsA5();
		else if (vm.model=='A6')
			vm.years=getYearsA6();
		// else if (vm.model=='A1')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='A3')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='A4')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='A6 Allroad Quattro')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='A7')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='A8')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='Q3')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='Q5')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='Q7')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='R8')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='RS3')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='RS4')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='RS5')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='RS6')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='RS7')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='S3')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='S4')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='S5')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='S6')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='S8')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='TT')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='TT Offroad')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='TT RS')
		// 	vm.years=getYearsA6();
		// else if (vm.model=='TTS')
		// 	vm.years=getYearsA6();
		else 
			vm.years=0;


	}
	

	function getYearsA5 () {
			// body...
			return ['2009'];
		}

	function getYearsA6 () {
			// body...
			return ['2009', '2010', '2011'];
		}

	function getModelsAudi () {
		// body...
		return ['A1','A3','A4','A5','A6','A6 ALLROAD QUATTRO','A7','A8','Q3','Q5','Q7','R8','RS3','RS4','RS5','RS6','RS7','S3','S4','S5','S6','S8','TT','TT OFFROAD','TT RS','TTS'];
	}

	function getCars () {
		// body...
		return [
		'AC'
		,'Acura'
		,'Alfa Romeo'
		,'Aston Martin'
		,'Audi'
		,'Austin'
		,'BAW'
		,'Beijing'
		,'Bentley'
		,'BMW'
		,'Brilliance'
		,'Bristol'
		,'Bugatti'
		,'Buick'
		,'BYD'
		,'Volkswagen'
		,'Volvo'
		,'ВАЗ (Lada)'
		,'Geely'
		,'GMC'
		,'Great Wall'
		,'ГАЗ'
		,'Dacia'
		,'Daewoo'
		,'Daihatsu'
		,'Daimler'
		,'Dodge'
		,'Jeep'
		,'ЗАЗ'
		,'ЗИЛ'
		,'Infiniti'
		,'Isuzu'
		,'IVECO'
		,'ИЖ'
		,'Cadillac'
		,'Citroen'
		,'Kia'
		,'Koenigsegg'
		,'КАМАЗ'
		,'Lamborghini'
		,'Lancia'
		,'Land Rover'
		,'Lexus'
		,'Lifan'
		,'Lincoln'
		,'Lotus'
		,'ЛуАЗ'
		,'Marussia'
		,'Maserati'
		,'Maybach'
		,'Mazda'
		,'McLaren'
		,'Mercedes-Benz'
		,'Mercury'
		,'MG'
		,'Mini'
		,'Mitsubishi'
		,'Москвич'
		,'Nissan'
		,'Oldsmobile'
		,'Opel'
		,'Pagani'
		,'Peugeot'
		,'Plymouth'
		,'Pontiac'
		,'Porsche'
		,'Proton'
		,'Renault'
		,'Rolls-Royce'
		,'Rover'
		,'Saab'
		,'Saturn'
		,'Scion'
		,'SEAT'
		,'Skoda'
		,'Smart'
		,'SsangYong'
		,'Subaru'
		,'Suzuki'
		,'Toyota'
		,'TVR'
		,'ТагАЗ'
		,'УАЗ'
		,'FAW'
		,'Ferrari'
		,'Fiat'
		,'Ford'
		,'Honda'
		,'Hummer'
		,'Hyundai'
		,'Chery'
		,'Chevrolet'
		,'Chrysler'
		,'Jaguar'];
	}

}
})();