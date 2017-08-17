/*
* @Author: myxuan
* @Date:   2017-06-30 17:43:54
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-13 14:42:59
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('web.login.controller', login);

    login.$inject = [
        '$scope',
        'plugins.toast.service',
        'api.ajax.auth'
    ];

    function login($scope, toast, auth) {
        var ctrl = this;
        ctrl.title = 'Welcome';
        ctrl.flag = true;
        ctrl.submit = submit;
        ctrl.email = '1092315236@qq.com';
        ctrl.password = 'myxuan';

        function submit() {
            var param = {
                email: ctrl.email,
                password: ctrl.password
            };
            auth.login(param).then(onSuccess, onError);
        }

        function onSuccess(response) {
            toast.add('success', response.data.reason);
            window.location.href = '/admin';
        }

        function onError(response) {
            toast.add('error', response.data.reason);
        }

    }
})();