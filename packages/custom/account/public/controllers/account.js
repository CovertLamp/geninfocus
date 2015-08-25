'use strict';

/* jshint -W098 */
angular.module('mean.account').controller('AccountController', ['$scope', 'Global', 'Account', function($scope, Global, Account) {
  $scope.global = Global;
  var vm = this;

  vm.data = Account.getAccount();
  vm.children = Account.getChildren();

}]);
