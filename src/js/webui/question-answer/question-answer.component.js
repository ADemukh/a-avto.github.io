(function QuestionAnswerComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qQuestionAnswer', {
            controller: 'controllers.questionanswer',
            templateUrl: 'webui/question-answer/question-answer.tmpl.html'
        })
        .controller('controllers.questionanswer', QuestionAnswerController);

        QuestionAnswerController.$inject = ['services.identity', 'services.question'];

    function QuestionAnswerController(identity, question) {
        this.$onInit = function onInit() {
            this.send = function send() {
                var form;

                form = {
                    userName: this.name,
                    email: this.email,
                    status: 'New',
                    question: this.question
                };
                question.sendNewQuestion(form).then();
                this.question = '';
            };

            this.email = identity.user.email;
            this.name = identity.user.name;
        };
    }
})();