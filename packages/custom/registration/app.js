'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Registration = new Module('registration');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Registration.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Registration.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  console.log('Auth', auth);


    Registration.menus.add({
        title: 'Registration',
        link: 'registration index page',
        roles: ['anonymous', 'authenticated'],
        menu: 'main'
    });

    Registration.aggregateAsset('css', 'registration.css');

    /** formly **/
    Registration.aggregateAsset('js', '../lib/api-check/dist/api-check.js', {weight: 1});
    Registration.aggregateAsset('js', '../lib/angular-formly/dist/formly.js', {weight:2});
    Registration.aggregateAsset('js', '../lib/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.js', {weight:3});
    
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Registration.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Registration.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Registration.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Registration;
});
