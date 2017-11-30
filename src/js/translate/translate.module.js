(function TranslateModuleInit() {
    'use strict';

    angular.module('aavto.translate', ['pascalprecht.translate'])
        .config(translationsModuleConfig);

    translationsModuleConfig.$inject = ['$translateProvider'];

    function translationsModuleConfig($translateProvider) {
        $translateProvider.registerAvailableLanguageKeys(['ru_RU'], {
            'ru_RU': 'ru_RU'
        });
        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('ru_RU');
        $translateProvider.fallbackLanguage('ru_RU');
        $translateProvider.useSanitizeValueStrategy('escape');
    }
})();