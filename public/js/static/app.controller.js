/*
* @Author: myxuan
* @Date:   2017-06-30 17:43:54
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-12 17:23:41
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('app.controller', controller);

    controller.$inject = [
        '$scope',
        'plugins.toast.service',
        'api.ajax.sidebar'
    ];

    function controller($scope, toast, api) {

        api.getSidebars().then(onSuccess, onError);

        function onSuccess(response) {
            $scope.sidebars = response.data.items;
        }

        function onError(response) {
            toast.add('error', 'error');
        }

    }
})();