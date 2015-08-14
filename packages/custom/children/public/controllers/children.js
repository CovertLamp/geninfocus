'use strict';

/* jshint -W098 */
angular.module('mean.children').controller('ChildrenController', ['$scope', 'Global', 'Children',
  function($scope, Global, Children) {
    $scope.global = Global;
    $scope.package = {
      name: 'children'
    };
  }
]);
