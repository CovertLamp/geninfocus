'use strict';

/* jshint -W098 */
angular.module('mean.schedule').controller('ScheduleController', ['$scope', 'Global', 'Schedule',
  function($scope, Global, Schedule) {
    $scope.global = Global;
    $scope.package = {
      name: 'schedule'
    };
  }
]);
