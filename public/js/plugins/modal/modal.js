/*
* @Author: myxuan
* @Date:   2017-07-14 16:07:41
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-25 16:13:03
*/

(function() {
    'use strict';
    angular.module('modal', [])
        .controller('plugins.modal.controller', controller)
        .service('plugins.modal.service', service);

    service.$inject = [
        '$uibModal'
    ];
    function service($uibModal) {
        return {
            open: open
        };

        function open(param){
            var option = {
                size: param.size?param.size:'sm',
                templateUrl: '/js/plugins/modal/modal.html',
                controller: 'plugins.modal.controller',
                controllerAs: 'ctrl',
                resolve: {
                    context: function () {
                        return {
                            model: param.model,
                            title: param.title?param.title:'Modal Title',
                            submitText: param.submit?param.submit:'Ok',
                            cancelText: param.cancel?param.cancel:'Cancel',
                            templateUrl: param.templateUrl
                        };
                    }
                }
            };
            return $uibModal.open(option).result;
        }
    }

    controller.$inject = [
        '$uibModalInstance',
        'context'
    ];
    function controller($uibModalInstance, context) {
        var ctrl = this;
        ctrl.title = context.title;
        ctrl.submitText = context.submitText;
        ctrl.cancelText = context.cancelText;
        ctrl.templateUrl = context.templateUrl;

        ctrl.submit = function(){
            return $uibModalInstance.close(ctrl);
        };
        ctrl.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
        return ctrl;
    }

})();