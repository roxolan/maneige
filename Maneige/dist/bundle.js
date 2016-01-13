/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/***/ function(module, exports) {

	'use strict';
	
	ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");
	
	function initializePage() {
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map