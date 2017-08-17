/*
* @Author: myxuan
* @Date:   2017-07-03 15:43:19
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-14 15:15:18
*/

(function(){
    'use strict';

    var app = angular.module('app');
    app.factory('plugins.toast.service', toastService);
    app.directive('toast', toastDirective);
    app.run(run);

    toastService.$inject = [
        '$timeout'
    ];

    function toastService($timeout) {
        var toasts = [];
        var service = {
            types: {},
            add: add,
            get: get,
            // cancel: cancel,
            // clearAll: clearAll,
            // clearErrors: clearErrors,
            // clearSuccesses: clearSuccesses
        };
        service.types = {
            warning: '警告',
            info: '信息',
            success: '成功',
            error: '错误'
        };

        return service;

        function get() {
            return toasts;
        }

        function add(type, msg) {
            var toastIcon = {
                warning: 'fa-exclamation-circle',
                info: 'fa-info-circle',
                success: 'fa-check-circle',
                error: 'fa-exclamation-circle'
            };
            var toast = {
                type: type,
                typeMsg: service.types[type],
                msg: msg,
                cancel: cancel,
                toastIcon: toastIcon[type],
                remainSecond: 3 // 展示的时间
            };
            if (type == 'success') {
                autoDestroy(toast);
            }
            toasts.push(toast);
        }

        function autoDestroy(toast) {
            $timeout(function dismiss() {
                var index = toasts.indexOf(toast);
                if (index > -1) {
                    cancel(index);
                }
            }, 3000);
        }

        /**
         * [cancel Remove a single toast.]
         * @param  {[type]} index [description]
         * @return {[type]}       [description]
         */
        function cancel(index) {
            toasts.splice(index, 1);
        }
    }

    toastDirective.$inject = [
        'plugins.toast.service',
    ];

    function toastDirective(toastService) {
        var directive = {
            restrict: 'EA',
            templateUrl: '/web/plugins/toast/toast.html',
            scope: {},
            link: link
        };

        return directive;

        function link(scope) {
            scope.toast = toastService;
        }
    }

    run.$inject = [];

    function run(){
        var el = angular.element(document).find('body');
        el.append('<toast></toast>');
    }

})();