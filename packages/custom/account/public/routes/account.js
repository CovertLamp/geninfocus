'use strict';

angular.module('mean.account').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('Account', {
      url: '/account',
      templateUrl: 'account/views/index.html'
    })
    .state('Account Edit', {
      url: '/account/edit',
      controller: 'AccountEditController',
      controllerAs: 'acctEdit',
      templateUrl: 'account/views/account-edit.html'
    })
    .state('Add Child', {
      url: '/account/child',
      controller: 'AccountAddChildController',
      controllerAs: 'childAdd',
      templateUrl: 'account/views/account-add-child.html'
    });

  }
]);
