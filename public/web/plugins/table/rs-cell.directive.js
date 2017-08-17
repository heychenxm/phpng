/*
* @Author: myxuan
* @Date:   2017-07-13 15:45:01
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-28 18:21:37
*/

(function(){
    'use strict';
    angular.module('app')
        .directive('rsCell', rsCell);

    rsCell.$inject = [
        '$compile'
    ];

    function rsCell($compile) {

        var directive = {
            restrict: 'E',
            scope: {
                column: '=',
                item: '='
            },
            link: link
        };
        return directive;

        ///////////////////

        function link(scope, element) {
            var column = scope.column;
            var html;
            var progressBarHtml = '';
            if (column && column.template) {
                // if template provided, render, and place into cell
                html = $compile(column.template)(scope);
            } else {
            // NOTE: 'table' is not passed to rs-field as rs-field is intentionally
            // not cognizant of a 'table' context as rs-cell is.
            if (column.itemInTransitionFunction && column.itemInTransitionFunction(scope.item)) {
                progressBarHtml = '<div class="loading_gif">'+
                    '<img src="/static/dashboard/img/loading.gif"></div>';
            }
            html = $compile(progressBarHtml +
                            '<rs-field config="column" item="item"></rs-field>')(scope);
            }
            element.append(html);
        }
    }
})();