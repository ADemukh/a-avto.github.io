(function QuestionServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.question', QuestionService);

    QuestionService.$inject = ['$http'];

    function QuestionService($http) {
        return {
            sendNewQuestion: sendNewQuestion
        };

        function sendNewQuestion(newQuestion) {
            return $http.post('questionAnswer/sendnewquestion', newQuestion);
        }
    }
})();