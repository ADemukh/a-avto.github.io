(function QuestionServiceInit() {
    'use strict';

    angular.module(SERVICES_MODULE_NAME)
        .factory('services.question', QuestionService);

    QuestionService.$inject = ['$http'];

    function QuestionService($http) {
        return {
            sendNewQuestion: sendNewQuestion,
            getAllQuestionsAnswers: getAllQuestionsAnswers
        };

        function sendNewQuestion(newQuestion) {
            return $http.post('questionAnswer/sendNewQuestion', newQuestion);
        }

        function getAllQuestionsAnswers() {
            return $http.get('questionAnswer/getQuestionsAnswers');
        }
    }
})();