/*
* @Author: myxuan
* @Date:   2017-07-14 13:52:14
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-25 15:29:25
*/

(function() {
    'use strict';
    angular.module('app')
        .controller('plugins.form-modal.controller', controller)
        .service('plugins.form-modal.service', service);

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
                templateUrl: param.templateUrl?param.templateUrl:'/web/plugins/modal/form-modal.html',
                controller: 'plugins.form-modal.controller',
                controllerAs: 'ctrl',
                resolve: {
                    context: function () {
                        return {
                            schema: param.schema,
                            form: param.form,
                            model: param.model,
                            title: param.title?param.title:'Modal Title',
                            submitText: param.submit?param.submit:'Submit',
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
        ctrl.submitText = context.submitText;
        ctrl.cancelText = context.cancelText;
        ctrl.form = context.form;
        ctrl.schema = context.schema;
        ctrl.model = context.model;

        ctrl.submit = function(){
            $uibModalInstance.close(context);
        };
        ctrl.cancel = function(){
            $uibModalInstance.dismiss('cancel');
        };
        return ctrl;
    }

})();