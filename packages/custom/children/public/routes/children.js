'use strict';

angular.module('mean.children').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('children index page', {
      url: '/children',
      templateUrl: 'children/views/index.html'
    });
  }
]);
