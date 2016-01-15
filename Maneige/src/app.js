'use strict';
require('./less/general.less');
var $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/core/ready');
require('jquery/src/manipulation');

var clientContext;
var website;

// Make sure the SharePoint script file 'sp.js' is loaded before your
// code runs.
SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);

// Create an instance of the current context.
function sharePointReady() {
  clientContext = SP.ClientContext.get_current();
  website = clientContext.get_web();

  clientContext.load(website);
  clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
}
function onRequestSucceeded() {
  // alert(website.get_url());
  $('#message').text('Вітаємо тепер вже із html, ' + website.get_url());

}
function onRequestFailed(sender, args) {
  alert('Error: ' + args.get_message());
}

/* 



ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");



function initializePage()
{
    var context = SP.ClientContext.get_current();
    var user = context.get_web().get_currentUser();

    // This code runs when the DOM is ready and creates a context object which is needed to use the SharePoint object model
    $(document).ready(function () {
        getUserName();
    });

    // This function prepares, loads, and then executes a SharePoint query to get the current users information
    function getUserName() {
        context.load(user);
        context.executeQueryAsync(onGetUserNameSuccess, onGetUserNameFail);
    }

    // This function is executed if the above call is successful
    // It replaces the contents of the 'message' element with the user name
    function onGetUserNameSuccess() {
        $('#message').text('Вітаємо тепер вже і з OSX, ' + user.get_title());
    }

    // This function is executed if the above call fails
    function onGetUserNameFail(sender, args) {
        alert('Failed to get user name. Error:' + args.get_message());
    }
}
*/
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./components/', true, /\.jsx$/));
