/*
* @Author: myxuan
* @Date:   2017-07-13 15:00:09
 * @Last Modified by:   myxuan
 * @Last Modified time: 2017-08-15 16:36:22
*/

(function () {
    'use strict';
    angular.module('mobile')
        .controller('mobile.exam.paper', controller);

    controller.$inject = [
        'api.exam'
    ];

    function controller(
        api
    ) {
        var ctrl = this;

        init();

        function init() {
            getId();
            api.getPaper(ctrl.id).then(function(response){
                ctrl.questions = response.data;
            }, function(){
                toast.add('error', '获取试卷失败，请联系管理员');
            });
        }

        function getId() {
            var $id = angular.element('#paperId');
            ctrl.id = $id.val();
        }
    }
})();