/*
* @Author: myxuan
* @Date:   2017-07-13 15:45:01
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-31 14:53:07
*/

(function(){
    'use strict';
    angular.module('app')
        .directive('rsTable', directive);

    function directive() {
        var param = {
            restrict: 'EA',
            templateUrl: '/web/plugins/table/rs-table.html',
            scope: {
                items: '=',
                columns: '=',
                actions: '=',
            },
            link: link
        };
        return param;
        function link(scope) {
            scope.page = 10;
            scope.pages = [10, 20, 50, 100];
            scope.isAllSelected = false;
            scope.globalFlag = true;

            /**
             * 刷新表格数据
             * @param event
             * @param data
             * @return
             */
            scope.$on('refresh-table', function(event, data) {
                var item = data.item;
                switch(data.type) {
                    case 'create': {
                        scope.items.push(item);
                        break;
                    }
                    case 'delete': {
                        for (var i = 0; i < scope.items.length; i++) {
                            if (item.id === scope.items[i].id) {
                                scope.items.splice(i, 1);
                                break;
                            }
                        }
                        break;
                    }
                    case 'update': {
                        for (var j = 0; j < scope.items.length; j++) {
                            if (item.id === scope.items[j].id) {
                                scope.items[j] = item;
                                break;
                            }
                        }
                        break;
                    }
                    default: break;
                }
            });

            scope.$watch('displayItems', function(newVal, oldVal){
                if (oldVal.length === 0) {
                    scope.isAllSelected = false;
                    return;
                }
                var flag = true;
                scope.globalFlag = true;
                angular.forEach(scope.displayItems, function(item){
                    if (!item.isSelected) {
                        scope.isAllSelected = false;
                        flag = false;
                    } else {
                        scope.globalFlag = false;
                    }
                });
                if (flag) {
                    scope.isAllSelected = true;
                }
            });

            scope.checkAllSelected = checkAllSelected;

            function checkAllSelected() {
                var flag = true;
                var ifSomeSelect = false;
                angular.forEach(scope.displayItems, function(item){
                    if (!item.isSelected) {
                        flag = false;
                    } else {
                        ifSomeSelect = true;
                    }
                });
                if (flag) {
                    scope.isAllSelected = true;
                } else {
                    scope.isAllSelected = false;
                }
                if (ifSomeSelect) {
                    scope.globalFlag = false;
                } else {
                    scope.globalFlag = true;
                }
            }

            scope.selectAll = function () {
                if (scope.isAllSelected) {
                    scope.globalFlag = false;
                    angular.forEach(scope.displayItems, function(item){
                        item.isSelected = true;
                    });
                } else {
                    scope.globalFlag = true;
                    angular.forEach(scope.displayItems, function(item){
                        item.isSelected = false;
                    });
                }
            };

        }/* end of link */
    } /* end of directive */

})();