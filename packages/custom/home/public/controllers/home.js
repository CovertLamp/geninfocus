'use strict';

/* jshint -W098 */
angular.module('mean.home').controller('HomeController', ['$scope', 'Global', 'Home',
  function($scope, Global, Home) {
    $scope.global = Global;
    $scope.package = {
      name: 'home'
    };
  }
]);
