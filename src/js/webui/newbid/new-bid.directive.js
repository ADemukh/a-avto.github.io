(function NewBidDirectiveInit() {
    'use strict';

    angular.module('webui')
        .directive('qNewBid', NewBidDirective);

    function NewBidDirective() {
        return {
                restrict: 'E',
                controller: 'newbid',
                controllerAs: 'vm',
                templateUrl: 'webui/newbid/new-bid.tmpl.html',
                scope: {}
        };
    }
})();