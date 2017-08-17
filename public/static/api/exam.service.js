/*
* @Author: myxuan
* @Date:   2017-07-14 11:29:19
 * @Last Modified by:   myxuan
 * @Last Modified time: 2017-08-14 16:57:34
*/

(function () {
    'use strict';
    angular.module('api')
        .factory('api.exam', service);

    service.$inject = [
        'utils.api.service'
    ];

    function service(api) {
        var param = {
            getQuestions: getQuestions,
            createQuestion: createQuestion,
            deleteQuestion: deleteQuestion,
            getPapers: getPapers,
            createPaper: createPaper,
            getPaper: getPaper
        };
        return param;

        function getQuestions() {
            return api.get('/exam/questions');
        }

        function createQuestion(params) {
            return api.post('/exam/questions', params);
        }

        function deleteQuestion(id) {
            return api.post('/exam/questions/' + id);
        }

        function getPapers() {
            return api.get('/exam/papers');
        }

        function createPaper(params) {
            return api.post('/exam/papers', params);
        }

        function getPaper(id) {
            return api.get('/exam/papers/' + id);
        }
    }
})();