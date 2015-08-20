'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Account = new Module('account');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Account.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Account.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Account.menus.add({
    title: 'account',
    link: 'Account',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Account.aggregateAsset('css', 'account.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Account.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Account.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Account.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Account;
});
