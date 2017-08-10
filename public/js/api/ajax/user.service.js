/*
* @Author: myxuan
* @Date:   2017-07-14 11:29:19
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-18 15:42:56
*/

(function () {
    'use strict';
    angular.module('api')
        .factory('api.ajax.user', service);

    service.$inject = [
        'utils.api.service'
    ];

    function service(api) {
        var param = {
            getUsers: getUsers,
            createUser: createUser,
            deleteUser: deleteUser,
        };
        return param;

        function getUsers() {
            return api.get('/users');
        }

        function createUser(params) {
            return api.post('/users', params);
        }

        function deleteUser(id) {
            return api.delete('/user/' + id);
        }
    }
})();