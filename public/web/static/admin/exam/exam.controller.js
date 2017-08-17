/*
* @Author: myxuan
* @Date:   2017-07-13 15:00:09
 * @Last Modified by:   myxuan
 * @Last Modified time: 2017-08-14 16:55:34
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('exam.controller', controller);

    controller.$inject = [
        'plugins.toast.service',
        'api.exam',
        'app.web.admin.exam.actions.create-question',
        'app.web.admin.exam.actions.create-paper',
        'app.web.admin.exam.actions.delete-question',
    ];

    function controller(
        toast, api, createQuestion, createPaper,
        deleteQuestion
    ) {
        var ctrl = this;

        initQuestionsTable();
        initPapersTable();

        function initQuestionsTable() {
            ctrl.questionColumns = [{
                id: 'id',
                title: 'ID'
            }, {
                id: 'content',
                title: 'Title'
            }, {
                id: 'options',
                title: 'Options',
                template: '<simple-selection></simple-selection>'
            }];

            ctrl.questionActions = [{
                title: 'Create',
                service: createQuestion,
                type: 'batch'
            }, {
                title: 'CreateExam',
                service: createPaper,
                type: 'global'
            }, {
                title: 'Update',
                service: 'test',
                type: 'row',
                template: {
                    type: ''
                }
            }, {
                title: 'Delete',
                service: deleteQuestion,
                type: 'row',
                template: {
                    type: 'delete'
                }
            }];

            api.getQuestions().then(onQuestionsSuccess, onQuestionsError);

            function onQuestionsSuccess(response) {
                ctrl.questions = response.data.items;
                angular.forEach(ctrl.questions, function(question) {
                    var options = [];
                    var i = 0;
                    angular.forEach(question.options, function(option) {
                        var param = {};
                        param.index = LETTER[i++];
                        param.content = option.content;
                        options.push(param);
                    });
                    question.options = options;
                });
            }

            function onQuestionsError(response) {
                toast.add('error', 'error');
            }
        }

        function initPapersTable() {
            ctrl.paperColumns = [{
                id: 'id',
                title: 'ID',
                type: 'href',
                urlFunction: function(item){
                    return '/exam/paper/' + item.uid;
                }
            }, {
                id: 'count',
                title: 'Count'
            }, {
                id: 'qrcode',
                title: 'Qrcode',
                template: '<qrcode data="{$ item.uid $}"></qrcode>'
            }, {
                id: 'created_at',
                title: 'Created At'
            }];

            ctrl.paperActions = [{
                title: 'Create',
                service: createPaper,
                type: 'batch'
            }, {
                title: 'Update',
                service: 'test',
                type: 'row',
                template: {
                    type: ''
                }
            }, {
                title: 'Delete',
                service: 'deleteService',
                type: 'row',
                template: {
                    type: 'delete'
                }
            }];

            api.getPapers().then(onPapersSuccess, onPapersError);

            function onPapersSuccess(response) {
                ctrl.papers = response.data.items;
                angular.forEach(ctrl.papers, function(paper) {
                    paper.count = paper.question_ids.length;
                });
            }

            function onPapersError(response) {
                toast.add('error', 'error');
            }
        }

    }
})();