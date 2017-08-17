/*
* @Author: myxuan
* @Date:   2017-07-31 16:05:06
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-31 17:48:11
*/

(function(){
    angular.module('app')
        .directive('qrcode', ['app.plugins.basePath', function (path) {
            return {
                restrict: 'AE',
                scope: {
                    data: '@',
                    height: '@',
                    width: '@',
                    background: '@',
                    foreground: '@',
                    src: '@'
                },
                templateUrl: path + 'qrcode/qrcode.html',
                link: function (scope, iElement, iAttrs) {
                    var $qrcode = iElement.find('.qrcode');
                    $qrcode.qrcode({
                        render: 'canvas', // 渲染方式有table方式（IE兼容）和canvas方式
                        text: scope.data || 'qrcode',
                        height: scope.height || 40,
                        width: scope.width || 40,
                        background: scope.background || "#ffffff",  //背景颜色
                        foreground: scope.foreground || "#000000",  //前景颜色
                        src: scope.src || 'logo.png'
                    });
                    var $enlarge = iElement.find('.enlarge');
                    $enlarge.qrcode({
                        render: 'canvas', // 渲染方式有table方式（IE兼容）和canvas方式
                        text: scope.data || 'qrcode',
                        height: scope.height || 100,
                        width: scope.width || 100,
                        background: scope.background || "#ffffff",  //背景颜色
                        foreground: scope.foreground || "#000000",  //前景颜色
                        src: scope.src || 'logo.png'
                    });
                }
            };
        }]);
})();