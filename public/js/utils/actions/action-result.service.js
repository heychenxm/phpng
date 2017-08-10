/*
* @Author: myxuan
* @Date:   2017-06-16 09:45:40
* @Last Modified by:   myxuan
* @Last Modified time: 2017-06-30 18:06:25
*/

(function(){
    'use strict';

    angular.module('utils')
        .factory('utils.action-result.service', service);

    service.$inject = [
        '$rootScope'
    ];

    function service($rootScope) {
        var service = {
            create: create,
            delete: remove,
            update: update
        };
        return service;

        function create(item) {
            var args = {
                type: 'create',
                item: item
            };
            $rootScope.$broadcast('refresh-table', args);
        }

        function remove(item) {
            var args = {
                type: 'delete',
                item: item
            };
            $rootScope.$broadcast('refresh-table', args);
        }

        function update(item) {
            var args = {
                type: 'update',
                item: item
            };
            $rootScope.$broadcast('refresh-table', args);
        }

    }

})();