/*
* @Author: myxuan
* @Date:   2017-07-14 13:39:30
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-28 13:47:08
*/

(function () {
    'use strict';
    angular.module('app')
        .factory('app.static.admin.exam.actions.create-paper', service);

    service.$inject = [
        'api.ajax.exam',
        'plugins.delete-modal.service',
        'utils.action-result.service',
        'plugins.toast.service'
    ];

    function service(api, deleteModal, actionResult, toast) {
        var ids = [];
        return {
            perform: perform
        };

        function perform(items) {
            var tips = [];
            tips[0] = 'You have select: ';
            ids = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].isSelected) {
                    ids.push(items[i].id);
                }
            }
            tips[1] = ids;
            tips.push('Create Now?');
            var option = {
                title: 'Create Paper',
                tips: tips
            };
            return deleteModal.open(option).then(onSubmit);
        }

        function onSubmit() {
            var param = {
                ids: ids
            };
            api.createPaper(param).then(onSuccess, onError);
        }

        function onSuccess(response) {
            toast.add('success', '新增试卷成功。');
            actionResult.create(response.data);
        }

        function onError() {
            toast.add('error', '删除用户失败：' + response.data);
        }
    }
})();