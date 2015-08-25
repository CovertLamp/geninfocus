'use strict';

/* jshint -W098 */
angular.module('mean.account').controller('AccountEditController', ['$scope', 'Global', 'Account', function($scope, Global, Account) {
  var vm = this;


    $scope.global = Global;

  vm.data = Account.getAccount();


}]);
