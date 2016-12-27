(function HowItWorksComponentInit() {
    'use strict';

    angular.module('webui')
        .component('qHowItWorks', {
            controller: 'controllers.howitworks',
            templateUrl: 'webui/how-it-works/how-it-works.tmpl.html'
        });
})();