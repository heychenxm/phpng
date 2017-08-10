/*
* @Author: myxuan
* @Date:   2017-07-25 15:37:09
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-27 15:13:14
*/

(function(){
    angular.module('app')
        .controller('app.admin.exam.modal.controller.create', controller);

    controller.$inject = [
        '$uibModalInstance',
        'api.ajax.exam',
        'plugins.toast.service',
        'utils.action-result.service',
    ];

    function controller(
        $uibModalInstance, examApi, toast, actionResult
    ) {
        var ctrl = this;
        ctrl.i = 0;
        ctrl.types = [{
            value: 1,
            title: '单项选择'
        },{
            value: 2,
            title: '多项选择'
        }];
        ctrl.type = ctrl.types[0];
        ctrl.options = [];
        ctrl.addFlag = false;

        ctrl.submit = submit;
        ctrl.cancel = cancel;

        ctrl.changeType = changeType;

        ctrl.addOption = addOption;

        function submit(){
            var params = {
                content: ctrl.question,
                type: ctrl.type.value,
                options: ctrl.options
            };
            examApi.createQuestion(params).then(onSuccess, onError);
            return $uibModalInstance.close(ctrl);

            function onSuccess(){
                toast.add('success', 'success');
                actionResult.create(response.data);
            }
            function onError(){
                toast.add('error', 'error');
            }
        }
        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }
        function changeType() {
            if (ctrl.type) {
                console.log(ctrl.type);
            }
        }
        function addOption() {
            ctrl.addFlag = false;
            ctrl.options.push(ctrl.newOption);
            ctrl.newOption = "";
        }
    }
})();