/*
* @Author: myxuan
* @Date:   2017-07-12 16:07:10
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-12 16:10:58
*/

(function () {
    'use strict';
    angular.module('api')
        .factory('api.sidebar', service);

    service.$inject = [
        'utils.api.service'
    ];

    function service(api) {
        var param = {
            getSidebars: getSidebars
        };
        return param;

        function getSidebars() {
            return api.get('/sidebars');
        }
    }
})();