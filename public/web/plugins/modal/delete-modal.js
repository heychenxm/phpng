/*
* @Author: myxuan
* @Date:   2017-07-14 16:07:41
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-27 18:21:28
*/

(function() {
    'use strict';
    angular.module('app')
        .controller('plugins.delete-modal.controller', controller)
        .service('plugins.delete-modal.service', service);

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
                template: param.template?param.template:'',
                templateUrl: param.templateUrl?param.templateUrl:'/web/plugins/modal/delete-modal.html',
                controller: 'plugins.delete-modal.controller',
                controllerAs: 'ctrl',
                resolve: {
                    context: function () {
                        return {
                            title: param.title?param.title:'Modal Title',
                            tips: param.tips,
                            submitText: param.submit?param.submit:'Ok',
                            cancelText: param.cancel?param.cancel:'Cancel'
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
        ctrl.tips = context.tips;
        ctrl.submitText = context.submitText;
        ctrl.cancelText = context.cancelText;

        ctrl.submit = function(){
            $uibModalInstance.close(context);
        };
        ctrl.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
        return ctrl;
    }

})();