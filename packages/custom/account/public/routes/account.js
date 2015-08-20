'use strict';

angular.module('mean.account').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('Account', {
      url: '/account',
      templateUrl: 'account/views/index.html'
    });

  }
]);
