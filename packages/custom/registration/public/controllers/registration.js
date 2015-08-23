'use strict';

/* jshint -W098 */
angular.module('mean.registration').controller('RegistrationController', ['$scope', 'Global', 'Registration',
  function($scope, Global, Registration) {
    $scope.global = Global;
    $scope.package = {
      name: 'registration'
    };
  }
]);
