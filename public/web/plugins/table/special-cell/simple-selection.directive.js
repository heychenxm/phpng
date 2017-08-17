/*
* @Author: myxuan
* @Date:   2017-07-13 15:45:01
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-31 15:14:27
*/

(function(){
    'use strict';
    angular.module('app')
        .directive('simpleSelection', simpleSelection);

    simpleSelection.$inject = [
        'rs-table.basePath'
    ];

    function simpleSelection(path) {

        var directive = {
            restrict: 'E',
            templateUrl: path + 'special-cell/simple-selection.html',
            link: link
        };
        return directive;

        ///////////////////

        function link(scope, element) {

        }
    }
})();