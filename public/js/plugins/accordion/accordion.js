/*
* @Author: myxuan
* @Date:   2017-07-03 15:47:46
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-14 15:14:14
*/

(function(){
    'use strict';

    angular
        .module('plugins.accordion', [])
        .directive('accordion', directive)
        .run(run);

    directive.$inject = [
        '$cookies'
    ];

    function directive($cookies) {
        var directive = {
            restrict: 'EA',
            templateUrl: '/js/plugins/accordion/accordion.html',
            scope: {
                items: '='
            },
            link: link
        };

        return directive;

        function link(scope) {

            scope.setCookies = function(item){
                $cookies.put('sidebar', item.href);
            };

            scope.openSidleBar = function(index){
                for (var i = scope.items.length - 1; i >= 0; i--) {
                    if (i === index) {
                        scope.items[i].isActive = !scope.items[i].isActive;
                    } else {
                        scope.items[i].isActive = false;
                    }
                }
            };

            var clear = scope.$watch('items', function(newVal, oldVal){
                if (!scope.items) {
                    return;
                }
                var cookies = $cookies.get('sidebar');
                for (var i = scope.items.length - 1; i >= 0; i--) {
                    if (cookies === scope.items[i].href) {
                        scope.items[i].isActive = true;
                        break;
                    }
                    for (var k = scope.items[i].children.length - 1; k >= 0; k--) {
                        if (cookies === scope.items[i].children[k].href) {
                            scope.items[i].children[k].isActive = true;
                            scope.items[i].isActive = true;
                            break;
                        }
                    }
                }
                clear();
            });
        }
    }

    run.$inject = [];
    function run() {
        // var el = angular.element(document).find('body');
        // el.append('<accordion></accordion>');
    }
})();