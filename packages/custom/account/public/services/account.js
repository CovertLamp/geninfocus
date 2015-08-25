'use strict';

angular.module('mean.account').factory('Account', ['MeanUser', function(MeanUser) {
  var fakeGuardian = {
    name: "John Doe",
    email: "yippee@yahoo.com",
    phone: "404-123-4556",
    address: {
      street: "234 Elm Street",
      city: "Atlanta",
      state: "Georgia",
      zip: "30001"
    },
    employer: {
      name: "Delta Airlines",
      phone: "404-333-8888",
      address: {
        street: "1000 Concourse Way",
        city: "Atlanta",
        state: "Georgia",
        zip: "30001"
      }
    }
  };

var fakeChildren = [
  {
    name: "Susie Q",
    age: "12",
    birthDate: "03/23/2001",
    gender: "female",
    address: {
      street: "699 2nd Avenue",
      city: "Atlanta",
      state: "Georgia",
      zip: "30088"
    }
  }
];



  var Account = {
    getAccount: function(){
      return fakeGuardian;
    },
    getChildren: function(){
      return fakeChildren;
    }
  };



  return Account;

}]);
