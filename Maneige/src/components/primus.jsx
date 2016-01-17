// import * as $ from 'jquery/src/jquery';
var $ = require('jquery/src/jquery');

var React = require('react');
var ReactDOM = require('react-dom');
var context;
var website;
var user;
var data;

require('../less/general.less');

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
    
/*    
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
*/


// var ctx = new SP.ClientContext();
// clientContext = SP.ClientContext.get_current();
// console.log('before ready(). new ClientContext is: ' + ctx); 

// Make sure the SharePoint script file 'sp.js' is loaded before your
// code runs.
$(document).ready(function() {
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', sharePointReady);  
});

// Create an instance of the current context.
function sharePointReady() {
    $('#salut').text('Здається, sharePointReady() запустився');
    context = SP.ClientContext.get_current();
    website = context.get_web();
    user = website.get_currentUser();
    context.load(website);
    context.load(user);
    context.executeQueryAsync(onRequestSucceeded, onRequestFailed);
};



function onRequestSucceeded() {
    // alert(website.get_url());
    console.log("user object right within onRequestSucceeded:");
    console.log(user);
    data = [
        {name: user.get_title()}
    ];
    console.log("Current user Title value is: " + user.get_title() + " -> and as stored in data[0]: " + data[0].name);
    $('#salut').text('Вітаємо тепер вже із onRequestSucceeded, ' + user.get_title());
    ReactDOM.render(
        <GreetUa name={user.get_title()}/>,
        document.getElementById('message'));
}
function onRequestFailed(sender, args) {
    alert('Error: ' + args.get_message());
}