(function QuestionAnswerComponentInit() {
    'use strict';

    angular.module(WEBUI_MODULE_NAME)
        .component('qQuestionAnswer', {
            controller: 'controllers.questionanswer',
            templateUrl: 'webui/question-answer/question-answer.tmpl.html'
        })
        .controller('controllers.questionanswer', QuestionAnswerController);

    QuestionAnswerController.$inject = ['services.identity', 'services.question', 'services.webui.alerts', '$translate'];

    function QuestionAnswerController(identity, question, alerts, $translate) {
        this.$onInit = function onInit() {
            var vm;

            vm = this;

            getAllQuestionsAnswers();
            
            this.form = question.newQuestion();
            this.form.email = identity.user.email;
            this.form.userName = identity.user.name;

            this.send = function send() {
                question.sendNewQuestion(this.form).then(function complete() {
                    vm.questionForm.$setPristine();
                    vm.questionForm.$setUntouched();
                    vm.form.question = '';
                    vm.alerts = [alerts.success('Ваш вопрос был успешно отправлен')];
                    getAllQuestionsAnswers();
                }, function failure() {
                    vm.alerts = [alerts.success($translate.instant('Извините. При отправке вопроса возникла ошибка.'))]

                });
            };



            this.openQuestion = function openQuestion(question) {
                this.selectedQuestion = question;
            }

            this.backTolist = function backTolist() {
                delete this.selectedQuestion;
            }


            function getAllQuestionsAnswers() {
                question.getAllQuestionsAnswers().then(function onGetAllQuestionsAnswers(allQuestions) {
                    console.log(allQuestions)
                    vm.allQuestions = allQuestions.data;
                });
            }
        };
    }
})();