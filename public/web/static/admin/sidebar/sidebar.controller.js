/*
* @Author: myxuan
* @Date:   2017-07-13 15:00:09
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-14 16:44:32
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('sidebar.controller', controller);

    controller.$inject = [
        'plugins.toast.service',
        'api.ajax.sidebar'
    ];

    function controller(toast, api) {
        var ctrl = this;
        ctrl.columns = [{
            id: 'id',
            title: 'ID'
        }, {
            id: 'name',
            title: 'Name'
        }];
        ctrl.actions = [{
            title: 'Create',
            service: 'test'
        }, {
            title: 'Update',
            service: 'test'
        }];

        api.getSidebars().then(onSuccess, onError);

        function onSuccess(response) {
            ctrl.sidebars = [];
            for (var i = 0; i < 100000; i++) {
                var param = {
                    id: i,
                    name: 'name ' + i
                };
                ctrl.sidebars.push(param);
            }
            // ctrl.sidebars = response.data.items;
        }

        function onError(response) {
            toast.add('error', 'error');
        }

    }
})();