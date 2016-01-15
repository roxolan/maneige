﻿var React = require('react');
var ReactDOM = require('react-dom');
var clientContext;
var website;

require('../less/general.less');
/*
var $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/core/ready');
require('jquery/src/manipulation');
*/


var GreetEng = React.createClass({
    render: function() {
        return (
            <p>Hello from English</p>          
        );
    } 
});


var GreetUa = React.createClass({
    render: function() {
        return (
            <p>Вітаємо тепер вже із України!</p>          
        );
    } 
});

ReactDOM.render(
    <GreetEng/>,
    document.getElementById('app'));

ReactDOM.render(
    <GreetUa/>,
    document.getElementById('message'));
    

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

    // $('#message').text('Вітаємо тепер вже із html, ' + website.get_url());
}
function onRequestFailed(sender, args) {
    alert('Error: ' + args.get_message());
}