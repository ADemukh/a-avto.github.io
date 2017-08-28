(function ProfileOrderFiltersComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qProfileOrderFilters', {
            controller: 'controllers.profileorderfilters',
            templateUrl: 'webui/profile/common/order-filters/order-filters.tmpl.html',
            bindings: {
                filter: '<',
                filters: '<',
                onChange: '&'
            }
        })
        .controller('controllers.profileorderfilters', function ProfileOrderFiltersController() {
            this.$onInit = function onInit() {
                this.applyFilter = function applyFilter(filterOption) {
                    this.filter = filterOption;
                    this.onChange({
                        $event: this.filter
                    });
                };
            };
            this.$onChanges = function onChanges(changes) {
                if (changes.filter) {
                    this.filter = angular.copy(this.filter);
                }
                if (changes.filters) {
                    this.filters = angular.copy(this.filters);
                }
            };
        });
})();