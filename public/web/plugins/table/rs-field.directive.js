/*
* @Author: myxuan
* @Date:   2017-07-28 18:19:23
* @Last Modified by:   myxuan
* @Last Modified time: 2017-07-28 18:21:29
*/

(function() {
  'use strict';

  angular
    .module('app')
    .directive('rsField', rsField);

  rsField.$inject = ['$filter'];

  /**
   * @ngdoc directive
   * @name rsField
   * @param config {Object} - The field definition object, described below
   * @param item {Object} - The object containing the property from config.id
   * @description
   * The `rsField` directive allows you to output an object's property using
   * formatting as provided by a field configuration.
   *
   * The config object describes a single field, and the config object's 'id'
   * property matches the name of a property in the 'item' parameter.  For
   * example, if config.id is 'name' then there should be an item.name that
   * is evaluated for display using the logic described below.
   *
   * The field configuration may transform the data in the item's property
   * using either a set of single-argument filters or functions, specified by
   * the 'filters' property, or using the 'values' object in which the item
   * property is mapped via the keys to the values in the given object.  Note
   * that a combination of 'filters' and 'values' may be used; in this case
   * the filters are evaluated first.  This allows for translations that will
   * map to keys first (e.g. upper-casing a string with a filter so it matches
   * upper-case keys), and allows the values provided in the 'values' mapping
   * to be the final value produced.  The 'urlFunction' option allows for a
   * a function to be given, where the item is the sole parameter and the result
   * should be a URL.
   *
   * @restrict E
   *
   * @scope
   * @example
   *
   * var config = {id: 'a', title: 'Header A', priority: 1};
   *
   * // Using urlFunction to create a link
   * var linked = {id: 'b', title: 'Header B', priority: 2, urlFunction: myUrlFunction},
   *
   * // Using defaultSort
   * var defaultSort = {id: 'c', title: 'Header C', priority: 1, sortDefault: true};
   *
   * // Using filters (can be combined with 'values')
   * var filtered = {id: 'd', title: 'Header D', priority: 2,
   *   filters: [someFilterFunction, 'uppercase']};
   *
   * // Using value mappings
   * var mapped = {id: 'e', title: 'Header E', priority: 1,
   *   values: {
   *     'a': 'apple',
   *     'j': 'jacks'
   *   }
   * };
   *
   * function myUrlFunction(item) {
   *   return '/my/path/' + item.id;
   * }
   *
   * ```
   * <hz-field config="config" item="item"></hz-field>
   * ```
   *
   */
  function rsField($filter) {

    var directive = {
      restrict: 'E',
      scope: {
        config: "=",
        item: "="
      },
      link: link
    };
    return directive;

    ///////////////////

    function link(scope, element) {
      var config = scope.config;
      var item = scope.item;
      var propValue = item[config.id];
      var output = propValue;
      if (config && config.filters) {
        for (var i = 0; i < config.filters.length; i++) {
          var filter = config.filters[i];
          // call horizon framework filter function if provided
          if (angular.isFunction(filter)) {
            output = filter(propValue);
          // call angular filters
          } else {
            output = $filter(filter)(propValue);
          }
        }
      }
      if (config && config.values) {
        // apply mapping values to the data if applicable
        output = config.values[output];
      }
      var url;
      if (config && config.urlFunction) {
        url = config.urlFunction(item);
      }
      if (url) {
        element.append(angular.element('<a>').attr('href', url).append(output));
      } else {
        element.append(output);
      }
    }
  }
})();
