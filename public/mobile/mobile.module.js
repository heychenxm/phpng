/*
* @Author: myxuan
* @Date:   2017-06-30 17:43:54
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-14 15:14:43
*/

(function(){
    angular.module('mobile', ['api'])
        .config(appConfig);

    appConfig.$inject = [
        '$interpolateProvider',
        '$qProvider'
    ];

    function appConfig($interpolateProvider, $qProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
        $qProvider.errorOnUnhandledRejections(false);
    }
})();