(function OrderRegistrationSearchSwitchComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qOrderRegistrationSearchSwitch', {
            controller: 'controllers.orderregistrationsearchswitch',
            templateUrl: 'webui/order-registration/order-registration-search/order-registration-search-switch/order-registration-search-switch.tmpl.html',
            bindings: {
                options: '<',
                active: '<',
                onSwitch: '&'
            }
        })
        .controller('controllers.orderregistrationsearchswitch', OrderRegistrationSearchSwitchController);

    OrderRegistrationSearchSwitchController.$inject = [];

    function OrderRegistrationSearchSwitchController() {
        this.$onInit = function onInit() {
            var foundActiveOption;

            if (this.active && this.options) {
                foundActiveOption = findActiveInOption(this.options, this.active);
                if (foundActiveOption && foundActiveOption !== this.active) {
                    this.setActive(foundActiveOption);
                }
            }
        };
        this.$onChanges = function onChanges(changes) {
            if (changes.options) {
                this.options = angular.copy(this.options);
            }
            if (changes.active) {
                this.active = angular.copy(this.active);
            }
        };

        this.setActive = function switchOption(option) {
            this.active = option;
            this.onSwitch({
                $event: {
                    option: option
                }
            });
        };
        this.isActive = function isActive(option) {
            return this.active.value === option.value;
        };

        function findActiveInOption(options, activeOption) {
            return options.find(function containActive(option) {
                return activeOption.value.indexOf(option.value) >= 0;
            });
        }
    }
})();