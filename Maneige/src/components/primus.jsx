// import * as $ from 'jquery/src/core';

var React = require('react');
var ReactDOM = require('react-dom');
var clientContext;
var website;

require('../less/general.less');
// var jQuery = require('jquery');

var $ = require('jquery/src/jquery');
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/core/ready');
// require('jquery/src/manipulation');
// require('sizzle');

var GreetEng = React.createClass({
    render: function() {
        return (
            <p>Hello from English, {this.props.name}!</p>          
        );
    } 
});


var GreetUa = React.createClass({
    render: function() {
        return (
            <p>Вітаємо тепер вже із України, {this.props.name}!</p>          
        );
    } 
});

ReactDOM.render(
    <GreetEng name="Victor" />,
    document.getElementById('app'));

ReactDOM.render(
    <GreetUa name="Віктор"/>,
    document.getElementById('message'));


// SP Chrome Control Settings
var spChromeControlData = {
    appTitle: "neoLMS",
    settingsLinks: [
        {
            linkUrl: "Lists/CustomTaskList",
            displayName: "Custom Tasks"
        }
    ]
}
var nav = new SP.UI.Controls.Navigation("chrome_ctrl_container", spChromeControlData);
nav.setVisible(true);

$('#salut').text('Здається, функція .text() працює');

// Make sure the SharePoint script file 'sp.js' is loaded before your
// code runs.
$(document).ready(function() {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);  
});

// Create an instance of the current context.
function sharePointReady() {
    clientContext = SP.ClientContext.get_current();
    website = clientContext.get_web();

    clientContext.load(website);
    clientContext.executeQueryAsync(onRequestSucceeded, onRequestFailed);
}
function onRequestSucceeded() {
    // alert(website.get_url());

    $('#salut').text('Вітаємо тепер вже із html, ' + website.get_url());
}
function onRequestFailed(sender, args) {
    alert('Error: ' + args.get_message());
}