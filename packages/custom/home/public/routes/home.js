'use strict';

angular.module('mean.home').config(['$stateProvider',
  function($stateProvider) {

    $stateProvider.state('Home', {
      url: '/home',
      templateUrl: 'home/views/index.html'
    });


  }
]);
