/*
* @Author: myxuan
* @Date:   2017-07-13 15:00:09
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-07-25 11:26:56
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('role.controller', controller);

    controller.$inject = [
        'plugins.toast.service',
        'api.ajax.role'
    ];

    function controller(toast, api) {
        var ctrl = this;
        ctrl.columns = [{
            id: 'id',
            title: 'ID'
        }, {
            id: 'display_name',
            title: 'Name'
        }, {
            id: 'price',
            title: 'Price'
        }];

        api.getRoles().then(onSuccess, onError);

        function onSuccess(response) {
            ctrl.roles = response.data.items;
        }

        function onError(response) {
            toast.add('error', 'error');
        }

    }
})();