'use strict';

/* jshint -W098 */
angular.module('mean.account').controller('AccountAddChildController', ['$scope', 'Global', 'Account', function($scope, Global, Account) {
  var vm = this;
  var getActivePanel = function(panel){
    panel = panel || 'general';
    vm.formPanels.forEach(function(obj){
      console.log(obj);
        obj.status = (obj.name === panel);
    });
    console.log("panels: ", vm.formPanels);
  };

  vm.validated = false;

  vm.formPanels = [
    {name: 'general', status: true},
    {name: 'guardian', status: false},
    {name: 'release', status: false},
    {name: 'emergency', status: false},
    {name: 'medical', status: false}
  ];


  vm.children = Account.getChildren();

  vm.togglePanel = function(panel){
    console.log("panel: ", panel);
    getActivePanel(panel);
  };

  vm.activatePanel = function(action, i){
    var index,
      panel;

    switch (action){
      case 'next':
        index = (i < (vm.formPanels.length-1))? i+1 : i;
        break;
      case 'prev':
        index = (i > 0) ? i-1 : i;
        break;
    }
      panel = vm.formPanels[index].name;
      vm.togglePanel(panel);
  };

}]);
