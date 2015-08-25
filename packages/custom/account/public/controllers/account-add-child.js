'use strict';

/* jshint -W098 */
angular.module('mean.account').controller('AccountAddChildController', ['$scope', 'Global', 'Account', function($scope, Global, Account) {
  var vm = this;

  vm.children = Account.getChildren();


}]);
