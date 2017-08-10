/*
* @Author: myxuan
* @Date:   2017-06-08 15:53:14
* @Last Modified by:   myxuan
* @Last Modified time: 2017-06-30 18:05:37
*/

(function () {
    'use strict';
    angular.module('utils')
        .service('utils.api.service', api);
    api.$inject = [
        '$http',
        '$location'
    ];

    function api($http, $location) {
        var httpCall = function (method, url, data, config) {
            var baseUrl = $location.host();
            var backend = $http;
            // url = $location.host() + url;
            url = url.replace(/\/+/g, '/');
            if (angular.isUndefined(config)) {
                config = {};
            }
            config.method = method;
            config.url = url;
            if (angular.isDefined(data)) {
                config.data = data;
            }

            return backend(config);
        };

        this.get = function(url, config) {
            return httpCall('GET', url, null, config);
        };

        this.post = function(url, data, config) {
            var result = httpCall('POST', url, data, config);
            return result;
            // return httpCall('POST', url, data, config);
        };

        this.patch = function(url, data, config) {
            return httpCall('PATCH', url, data, config);
        };

        this.put = function(url, data, config) {
            return httpCall('PUT', url, data, config);
        };

        // NOTE the deviation from $http.delete which does not have the data param
        this.delete = function (url, data, config) {
            return httpCall('DELETE', url, data, config);
        };
    }
})();