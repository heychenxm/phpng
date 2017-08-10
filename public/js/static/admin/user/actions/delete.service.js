/*
* @Author: myxuan
* @Date:   2017-07-14 15:59:37
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-18 16:00:27
*/

(function () {
    'use strict';
    angular.module('app')
        .factory('app.static.admin.user.actions.delete', service);

    service.$inject = [
        'api.ajax.user',
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
                title: 'Create User'
            };
            return deleteModal.open(option).then(onSubmit);
        }

        function onSubmit() {
            api.deleteUser(model.id).then(onSuccess, onError);
        }

        function onSuccess(response) {
            toast.add('success', '删除用户成功' + response.data);
            actionResult.delete(model);
        }

        function onError() {
            toast.add('error', '删除用户失败：' + response.data);
        }
    }
})();