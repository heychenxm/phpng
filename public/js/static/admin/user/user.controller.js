/*
* @Author: myxuan
* @Date:   2017-07-13 15:00:09
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-31 15:59:01
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('user.controller', controller);

    controller.$inject = [
        'plugins.toast.service',
        'api.ajax.user',
        'app.static.admin.user.actions.create',
        'app.static.admin.user.actions.delete'
    ];

    function controller(toast, api, createService, deleteService) {
        var ctrl = this;
        ctrl.columns = [{
            id: 'id',
            title: 'ID'
        }, {
            id: 'name',
            title: 'Name'
        }, {
            id: 'email',
            title: 'Email'
        }];
        ctrl.actions = [{
            title: 'Create',
            service: createService,
            type: 'batch'
        }, {
            title: 'Create',
            service: 'test',
            type: 'row',
            template: {
                type: ''
            }
        }, {
            title: 'Delete',
            service: deleteService,
            type: 'row',
            template: {
                type: 'delete'
            }
        }];

        api.getUsers().then(onSuccess, onError);

        function onSuccess(response) {
            ctrl.users = response.data.items;
        }

        function onError(response) {
            toast.add('error', 'error');
        }

    }
})();