/*
* @Author: myxuan
* @Date:   2017-08-14 16:50:37
* @Last Modified by:   myxuan
* @Last Modified time: 2017-08-14 16:54:26
*/

(function(){
    'use strict';
    angular
        .module('app')
        .service('app.web.admin.exam.actions.delete-question', service);

    service.$inject = [
        'api.exam',
        'plugins.delete-modal.service',
        'utils.action-result.service',
        'plugins.toast.service'
    ];

    function service(api, deleteModal, actionResult, toast) {
        var model = {};
        return {
            perform: perform
        };

        function perform(item) {
            model = item;
            var option = {
                title: 'Delete Question'
            };
            return deleteModal.open(option).then(onSubmit);
        }

        function onSubmit() {
            api.deleteUser(model.id).then(onSuccess, onError);
        }

        function onSuccess(response) {
            toast.add('success', '删除成功' + response.data);
            actionResult.delete(model);
        }

        function onError(response) {
            toast.add('error', '删除失败：' + response.data);
        }
    }
})();