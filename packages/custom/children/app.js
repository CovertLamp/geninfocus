'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Children = new Module('children');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Children.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Children.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Children.menus.add({
    title: 'Children',
    link: 'children index page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Children.aggregateAsset('css', 'children.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Children.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Children.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Children.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Children;
});
