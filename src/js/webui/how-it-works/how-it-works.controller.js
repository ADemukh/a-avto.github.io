(function HowItWorksControllerInit() {
    'use strict';

    angular.module('webui').
	controller('controllers.howitworks', HowItWorksController);

	function HowItWorksController() {
		this.title = 'Как работает aAvto.by';
		this.optionsAlt = 'Есть несколько вариантов поиска запчастей';
		this.option1Alt = 'Создайте заявку во все магазины';
		this.option1Action1Alt = 'Создаёте заявку';
		this.option1Action2Alt = 'Сравниваете цены';
		this.option1Action3Alt = 'Выбираете магазин';
		this.option1ActionButtonAlt = 'Создать заявку на запчасть';
		this.option2Alt = 'Ищите магазины по цене на карте';
		this.option2Action1Alt = 'Ищете нужные вам работы по прайс-листам во всех магазинах';
		this.option2Action2Alt = 'Выбираете лучшие предложения и договариваетесь с магазином';
		this.option1ActionButtonAlt = 'Создать заявку на ремонт';
		this.option2ActionButtonAlt = 'Искать на карте';
	}
})();