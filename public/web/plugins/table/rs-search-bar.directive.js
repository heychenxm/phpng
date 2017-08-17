/*
* @Author: myxuan
* @Date:   2017-07-31 14:38:42
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-31 14:41:21
*/
(function() {
  'use strict';

  angular
    .module('app')
    .directive('hzSearchBar', hzSearchBar);

  hzSearchBar.$inject = [
    'rs-table.basePath'
  ];

  function hzSearchBar(basePath) {

    var directive = {
      restrict: 'E',
      templateUrl: basePath + 'rs-search-bar.html',
      transclude: true,
      link: link
    };
    return directive;

    ////////////////////

    function link(scope, element, attrs, ctrl, transclude) {
    }
  }
}());
