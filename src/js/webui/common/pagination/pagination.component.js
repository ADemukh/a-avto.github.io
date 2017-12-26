(function PaginationComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qPagination', {
            controller: 'controllers.pagination',
            templateUrl: 'webui/common/pagination/pagination.tmpl.html',
            bindings: {
                items: '<',
                itemsPerPage: '<',
                selectedItems: '='
            }
        })
        .controller('controllers.pagination', PaginationController);

    PaginationController.$inject = ['_'];

    function PaginationController(_) {
        var vm;

        vm = this;

        vm.pageChanged = function pageChangedCallback() {
            var begin, end;

            begin = vm.itemsPerPage * (vm.currPageNumber - 1);
            end = vm.itemsPerPage * vm.currPageNumber;
            vm.selectedItems = _.slice(vm.items, begin, end);
        };

        this.$onInit = function init() {
            vm.currPageNumber = 1;
            if (!vm.itemsPerPage) {
                vm.itemsPerPage = 10;
            }
            vm.pageChanged();
        };

        this.$onChanges = function changes() {
            if (vm.items) {
                vm.selectedItems = _.slice(vm.items, 0, vm.itemsPerPage);
            }
        };
    }
})();