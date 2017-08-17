/*
* @Author: myxuan
* @Date:   2017-06-08 16:50:41
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-01 16:01:08
*/

(function () {
    'use strict';
    angular.module('api')
        .factory('api.ajax.auth', auth);

    auth.$inject = [
        'utils.api.service'
    ];

    function auth(api) {
        var service = {
            login: login
        };
        return service;

        /**
         * the api for login controller
         * @param  {[object]} data [such as {email: '',password:''}]
         * @return {[promise object]}      [description]
         */
        function login(data) {
            return api.post('/login', data);
        }
    }
})();