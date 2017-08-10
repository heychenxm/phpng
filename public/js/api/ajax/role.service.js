/*
* @Author: myxuan
* @Date:   2017-07-14 11:29:19
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2017-07-25 11:24:50
*/

(function () {
    'use strict';
    angular.module('api')
        .factory('api.ajax.role', service);

    service.$inject = [
        'utils.api.service'
    ];

    function service(api) {
        var param = {
            getRoles: getRoles
        };
        return param;

        function getRoles() {
            return api.get('/roles');
        }
    }
})();