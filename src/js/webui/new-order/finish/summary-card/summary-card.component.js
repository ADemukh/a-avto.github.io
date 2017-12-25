(function NewOrderSummaryCardInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qSummaryCard', {
            templateUrl: 'webui/new-order/finish/summary-card/summary-card.tmpl.html',
			bindings: {
                order: '<',
                cardArea: '<'
			}
        });
})();