/*
* @Author: myxuan
* @Date:   2017-07-14 13:39:30
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-27 18:11:24
*/

(function () {
    'use strict';
    angular.module('app')
        .factory('app.web.admin.exam.actions.create-question', service);

    service.$inject = [
        '$uibModal'
    ];

    function service($uibModal) {
        return {
            perform: perform
        };

        function perform() {
            var option = {
                size: 'md',
                templateUrl: '/web/static/admin/exam/modals/create.html',
                controller: 'app.admin.exam.modal.controller.create',
                controllerAs: 'ctrl',
                resolve: {
                    context: function () {
                        return {
                        };
                    }
                }
            };
            return $uibModal.open(option).result;
        }

    }
})();