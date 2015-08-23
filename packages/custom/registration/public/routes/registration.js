'use strict';

angular.module('mean.registration').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('registration example page', {
      url: '/registration/example',
      templateUrl: 'registration/views/index.html'
    });
  }
]);
