/*
* @Author: myxuan
* @Date:   2017-07-13 15:00:09
 * @Last Modified by:   myxuan
 * @Last Modified time: 2017-08-10 15:15:39
*/

(function () {
    'use strict';
    angular.module('app')
        .controller('exam-detail.controller', controller);

    controller.$inject = [
        'plugins.toast.service',
        'api.ajax.exam'
    ];

    function controller(
        toast, api
    ) {
        var ctrl = this;
        ctrl.test = 'test';

        init();

        function init() {
            getId();
            api.getPaper(ctrl.id).then(function(response){
                ctrl.paper = response.data;
                // document.write(ctrl.paper);
                console.log(ctrl.paper);
            }, function(){
                toast.add('error', '获取试卷失败，请联系管理员');
            });
        }

        function getId() {
            var $id = angular.element('#paperId');
            ctrl.id = $id.val();
            // var href = window.location.href;
            // var arr = href.split('/');
            // console.log(arr);
            // ctrl.id = arr[arr.length - 1];
        }
    }
})();