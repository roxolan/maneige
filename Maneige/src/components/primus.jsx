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

SP.SOD.executeOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage() {
    console.log('from initializePage and sp.js should get loaded properly')
}

// SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function(){ console.log('simple func works')});

// var ctx = new SP.ClientContext();
// clientContext = SP.ClientContext.get_current();
// console.log('before ready(). new ClientContext is: ' + ctx); 

// Make sure the SharePoint script file 'sp.js' is loaded before your
// code runs.
$(document).ready(function() {
    // SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);  
    // var ctx = new SP.ClientContext();
    // clientContext = SP.ClientContext.get_current();
    console.log('within ready(). It works');    
});

console.log('before loading sharePointReady function');
$('#salut').text('Здається, sharePointReady() так і не запускається');
// Create an instance of the current context.
function sharePointReady() {
    clientContext = SP.ClientContext.get_current();
    console.log('within sharePointReady function. clientContext is: ' + clientContext);
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