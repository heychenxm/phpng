/*
* @Author: myxuan
* @Date:   2017-07-14 13:39:30
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-25 15:28:32
*/

(function () {
    'use strict';
    angular.module('app')
        .factory('app.web.admin.user.actions.create', service);

    service.$inject = [
        'api.ajax.user',
        'plugins.form-modal.service',
        'utils.action-result.service',
        'plugins.toast.service'
    ];

    function service(api, simpleModal, actionResult, toast) {
        var model = {};
        var schema = {
            type: "object",
            properties: {
                name: {
                    type: "string",
                    minLength: 2,
                    maxLength: 30,
                    title: "昵称"
                },
                email: {
                    type: "string",
                    minLength: 2,
                    maxLength: 30,
                    title: "邮箱"
                }
            },
            require: ['name', 'email']
        };
        var form = [
            "*"
        ];
        return {
            perform: perform
        };

        function perform() {
            var option = {
                title: 'Create User',
                schema: schema,
                form: form,
                model: model
            };
            return simpleModal.open(option).then(onSubmit);
        }

        function onSubmit() {
            api.createUser(model).then(onSuccess, onError);
        }

        function onSuccess(response) {
            toast.add('success', '新增用户成功');
            actionResult.create(response.data);
        }

        function onError() {
            toast.add('error', '新增用户失败');
        }

    }
})();