'use strict';

/* jshint -W098 */
angular.module('mean.registration').controller('RegistrationController', ['$scope', 'Global', 'Registration', 'formly', 'formlyBootstrap',
    function($scope, Global, Registration, formly, formlyBootstrap) {
    $scope.global = Global;
    $scope.package = {
      name: 'registration'
    };

    //$scope.test = 'Testing 123';
    var vm = this;

    vm.registrationVars = {
      authenticated: MeanUser.loggedin,
      user: MeanUser.user,
      isAdmin: MeanUser.isAdmin
    };


  }
]);
