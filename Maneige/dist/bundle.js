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
  !*** ./src/app.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var $ = __webpack_require__(/*! jquery/src/core */ 1 /*'../Scripts/jquery-1.9.1.min.js'*/);
	__webpack_require__(/*! jquery/src/core/init */ 12);
	__webpack_require__(/*! jquery/src/core/ready */ 19);
	__webpack_require__(/*! jquery/src/manipulation */ 23);
	// require('sizzle');
	__webpack_require__(/*! ./less/general.less */ 41);
	
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
	
	function requireAll(r) {
	    r.keys().forEach(r);
	}
	requireAll(__webpack_require__(/*! ./components/ */ 45));

/***/ },
/* 1 */
/*!******************************!*\
  !*** ./~/jquery/src/core.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./var/arr */ 3),
		__webpack_require__(/*! ./var/document */ 7),
		__webpack_require__(/*! ./var/slice */ 4),
		__webpack_require__(/*! ./var/concat */ 5),
		__webpack_require__(/*! ./var/push */ 6),
		__webpack_require__(/*! ./var/indexOf */ 2),
		__webpack_require__(/*! ./var/class2type */ 8),
		__webpack_require__(/*! ./var/toString */ 9),
		__webpack_require__(/*! ./var/hasOwn */ 10),
		__webpack_require__(/*! ./var/support */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr, document, slice, concat, push, indexOf, class2type, toString, hasOwn, support ) {
	
	var
		version = "@VERSION",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isPlainObject: function( obj ) {
	
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
	
			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
	
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
	
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
	
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	
	return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./~/jquery/src/var/indexOf.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./arr */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
		return arr.indexOf;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./~/jquery/src/var/arr.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return [];
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 4 */
/*!***********************************!*\
  !*** ./~/jquery/src/var/slice.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./arr */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
		return arr.slice;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/*!************************************!*\
  !*** ./~/jquery/src/var/concat.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./arr */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
		return arr.concat;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 6 */
/*!**********************************!*\
  !*** ./~/jquery/src/var/push.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./arr */ 3)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( arr ) {
		return arr.push;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/*!**************************************!*\
  !*** ./~/jquery/src/var/document.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return window.document;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 8 */
/*!****************************************!*\
  !*** ./~/jquery/src/var/class2type.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		// [[Class]] -> type pairs
		return {};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/*!**************************************!*\
  !*** ./~/jquery/src/var/toString.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./class2type */ 8)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
		return class2type.toString;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/*!************************************!*\
  !*** ./~/jquery/src/var/hasOwn.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./class2type */ 8)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( class2type ) {
		return class2type.hasOwnProperty;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/*!*************************************!*\
  !*** ./~/jquery/src/var/support.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		// All support tests are defined in their respective modules.
		return {};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/*!***********************************!*\
  !*** ./~/jquery/src/core/init.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Initialize a jQuery object
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1),
		__webpack_require__(/*! ../var/document */ 7),
		__webpack_require__(/*! ./var/rsingleTag */ 13),
		__webpack_require__(/*! ../traversing/findFilter */ 14)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rsingleTag ) {
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
	
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	return init;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/*!*********************************************!*\
  !*** ./~/jquery/src/core/var/rsingleTag.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		// Match a standalone tag
		return ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 14 */
/*!***********************************************!*\
  !*** ./~/jquery/src/traversing/findFilter.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1),
		__webpack_require__(/*! ../var/indexOf */ 2),
		__webpack_require__(/*! ./var/rneedsContext */ 15),
		__webpack_require__(/*! ../selector */ 16)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, rneedsContext ) {
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 15 */
/*!******************************************************!*\
  !*** ./~/jquery/src/traversing/var/rneedsContext.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../../core */ 1),
		__webpack_require__(/*! ../../selector */ 16)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
		return jQuery.expr.match.needsContext;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 16 */
/*!**********************************!*\
  !*** ./~/jquery/src/selector.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! ./selector-sizzle */ 17) ], __WEBPACK_AMD_DEFINE_RESULT__ = function() {}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 17 */
/*!*****************************************!*\
  !*** ./~/jquery/src/selector-sizzle.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./core */ 1),
		__webpack_require__(/*! sizzle */ 18)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, Sizzle ) {
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 18 */
/*!*********************************!*\
  !*** ./~/sizzle/dist/sizzle.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||
	
				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||
	
					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	// EXPOSE
	var _sizzle = window.Sizzle;
	
	Sizzle.noConflict = function() {
		if ( window.Sizzle === Sizzle ) {
			window.Sizzle = _sizzle;
		}
	
		return Sizzle;
	};
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return Sizzle; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	// Sizzle requires that there be a global window in Common-JS like environments
	} else if ( typeof module !== "undefined" && module.exports ) {
		module.exports = Sizzle;
	} else {
		window.Sizzle = Sizzle;
	}
	// EXPOSE
	
	})( window );


/***/ },
/* 19 */
/*!************************************!*\
  !*** ./~/jquery/src/core/ready.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1),
		__webpack_require__(/*! ../var/document */ 7),
		__webpack_require__(/*! ../core/init */ 12),
		__webpack_require__(/*! ../deferred */ 20)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document ) {
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/*!**********************************!*\
  !*** ./~/jquery/src/deferred.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./core */ 1),
		__webpack_require__(/*! ./var/slice */ 4),
		__webpack_require__(/*! ./callbacks */ 21)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, slice ) {
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/*!***********************************!*\
  !*** ./~/jquery/src/callbacks.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./core */ 1),
		__webpack_require__(/*! ./var/rnotwhite */ 22)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnotwhite ) {
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/*!***************************************!*\
  !*** ./~/jquery/src/var/rnotwhite.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return ( /\S+/g );
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/*!**************************************!*\
  !*** ./~/jquery/src/manipulation.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./core */ 1),
		__webpack_require__(/*! ./var/concat */ 5),
		__webpack_require__(/*! ./var/push */ 6),
		__webpack_require__(/*! ./core/access */ 33),
		__webpack_require__(/*! ./manipulation/var/rcheckableType */ 34),
		__webpack_require__(/*! ./manipulation/var/rtagName */ 25),
		__webpack_require__(/*! ./manipulation/var/rscriptType */ 26),
		__webpack_require__(/*! ./manipulation/wrapMap */ 27),
		__webpack_require__(/*! ./manipulation/getAll */ 28),
		__webpack_require__(/*! ./manipulation/setGlobalEval */ 29),
		__webpack_require__(/*! ./manipulation/buildFragment */ 24),
		__webpack_require__(/*! ./manipulation/support */ 35),
	
		__webpack_require__(/*! ./data/var/dataPriv */ 30),
		__webpack_require__(/*! ./data/var/dataUser */ 36),
		__webpack_require__(/*! ./data/var/acceptData */ 32),
	
		__webpack_require__(/*! ./core/init */ 12),
		__webpack_require__(/*! ./traversing */ 37),
		__webpack_require__(/*! ./selector */ 16),
		__webpack_require__(/*! ./event */ 40)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, concat, push, access,
		rcheckableType, rtagName, rscriptType,
		wrapMap, getAll, setGlobalEval, buildFragment, support,
		dataPriv, dataUser, acceptData ) {
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/*!****************************************************!*\
  !*** ./~/jquery/src/manipulation/buildFragment.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1),
		__webpack_require__(/*! ./var/rtagName */ 25),
		__webpack_require__(/*! ./var/rscriptType */ 26),
		__webpack_require__(/*! ./wrapMap */ 27),
		__webpack_require__(/*! ./getAll */ 28),
		__webpack_require__(/*! ./setGlobalEval */ 29)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rtagName, rscriptType, wrapMap, getAll, setGlobalEval ) {
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	return buildFragment;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/*!***************************************************!*\
  !*** ./~/jquery/src/manipulation/var/rtagName.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return ( /<([\w:-]+)/ );
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/*!******************************************************!*\
  !*** ./~/jquery/src/manipulation/var/rscriptType.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return ( /^$|\/(?:java|ecma)script/i );
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/*!**********************************************!*\
  !*** ./~/jquery/src/manipulation/wrapMap.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	return wrapMap;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/*!*********************************************!*\
  !*** ./~/jquery/src/manipulation/getAll.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	
	function getAll( context, tag ) {
	
		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	return getAll;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/*!****************************************************!*\
  !*** ./~/jquery/src/manipulation/setGlobalEval.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../data/var/dataPriv */ 30)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( dataPriv ) {
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	return setGlobalEval;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/*!*******************************************!*\
  !*** ./~/jquery/src/data/var/dataPriv.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../Data */ 31)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
		return new Data();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/*!***********************************!*\
  !*** ./~/jquery/src/data/Data.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1),
		__webpack_require__(/*! ../var/rnotwhite */ 22),
		__webpack_require__(/*! ./var/acceptData */ 32)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, rnotwhite, acceptData ) {
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		register: function( owner, initial ) {
			var value = initial || {};
	
			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;
	
			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {
	
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key === undefined ) {
				this.register( owner );
	
			} else {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
	
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
	
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
	
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	
	return Data;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/*!*********************************************!*\
  !*** ./~/jquery/src/data/var/acceptData.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	/**
	 * Determines whether an object can have data
	 */
	return function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 33 */
/*!*************************************!*\
  !*** ./~/jquery/src/core/access.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../core */ 1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	
	return access;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 34 */
/*!*********************************************************!*\
  !*** ./~/jquery/src/manipulation/var/rcheckableType.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return ( /^(?:checkbox|radio)$/i );
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 35 */
/*!**********************************************!*\
  !*** ./~/jquery/src/manipulation/support.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../var/document */ 7),
		__webpack_require__(/*! ../var/support */ 11)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( document, support ) {
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	
	return support;
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 36 */
/*!*******************************************!*\
  !*** ./~/jquery/src/data/var/dataUser.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../Data */ 31)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( Data ) {
		return new Data();
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 37 */
/*!************************************!*\
  !*** ./~/jquery/src/traversing.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./core */ 1),
		__webpack_require__(/*! ./var/indexOf */ 2),
		__webpack_require__(/*! ./traversing/var/dir */ 38),
		__webpack_require__(/*! ./traversing/var/siblings */ 39),
		__webpack_require__(/*! ./traversing/var/rneedsContext */ 15),
		__webpack_require__(/*! ./core/init */ 12),
		__webpack_require__(/*! ./traversing/findFilter */ 14),
		__webpack_require__(/*! ./selector */ 16)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, indexOf, dir, siblings, rneedsContext ) {
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	
	return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 38 */
/*!********************************************!*\
  !*** ./~/jquery/src/traversing/var/dir.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ../../core */ 1)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery ) {
	
	return function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 39 */
/*!*************************************************!*\
  !*** ./~/jquery/src/traversing/var/siblings.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	return function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 40 */
/*!*******************************!*\
  !*** ./~/jquery/src/event.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
		__webpack_require__(/*! ./core */ 1),
		__webpack_require__(/*! ./var/document */ 7),
		__webpack_require__(/*! ./var/rnotwhite */ 22),
		__webpack_require__(/*! ./var/slice */ 4),
		__webpack_require__(/*! ./data/var/dataPriv */ 30),
	
		__webpack_require__(/*! ./core/init */ 12),
		__webpack_require__(/*! ./selector */ 16)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function( jQuery, document, rnotwhite, slice, dataPriv ) {
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 41 */
/*!*******************************!*\
  !*** ./src/less/general.less ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/css-loader!./../../~/less-loader!./general.less */ 42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 44)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./general.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./general.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 42 */
/*!**************************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./src/less/general.less ***!
  \**************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../~/css-loader/lib/css-base.js */ 43)();
	// imports
	
	
	// module
	exports.push([module.id, "#message {\n  color: aqua;\n}\n", ""]);
	
	// exports


/***/ },
/* 43 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 44 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 45 */
/*!*******************************!*\
  !*** ./src/components \.jsx$ ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./primus.jsx": 46
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 45;


/***/ },
/* 46 */
/*!***********************************!*\
  !*** ./src/components/primus.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(/*! react */ 47);
	var ReactDOM = __webpack_require__(/*! react-dom */ 204);
	
	ReactDOM.render(React.createElement(
	  'p',
	  null,
	  'Hello, world!'
	), document.getElementById('example'));

/***/ },
/* 47 */
/*!**************************!*\
  !*** ./~/react/react.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! ./lib/React */ 48);


/***/ },
/* 48 */
/*!******************************!*\
  !*** ./~/react/lib/React.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule React
	 */
	
	'use strict';
	
	var ReactDOM = __webpack_require__(/*! ./ReactDOM */ 49);
	var ReactDOMServer = __webpack_require__(/*! ./ReactDOMServer */ 194);
	var ReactIsomorphic = __webpack_require__(/*! ./ReactIsomorphic */ 198);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var deprecated = __webpack_require__(/*! ./deprecated */ 203);
	
	// `version` will be added here by ReactIsomorphic.
	var React = {};
	
	assign(React, ReactIsomorphic);
	
	assign(React, {
	  // ReactDOM
	  findDOMNode: deprecated('findDOMNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.findDOMNode),
	  render: deprecated('render', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.render),
	  unmountComponentAtNode: deprecated('unmountComponentAtNode', 'ReactDOM', 'react-dom', ReactDOM, ReactDOM.unmountComponentAtNode),
	
	  // ReactDOMServer
	  renderToString: deprecated('renderToString', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToString),
	  renderToStaticMarkup: deprecated('renderToStaticMarkup', 'ReactDOMServer', 'react-dom/server', ReactDOMServer, ReactDOMServer.renderToStaticMarkup)
	});
	
	React.__SECRET_DOM_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOM;
	React.__SECRET_DOM_SERVER_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactDOMServer;
	
	module.exports = React;

/***/ },
/* 49 */
/*!*********************************!*\
  !*** ./~/react/lib/ReactDOM.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOM
	 */
	
	/* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactDOMTextComponent = __webpack_require__(/*! ./ReactDOMTextComponent */ 52);
	var ReactDefaultInjection = __webpack_require__(/*! ./ReactDefaultInjection */ 117);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 91);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	var ReactVersion = __webpack_require__(/*! ./ReactVersion */ 192);
	
	var findDOMNode = __webpack_require__(/*! ./findDOMNode */ 137);
	var renderSubtreeIntoContainer = __webpack_require__(/*! ./renderSubtreeIntoContainer */ 193);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	ReactDefaultInjection.inject();
	
	var render = ReactPerf.measure('React', 'render', ReactMount.render);
	
	var React = {
	  findDOMNode: findDOMNode,
	  render: render,
	  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
	  version: ReactVersion,
	
	  /* eslint-disable camelcase */
	  unstable_batchedUpdates: ReactUpdates.batchedUpdates,
	  unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer
	};
	
	// Inject the runtime into a devtools global hook regardless of browser.
	// Allows for debugging when the hook is injected on the page.
	/* eslint-enable camelcase */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
	    CurrentOwner: ReactCurrentOwner,
	    InstanceHandles: ReactInstanceHandles,
	    Mount: ReactMount,
	    Reconciler: ReactReconciler,
	    TextComponent: ReactDOMTextComponent
	  });
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {
	
	    // First check if devtools is not installed
	    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
	      // If we're in Chrome or Firefox, provide a download link if not installed.
	      if (navigator.userAgent.indexOf('Chrome') > -1 && navigator.userAgent.indexOf('Edge') === -1 || navigator.userAgent.indexOf('Firefox') > -1) {
	        console.debug('Download the React DevTools for a better development experience: ' + 'https://fb.me/react-devtools');
	      }
	    }
	
	    // If we're in IE8, check to see if we are in compatibility mode and provide
	    // information on preventing compatibility mode
	    var ieCompatibilityMode = document.documentMode && document.documentMode < 8;
	
	    process.env.NODE_ENV !== 'production' ? warning(!ieCompatibilityMode, 'Internet Explorer is running in compatibility mode; please add the ' + 'following tag to your HTML to prevent this from happening: ' + '<meta http-equiv="X-UA-Compatible" content="IE=edge" />') : undefined;
	
	    var expectedFeatures = [
	    // shims
	    Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim,
	
	    // shams
	    Object.create, Object.freeze];
	
	    for (var i = 0; i < expectedFeatures.length; i++) {
	      if (!expectedFeatures[i]) {
	        console.error('One or more ES5 shim/shams expected by React are not available: ' + 'https://fb.me/react-warning-polyfills');
	        break;
	      }
	    }
	  }
	}
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 50 */
/*!******************************!*\
  !*** ./~/process/browser.js ***!
  \******************************/
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 51 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactCurrentOwner.js ***!
  \******************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCurrentOwner
	 */
	
	'use strict';
	
	/**
	 * Keeps track of the current owner.
	 *
	 * The current owner is the component who should own any components that are
	 * currently being constructed.
	 */
	var ReactCurrentOwner = {
	
	  /**
	   * @internal
	   * @type {ReactComponent}
	   */
	  current: null
	
	};
	
	module.exports = ReactCurrentOwner;

/***/ },
/* 52 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactDOMTextComponent.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextComponent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var DOMChildrenOperations = __webpack_require__(/*! ./DOMChildrenOperations */ 53);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 68);
	var ReactComponentBrowserEnvironment = __webpack_require__(/*! ./ReactComponentBrowserEnvironment */ 72);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var escapeTextContentForBrowser = __webpack_require__(/*! ./escapeTextContentForBrowser */ 67);
	var setTextContent = __webpack_require__(/*! ./setTextContent */ 66);
	var validateDOMNesting = __webpack_require__(/*! ./validateDOMNesting */ 116);
	
	/**
	 * Text nodes violate a couple assumptions that React makes about components:
	 *
	 *  - When mounting text into the DOM, adjacent text nodes are merged.
	 *  - Text nodes cannot be assigned a React root ID.
	 *
	 * This component is used to wrap strings in elements so that they can undergo
	 * the same reconciliation that is applied to elements.
	 *
	 * TODO: Investigate representing React components in the DOM with text nodes.
	 *
	 * @class ReactDOMTextComponent
	 * @extends ReactComponent
	 * @internal
	 */
	var ReactDOMTextComponent = function (props) {
	  // This constructor and its argument is currently used by mocks.
	};
	
	assign(ReactDOMTextComponent.prototype, {
	
	  /**
	   * @param {ReactText} text
	   * @internal
	   */
	  construct: function (text) {
	    // TODO: This is really a ReactText (ReactNode), not a ReactElement
	    this._currentElement = text;
	    this._stringText = '' + text;
	
	    // Properties
	    this._rootNodeID = null;
	    this._mountIndex = 0;
	  },
	
	  /**
	   * Creates the markup for this text node. This node is not intended to have
	   * any features besides containing text content.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {string} Markup for this text node.
	   * @internal
	   */
	  mountComponent: function (rootID, transaction, context) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting('span', null, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }
	
	    this._rootNodeID = rootID;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement('span');
	      DOMPropertyOperations.setAttributeForID(el, rootID);
	      // Populate node cache
	      ReactMount.getID(el);
	      setTextContent(el, this._stringText);
	      return el;
	    } else {
	      var escapedText = escapeTextContentForBrowser(this._stringText);
	
	      if (transaction.renderToStaticMarkup) {
	        // Normally we'd wrap this in a `span` for the reasons stated above, but
	        // since this is a situation where React won't take over (static pages),
	        // we can simply return the text as it is.
	        return escapedText;
	      }
	
	      return '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' + escapedText + '</span>';
	    }
	  },
	
	  /**
	   * Updates this component by updating the text content.
	   *
	   * @param {ReactText} nextText The next text content
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  receiveComponent: function (nextText, transaction) {
	    if (nextText !== this._currentElement) {
	      this._currentElement = nextText;
	      var nextStringText = '' + nextText;
	      if (nextStringText !== this._stringText) {
	        // TODO: Save this as pending props and use performUpdateIfNecessary
	        // and/or updateComponent to do the actual update for consistency with
	        // other component types?
	        this._stringText = nextStringText;
	        var node = ReactMount.getNode(this._rootNodeID);
	        DOMChildrenOperations.updateTextContent(node, nextStringText);
	      }
	    }
	  },
	
	  unmountComponent: function () {
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	  }
	
	});
	
	module.exports = ReactDOMTextComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 53 */
/*!**********************************************!*\
  !*** ./~/react/lib/DOMChildrenOperations.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMChildrenOperations
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var Danger = __webpack_require__(/*! ./Danger */ 54);
	var ReactMultiChildUpdateTypes = __webpack_require__(/*! ./ReactMultiChildUpdateTypes */ 62);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	
	var setInnerHTML = __webpack_require__(/*! ./setInnerHTML */ 65);
	var setTextContent = __webpack_require__(/*! ./setTextContent */ 66);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * Inserts `childNode` as a child of `parentNode` at the `index`.
	 *
	 * @param {DOMElement} parentNode Parent node in which to insert.
	 * @param {DOMElement} childNode Child node to insert.
	 * @param {number} index Index at which to insert the child.
	 * @internal
	 */
	function insertChildAt(parentNode, childNode, index) {
	  // By exploiting arrays returning `undefined` for an undefined index, we can
	  // rely exclusively on `insertBefore(node, null)` instead of also using
	  // `appendChild(node)`. However, using `undefined` is not allowed by all
	  // browsers so we must replace it with `null`.
	
	  // fix render order error in safari
	  // IE8 will throw error when index out of list size.
	  var beforeChild = index >= parentNode.childNodes.length ? null : parentNode.childNodes.item(index);
	
	  parentNode.insertBefore(childNode, beforeChild);
	}
	
	/**
	 * Operations for updating with DOM children.
	 */
	var DOMChildrenOperations = {
	
	  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,
	
	  updateTextContent: setTextContent,
	
	  /**
	   * Updates a component's children by processing a series of updates. The
	   * update configurations are each expected to have a `parentNode` property.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markupList List of markup strings.
	   * @internal
	   */
	  processUpdates: function (updates, markupList) {
	    var update;
	    // Mapping from parent IDs to initial child orderings.
	    var initialChildren = null;
	    // List of children that will be moved or removed.
	    var updatedChildren = null;
	
	    for (var i = 0; i < updates.length; i++) {
	      update = updates[i];
	      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING || update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
	        var updatedIndex = update.fromIndex;
	        var updatedChild = update.parentNode.childNodes[updatedIndex];
	        var parentID = update.parentID;
	
	        !updatedChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processUpdates(): Unable to find child %s of element. This ' + 'probably means the DOM was unexpectedly mutated (e.g., by the ' + 'browser), usually due to forgetting a <tbody> when using tables, ' + 'nesting tags like <form>, <p>, or <a>, or using non-SVG elements ' + 'in an <svg> parent. Try inspecting the child nodes of the element ' + 'with React ID `%s`.', updatedIndex, parentID) : invariant(false) : undefined;
	
	        initialChildren = initialChildren || {};
	        initialChildren[parentID] = initialChildren[parentID] || [];
	        initialChildren[parentID][updatedIndex] = updatedChild;
	
	        updatedChildren = updatedChildren || [];
	        updatedChildren.push(updatedChild);
	      }
	    }
	
	    var renderedMarkup;
	    // markupList is either a list of markup or just a list of elements
	    if (markupList.length && typeof markupList[0] === 'string') {
	      renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);
	    } else {
	      renderedMarkup = markupList;
	    }
	
	    // Remove updated children first so that `toIndex` is consistent.
	    if (updatedChildren) {
	      for (var j = 0; j < updatedChildren.length; j++) {
	        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
	      }
	    }
	
	    for (var k = 0; k < updates.length; k++) {
	      update = updates[k];
	      switch (update.type) {
	        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
	          insertChildAt(update.parentNode, renderedMarkup[update.markupIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
	          insertChildAt(update.parentNode, initialChildren[update.parentID][update.fromIndex], update.toIndex);
	          break;
	        case ReactMultiChildUpdateTypes.SET_MARKUP:
	          setInnerHTML(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
	          setTextContent(update.parentNode, update.content);
	          break;
	        case ReactMultiChildUpdateTypes.REMOVE_NODE:
	          // Already removed by the for-loop above.
	          break;
	      }
	    }
	  }
	
	};
	
	ReactPerf.measureMethods(DOMChildrenOperations, 'DOMChildrenOperations', {
	  updateTextContent: 'updateTextContent'
	});
	
	module.exports = DOMChildrenOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 54 */
/*!*******************************!*\
  !*** ./~/react/lib/Danger.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Danger
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	
	var createNodesFromMarkup = __webpack_require__(/*! fbjs/lib/createNodesFromMarkup */ 56);
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	var getMarkupWrap = __webpack_require__(/*! fbjs/lib/getMarkupWrap */ 60);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
	var RESULT_INDEX_ATTR = 'data-danger-index';
	
	/**
	 * Extracts the `nodeName` from a string of markup.
	 *
	 * NOTE: Extracting the `nodeName` does not require a regular expression match
	 * because we make assumptions about React-generated markup (i.e. there are no
	 * spaces surrounding the opening tag and there is at least one attribute).
	 *
	 * @param {string} markup String of markup.
	 * @return {string} Node name of the supplied markup.
	 * @see http://jsperf.com/extract-nodename
	 */
	function getNodeName(markup) {
	  return markup.substring(1, markup.indexOf(' '));
	}
	
	var Danger = {
	
	  /**
	   * Renders markup into an array of nodes. The markup is expected to render
	   * into a list of root nodes. Also, the length of `resultList` and
	   * `markupList` should be the same.
	   *
	   * @param {array<string>} markupList List of markup strings to render.
	   * @return {array<DOMElement>} List of rendered nodes.
	   * @internal
	   */
	  dangerouslyRenderMarkup: function (markupList) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' + 'thread. Make sure `window` and `document` are available globally ' + 'before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString for server rendering.') : invariant(false) : undefined;
	    var nodeName;
	    var markupByNodeName = {};
	    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
	    for (var i = 0; i < markupList.length; i++) {
	      !markupList[i] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyRenderMarkup(...): Missing markup.') : invariant(false) : undefined;
	      nodeName = getNodeName(markupList[i]);
	      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
	      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
	      markupByNodeName[nodeName][i] = markupList[i];
	    }
	    var resultList = [];
	    var resultListAssignmentCount = 0;
	    for (nodeName in markupByNodeName) {
	      if (!markupByNodeName.hasOwnProperty(nodeName)) {
	        continue;
	      }
	      var markupListByNodeName = markupByNodeName[nodeName];
	
	      // This for-in loop skips the holes of the sparse array. The order of
	      // iteration should follow the order of assignment, which happens to match
	      // numerical index order, but we don't rely on that.
	      var resultIndex;
	      for (resultIndex in markupListByNodeName) {
	        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
	          var markup = markupListByNodeName[resultIndex];
	
	          // Push the requested markup with an additional RESULT_INDEX_ATTR
	          // attribute.  If the markup does not start with a < character, it
	          // will be discarded below (with an appropriate console.error).
	          markupListByNodeName[resultIndex] = markup.replace(OPEN_TAG_NAME_EXP,
	          // This index will be parsed back out below.
	          '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" ');
	        }
	      }
	
	      // Render each group of markup with similar wrapping `nodeName`.
	      var renderNodes = createNodesFromMarkup(markupListByNodeName.join(''), emptyFunction // Do nothing special with <script> tags.
	      );
	
	      for (var j = 0; j < renderNodes.length; ++j) {
	        var renderNode = renderNodes[j];
	        if (renderNode.hasAttribute && renderNode.hasAttribute(RESULT_INDEX_ATTR)) {
	
	          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
	          renderNode.removeAttribute(RESULT_INDEX_ATTR);
	
	          !!resultList.hasOwnProperty(resultIndex) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Assigning to an already-occupied result index.') : invariant(false) : undefined;
	
	          resultList[resultIndex] = renderNode;
	
	          // This should match resultList.length and markupList.length when
	          // we're done.
	          resultListAssignmentCount += 1;
	        } else if (process.env.NODE_ENV !== 'production') {
	          console.error('Danger: Discarding unexpected node:', renderNode);
	        }
	      }
	    }
	
	    // Although resultList was populated out of order, it should now be a dense
	    // array.
	    !(resultListAssignmentCount === resultList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Did not assign to every index of resultList.') : invariant(false) : undefined;
	
	    !(resultList.length === markupList.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Danger: Expected markup to render %s nodes, but rendered %s.', markupList.length, resultList.length) : invariant(false) : undefined;
	
	    return resultList;
	  },
	
	  /**
	   * Replaces a node with a string of markup at its current position within its
	   * parent. The markup must render into a single root node.
	   *
	   * @param {DOMElement} oldChild Child node to replace.
	   * @param {string} markup Markup to render in place of the child node.
	   * @internal
	   */
	  dangerouslyReplaceNodeWithMarkup: function (oldChild, markup) {
	    !ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' + 'worker thread. Make sure `window` and `document` are available ' + 'globally before requiring React when unit testing or use ' + 'ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
	    !markup ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(false) : undefined;
	    !(oldChild.tagName.toLowerCase() !== 'html') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' + '<html> node. This is because browser quirks make this unreliable ' + 'and/or slow. If you want to render to the root you must use ' + 'server rendering. See ReactDOMServer.renderToString().') : invariant(false) : undefined;
	
	    var newChild;
	    if (typeof markup === 'string') {
	      newChild = createNodesFromMarkup(markup, emptyFunction)[0];
	    } else {
	      newChild = markup;
	    }
	    oldChild.parentNode.replaceChild(newChild, oldChild);
	  }
	
	};
	
	module.exports = Danger;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 55 */
/*!********************************************!*\
  !*** ./~/fbjs/lib/ExecutionEnvironment.js ***!
  \********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ExecutionEnvironment
	 */
	
	'use strict';
	
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	/**
	 * Simple, lightweight module assisting with the detection and context of
	 * Worker. Helps avoid circular dependencies and allows code to reason about
	 * whether or not they are in a Worker, even if they never include the main
	 * `ReactWorker` dependency.
	 */
	var ExecutionEnvironment = {
	
	  canUseDOM: canUseDOM,
	
	  canUseWorkers: typeof Worker !== 'undefined',
	
	  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
	
	  canUseViewport: canUseDOM && !!window.screen,
	
	  isInWorker: !canUseDOM // For now, this is true - might change in the future.
	
	};
	
	module.exports = ExecutionEnvironment;

/***/ },
/* 56 */
/*!*********************************************!*\
  !*** ./~/fbjs/lib/createNodesFromMarkup.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createNodesFromMarkup
	 * @typechecks
	 */
	
	/*eslint-disable fb-www/unsafe-html*/
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 55);
	
	var createArrayFromMixed = __webpack_require__(/*! ./createArrayFromMixed */ 57);
	var getMarkupWrap = __webpack_require__(/*! ./getMarkupWrap */ 60);
	var invariant = __webpack_require__(/*! ./invariant */ 59);
	
	/**
	 * Dummy container used to render all markup.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
	
	/**
	 * Pattern used by `getNodeName`.
	 */
	var nodeNamePattern = /^\s*<(\w+)/;
	
	/**
	 * Extracts the `nodeName` of the first element in a string of markup.
	 *
	 * @param {string} markup String of markup.
	 * @return {?string} Node name of the supplied markup.
	 */
	function getNodeName(markup) {
	  var nodeNameMatch = markup.match(nodeNamePattern);
	  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
	}
	
	/**
	 * Creates an array containing the nodes rendered from the supplied markup. The
	 * optionally supplied `handleScript` function will be invoked once for each
	 * <script> element that is rendered. If no `handleScript` function is supplied,
	 * an exception is thrown if any <script> elements are rendered.
	 *
	 * @param {string} markup A string of valid HTML markup.
	 * @param {?function} handleScript Invoked once for each rendered <script>.
	 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
	 */
	function createNodesFromMarkup(markup, handleScript) {
	  var node = dummyNode;
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup dummy not initialized') : invariant(false) : undefined;
	  var nodeName = getNodeName(markup);
	
	  var wrap = nodeName && getMarkupWrap(nodeName);
	  if (wrap) {
	    node.innerHTML = wrap[1] + markup + wrap[2];
	
	    var wrapDepth = wrap[0];
	    while (wrapDepth--) {
	      node = node.lastChild;
	    }
	  } else {
	    node.innerHTML = markup;
	  }
	
	  var scripts = node.getElementsByTagName('script');
	  if (scripts.length) {
	    !handleScript ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createNodesFromMarkup(...): Unexpected <script> element rendered.') : invariant(false) : undefined;
	    createArrayFromMixed(scripts).forEach(handleScript);
	  }
	
	  var nodes = createArrayFromMixed(node.childNodes);
	  while (node.lastChild) {
	    node.removeChild(node.lastChild);
	  }
	  return nodes;
	}
	
	module.exports = createNodesFromMarkup;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 57 */
/*!********************************************!*\
  !*** ./~/fbjs/lib/createArrayFromMixed.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule createArrayFromMixed
	 * @typechecks
	 */
	
	'use strict';
	
	var toArray = __webpack_require__(/*! ./toArray */ 58);
	
	/**
	 * Perform a heuristic test to determine if an object is "array-like".
	 *
	 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
	 *   Joshu replied: "Mu."
	 *
	 * This function determines if its argument has "array nature": it returns
	 * true if the argument is an actual array, an `arguments' object, or an
	 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
	 *
	 * It will return false for other array-like objects like Filelist.
	 *
	 * @param {*} obj
	 * @return {boolean}
	 */
	function hasArrayNature(obj) {
	  return(
	    // not null/false
	    !!obj && (
	    // arrays are objects, NodeLists are functions in Safari
	    typeof obj == 'object' || typeof obj == 'function') &&
	    // quacks like an array
	    'length' in obj &&
	    // not window
	    !('setInterval' in obj) &&
	    // no DOM node should be considered an array-like
	    // a 'select' element has 'length' and 'item' properties on IE8
	    typeof obj.nodeType != 'number' && (
	    // a real array
	    Array.isArray(obj) ||
	    // arguments
	    'callee' in obj ||
	    // HTMLCollection/NodeList
	    'item' in obj)
	  );
	}
	
	/**
	 * Ensure that the argument is an array by wrapping it in an array if it is not.
	 * Creates a copy of the argument if it is already an array.
	 *
	 * This is mostly useful idiomatically:
	 *
	 *   var createArrayFromMixed = require('createArrayFromMixed');
	 *
	 *   function takesOneOrMoreThings(things) {
	 *     things = createArrayFromMixed(things);
	 *     ...
	 *   }
	 *
	 * This allows you to treat `things' as an array, but accept scalars in the API.
	 *
	 * If you need to convert an array-like object, like `arguments`, into an array
	 * use toArray instead.
	 *
	 * @param {*} obj
	 * @return {array}
	 */
	function createArrayFromMixed(obj) {
	  if (!hasArrayNature(obj)) {
	    return [obj];
	  } else if (Array.isArray(obj)) {
	    return obj.slice();
	  } else {
	    return toArray(obj);
	  }
	}
	
	module.exports = createArrayFromMixed;

/***/ },
/* 58 */
/*!*******************************!*\
  !*** ./~/fbjs/lib/toArray.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule toArray
	 * @typechecks
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! ./invariant */ 59);
	
	/**
	 * Convert array-like objects to arrays.
	 *
	 * This API assumes the caller knows the contents of the data type. For less
	 * well defined inputs use createArrayFromMixed.
	 *
	 * @param {object|function|filelist} obj
	 * @return {array}
	 */
	function toArray(obj) {
	  var length = obj.length;
	
	  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
	  // old versions of Safari).
	  !(!Array.isArray(obj) && (typeof obj === 'object' || typeof obj === 'function')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Array-like object expected') : invariant(false) : undefined;
	
	  !(typeof length === 'number') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object needs a length property') : invariant(false) : undefined;
	
	  !(length === 0 || length - 1 in obj) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'toArray: Object should have keys for indices') : invariant(false) : undefined;
	
	  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
	  // without method will throw during the slice call and skip straight to the
	  // fallback.
	  if (obj.hasOwnProperty) {
	    try {
	      return Array.prototype.slice.call(obj);
	    } catch (e) {
	      // IE < 9 does not support Array#slice on collections objects
	    }
	  }
	
	  // Fall back to copying key by key. This assumes all keys have a value,
	  // so will not preserve sparsely populated inputs.
	  var ret = Array(length);
	  for (var ii = 0; ii < length; ii++) {
	    ret[ii] = obj[ii];
	  }
	  return ret;
	}
	
	module.exports = toArray;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 59 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/invariant.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	function invariant(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 60 */
/*!*************************************!*\
  !*** ./~/fbjs/lib/getMarkupWrap.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getMarkupWrap
	 */
	
	/*eslint-disable fb-www/unsafe-html */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 55);
	
	var invariant = __webpack_require__(/*! ./invariant */ 59);
	
	/**
	 * Dummy container used to detect which wraps are necessary.
	 */
	var dummyNode = ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;
	
	/**
	 * Some browsers cannot use `innerHTML` to render certain elements standalone,
	 * so we wrap them, render the wrapped nodes, then extract the desired node.
	 *
	 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
	 */
	
	var shouldWrap = {};
	
	var selectWrap = [1, '<select multiple="true">', '</select>'];
	var tableWrap = [1, '<table>', '</table>'];
	var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];
	
	var svgWrap = [1, '<svg xmlns="http://www.w3.org/2000/svg">', '</svg>'];
	
	var markupWrap = {
	  '*': [1, '?<div>', '</div>'],
	
	  'area': [1, '<map>', '</map>'],
	  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
	  'legend': [1, '<fieldset>', '</fieldset>'],
	  'param': [1, '<object>', '</object>'],
	  'tr': [2, '<table><tbody>', '</tbody></table>'],
	
	  'optgroup': selectWrap,
	  'option': selectWrap,
	
	  'caption': tableWrap,
	  'colgroup': tableWrap,
	  'tbody': tableWrap,
	  'tfoot': tableWrap,
	  'thead': tableWrap,
	
	  'td': trWrap,
	  'th': trWrap
	};
	
	// Initialize the SVG elements since we know they'll always need to be wrapped
	// consistently. If they are created inside a <div> they will be initialized in
	// the wrong namespace (and will not display).
	var svgElements = ['circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'text', 'tspan'];
	svgElements.forEach(function (nodeName) {
	  markupWrap[nodeName] = svgWrap;
	  shouldWrap[nodeName] = true;
	});
	
	/**
	 * Gets the markup wrap configuration for the supplied `nodeName`.
	 *
	 * NOTE: This lazily detects which wraps are necessary for the current browser.
	 *
	 * @param {string} nodeName Lowercase `nodeName`.
	 * @return {?array} Markup wrap configuration, if applicable.
	 */
	function getMarkupWrap(nodeName) {
	  !!!dummyNode ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Markup wrapping node not initialized') : invariant(false) : undefined;
	  if (!markupWrap.hasOwnProperty(nodeName)) {
	    nodeName = '*';
	  }
	  if (!shouldWrap.hasOwnProperty(nodeName)) {
	    if (nodeName === '*') {
	      dummyNode.innerHTML = '<link />';
	    } else {
	      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
	    }
	    shouldWrap[nodeName] = !dummyNode.firstChild;
	  }
	  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
	}
	
	module.exports = getMarkupWrap;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 61 */
/*!*************************************!*\
  !*** ./~/fbjs/lib/emptyFunction.js ***!
  \*************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyFunction
	 */
	
	"use strict";
	
	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}
	
	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	function emptyFunction() {}
	
	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};
	
	module.exports = emptyFunction;

/***/ },
/* 62 */
/*!***************************************************!*\
  !*** ./~/react/lib/ReactMultiChildUpdateTypes.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChildUpdateTypes
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(/*! fbjs/lib/keyMirror */ 63);
	
	/**
	 * When a component's children are updated, a series of update configuration
	 * objects are created in order to batch and serialize the required changes.
	 *
	 * Enumerates all the possible types of update configurations.
	 *
	 * @internal
	 */
	var ReactMultiChildUpdateTypes = keyMirror({
	  INSERT_MARKUP: null,
	  MOVE_EXISTING: null,
	  REMOVE_NODE: null,
	  SET_MARKUP: null,
	  TEXT_CONTENT: null
	});
	
	module.exports = ReactMultiChildUpdateTypes;

/***/ },
/* 63 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/keyMirror.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyMirror
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! ./invariant */ 59);
	
	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function (obj) {
	  var ret = {};
	  var key;
	  !(obj instanceof Object && !Array.isArray(obj)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'keyMirror(...): Argument must be an object.') : invariant(false) : undefined;
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};
	
	module.exports = keyMirror;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 64 */
/*!**********************************!*\
  !*** ./~/react/lib/ReactPerf.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPerf
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * ReactPerf is a general AOP system designed to measure performance. This
	 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
	 */
	var ReactPerf = {
	  /**
	   * Boolean to enable/disable measurement. Set to false by default to prevent
	   * accidental logging and perf loss.
	   */
	  enableMeasure: false,
	
	  /**
	   * Holds onto the measure function in use. By default, don't measure
	   * anything, but we'll override this if we inject a measure function.
	   */
	  storedMeasure: _noMeasure,
	
	  /**
	   * @param {object} object
	   * @param {string} objectName
	   * @param {object<string>} methodNames
	   */
	  measureMethods: function (object, objectName, methodNames) {
	    if (process.env.NODE_ENV !== 'production') {
	      for (var key in methodNames) {
	        if (!methodNames.hasOwnProperty(key)) {
	          continue;
	        }
	        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
	      }
	    }
	  },
	
	  /**
	   * Use this to wrap methods you want to measure. Zero overhead in production.
	   *
	   * @param {string} objName
	   * @param {string} fnName
	   * @param {function} func
	   * @return {function}
	   */
	  measure: function (objName, fnName, func) {
	    if (process.env.NODE_ENV !== 'production') {
	      var measuredFunc = null;
	      var wrapper = function () {
	        if (ReactPerf.enableMeasure) {
	          if (!measuredFunc) {
	            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
	          }
	          return measuredFunc.apply(this, arguments);
	        }
	        return func.apply(this, arguments);
	      };
	      wrapper.displayName = objName + '_' + fnName;
	      return wrapper;
	    }
	    return func;
	  },
	
	  injection: {
	    /**
	     * @param {function} measure
	     */
	    injectMeasure: function (measure) {
	      ReactPerf.storedMeasure = measure;
	    }
	  }
	};
	
	/**
	 * Simply passes through the measured function, without measuring it.
	 *
	 * @param {string} objName
	 * @param {string} fnName
	 * @param {function} func
	 * @return {function}
	 */
	function _noMeasure(objName, fnName, func) {
	  return func;
	}
	
	module.exports = ReactPerf;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 65 */
/*!*************************************!*\
  !*** ./~/react/lib/setInnerHTML.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setInnerHTML
	 */
	
	/* globals MSApp */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	
	var WHITESPACE_TEST = /^[ \r\n\t\f]/;
	var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;
	
	/**
	 * Set the innerHTML property of a node, ensuring that whitespace is preserved
	 * even in IE8.
	 *
	 * @param {DOMElement} node
	 * @param {string} html
	 * @internal
	 */
	var setInnerHTML = function (node, html) {
	  node.innerHTML = html;
	};
	
	// Win8 apps: Allow all html to be inserted
	if (typeof MSApp !== 'undefined' && MSApp.execUnsafeLocalFunction) {
	  setInnerHTML = function (node, html) {
	    MSApp.execUnsafeLocalFunction(function () {
	      node.innerHTML = html;
	    });
	  };
	}
	
	if (ExecutionEnvironment.canUseDOM) {
	  // IE8: When updating a just created node with innerHTML only leading
	  // whitespace is removed. When updating an existing node with innerHTML
	  // whitespace in root TextNodes is also collapsed.
	  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
	
	  // Feature detection; only IE8 is known to behave improperly like this.
	  var testElement = document.createElement('div');
	  testElement.innerHTML = ' ';
	  if (testElement.innerHTML === '') {
	    setInnerHTML = function (node, html) {
	      // Magic theory: IE8 supposedly differentiates between added and updated
	      // nodes when processing innerHTML, innerHTML on updated nodes suffers
	      // from worse whitespace behavior. Re-adding a node like this triggers
	      // the initial and more favorable whitespace behavior.
	      // TODO: What to do on a detached node?
	      if (node.parentNode) {
	        node.parentNode.replaceChild(node, node);
	      }
	
	      // We also implement a workaround for non-visible tags disappearing into
	      // thin air on IE8, this only happens if there is no visible text
	      // in-front of the non-visible tags. Piggyback on the whitespace fix
	      // and simply check if any non-visible tags appear in the source.
	      if (WHITESPACE_TEST.test(html) || html[0] === '<' && NONVISIBLE_TEST.test(html)) {
	        // Recover leading whitespace by temporarily prepending any character.
	        // \uFEFF has the potential advantage of being zero-width/invisible.
	        // UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
	        // in hopes that this is preserved even if "\uFEFF" is transformed to
	        // the actual Unicode character (by Babel, for example).
	        // https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
	        node.innerHTML = String.fromCharCode(0xFEFF) + html;
	
	        // deleteData leaves an empty `TextNode` which offsets the index of all
	        // children. Definitely want to avoid this.
	        var textNode = node.firstChild;
	        if (textNode.data.length === 1) {
	          node.removeChild(textNode);
	        } else {
	          textNode.deleteData(0, 1);
	        }
	      } else {
	        node.innerHTML = html;
	      }
	    };
	  }
	}
	
	module.exports = setInnerHTML;

/***/ },
/* 66 */
/*!***************************************!*\
  !*** ./~/react/lib/setTextContent.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule setTextContent
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var escapeTextContentForBrowser = __webpack_require__(/*! ./escapeTextContentForBrowser */ 67);
	var setInnerHTML = __webpack_require__(/*! ./setInnerHTML */ 65);
	
	/**
	 * Set the textContent property of a node, ensuring that whitespace is preserved
	 * even in IE8. innerText is a poor substitute for textContent and, among many
	 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
	 * as it should.
	 *
	 * @param {DOMElement} node
	 * @param {string} text
	 * @internal
	 */
	var setTextContent = function (node, text) {
	  node.textContent = text;
	};
	
	if (ExecutionEnvironment.canUseDOM) {
	  if (!('textContent' in document.documentElement)) {
	    setTextContent = function (node, text) {
	      setInnerHTML(node, escapeTextContentForBrowser(text));
	    };
	  }
	}
	
	module.exports = setTextContent;

/***/ },
/* 67 */
/*!****************************************************!*\
  !*** ./~/react/lib/escapeTextContentForBrowser.js ***!
  \****************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule escapeTextContentForBrowser
	 */
	
	'use strict';
	
	var ESCAPE_LOOKUP = {
	  '&': '&amp;',
	  '>': '&gt;',
	  '<': '&lt;',
	  '"': '&quot;',
	  '\'': '&#x27;'
	};
	
	var ESCAPE_REGEX = /[&><"']/g;
	
	function escaper(match) {
	  return ESCAPE_LOOKUP[match];
	}
	
	/**
	 * Escapes text to prevent scripting attacks.
	 *
	 * @param {*} text Text value to escape.
	 * @return {string} An escaped string.
	 */
	function escapeTextContentForBrowser(text) {
	  return ('' + text).replace(ESCAPE_REGEX, escaper);
	}
	
	module.exports = escapeTextContentForBrowser;

/***/ },
/* 68 */
/*!**********************************************!*\
  !*** ./~/react/lib/DOMPropertyOperations.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMPropertyOperations
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	
	var quoteAttributeValueForBrowser = __webpack_require__(/*! ./quoteAttributeValueForBrowser */ 70);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	// Simplified subset
	var VALID_ATTRIBUTE_NAME_REGEX = /^[a-zA-Z_][\w\.\-]*$/;
	var illegalAttributeNameCache = {};
	var validatedAttributeNameCache = {};
	
	function isAttributeNameSafe(attributeName) {
	  if (validatedAttributeNameCache.hasOwnProperty(attributeName)) {
	    return true;
	  }
	  if (illegalAttributeNameCache.hasOwnProperty(attributeName)) {
	    return false;
	  }
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)) {
	    validatedAttributeNameCache[attributeName] = true;
	    return true;
	  }
	  illegalAttributeNameCache[attributeName] = true;
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid attribute name: `%s`', attributeName) : undefined;
	  return false;
	}
	
	function shouldIgnoreValue(propertyInfo, value) {
	  return value == null || propertyInfo.hasBooleanValue && !value || propertyInfo.hasNumericValue && isNaN(value) || propertyInfo.hasPositiveNumericValue && value < 1 || propertyInfo.hasOverloadedBooleanValue && value === false;
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true
	  };
	  var warnedProperties = {};
	
	  var warnUnknownProperty = function (name) {
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return;
	    }
	
	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();
	
	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
	
	    // For now, only warn when we have a suggested correction. This prevents
	    // logging too much when using transferPropsTo.
	    process.env.NODE_ENV !== 'production' ? warning(standardName == null, 'Unknown DOM property %s. Did you mean %s?', name, standardName) : undefined;
	  };
	}
	
	/**
	 * Operations for dealing with DOM properties.
	 */
	var DOMPropertyOperations = {
	
	  /**
	   * Creates markup for the ID property.
	   *
	   * @param {string} id Unescaped ID.
	   * @return {string} Markup string.
	   */
	  createMarkupForID: function (id) {
	    return DOMProperty.ID_ATTRIBUTE_NAME + '=' + quoteAttributeValueForBrowser(id);
	  },
	
	  setAttributeForID: function (node, id) {
	    node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME, id);
	  },
	
	  /**
	   * Creates markup for a property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {?string} Markup string, or null if the property was invalid.
	   */
	  createMarkupForProperty: function (name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      if (shouldIgnoreValue(propertyInfo, value)) {
	        return '';
	      }
	      var attributeName = propertyInfo.attributeName;
	      if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	        return attributeName + '=""';
	      }
	      return attributeName + '=' + quoteAttributeValueForBrowser(value);
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      if (value == null) {
	        return '';
	      }
	      return name + '=' + quoteAttributeValueForBrowser(value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	    return null;
	  },
	
	  /**
	   * Creates markup for a custom property.
	   *
	   * @param {string} name
	   * @param {*} value
	   * @return {string} Markup string, or empty string if the property was invalid.
	   */
	  createMarkupForCustomAttribute: function (name, value) {
	    if (!isAttributeNameSafe(name) || value == null) {
	      return '';
	    }
	    return name + '=' + quoteAttributeValueForBrowser(value);
	  },
	
	  /**
	   * Sets the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   * @param {*} value
	   */
	  setValueForProperty: function (node, name, value) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, value);
	      } else if (shouldIgnoreValue(propertyInfo, value)) {
	        this.deleteValueForProperty(node, name);
	      } else if (propertyInfo.mustUseAttribute) {
	        var attributeName = propertyInfo.attributeName;
	        var namespace = propertyInfo.attributeNamespace;
	        // `setAttribute` with objects becomes only `[object]` in IE8/9,
	        // ('' + value) makes it output the correct toString()-value.
	        if (namespace) {
	          node.setAttributeNS(namespace, attributeName, '' + value);
	        } else if (propertyInfo.hasBooleanValue || propertyInfo.hasOverloadedBooleanValue && value === true) {
	          node.setAttribute(attributeName, '');
	        } else {
	          node.setAttribute(attributeName, '' + value);
	        }
	      } else {
	        var propName = propertyInfo.propertyName;
	        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
	        // property type before comparing; only `value` does and is string.
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== '' + value) {
	          // Contrary to `setAttribute`, object properties are properly
	          // `toString`ed by IE8/9.
	          node[propName] = value;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      DOMPropertyOperations.setValueForAttribute(node, name, value);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  },
	
	  setValueForAttribute: function (node, name, value) {
	    if (!isAttributeNameSafe(name)) {
	      return;
	    }
	    if (value == null) {
	      node.removeAttribute(name);
	    } else {
	      node.setAttribute(name, '' + value);
	    }
	  },
	
	  /**
	   * Deletes the value for a property on a node.
	   *
	   * @param {DOMElement} node
	   * @param {string} name
	   */
	  deleteValueForProperty: function (node, name) {
	    var propertyInfo = DOMProperty.properties.hasOwnProperty(name) ? DOMProperty.properties[name] : null;
	    if (propertyInfo) {
	      var mutationMethod = propertyInfo.mutationMethod;
	      if (mutationMethod) {
	        mutationMethod(node, undefined);
	      } else if (propertyInfo.mustUseAttribute) {
	        node.removeAttribute(propertyInfo.attributeName);
	      } else {
	        var propName = propertyInfo.propertyName;
	        var defaultValue = DOMProperty.getDefaultValueForProperty(node.nodeName, propName);
	        if (!propertyInfo.hasSideEffects || '' + node[propName] !== defaultValue) {
	          node[propName] = defaultValue;
	        }
	      }
	    } else if (DOMProperty.isCustomAttribute(name)) {
	      node.removeAttribute(name);
	    } else if (process.env.NODE_ENV !== 'production') {
	      warnUnknownProperty(name);
	    }
	  }
	
	};
	
	ReactPerf.measureMethods(DOMPropertyOperations, 'DOMPropertyOperations', {
	  setValueForProperty: 'setValueForProperty',
	  setValueForAttribute: 'setValueForAttribute',
	  deleteValueForProperty: 'deleteValueForProperty'
	});
	
	module.exports = DOMPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 69 */
/*!************************************!*\
  !*** ./~/react/lib/DOMProperty.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DOMProperty
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	function checkMask(value, bitmask) {
	  return (value & bitmask) === bitmask;
	}
	
	var DOMPropertyInjection = {
	  /**
	   * Mapping from normalized, camelcased property names to a configuration that
	   * specifies how the associated DOM property should be accessed or rendered.
	   */
	  MUST_USE_ATTRIBUTE: 0x1,
	  MUST_USE_PROPERTY: 0x2,
	  HAS_SIDE_EFFECTS: 0x4,
	  HAS_BOOLEAN_VALUE: 0x8,
	  HAS_NUMERIC_VALUE: 0x10,
	  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
	  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,
	
	  /**
	   * Inject some specialized knowledge about the DOM. This takes a config object
	   * with the following properties:
	   *
	   * isCustomAttribute: function that given an attribute name will return true
	   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
	   * attributes where it's impossible to enumerate all of the possible
	   * attribute names,
	   *
	   * Properties: object mapping DOM property name to one of the
	   * DOMPropertyInjection constants or null. If your attribute isn't in here,
	   * it won't get written to the DOM.
	   *
	   * DOMAttributeNames: object mapping React attribute name to the DOM
	   * attribute name. Attribute names not specified use the **lowercase**
	   * normalized name.
	   *
	   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
	   * attribute namespace URL. (Attribute names not specified use no namespace.)
	   *
	   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
	   * Property names not specified use the normalized name.
	   *
	   * DOMMutationMethods: Properties that require special mutation methods. If
	   * `value` is undefined, the mutation method should unset the property.
	   *
	   * @param {object} domPropertyConfig the config as described above.
	   */
	  injectDOMPropertyConfig: function (domPropertyConfig) {
	    var Injection = DOMPropertyInjection;
	    var Properties = domPropertyConfig.Properties || {};
	    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
	    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
	    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
	    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
	
	    if (domPropertyConfig.isCustomAttribute) {
	      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
	    }
	
	    for (var propName in Properties) {
	      !!DOMProperty.properties.hasOwnProperty(propName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' + '\'%s\' which has already been injected. You may be accidentally ' + 'injecting the same DOM property config twice, or you may be ' + 'injecting two configs that have conflicting property names.', propName) : invariant(false) : undefined;
	
	      var lowerCased = propName.toLowerCase();
	      var propConfig = Properties[propName];
	
	      var propertyInfo = {
	        attributeName: lowerCased,
	        attributeNamespace: null,
	        propertyName: propName,
	        mutationMethod: null,
	
	        mustUseAttribute: checkMask(propConfig, Injection.MUST_USE_ATTRIBUTE),
	        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
	        hasSideEffects: checkMask(propConfig, Injection.HAS_SIDE_EFFECTS),
	        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
	        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
	        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
	        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
	      };
	
	      !(!propertyInfo.mustUseAttribute || !propertyInfo.mustUseProperty) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Cannot require using both attribute and property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.mustUseProperty || !propertyInfo.hasSideEffects) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Properties that have side effects must use property: %s', propName) : invariant(false) : undefined;
	      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or ' + 'numeric value, but not a combination: %s', propName) : invariant(false) : undefined;
	
	      if (process.env.NODE_ENV !== 'production') {
	        DOMProperty.getPossibleStandardName[lowerCased] = propName;
	      }
	
	      if (DOMAttributeNames.hasOwnProperty(propName)) {
	        var attributeName = DOMAttributeNames[propName];
	        propertyInfo.attributeName = attributeName;
	        if (process.env.NODE_ENV !== 'production') {
	          DOMProperty.getPossibleStandardName[attributeName] = propName;
	        }
	      }
	
	      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
	        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
	      }
	
	      if (DOMPropertyNames.hasOwnProperty(propName)) {
	        propertyInfo.propertyName = DOMPropertyNames[propName];
	      }
	
	      if (DOMMutationMethods.hasOwnProperty(propName)) {
	        propertyInfo.mutationMethod = DOMMutationMethods[propName];
	      }
	
	      DOMProperty.properties[propName] = propertyInfo;
	    }
	  }
	};
	var defaultValueCache = {};
	
	/**
	 * DOMProperty exports lookup objects that can be used like functions:
	 *
	 *   > DOMProperty.isValid['id']
	 *   true
	 *   > DOMProperty.isValid['foobar']
	 *   undefined
	 *
	 * Although this may be confusing, it performs better in general.
	 *
	 * @see http://jsperf.com/key-exists
	 * @see http://jsperf.com/key-missing
	 */
	var DOMProperty = {
	
	  ID_ATTRIBUTE_NAME: 'data-reactid',
	
	  /**
	   * Map from property "standard name" to an object with info about how to set
	   * the property in the DOM. Each object contains:
	   *
	   * attributeName:
	   *   Used when rendering markup or with `*Attribute()`.
	   * attributeNamespace
	   * propertyName:
	   *   Used on DOM node instances. (This includes properties that mutate due to
	   *   external factors.)
	   * mutationMethod:
	   *   If non-null, used instead of the property or `setAttribute()` after
	   *   initial render.
	   * mustUseAttribute:
	   *   Whether the property must be accessed and mutated using `*Attribute()`.
	   *   (This includes anything that fails `<propName> in <element>`.)
	   * mustUseProperty:
	   *   Whether the property must be accessed and mutated as an object property.
	   * hasSideEffects:
	   *   Whether or not setting a value causes side effects such as triggering
	   *   resources to be loaded or text selection changes. If true, we read from
	   *   the DOM before updating to ensure that the value is only set if it has
	   *   changed.
	   * hasBooleanValue:
	   *   Whether the property should be removed when set to a falsey value.
	   * hasNumericValue:
	   *   Whether the property must be numeric or parse as a numeric and should be
	   *   removed when set to a falsey value.
	   * hasPositiveNumericValue:
	   *   Whether the property must be positive numeric or parse as a positive
	   *   numeric and should be removed when set to a falsey value.
	   * hasOverloadedBooleanValue:
	   *   Whether the property can be used as a flag as well as with a value.
	   *   Removed when strictly equal to false; present without a value when
	   *   strictly equal to true; present with a value otherwise.
	   */
	  properties: {},
	
	  /**
	   * Mapping from lowercase property names to the properly cased version, used
	   * to warn in the case of missing properties. Available only in __DEV__.
	   * @type {Object}
	   */
	  getPossibleStandardName: process.env.NODE_ENV !== 'production' ? {} : null,
	
	  /**
	   * All of the isCustomAttribute() functions that have been injected.
	   */
	  _isCustomAttributeFunctions: [],
	
	  /**
	   * Checks whether a property name is a custom attribute.
	   * @method
	   */
	  isCustomAttribute: function (attributeName) {
	    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
	      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
	      if (isCustomAttributeFn(attributeName)) {
	        return true;
	      }
	    }
	    return false;
	  },
	
	  /**
	   * Returns the default property value for a DOM property (i.e., not an
	   * attribute). Most default values are '' or false, but not all. Worse yet,
	   * some (in particular, `type`) vary depending on the type of element.
	   *
	   * TODO: Is it better to grab all the possible properties when creating an
	   * element to avoid having to create the same element twice?
	   */
	  getDefaultValueForProperty: function (nodeName, prop) {
	    var nodeDefaults = defaultValueCache[nodeName];
	    var testElement;
	    if (!nodeDefaults) {
	      defaultValueCache[nodeName] = nodeDefaults = {};
	    }
	    if (!(prop in nodeDefaults)) {
	      testElement = document.createElement(nodeName);
	      nodeDefaults[prop] = testElement[prop];
	    }
	    return nodeDefaults[prop];
	  },
	
	  injection: DOMPropertyInjection
	};
	
	module.exports = DOMProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 70 */
/*!******************************************************!*\
  !*** ./~/react/lib/quoteAttributeValueForBrowser.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule quoteAttributeValueForBrowser
	 */
	
	'use strict';
	
	var escapeTextContentForBrowser = __webpack_require__(/*! ./escapeTextContentForBrowser */ 67);
	
	/**
	 * Escapes attribute value to prevent scripting attacks.
	 *
	 * @param {*} value Value to escape.
	 * @return {string} An escaped string.
	 */
	function quoteAttributeValueForBrowser(value) {
	  return '"' + escapeTextContentForBrowser(value) + '"';
	}
	
	module.exports = quoteAttributeValueForBrowser;

/***/ },
/* 71 */
/*!*******************************!*\
  !*** ./~/fbjs/lib/warning.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule warning
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 61);
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function (condition, format) {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	
	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // --- Welcome to debugging React ---
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch (x) {}
	    }
	  };
	}
	
	module.exports = warning;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 72 */
/*!*********************************************************!*\
  !*** ./~/react/lib/ReactComponentBrowserEnvironment.js ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentBrowserEnvironment
	 */
	
	'use strict';
	
	var ReactDOMIDOperations = __webpack_require__(/*! ./ReactDOMIDOperations */ 73);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	
	/**
	 * Abstracts away all functionality of the reconciler that requires knowledge of
	 * the browser context. TODO: These callers should be refactored to avoid the
	 * need for this injection.
	 */
	var ReactComponentBrowserEnvironment = {
	
	  processChildrenUpdates: ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,
	
	  replaceNodeWithMarkupByID: ReactDOMIDOperations.dangerouslyReplaceNodeWithMarkupByID,
	
	  /**
	   * If a particular environment requires that some resources be cleaned up,
	   * specify this in the injected Mixin. In the DOM, we would likely want to
	   * purge any cached node ID lookups.
	   *
	   * @private
	   */
	  unmountIDFromEnvironment: function (rootNodeID) {
	    ReactMount.purgeID(rootNodeID);
	  }
	
	};
	
	module.exports = ReactComponentBrowserEnvironment;

/***/ },
/* 73 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactDOMIDOperations.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMIDOperations
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var DOMChildrenOperations = __webpack_require__(/*! ./DOMChildrenOperations */ 53);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 68);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * Errors for properties that should not be updated with `updatePropertyByID()`.
	 *
	 * @type {object}
	 * @private
	 */
	var INVALID_PROPERTY_ERRORS = {
	  dangerouslySetInnerHTML: '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
	  style: '`style` must be set using `updateStylesByID()`.'
	};
	
	/**
	 * Operations used to process updates to DOM nodes.
	 */
	var ReactDOMIDOperations = {
	
	  /**
	   * Updates a DOM node with new property values. This should only be used to
	   * update DOM properties in `DOMProperty`.
	   *
	   * @param {string} id ID of the node to update.
	   * @param {string} name A valid property name, see `DOMProperty`.
	   * @param {*} value New value of the property.
	   * @internal
	   */
	  updatePropertyByID: function (id, name, value) {
	    var node = ReactMount.getNode(id);
	    !!INVALID_PROPERTY_ERRORS.hasOwnProperty(name) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'updatePropertyByID(...): %s', INVALID_PROPERTY_ERRORS[name]) : invariant(false) : undefined;
	
	    // If we're updating to null or undefined, we should remove the property
	    // from the DOM node instead of inadvertantly setting to a string. This
	    // brings us in line with the same behavior we have on initial render.
	    if (value != null) {
	      DOMPropertyOperations.setValueForProperty(node, name, value);
	    } else {
	      DOMPropertyOperations.deleteValueForProperty(node, name);
	    }
	  },
	
	  /**
	   * Replaces a DOM node that exists in the document with markup.
	   *
	   * @param {string} id ID of child to be replaced.
	   * @param {string} markup Dangerous markup to inject in place of child.
	   * @internal
	   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
	   */
	  dangerouslyReplaceNodeWithMarkupByID: function (id, markup) {
	    var node = ReactMount.getNode(id);
	    DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
	  },
	
	  /**
	   * Updates a component's children by processing a series of updates.
	   *
	   * @param {array<object>} updates List of update configurations.
	   * @param {array<string>} markup List of markup strings.
	   * @internal
	   */
	  dangerouslyProcessChildrenUpdates: function (updates, markup) {
	    for (var i = 0; i < updates.length; i++) {
	      updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
	    }
	    DOMChildrenOperations.processUpdates(updates, markup);
	  }
	};
	
	ReactPerf.measureMethods(ReactDOMIDOperations, 'ReactDOMIDOperations', {
	  dangerouslyReplaceNodeWithMarkupByID: 'dangerouslyReplaceNodeWithMarkupByID',
	  dangerouslyProcessChildrenUpdates: 'dangerouslyProcessChildrenUpdates'
	});
	
	module.exports = ReactDOMIDOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 74 */
/*!***********************************!*\
  !*** ./~/react/lib/ReactMount.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMount
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 75);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactDOMFeatureFlags = __webpack_require__(/*! ./ReactDOMFeatureFlags */ 87);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactEmptyComponentRegistry = __webpack_require__(/*! ./ReactEmptyComponentRegistry */ 90);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 91);
	var ReactInstanceMap = __webpack_require__(/*! ./ReactInstanceMap */ 93);
	var ReactMarkupChecksum = __webpack_require__(/*! ./ReactMarkupChecksum */ 94);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	var ReactUpdateQueue = __webpack_require__(/*! ./ReactUpdateQueue */ 99);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 104);
	var containsNode = __webpack_require__(/*! fbjs/lib/containsNode */ 105);
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 108);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var setInnerHTML = __webpack_require__(/*! ./setInnerHTML */ 65);
	var shouldUpdateReactComponent = __webpack_require__(/*! ./shouldUpdateReactComponent */ 113);
	var validateDOMNesting = __webpack_require__(/*! ./validateDOMNesting */ 116);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
	var nodeCache = {};
	
	var ELEMENT_NODE_TYPE = 1;
	var DOC_NODE_TYPE = 9;
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
	
	var ownerDocumentContextKey = '__ReactMount_ownerDocument$' + Math.random().toString(36).slice(2);
	
	/** Mapping from reactRootID to React component instance. */
	var instancesByReactRootID = {};
	
	/** Mapping from reactRootID to `container` nodes. */
	var containersByReactRootID = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  /** __DEV__-only mapping from reactRootID to root elements. */
	  var rootElementsByReactRootID = {};
	}
	
	// Used to store breadth-first search state in findComponentRoot.
	var findComponentRootReusableArray = [];
	
	/**
	 * Finds the index of the first character
	 * that's not common between the two given strings.
	 *
	 * @return {number} the index of the character where the strings diverge
	 */
	function firstDifferenceIndex(string1, string2) {
	  var minLen = Math.min(string1.length, string2.length);
	  for (var i = 0; i < minLen; i++) {
	    if (string1.charAt(i) !== string2.charAt(i)) {
	      return i;
	    }
	  }
	  return string1.length === string2.length ? -1 : minLen;
	}
	
	/**
	 * @param {DOMElement|DOMDocument} container DOM element that may contain
	 * a React component
	 * @return {?*} DOM element that may have the reactRoot ID, or null.
	 */
	function getReactRootElementInContainer(container) {
	  if (!container) {
	    return null;
	  }
	
	  if (container.nodeType === DOC_NODE_TYPE) {
	    return container.documentElement;
	  } else {
	    return container.firstChild;
	  }
	}
	
	/**
	 * @param {DOMElement} container DOM element that may contain a React component.
	 * @return {?string} A "reactRoot" ID, if a React component is rendered.
	 */
	function getReactRootID(container) {
	  var rootElement = getReactRootElementInContainer(container);
	  return rootElement && ReactMount.getID(rootElement);
	}
	
	/**
	 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
	 * element can return its control whose name or ID equals ATTR_NAME. All
	 * DOM nodes support `getAttributeNode` but this can also get called on
	 * other objects so just return '' if we're given something other than a
	 * DOM node (such as window).
	 *
	 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
	 * @return {string} ID of the supplied `domNode`.
	 */
	function getID(node) {
	  var id = internalGetID(node);
	  if (id) {
	    if (nodeCache.hasOwnProperty(id)) {
	      var cached = nodeCache[id];
	      if (cached !== node) {
	        !!isValid(cached, id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Two valid but unequal nodes with the same `%s`: %s', ATTR_NAME, id) : invariant(false) : undefined;
	
	        nodeCache[id] = node;
	      }
	    } else {
	      nodeCache[id] = node;
	    }
	  }
	
	  return id;
	}
	
	function internalGetID(node) {
	  // If node is something like a window, document, or text node, none of
	  // which support attributes or a .getAttribute method, gracefully return
	  // the empty string, as if the attribute were missing.
	  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
	}
	
	/**
	 * Sets the React-specific ID of the given node.
	 *
	 * @param {DOMElement} node The DOM node whose ID will be set.
	 * @param {string} id The value of the ID attribute.
	 */
	function setID(node, id) {
	  var oldID = internalGetID(node);
	  if (oldID !== id) {
	    delete nodeCache[oldID];
	  }
	  node.setAttribute(ATTR_NAME, id);
	  nodeCache[id] = node;
	}
	
	/**
	 * Finds the node with the supplied React-generated DOM ID.
	 *
	 * @param {string} id A React-generated DOM ID.
	 * @return {DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNode(id) {
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}
	
	/**
	 * Finds the node with the supplied public React instance.
	 *
	 * @param {*} instance A public React instance.
	 * @return {?DOMElement} DOM node with the suppled `id`.
	 * @internal
	 */
	function getNodeFromInstance(instance) {
	  var id = ReactInstanceMap.get(instance)._rootNodeID;
	  if (ReactEmptyComponentRegistry.isNullComponentID(id)) {
	    return null;
	  }
	  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
	    nodeCache[id] = ReactMount.findReactNodeByID(id);
	  }
	  return nodeCache[id];
	}
	
	/**
	 * A node is "valid" if it is contained by a currently mounted container.
	 *
	 * This means that the node does not have to be contained by a document in
	 * order to be considered valid.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @param {string} id The expected ID of the node.
	 * @return {boolean} Whether the node is contained by a mounted container.
	 */
	function isValid(node, id) {
	  if (node) {
	    !(internalGetID(node) === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactMount: Unexpected modification of `%s`', ATTR_NAME) : invariant(false) : undefined;
	
	    var container = ReactMount.findReactContainerForID(id);
	    if (container && containsNode(container, node)) {
	      return true;
	    }
	  }
	
	  return false;
	}
	
	/**
	 * Causes the cache to forget about one React-specific ID.
	 *
	 * @param {string} id The ID to forget.
	 */
	function purgeID(id) {
	  delete nodeCache[id];
	}
	
	var deepestNodeSoFar = null;
	function findDeepestCachedAncestorImpl(ancestorID) {
	  var ancestor = nodeCache[ancestorID];
	  if (ancestor && isValid(ancestor, ancestorID)) {
	    deepestNodeSoFar = ancestor;
	  } else {
	    // This node isn't populated in the cache, so presumably none of its
	    // descendants are. Break out of the loop.
	    return false;
	  }
	}
	
	/**
	 * Return the deepest cached node whose ID is a prefix of `targetID`.
	 */
	function findDeepestCachedAncestor(targetID) {
	  deepestNodeSoFar = null;
	  ReactInstanceHandles.traverseAncestors(targetID, findDeepestCachedAncestorImpl);
	
	  var foundNode = deepestNodeSoFar;
	  deepestNodeSoFar = null;
	  return foundNode;
	}
	
	/**
	 * Mounts this component and inserts it into the DOM.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {ReactReconcileTransaction} transaction
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function mountComponentIntoNode(componentInstance, rootID, container, transaction, shouldReuseMarkup, context) {
	  if (ReactDOMFeatureFlags.useCreateElement) {
	    context = assign({}, context);
	    if (container.nodeType === DOC_NODE_TYPE) {
	      context[ownerDocumentContextKey] = container;
	    } else {
	      context[ownerDocumentContextKey] = container.ownerDocument;
	    }
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    if (context === emptyObject) {
	      context = {};
	    }
	    var tag = container.nodeName.toLowerCase();
	    context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(null, tag, null);
	  }
	  var markup = ReactReconciler.mountComponent(componentInstance, rootID, transaction, context);
	  componentInstance._renderedComponent._topLevelWrapper = componentInstance;
	  ReactMount._mountImageIntoNode(markup, container, shouldReuseMarkup, transaction);
	}
	
	/**
	 * Batched mount.
	 *
	 * @param {ReactComponent} componentInstance The instance to mount.
	 * @param {string} rootID DOM ID of the root node.
	 * @param {DOMElement} container DOM element to mount into.
	 * @param {boolean} shouldReuseMarkup If true, do not insert markup
	 */
	function batchedMountComponentIntoNode(componentInstance, rootID, container, shouldReuseMarkup, context) {
	  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled(
	  /* forceHTML */shouldReuseMarkup);
	  transaction.perform(mountComponentIntoNode, null, componentInstance, rootID, container, transaction, shouldReuseMarkup, context);
	  ReactUpdates.ReactReconcileTransaction.release(transaction);
	}
	
	/**
	 * Unmounts a component and removes it from the DOM.
	 *
	 * @param {ReactComponent} instance React component instance.
	 * @param {DOMElement} container DOM element to unmount from.
	 * @final
	 * @internal
	 * @see {ReactMount.unmountComponentAtNode}
	 */
	function unmountComponentFromNode(instance, container) {
	  ReactReconciler.unmountComponent(instance);
	
	  if (container.nodeType === DOC_NODE_TYPE) {
	    container = container.documentElement;
	  }
	
	  // http://jsperf.com/emptying-a-node
	  while (container.lastChild) {
	    container.removeChild(container.lastChild);
	  }
	}
	
	/**
	 * True if the supplied DOM node has a direct React-rendered child that is
	 * not a React root element. Useful for warning in `render`,
	 * `unmountComponentAtNode`, etc.
	 *
	 * @param {?DOMElement} node The candidate DOM node.
	 * @return {boolean} True if the DOM element contains a direct child that was
	 * rendered by React but is not a root element.
	 * @internal
	 */
	function hasNonRootReactChild(node) {
	  var reactRootID = getReactRootID(node);
	  return reactRootID ? reactRootID !== ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID) : false;
	}
	
	/**
	 * Returns the first (deepest) ancestor of a node which is rendered by this copy
	 * of React.
	 */
	function findFirstReactDOMImpl(node) {
	  // This node might be from another React instance, so we make sure not to
	  // examine the node cache here
	  for (; node && node.parentNode !== node; node = node.parentNode) {
	    if (node.nodeType !== 1) {
	      // Not a DOMElement, therefore not a React component
	      continue;
	    }
	    var nodeID = internalGetID(node);
	    if (!nodeID) {
	      continue;
	    }
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	
	    // If containersByReactRootID contains the container we find by crawling up
	    // the tree, we know that this instance of React rendered the node.
	    // nb. isValid's strategy (with containsNode) does not work because render
	    // trees may be nested and we don't want a false positive in that case.
	    var current = node;
	    var lastID;
	    do {
	      lastID = internalGetID(current);
	      current = current.parentNode;
	      if (current == null) {
	        // The passed-in node has been detached from the container it was
	        // originally rendered into.
	        return null;
	      }
	    } while (lastID !== reactRootID);
	
	    if (current === containersByReactRootID[reactRootID]) {
	      return node;
	    }
	  }
	  return null;
	}
	
	/**
	 * Temporary (?) hack so that we can store all top-level pending updates on
	 * composites instead of having to worry about different types of components
	 * here.
	 */
	var TopLevelWrapper = function () {};
	TopLevelWrapper.prototype.isReactComponent = {};
	if (process.env.NODE_ENV !== 'production') {
	  TopLevelWrapper.displayName = 'TopLevelWrapper';
	}
	TopLevelWrapper.prototype.render = function () {
	  // this.props is actually a ReactElement
	  return this.props;
	};
	
	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {
	
	  TopLevelWrapper: TopLevelWrapper,
	
	  /** Exposed for debugging purposes **/
	  _instancesByReactRootID: instancesByReactRootID,
	
	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function (container, renderCallback) {
	    renderCallback();
	  },
	
	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function (prevComponent, nextElement, container, callback) {
	    ReactMount.scrollMonitor(container, function () {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });
	
	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[getReactRootID(container)] = getReactRootElementInContainer(container);
	    }
	
	    return prevComponent;
	  },
	
	  /**
	   * Register a component into the instance map and starts scroll value
	   * monitoring
	   * @param {ReactComponent} nextComponent component instance to render
	   * @param {DOMElement} container container to render into
	   * @return {string} reactRoot ID prefix
	   */
	  _registerComponent: function (nextComponent, container) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : invariant(false) : undefined;
	
	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();
	
	    var reactRootID = ReactMount.registerContainer(container);
	    instancesByReactRootID[reactRootID] = nextComponent;
	    return reactRootID;
	  },
	
	  /**
	   * Render a new component into the DOM.
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;
	
	    var componentInstance = instantiateReactComponent(nextElement, null);
	    var reactRootID = ReactMount._registerComponent(componentInstance, container);
	
	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.
	
	    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, reactRootID, container, shouldReuseMarkup, context);
	
	    if (process.env.NODE_ENV !== 'production') {
	      // Record the root element in case it later gets transplanted.
	      rootElementsByReactRootID[reactRootID] = getReactRootElementInContainer(container);
	    }
	
	    return componentInstance;
	  },
	
	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !(parentComponent != null && parentComponent._reactInternalInstance != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : invariant(false) : undefined;
	    return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
	  },
	
	  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing an element string, make sure to instantiate ' + 'it by passing it to React.createElement.' : typeof nextElement === 'function' ? ' Instead of passing a component class, make sure to instantiate ' + 'it by passing it to React.createElement.' :
	    // Check if it quacks like an element
	    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : invariant(false) : undefined;
	
	    process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : undefined;
	
	    var nextWrappedElement = new ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);
	
	    var prevComponent = instancesByReactRootID[getReactRootID(container)];
	
	    if (prevComponent) {
	      var prevWrappedElement = prevComponent._currentElement;
	      var prevElement = prevWrappedElement.props;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        var publicInst = prevComponent._renderedComponent.getPublicInstance();
	        var updatedCallback = callback && function () {
	          callback.call(publicInst);
	        };
	        ReactMount._updateRootComponent(prevComponent, nextWrappedElement, container, updatedCallback);
	        return publicInst;
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }
	
	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
	    var containerHasNonRootReactChild = hasNonRootReactChild(container);
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : undefined;
	
	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (internalGetID(rootElementSibling)) {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : undefined;
	            break;
	          }
	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }
	
	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
	    var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, parentComponent != null ? parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context) : emptyObject)._renderedComponent.getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },
	
	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function (nextElement, container, callback) {
	    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
	  },
	
	  /**
	   * Registers a container node into which React components will be rendered.
	   * This also creates the "reactRoot" ID that will be assigned to the element
	   * rendered within.
	   *
	   * @param {DOMElement} container DOM element to register as a container.
	   * @return {string} The "reactRoot" ID of elements rendered within.
	   */
	  registerContainer: function (container) {
	    var reactRootID = getReactRootID(container);
	    if (reactRootID) {
	      // If one exists, make sure it is a valid "reactRoot" ID.
	      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
	    }
	    if (!reactRootID) {
	      // No valid "reactRoot" ID found, create one.
	      reactRootID = ReactInstanceHandles.createReactRootID();
	    }
	    containersByReactRootID[reactRootID] = container;
	    return reactRootID;
	  },
	
	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function (container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : undefined;
	
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : invariant(false) : undefined;
	
	    var reactRootID = getReactRootID(container);
	    var component = instancesByReactRootID[reactRootID];
	    if (!component) {
	      // Check if the node being unmounted was rendered by React, but isn't a
	      // root node.
	      var containerHasNonRootReactChild = hasNonRootReactChild(container);
	
	      // Check if the container itself is a React root node.
	      var containerID = internalGetID(container);
	      var isContainerReactRoot = containerID && containerID === ReactInstanceHandles.getReactRootIDFromNodeID(containerID);
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : undefined;
	      }
	
	      return false;
	    }
	    ReactUpdates.batchedUpdates(unmountComponentFromNode, component, container);
	    delete instancesByReactRootID[reactRootID];
	    delete containersByReactRootID[reactRootID];
	    if (process.env.NODE_ENV !== 'production') {
	      delete rootElementsByReactRootID[reactRootID];
	    }
	    return true;
	  },
	
	  /**
	   * Finds the container DOM element that contains React component to which the
	   * supplied DOM `id` belongs.
	   *
	   * @param {string} id The ID of an element rendered by a React component.
	   * @return {?DOMElement} DOM element that contains the `id`.
	   */
	  findReactContainerForID: function (id) {
	    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
	    var container = containersByReactRootID[reactRootID];
	
	    if (process.env.NODE_ENV !== 'production') {
	      var rootElement = rootElementsByReactRootID[reactRootID];
	      if (rootElement && rootElement.parentNode !== container) {
	        process.env.NODE_ENV !== 'production' ? warning(
	        // Call internalGetID here because getID calls isValid which calls
	        // findReactContainerForID (this function).
	        internalGetID(rootElement) === reactRootID, 'ReactMount: Root element ID differed from reactRootID.') : undefined;
	        var containerChild = container.firstChild;
	        if (containerChild && reactRootID === internalGetID(containerChild)) {
	          // If the container has a new child with the same ID as the old
	          // root element, then rootElementsByReactRootID[reactRootID] is
	          // just stale and needs to be updated. The case that deserves a
	          // warning is when the container is empty.
	          rootElementsByReactRootID[reactRootID] = containerChild;
	        } else {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'ReactMount: Root element has been removed from its original ' + 'container. New container: %s', rootElement.parentNode) : undefined;
	        }
	      }
	    }
	
	    return container;
	  },
	
	  /**
	   * Finds an element rendered by React with the supplied ID.
	   *
	   * @param {string} id ID of a DOM node in the React component.
	   * @return {DOMElement} Root DOM node of the React component.
	   */
	  findReactNodeByID: function (id) {
	    var reactRoot = ReactMount.findReactContainerForID(id);
	    return ReactMount.findComponentRoot(reactRoot, id);
	  },
	
	  /**
	   * Traverses up the ancestors of the supplied node to find a node that is a
	   * DOM representation of a React component rendered by this copy of React.
	   *
	   * @param {*} node
	   * @return {?DOMEventTarget}
	   * @internal
	   */
	  getFirstReactDOM: function (node) {
	    return findFirstReactDOMImpl(node);
	  },
	
	  /**
	   * Finds a node with the supplied `targetID` inside of the supplied
	   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
	   * quickly.
	   *
	   * @param {DOMEventTarget} ancestorNode Search from this root.
	   * @pararm {string} targetID ID of the DOM representation of the component.
	   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
	   * @internal
	   */
	  findComponentRoot: function (ancestorNode, targetID) {
	    var firstChildren = findComponentRootReusableArray;
	    var childIndex = 0;
	
	    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw on the next line; give an early warning
	      process.env.NODE_ENV !== 'production' ? warning(deepestAncestor != null, 'React can\'t find the root component node for data-reactid value ' + '`%s`. If you\'re seeing this message, it probably means that ' + 'you\'ve loaded two copies of React on the page. At this time, only ' + 'a single copy of React can be loaded at a time.', targetID) : undefined;
	    }
	
	    firstChildren[0] = deepestAncestor.firstChild;
	    firstChildren.length = 1;
	
	    while (childIndex < firstChildren.length) {
	      var child = firstChildren[childIndex++];
	      var targetChild;
	
	      while (child) {
	        var childID = ReactMount.getID(child);
	        if (childID) {
	          // Even if we find the node we're looking for, we finish looping
	          // through its siblings to ensure they're cached so that we don't have
	          // to revisit this node again. Otherwise, we make n^2 calls to getID
	          // when visiting the many children of a single node in order.
	
	          if (targetID === childID) {
	            targetChild = child;
	          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
	            // If we find a child whose ID is an ancestor of the given ID,
	            // then we can be sure that we only want to search the subtree
	            // rooted at this child, so we can throw out the rest of the
	            // search state.
	            firstChildren.length = childIndex = 0;
	            firstChildren.push(child.firstChild);
	          }
	        } else {
	          // If this child had no ID, then there's a chance that it was
	          // injected automatically by the browser, as when a `<table>`
	          // element sprouts an extra `<tbody>` child as a side effect of
	          // `.innerHTML` parsing. Optimistically continue down this
	          // branch, but not before examining the other siblings.
	          firstChildren.push(child.firstChild);
	        }
	
	        child = child.nextSibling;
	      }
	
	      if (targetChild) {
	        // Emptying firstChildren/findComponentRootReusableArray is
	        // not necessary for correctness, but it helps the GC reclaim
	        // any nodes that were left at the end of the search.
	        firstChildren.length = 0;
	
	        return targetChild;
	      }
	    }
	
	    firstChildren.length = 0;
	
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findComponentRoot(..., %s): Unable to find element. This probably ' + 'means the DOM was unexpectedly mutated (e.g., by the browser), ' + 'usually due to forgetting a <tbody> when using tables, nesting tags ' + 'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' + 'parent. ' + 'Try inspecting the child nodes of the element with React ID `%s`.', targetID, ReactMount.getID(ancestorNode)) : invariant(false) : undefined;
	  },
	
	  _mountImageIntoNode: function (markup, container, shouldReuseMarkup, transaction) {
	    !(container && (container.nodeType === ELEMENT_NODE_TYPE || container.nodeType === DOC_NODE_TYPE || container.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : invariant(false) : undefined;
	
	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	
	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
	
	        var normalizedMarkup = markup;
	        if (process.env.NODE_ENV !== 'production') {
	          // because rootMarkup is retrieved from the DOM, various normalizations
	          // will have occurred which will not be present in `markup`. Here,
	          // insert markup into a <div> or <iframe> depending on the container
	          // type to perform the same normalizations before comparing.
	          var normalizer;
	          if (container.nodeType === ELEMENT_NODE_TYPE) {
	            normalizer = document.createElement('div');
	            normalizer.innerHTML = markup;
	            normalizedMarkup = normalizer.innerHTML;
	          } else {
	            normalizer = document.createElement('iframe');
	            document.body.appendChild(normalizer);
	            normalizer.contentDocument.write(markup);
	            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
	            document.body.removeChild(normalizer);
	          }
	        }
	
	        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
	        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
	
	        !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using ' + 'server rendering but the checksum was invalid. This usually ' + 'means you rendered a different component type or props on ' + 'the client from the one on the server, or your render() ' + 'methods are impure. React cannot handle this case due to ' + 'cross-browser quirks by rendering at the document root. You ' + 'should look for environment dependent code in your components ' + 'and ensure the props are the same client and server side:\n%s', difference) : invariant(false) : undefined;
	
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : undefined;
	        }
	      }
	    }
	
	    !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but ' + 'you didn\'t use server rendering. We can\'t do this ' + 'without using server rendering due to cross-browser quirks. ' + 'See ReactDOMServer.renderToString() for server rendering.') : invariant(false) : undefined;
	
	    if (transaction.useCreateElement) {
	      while (container.lastChild) {
	        container.removeChild(container.lastChild);
	      }
	      container.appendChild(markup);
	    } else {
	      setInnerHTML(container, markup);
	    }
	  },
	
	  ownerDocumentContextKey: ownerDocumentContextKey,
	
	  /**
	   * React ID utilities.
	   */
	
	  getReactRootID: getReactRootID,
	
	  getID: getID,
	
	  setID: setID,
	
	  getNode: getNode,
	
	  getNodeFromInstance: getNodeFromInstance,
	
	  isValid: isValid,
	
	  purgeID: purgeID
	};
	
	ReactPerf.measureMethods(ReactMount, 'ReactMount', {
	  _renderNewRootComponent: '_renderNewRootComponent',
	  _mountImageIntoNode: '_mountImageIntoNode'
	});
	
	module.exports = ReactMount;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 75 */
/*!*************************************************!*\
  !*** ./~/react/lib/ReactBrowserEventEmitter.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserEventEmitter
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 77);
	var EventPluginRegistry = __webpack_require__(/*! ./EventPluginRegistry */ 78);
	var ReactEventEmitterMixin = __webpack_require__(/*! ./ReactEventEmitterMixin */ 83);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ViewportMetrics = __webpack_require__(/*! ./ViewportMetrics */ 84);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var isEventSupported = __webpack_require__(/*! ./isEventSupported */ 86);
	
	/**
	 * Summary of `ReactBrowserEventEmitter` event handling:
	 *
	 *  - Top-level delegation is used to trap most native browser events. This
	 *    may only occur in the main thread and is the responsibility of
	 *    ReactEventListener, which is injected and can therefore support pluggable
	 *    event sources. This is the only work that occurs in the main thread.
	 *
	 *  - We normalize and de-duplicate events to account for browser quirks. This
	 *    may be done in the worker thread.
	 *
	 *  - Forward these native events (with the associated top-level type used to
	 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
	 *    to extract any synthetic events.
	 *
	 *  - The `EventPluginHub` will then process each event by annotating them with
	 *    "dispatches", a sequence of listeners and IDs that care about that event.
	 *
	 *  - The `EventPluginHub` then dispatches the events.
	 *
	 * Overview of React and the event system:
	 *
	 * +------------+    .
	 * |    DOM     |    .
	 * +------------+    .
	 *       |           .
	 *       v           .
	 * +------------+    .
	 * | ReactEvent |    .
	 * |  Listener  |    .
	 * +------------+    .                         +-----------+
	 *       |           .               +--------+|SimpleEvent|
	 *       |           .               |         |Plugin     |
	 * +-----|------+    .               v         +-----------+
	 * |     |      |    .    +--------------+                    +------------+
	 * |     +-----------.--->|EventPluginHub|                    |    Event   |
	 * |            |    .    |              |     +-----------+  | Propagators|
	 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
	 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
	 * |            |    .    |              |     +-----------+  |  utilities |
	 * |     +-----------.--->|              |                    +------------+
	 * |     |      |    .    +--------------+
	 * +-----|------+    .                ^        +-----------+
	 *       |           .                |        |Enter/Leave|
	 *       +           .                +-------+|Plugin     |
	 * +-------------+   .                         +-----------+
	 * | application |   .
	 * |-------------|   .
	 * |             |   .
	 * |             |   .
	 * +-------------+   .
	 *                   .
	 *    React Core     .  General Purpose Event Plugin System
	 */
	
	var alreadyListeningTo = {};
	var isMonitoringScrollValue = false;
	var reactTopListenersCounter = 0;
	
	// For events like 'submit' which don't consistently bubble (which we trap at a
	// lower node than `document`), binding at `document` would cause duplicate
	// events so we don't include them here
	var topEventMapping = {
	  topAbort: 'abort',
	  topBlur: 'blur',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topChange: 'change',
	  topClick: 'click',
	  topCompositionEnd: 'compositionend',
	  topCompositionStart: 'compositionstart',
	  topCompositionUpdate: 'compositionupdate',
	  topContextMenu: 'contextmenu',
	  topCopy: 'copy',
	  topCut: 'cut',
	  topDoubleClick: 'dblclick',
	  topDrag: 'drag',
	  topDragEnd: 'dragend',
	  topDragEnter: 'dragenter',
	  topDragExit: 'dragexit',
	  topDragLeave: 'dragleave',
	  topDragOver: 'dragover',
	  topDragStart: 'dragstart',
	  topDrop: 'drop',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topFocus: 'focus',
	  topInput: 'input',
	  topKeyDown: 'keydown',
	  topKeyPress: 'keypress',
	  topKeyUp: 'keyup',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topMouseDown: 'mousedown',
	  topMouseMove: 'mousemove',
	  topMouseOut: 'mouseout',
	  topMouseOver: 'mouseover',
	  topMouseUp: 'mouseup',
	  topPaste: 'paste',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topScroll: 'scroll',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topSelectionChange: 'selectionchange',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTextInput: 'textInput',
	  topTimeUpdate: 'timeupdate',
	  topTouchCancel: 'touchcancel',
	  topTouchEnd: 'touchend',
	  topTouchMove: 'touchmove',
	  topTouchStart: 'touchstart',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting',
	  topWheel: 'wheel'
	};
	
	/**
	 * To ensure no conflicts with other potential React instances on the page
	 */
	var topListenersIDKey = '_reactListenersID' + String(Math.random()).slice(2);
	
	function getListeningForDocument(mountAt) {
	  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
	  // directly.
	  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
	    mountAt[topListenersIDKey] = reactTopListenersCounter++;
	    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
	  }
	  return alreadyListeningTo[mountAt[topListenersIDKey]];
	}
	
	/**
	 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
	 * example:
	 *
	 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
	 *
	 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
	 *
	 * @internal
	 */
	var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {
	
	  /**
	   * Injectable event backend
	   */
	  ReactEventListener: null,
	
	  injection: {
	    /**
	     * @param {object} ReactEventListener
	     */
	    injectReactEventListener: function (ReactEventListener) {
	      ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);
	      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
	    }
	  },
	
	  /**
	   * Sets whether or not any created callbacks should be enabled.
	   *
	   * @param {boolean} enabled True if callbacks should be enabled.
	   */
	  setEnabled: function (enabled) {
	    if (ReactBrowserEventEmitter.ReactEventListener) {
	      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
	    }
	  },
	
	  /**
	   * @return {boolean} True if callbacks are enabled.
	   */
	  isEnabled: function () {
	    return !!(ReactBrowserEventEmitter.ReactEventListener && ReactBrowserEventEmitter.ReactEventListener.isEnabled());
	  },
	
	  /**
	   * We listen for bubbled touch events on the document object.
	   *
	   * Firefox v8.01 (and possibly others) exhibited strange behavior when
	   * mounting `onmousemove` events at some node that was not the document
	   * element. The symptoms were that if your mouse is not moving over something
	   * contained within that mount point (for example on the background) the
	   * top-level listeners for `onmousemove` won't be called. However, if you
	   * register the `mousemove` on the document object, then it will of course
	   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
	   * top-level listeners to the document object only, at least for these
	   * movement types of events and possibly all events.
	   *
	   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
	   *
	   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
	   * they bubble to document.
	   *
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {object} contentDocumentHandle Document which owns the container
	   */
	  listenTo: function (registrationName, contentDocumentHandle) {
	    var mountAt = contentDocumentHandle;
	    var isListening = getListeningForDocument(mountAt);
	    var dependencies = EventPluginRegistry.registrationNameDependencies[registrationName];
	
	    var topLevelTypes = EventConstants.topLevelTypes;
	    for (var i = 0; i < dependencies.length; i++) {
	      var dependency = dependencies[i];
	      if (!(isListening.hasOwnProperty(dependency) && isListening[dependency])) {
	        if (dependency === topLevelTypes.topWheel) {
	          if (isEventSupported('wheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'wheel', mountAt);
	          } else if (isEventSupported('mousewheel')) {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'mousewheel', mountAt);
	          } else {
	            // Firefox needs to capture a different mouse scroll event.
	            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel, 'DOMMouseScroll', mountAt);
	          }
	        } else if (dependency === topLevelTypes.topScroll) {
	
	          if (isEventSupported('scroll', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll, 'scroll', mountAt);
	          } else {
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll, 'scroll', ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);
	          }
	        } else if (dependency === topLevelTypes.topFocus || dependency === topLevelTypes.topBlur) {
	
	          if (isEventSupported('focus', true)) {
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus, 'focus', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur, 'blur', mountAt);
	          } else if (isEventSupported('focusin')) {
	            // IE has `focusin` and `focusout` events which bubble.
	            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus, 'focusin', mountAt);
	            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur, 'focusout', mountAt);
	          }
	
	          // to make sure blur and focus event listeners are only attached once
	          isListening[topLevelTypes.topBlur] = true;
	          isListening[topLevelTypes.topFocus] = true;
	        } else if (topEventMapping.hasOwnProperty(dependency)) {
	          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency, topEventMapping[dependency], mountAt);
	        }
	
	        isListening[dependency] = true;
	      }
	    }
	  },
	
	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType, handlerBaseName, handle);
	  },
	
	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType, handlerBaseName, handle);
	  },
	
	  /**
	   * Listens to window scroll and resize events. We cache scroll values so that
	   * application code can access them without triggering reflows.
	   *
	   * NOTE: Scroll events do not bubble.
	   *
	   * @see http://www.quirksmode.org/dom/events/scroll.html
	   */
	  ensureScrollValueMonitoring: function () {
	    if (!isMonitoringScrollValue) {
	      var refresh = ViewportMetrics.refreshScrollValues;
	      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
	      isMonitoringScrollValue = true;
	    }
	  },
	
	  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,
	
	  registrationNameModules: EventPluginHub.registrationNameModules,
	
	  putListener: EventPluginHub.putListener,
	
	  getListener: EventPluginHub.getListener,
	
	  deleteListener: EventPluginHub.deleteListener,
	
	  deleteAllListeners: EventPluginHub.deleteAllListeners
	
	});
	
	ReactPerf.measureMethods(ReactBrowserEventEmitter, 'ReactBrowserEventEmitter', {
	  putListener: 'putListener',
	  deleteListener: 'deleteListener'
	});
	
	module.exports = ReactBrowserEventEmitter;

/***/ },
/* 76 */
/*!***************************************!*\
  !*** ./~/react/lib/EventConstants.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventConstants
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(/*! fbjs/lib/keyMirror */ 63);
	
	var PropagationPhases = keyMirror({ bubbled: null, captured: null });
	
	/**
	 * Types of raw signals from the browser caught at the top level.
	 */
	var topLevelTypes = keyMirror({
	  topAbort: null,
	  topBlur: null,
	  topCanPlay: null,
	  topCanPlayThrough: null,
	  topChange: null,
	  topClick: null,
	  topCompositionEnd: null,
	  topCompositionStart: null,
	  topCompositionUpdate: null,
	  topContextMenu: null,
	  topCopy: null,
	  topCut: null,
	  topDoubleClick: null,
	  topDrag: null,
	  topDragEnd: null,
	  topDragEnter: null,
	  topDragExit: null,
	  topDragLeave: null,
	  topDragOver: null,
	  topDragStart: null,
	  topDrop: null,
	  topDurationChange: null,
	  topEmptied: null,
	  topEncrypted: null,
	  topEnded: null,
	  topError: null,
	  topFocus: null,
	  topInput: null,
	  topKeyDown: null,
	  topKeyPress: null,
	  topKeyUp: null,
	  topLoad: null,
	  topLoadedData: null,
	  topLoadedMetadata: null,
	  topLoadStart: null,
	  topMouseDown: null,
	  topMouseMove: null,
	  topMouseOut: null,
	  topMouseOver: null,
	  topMouseUp: null,
	  topPaste: null,
	  topPause: null,
	  topPlay: null,
	  topPlaying: null,
	  topProgress: null,
	  topRateChange: null,
	  topReset: null,
	  topScroll: null,
	  topSeeked: null,
	  topSeeking: null,
	  topSelectionChange: null,
	  topStalled: null,
	  topSubmit: null,
	  topSuspend: null,
	  topTextInput: null,
	  topTimeUpdate: null,
	  topTouchCancel: null,
	  topTouchEnd: null,
	  topTouchMove: null,
	  topTouchStart: null,
	  topVolumeChange: null,
	  topWaiting: null,
	  topWheel: null
	});
	
	var EventConstants = {
	  topLevelTypes: topLevelTypes,
	  PropagationPhases: PropagationPhases
	};
	
	module.exports = EventConstants;

/***/ },
/* 77 */
/*!***************************************!*\
  !*** ./~/react/lib/EventPluginHub.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginHub
	 */
	
	'use strict';
	
	var EventPluginRegistry = __webpack_require__(/*! ./EventPluginRegistry */ 78);
	var EventPluginUtils = __webpack_require__(/*! ./EventPluginUtils */ 79);
	var ReactErrorUtils = __webpack_require__(/*! ./ReactErrorUtils */ 80);
	
	var accumulateInto = __webpack_require__(/*! ./accumulateInto */ 81);
	var forEachAccumulated = __webpack_require__(/*! ./forEachAccumulated */ 82);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * Internal store for event listeners
	 */
	var listenerBank = {};
	
	/**
	 * Internal queue of events that have accumulated their dispatches and are
	 * waiting to have their dispatches executed.
	 */
	var eventQueue = null;
	
	/**
	 * Dispatches an event and releases it back into the pool, unless persistent.
	 *
	 * @param {?object} event Synthetic event to be dispatched.
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @private
	 */
	var executeDispatchesAndRelease = function (event, simulated) {
	  if (event) {
	    EventPluginUtils.executeDispatchesInOrder(event, simulated);
	
	    if (!event.isPersistent()) {
	      event.constructor.release(event);
	    }
	  }
	};
	var executeDispatchesAndReleaseSimulated = function (e) {
	  return executeDispatchesAndRelease(e, true);
	};
	var executeDispatchesAndReleaseTopLevel = function (e) {
	  return executeDispatchesAndRelease(e, false);
	};
	
	/**
	 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
	 *   hierarchy given ids of the logical DOM elements involved.
	 */
	var InstanceHandle = null;
	
	function validateInstanceHandle() {
	  var valid = InstanceHandle && InstanceHandle.traverseTwoPhase && InstanceHandle.traverseEnterLeave;
	  process.env.NODE_ENV !== 'production' ? warning(valid, 'InstanceHandle not injected before use!') : undefined;
	}
	
	/**
	 * This is a unified interface for event plugins to be installed and configured.
	 *
	 * Event plugins can implement the following properties:
	 *
	 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
	 *     Required. When a top-level event is fired, this method is expected to
	 *     extract synthetic events that will in turn be queued and dispatched.
	 *
	 *   `eventTypes` {object}
	 *     Optional, plugins that fire events must publish a mapping of registration
	 *     names that are used to register listeners. Values of this mapping must
	 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
	 *
	 *   `executeDispatch` {function(object, function, string)}
	 *     Optional, allows plugins to override how an event gets dispatched. By
	 *     default, the listener is simply invoked.
	 *
	 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
	 *
	 * @public
	 */
	var EventPluginHub = {
	
	  /**
	   * Methods for injecting dependencies.
	   */
	  injection: {
	
	    /**
	     * @param {object} InjectedMount
	     * @public
	     */
	    injectMount: EventPluginUtils.injection.injectMount,
	
	    /**
	     * @param {object} InjectedInstanceHandle
	     * @public
	     */
	    injectInstanceHandle: function (InjectedInstanceHandle) {
	      InstanceHandle = InjectedInstanceHandle;
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	    },
	
	    getInstanceHandle: function () {
	      if (process.env.NODE_ENV !== 'production') {
	        validateInstanceHandle();
	      }
	      return InstanceHandle;
	    },
	
	    /**
	     * @param {array} InjectedEventPluginOrder
	     * @public
	     */
	    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,
	
	    /**
	     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	     */
	    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName
	
	  },
	
	  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,
	
	  registrationNameModules: EventPluginRegistry.registrationNameModules,
	
	  /**
	   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @param {?function} listener The callback to store.
	   */
	  putListener: function (id, registrationName, listener) {
	    !(typeof listener === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s listener to be a function, instead got type %s', registrationName, typeof listener) : invariant(false) : undefined;
	
	    var bankForRegistrationName = listenerBank[registrationName] || (listenerBank[registrationName] = {});
	    bankForRegistrationName[id] = listener;
	
	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.didPutListener) {
	      PluginModule.didPutListener(id, registrationName, listener);
	    }
	  },
	
	  /**
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   * @return {?function} The stored callback.
	   */
	  getListener: function (id, registrationName) {
	    var bankForRegistrationName = listenerBank[registrationName];
	    return bankForRegistrationName && bankForRegistrationName[id];
	  },
	
	  /**
	   * Deletes a listener from the registration bank.
	   *
	   * @param {string} id ID of the DOM element.
	   * @param {string} registrationName Name of listener (e.g. `onClick`).
	   */
	  deleteListener: function (id, registrationName) {
	    var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	    if (PluginModule && PluginModule.willDeleteListener) {
	      PluginModule.willDeleteListener(id, registrationName);
	    }
	
	    var bankForRegistrationName = listenerBank[registrationName];
	    // TODO: This should never be null -- when is it?
	    if (bankForRegistrationName) {
	      delete bankForRegistrationName[id];
	    }
	  },
	
	  /**
	   * Deletes all listeners for the DOM element with the supplied ID.
	   *
	   * @param {string} id ID of the DOM element.
	   */
	  deleteAllListeners: function (id) {
	    for (var registrationName in listenerBank) {
	      if (!listenerBank[registrationName][id]) {
	        continue;
	      }
	
	      var PluginModule = EventPluginRegistry.registrationNameModules[registrationName];
	      if (PluginModule && PluginModule.willDeleteListener) {
	        PluginModule.willDeleteListener(id, registrationName);
	      }
	
	      delete listenerBank[registrationName][id];
	    }
	  },
	
	  /**
	   * Allows registered plugins an opportunity to extract events from top-level
	   * native browser events.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @internal
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events;
	    var plugins = EventPluginRegistry.plugins;
	    for (var i = 0; i < plugins.length; i++) {
	      // Not every plugin in the ordering may be loaded at runtime.
	      var possiblePlugin = plugins[i];
	      if (possiblePlugin) {
	        var extractedEvents = possiblePlugin.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	        if (extractedEvents) {
	          events = accumulateInto(events, extractedEvents);
	        }
	      }
	    }
	    return events;
	  },
	
	  /**
	   * Enqueues a synthetic event that should be dispatched when
	   * `processEventQueue` is invoked.
	   *
	   * @param {*} events An accumulation of synthetic events.
	   * @internal
	   */
	  enqueueEvents: function (events) {
	    if (events) {
	      eventQueue = accumulateInto(eventQueue, events);
	    }
	  },
	
	  /**
	   * Dispatches all synthetic events on the event queue.
	   *
	   * @internal
	   */
	  processEventQueue: function (simulated) {
	    // Set `eventQueue` to null before processing it so that we can tell if more
	    // events get enqueued while processing.
	    var processingEventQueue = eventQueue;
	    eventQueue = null;
	    if (simulated) {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseSimulated);
	    } else {
	      forEachAccumulated(processingEventQueue, executeDispatchesAndReleaseTopLevel);
	    }
	    !!eventQueue ? process.env.NODE_ENV !== 'production' ? invariant(false, 'processEventQueue(): Additional events were enqueued while processing ' + 'an event queue. Support for this has not yet been implemented.') : invariant(false) : undefined;
	    // This would be a good time to rethrow if any of the event handlers threw.
	    ReactErrorUtils.rethrowCaughtError();
	  },
	
	  /**
	   * These are needed for tests only. Do not use!
	   */
	  __purge: function () {
	    listenerBank = {};
	  },
	
	  __getListenerBank: function () {
	    return listenerBank;
	  }
	
	};
	
	module.exports = EventPluginHub;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 78 */
/*!********************************************!*\
  !*** ./~/react/lib/EventPluginRegistry.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginRegistry
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * Injectable ordering of event plugins.
	 */
	var EventPluginOrder = null;
	
	/**
	 * Injectable mapping from names to event plugin modules.
	 */
	var namesToPlugins = {};
	
	/**
	 * Recomputes the plugin list using the injected plugins and plugin ordering.
	 *
	 * @private
	 */
	function recomputePluginOrdering() {
	  if (!EventPluginOrder) {
	    // Wait until an `EventPluginOrder` is injected.
	    return;
	  }
	  for (var pluginName in namesToPlugins) {
	    var PluginModule = namesToPlugins[pluginName];
	    var pluginIndex = EventPluginOrder.indexOf(pluginName);
	    !(pluginIndex > -1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugins that do not exist in ' + 'the plugin ordering, `%s`.', pluginName) : invariant(false) : undefined;
	    if (EventPluginRegistry.plugins[pluginIndex]) {
	      continue;
	    }
	    !PluginModule.extractEvents ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Event plugins must implement an `extractEvents` ' + 'method, but `%s` does not.', pluginName) : invariant(false) : undefined;
	    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
	    var publishedEvents = PluginModule.eventTypes;
	    for (var eventName in publishedEvents) {
	      !publishEventForPlugin(publishedEvents[eventName], PluginModule, eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.', eventName, pluginName) : invariant(false) : undefined;
	    }
	  }
	}
	
	/**
	 * Publishes an event so that it can be dispatched by the supplied plugin.
	 *
	 * @param {object} dispatchConfig Dispatch configuration for the event.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @return {boolean} True if the event was successfully published.
	 * @private
	 */
	function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
	  !!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'event name, `%s`.', eventName) : invariant(false) : undefined;
	  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;
	
	  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
	  if (phasedRegistrationNames) {
	    for (var phaseName in phasedRegistrationNames) {
	      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
	        var phasedRegistrationName = phasedRegistrationNames[phaseName];
	        publishRegistrationName(phasedRegistrationName, PluginModule, eventName);
	      }
	    }
	    return true;
	  } else if (dispatchConfig.registrationName) {
	    publishRegistrationName(dispatchConfig.registrationName, PluginModule, eventName);
	    return true;
	  }
	  return false;
	}
	
	/**
	 * Publishes a registration name that is used to identify dispatched events and
	 * can be used with `EventPluginHub.putListener` to register listeners.
	 *
	 * @param {string} registrationName Registration name to add.
	 * @param {object} PluginModule Plugin publishing the event.
	 * @private
	 */
	function publishRegistrationName(registrationName, PluginModule, eventName) {
	  !!EventPluginRegistry.registrationNameModules[registrationName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginHub: More than one plugin attempted to publish the same ' + 'registration name, `%s`.', registrationName) : invariant(false) : undefined;
	  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
	  EventPluginRegistry.registrationNameDependencies[registrationName] = PluginModule.eventTypes[eventName].dependencies;
	}
	
	/**
	 * Registers plugins so that they can extract and dispatch events.
	 *
	 * @see {EventPluginHub}
	 */
	var EventPluginRegistry = {
	
	  /**
	   * Ordered list of injected plugins.
	   */
	  plugins: [],
	
	  /**
	   * Mapping from event name to dispatch config
	   */
	  eventNameDispatchConfigs: {},
	
	  /**
	   * Mapping from registration name to plugin module
	   */
	  registrationNameModules: {},
	
	  /**
	   * Mapping from registration name to event name
	   */
	  registrationNameDependencies: {},
	
	  /**
	   * Injects an ordering of plugins (by plugin name). This allows the ordering
	   * to be decoupled from injection of the actual plugins so that ordering is
	   * always deterministic regardless of packaging, on-the-fly injection, etc.
	   *
	   * @param {array} InjectedEventPluginOrder
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginOrder}
	   */
	  injectEventPluginOrder: function (InjectedEventPluginOrder) {
	    !!EventPluginOrder ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject event plugin ordering more than ' + 'once. You are likely trying to load more than one copy of React.') : invariant(false) : undefined;
	    // Clone the ordering so it cannot be dynamically mutated.
	    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
	    recomputePluginOrdering();
	  },
	
	  /**
	   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
	   * in the ordering injected by `injectEventPluginOrder`.
	   *
	   * Plugins can be injected as part of page initialization or on-the-fly.
	   *
	   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
	   * @internal
	   * @see {EventPluginHub.injection.injectEventPluginsByName}
	   */
	  injectEventPluginsByName: function (injectedNamesToPlugins) {
	    var isOrderingDirty = false;
	    for (var pluginName in injectedNamesToPlugins) {
	      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
	        continue;
	      }
	      var PluginModule = injectedNamesToPlugins[pluginName];
	      if (!namesToPlugins.hasOwnProperty(pluginName) || namesToPlugins[pluginName] !== PluginModule) {
	        !!namesToPlugins[pluginName] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'EventPluginRegistry: Cannot inject two different event plugins ' + 'using the same name, `%s`.', pluginName) : invariant(false) : undefined;
	        namesToPlugins[pluginName] = PluginModule;
	        isOrderingDirty = true;
	      }
	    }
	    if (isOrderingDirty) {
	      recomputePluginOrdering();
	    }
	  },
	
	  /**
	   * Looks up the plugin for the supplied event.
	   *
	   * @param {object} event A synthetic event.
	   * @return {?object} The plugin that created the supplied event.
	   * @internal
	   */
	  getPluginModuleForEvent: function (event) {
	    var dispatchConfig = event.dispatchConfig;
	    if (dispatchConfig.registrationName) {
	      return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName] || null;
	    }
	    for (var phase in dispatchConfig.phasedRegistrationNames) {
	      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
	        continue;
	      }
	      var PluginModule = EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];
	      if (PluginModule) {
	        return PluginModule;
	      }
	    }
	    return null;
	  },
	
	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _resetEventPlugins: function () {
	    EventPluginOrder = null;
	    for (var pluginName in namesToPlugins) {
	      if (namesToPlugins.hasOwnProperty(pluginName)) {
	        delete namesToPlugins[pluginName];
	      }
	    }
	    EventPluginRegistry.plugins.length = 0;
	
	    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
	    for (var eventName in eventNameDispatchConfigs) {
	      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
	        delete eventNameDispatchConfigs[eventName];
	      }
	    }
	
	    var registrationNameModules = EventPluginRegistry.registrationNameModules;
	    for (var registrationName in registrationNameModules) {
	      if (registrationNameModules.hasOwnProperty(registrationName)) {
	        delete registrationNameModules[registrationName];
	      }
	    }
	  }
	
	};
	
	module.exports = EventPluginRegistry;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 79 */
/*!*****************************************!*\
  !*** ./~/react/lib/EventPluginUtils.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPluginUtils
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var ReactErrorUtils = __webpack_require__(/*! ./ReactErrorUtils */ 80);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * Injected dependencies:
	 */
	
	/**
	 * - `Mount`: [required] Module that can convert between React dom IDs and
	 *   actual node references.
	 */
	var injection = {
	  Mount: null,
	  injectMount: function (InjectedMount) {
	    injection.Mount = InjectedMount;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(InjectedMount && InjectedMount.getNode && InjectedMount.getID, 'EventPluginUtils.injection.injectMount(...): Injected Mount ' + 'module is missing getNode or getID.') : undefined;
	    }
	  }
	};
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	function isEndish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseUp || topLevelType === topLevelTypes.topTouchEnd || topLevelType === topLevelTypes.topTouchCancel;
	}
	
	function isMoveish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseMove || topLevelType === topLevelTypes.topTouchMove;
	}
	function isStartish(topLevelType) {
	  return topLevelType === topLevelTypes.topMouseDown || topLevelType === topLevelTypes.topTouchStart;
	}
	
	var validateEventDispatches;
	if (process.env.NODE_ENV !== 'production') {
	  validateEventDispatches = function (event) {
	    var dispatchListeners = event._dispatchListeners;
	    var dispatchIDs = event._dispatchIDs;
	
	    var listenersIsArr = Array.isArray(dispatchListeners);
	    var idsIsArr = Array.isArray(dispatchIDs);
	    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
	    var listenersLen = listenersIsArr ? dispatchListeners.length : dispatchListeners ? 1 : 0;
	
	    process.env.NODE_ENV !== 'production' ? warning(idsIsArr === listenersIsArr && IDsLen === listenersLen, 'EventPluginUtils: Invalid `event`.') : undefined;
	  };
	}
	
	/**
	 * Dispatch the event to the listener.
	 * @param {SyntheticEvent} event SyntheticEvent to handle
	 * @param {boolean} simulated If the event is simulated (changes exn behavior)
	 * @param {function} listener Application-level callback
	 * @param {string} domID DOM id to pass to the callback.
	 */
	function executeDispatch(event, simulated, listener, domID) {
	  var type = event.type || 'unknown-event';
	  event.currentTarget = injection.Mount.getNode(domID);
	  if (simulated) {
	    ReactErrorUtils.invokeGuardedCallbackWithCatch(type, listener, event, domID);
	  } else {
	    ReactErrorUtils.invokeGuardedCallback(type, listener, event, domID);
	  }
	  event.currentTarget = null;
	}
	
	/**
	 * Standard/simple iteration through an event's collected dispatches.
	 */
	function executeDispatchesInOrder(event, simulated) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      executeDispatch(event, simulated, dispatchListeners[i], dispatchIDs[i]);
	    }
	  } else if (dispatchListeners) {
	    executeDispatch(event, simulated, dispatchListeners, dispatchIDs);
	  }
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	}
	
	/**
	 * Standard/simple iteration through an event's collected dispatches, but stops
	 * at the first dispatch execution returning true, and returns that id.
	 *
	 * @return {?string} id of the first dispatch execution who's listener returns
	 * true, or null if no listener returned true.
	 */
	function executeDispatchesInOrderStopAtTrueImpl(event) {
	  var dispatchListeners = event._dispatchListeners;
	  var dispatchIDs = event._dispatchIDs;
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  if (Array.isArray(dispatchListeners)) {
	    for (var i = 0; i < dispatchListeners.length; i++) {
	      if (event.isPropagationStopped()) {
	        break;
	      }
	      // Listeners and IDs are two parallel arrays that are always in sync.
	      if (dispatchListeners[i](event, dispatchIDs[i])) {
	        return dispatchIDs[i];
	      }
	    }
	  } else if (dispatchListeners) {
	    if (dispatchListeners(event, dispatchIDs)) {
	      return dispatchIDs;
	    }
	  }
	  return null;
	}
	
	/**
	 * @see executeDispatchesInOrderStopAtTrueImpl
	 */
	function executeDispatchesInOrderStopAtTrue(event) {
	  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
	  event._dispatchIDs = null;
	  event._dispatchListeners = null;
	  return ret;
	}
	
	/**
	 * Execution of a "direct" dispatch - there must be at most one dispatch
	 * accumulated on the event or it is considered an error. It doesn't really make
	 * sense for an event with multiple dispatches (bubbled) to keep track of the
	 * return values at each dispatch execution, but it does tend to make sense when
	 * dealing with "direct" dispatches.
	 *
	 * @return {*} The return value of executing the single dispatch.
	 */
	function executeDirectDispatch(event) {
	  if (process.env.NODE_ENV !== 'production') {
	    validateEventDispatches(event);
	  }
	  var dispatchListener = event._dispatchListeners;
	  var dispatchID = event._dispatchIDs;
	  !!Array.isArray(dispatchListener) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'executeDirectDispatch(...): Invalid `event`.') : invariant(false) : undefined;
	  var res = dispatchListener ? dispatchListener(event, dispatchID) : null;
	  event._dispatchListeners = null;
	  event._dispatchIDs = null;
	  return res;
	}
	
	/**
	 * @param {SyntheticEvent} event
	 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
	 */
	function hasDispatches(event) {
	  return !!event._dispatchListeners;
	}
	
	/**
	 * General utilities that are useful in creating custom Event Plugins.
	 */
	var EventPluginUtils = {
	  isEndish: isEndish,
	  isMoveish: isMoveish,
	  isStartish: isStartish,
	
	  executeDirectDispatch: executeDirectDispatch,
	  executeDispatchesInOrder: executeDispatchesInOrder,
	  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
	  hasDispatches: hasDispatches,
	
	  getNode: function (id) {
	    return injection.Mount.getNode(id);
	  },
	  getID: function (node) {
	    return injection.Mount.getID(node);
	  },
	
	  injection: injection
	};
	
	module.exports = EventPluginUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 80 */
/*!****************************************!*\
  !*** ./~/react/lib/ReactErrorUtils.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactErrorUtils
	 * @typechecks
	 */
	
	'use strict';
	
	var caughtError = null;
	
	/**
	 * Call a function while guarding against errors that happens within it.
	 *
	 * @param {?String} name of the guard to use for logging or debugging
	 * @param {Function} func The function to invoke
	 * @param {*} a First argument
	 * @param {*} b Second argument
	 */
	function invokeGuardedCallback(name, func, a, b) {
	  try {
	    return func(a, b);
	  } catch (x) {
	    if (caughtError === null) {
	      caughtError = x;
	    }
	    return undefined;
	  }
	}
	
	var ReactErrorUtils = {
	  invokeGuardedCallback: invokeGuardedCallback,
	
	  /**
	   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
	   * handler are sure to be rethrown by rethrowCaughtError.
	   */
	  invokeGuardedCallbackWithCatch: invokeGuardedCallback,
	
	  /**
	   * During execution of guarded functions we will capture the first error which
	   * we will rethrow to be handled by the top level error handler.
	   */
	  rethrowCaughtError: function () {
	    if (caughtError) {
	      var error = caughtError;
	      caughtError = null;
	      throw error;
	    }
	  }
	};
	
	if (process.env.NODE_ENV !== 'production') {
	  /**
	   * To help development we can get better devtools integration by simulating a
	   * real browser event.
	   */
	  if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function' && typeof document !== 'undefined' && typeof document.createEvent === 'function') {
	    var fakeNode = document.createElement('react');
	    ReactErrorUtils.invokeGuardedCallback = function (name, func, a, b) {
	      var boundFunc = func.bind(null, a, b);
	      var evtType = 'react-' + name;
	      fakeNode.addEventListener(evtType, boundFunc, false);
	      var evt = document.createEvent('Event');
	      evt.initEvent(evtType, false, false);
	      fakeNode.dispatchEvent(evt);
	      fakeNode.removeEventListener(evtType, boundFunc, false);
	    };
	  }
	}
	
	module.exports = ReactErrorUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 81 */
/*!***************************************!*\
  !*** ./~/react/lib/accumulateInto.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule accumulateInto
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 *
	 * Accumulates items that must not be null or undefined into the first one. This
	 * is used to conserve memory by avoiding array allocations, and thus sacrifices
	 * API cleanness. Since `current` can be null before being passed in and not
	 * null after this function, make sure to assign it back to `current`:
	 *
	 * `a = accumulateInto(a, b);`
	 *
	 * This API should be sparingly used. Try `accumulate` for something cleaner.
	 *
	 * @return {*|array<*>} An accumulation of items.
	 */
	
	function accumulateInto(current, next) {
	  !(next != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'accumulateInto(...): Accumulated items must not be null or undefined.') : invariant(false) : undefined;
	  if (current == null) {
	    return next;
	  }
	
	  // Both are not empty. Warning: Never call x.concat(y) when you are not
	  // certain that x is an Array (x could be a string with concat method).
	  var currentIsArray = Array.isArray(current);
	  var nextIsArray = Array.isArray(next);
	
	  if (currentIsArray && nextIsArray) {
	    current.push.apply(current, next);
	    return current;
	  }
	
	  if (currentIsArray) {
	    current.push(next);
	    return current;
	  }
	
	  if (nextIsArray) {
	    // A bit too dangerous to mutate `next`.
	    return [current].concat(next);
	  }
	
	  return [current, next];
	}
	
	module.exports = accumulateInto;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 82 */
/*!*******************************************!*\
  !*** ./~/react/lib/forEachAccumulated.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule forEachAccumulated
	 */
	
	'use strict';
	
	/**
	 * @param {array} arr an "accumulation" of items which is either an Array or
	 * a single item. Useful when paired with the `accumulate` module. This is a
	 * simple utility that allows us to reason about a collection of items, but
	 * handling the case when there is exactly one item (and we do not need to
	 * allocate an array).
	 */
	var forEachAccumulated = function (arr, cb, scope) {
	  if (Array.isArray(arr)) {
	    arr.forEach(cb, scope);
	  } else if (arr) {
	    cb.call(scope, arr);
	  }
	};
	
	module.exports = forEachAccumulated;

/***/ },
/* 83 */
/*!***********************************************!*\
  !*** ./~/react/lib/ReactEventEmitterMixin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventEmitterMixin
	 */
	
	'use strict';
	
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 77);
	
	function runEventQueueInBatch(events) {
	  EventPluginHub.enqueueEvents(events);
	  EventPluginHub.processEventQueue(false);
	}
	
	var ReactEventEmitterMixin = {
	
	  /**
	   * Streams a fired top-level event to `EventPluginHub` where plugins have the
	   * opportunity to create `ReactEvent`s to be dispatched.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {object} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native environment event.
	   */
	  handleTopLevel: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var events = EventPluginHub.extractEvents(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget);
	    runEventQueueInBatch(events);
	  }
	};
	
	module.exports = ReactEventEmitterMixin;

/***/ },
/* 84 */
/*!****************************************!*\
  !*** ./~/react/lib/ViewportMetrics.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ViewportMetrics
	 */
	
	'use strict';
	
	var ViewportMetrics = {
	
	  currentScrollLeft: 0,
	
	  currentScrollTop: 0,
	
	  refreshScrollValues: function (scrollPosition) {
	    ViewportMetrics.currentScrollLeft = scrollPosition.x;
	    ViewportMetrics.currentScrollTop = scrollPosition.y;
	  }
	
	};
	
	module.exports = ViewportMetrics;

/***/ },
/* 85 */
/*!**************************************!*\
  !*** ./~/react/lib/Object.assign.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Object.assign
	 */
	
	// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
	
	'use strict';
	
	function assign(target, sources) {
	  if (target == null) {
	    throw new TypeError('Object.assign target cannot be null or undefined');
	  }
	
	  var to = Object(target);
	  var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
	    var nextSource = arguments[nextIndex];
	    if (nextSource == null) {
	      continue;
	    }
	
	    var from = Object(nextSource);
	
	    // We don't currently support accessors nor proxies. Therefore this
	    // copy cannot throw. If we ever supported this then we must handle
	    // exceptions and side-effects. We don't support symbols so they won't
	    // be transferred.
	
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	  }
	
	  return to;
	}
	
	module.exports = assign;

/***/ },
/* 86 */
/*!*****************************************!*\
  !*** ./~/react/lib/isEventSupported.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isEventSupported
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	
	var useHasFeature;
	if (ExecutionEnvironment.canUseDOM) {
	  useHasFeature = document.implementation && document.implementation.hasFeature &&
	  // always returns true in newer browsers as per the standard.
	  // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	  document.implementation.hasFeature('', '') !== true;
	}
	
	/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
	function isEventSupported(eventNameSuffix, capture) {
	  if (!ExecutionEnvironment.canUseDOM || capture && !('addEventListener' in document)) {
	    return false;
	  }
	
	  var eventName = 'on' + eventNameSuffix;
	  var isSupported = (eventName in document);
	
	  if (!isSupported) {
	    var element = document.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }
	
	  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
	  }
	
	  return isSupported;
	}
	
	module.exports = isEventSupported;

/***/ },
/* 87 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactDOMFeatureFlags.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */
	
	'use strict';
	
	var ReactDOMFeatureFlags = {
	  useCreateElement: false
	};
	
	module.exports = ReactDOMFeatureFlags;

/***/ },
/* 88 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactElement.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElement
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ 89);
	
	// The Symbol used to tag the ReactElement type. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
	
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	
	/**
	 * Base constructor for all React elements. This is only used to make this
	 * work with a dynamic instanceof check. Nothing should live on this prototype.
	 *
	 * @param {*} type
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @param {*} owner
	 * @param {*} props
	 * @internal
	 */
	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allow us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	
	  if (process.env.NODE_ENV !== 'production') {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {};
	
	    // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.
	    if (canDefineProperty) {
	      Object.defineProperty(element._store, 'validated', {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: false
	      });
	      // self and source are DEV only properties.
	      Object.defineProperty(element, '_self', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: self
	      });
	      // Two elements created in two different places should be considered
	      // equal for testing purposes and therefore we hide it from enumeration.
	      Object.defineProperty(element, '_source', {
	        configurable: false,
	        enumerable: false,
	        writable: false,
	        value: source
	      });
	    } else {
	      element._store.validated = false;
	      element._self = self;
	      element._source = source;
	    }
	    Object.freeze(element.props);
	    Object.freeze(element);
	  }
	
	  return element;
	};
	
	ReactElement.createElement = function (type, config, children) {
	  var propName;
	
	  // Reserved names are extracted
	  var props = {};
	
	  var key = null;
	  var ref = null;
	  var self = null;
	  var source = null;
	
	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : '' + config.key;
	    self = config.__self === undefined ? null : config.__self;
	    source = config.__source === undefined ? null : config.__source;
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (typeof props[propName] === 'undefined') {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }
	
	  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	};
	
	ReactElement.createFactory = function (type) {
	  var factory = ReactElement.createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  // Legacy hook TODO: Warn if this is accessed
	  factory.type = type;
	  return factory;
	};
	
	ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
	  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
	
	  return newElement;
	};
	
	ReactElement.cloneAndReplaceProps = function (oldElement, newProps) {
	  var newElement = ReactElement(oldElement.type, oldElement.key, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, newProps);
	
	  if (process.env.NODE_ENV !== 'production') {
	    // If the key on the original is valid, then the clone is valid
	    newElement._store.validated = oldElement._store.validated;
	  }
	
	  return newElement;
	};
	
	ReactElement.cloneElement = function (element, config, children) {
	  var propName;
	
	  // Original props are copied
	  var props = assign({}, element.props);
	
	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;
	  // Self is preserved since the owner is preserved.
	  var self = element._self;
	  // Source is preserved since cloneElement is unlikely to be targeted by a
	  // transpiler, and the original source is probably a better indicator of the
	  // true owner.
	  var source = element._source;
	
	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;
	
	  if (config != null) {
	    if (config.ref !== undefined) {
	      // Silently steal the ref from the parent.
	      ref = config.ref;
	      owner = ReactCurrentOwner.current;
	    }
	    if (config.key !== undefined) {
	      key = '' + config.key;
	    }
	    // Remaining properties override existing props
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }
	
	  // Children can be more than one argument, and those are transferred onto
	  // the newly allocated props object.
	  var childrenLength = arguments.length - 2;
	  if (childrenLength === 1) {
	    props.children = children;
	  } else if (childrenLength > 1) {
	    var childArray = Array(childrenLength);
	    for (var i = 0; i < childrenLength; i++) {
	      childArray[i] = arguments[i + 2];
	    }
	    props.children = childArray;
	  }
	
	  return ReactElement(element.type, key, ref, self, source, owner, props);
	};
	
	/**
	 * @param {?object} object
	 * @return {boolean} True if `object` is a valid component.
	 * @final
	 */
	ReactElement.isValidElement = function (object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	};
	
	module.exports = ReactElement;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 89 */
/*!******************************************!*\
  !*** ./~/react/lib/canDefineProperty.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule canDefineProperty
	 */
	
	'use strict';
	
	var canDefineProperty = false;
	if (process.env.NODE_ENV !== 'production') {
	  try {
	    Object.defineProperty({}, 'x', { get: function () {} });
	    canDefineProperty = true;
	  } catch (x) {
	    // IE will fail on defineProperty
	  }
	}
	
	module.exports = canDefineProperty;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 90 */
/*!****************************************************!*\
  !*** ./~/react/lib/ReactEmptyComponentRegistry.js ***!
  \****************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponentRegistry
	 */
	
	'use strict';
	
	// This registry keeps track of the React IDs of the components that rendered to
	// `null` (in reality a placeholder such as `noscript`)
	var nullComponentIDsRegistry = {};
	
	/**
	 * @param {string} id Component's `_rootNodeID`.
	 * @return {boolean} True if the component is rendered to null.
	 */
	function isNullComponentID(id) {
	  return !!nullComponentIDsRegistry[id];
	}
	
	/**
	 * Mark the component as having rendered to null.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function registerNullComponentID(id) {
	  nullComponentIDsRegistry[id] = true;
	}
	
	/**
	 * Unmark the component as having rendered to null: it renders to something now.
	 * @param {string} id Component's `_rootNodeID`.
	 */
	function deregisterNullComponentID(id) {
	  delete nullComponentIDsRegistry[id];
	}
	
	var ReactEmptyComponentRegistry = {
	  isNullComponentID: isNullComponentID,
	  registerNullComponentID: registerNullComponentID,
	  deregisterNullComponentID: deregisterNullComponentID
	};
	
	module.exports = ReactEmptyComponentRegistry;

/***/ },
/* 91 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactInstanceHandles.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceHandles
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactRootIndex = __webpack_require__(/*! ./ReactRootIndex */ 92);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	var SEPARATOR = '.';
	var SEPARATOR_LENGTH = SEPARATOR.length;
	
	/**
	 * Maximum depth of traversals before we consider the possibility of a bad ID.
	 */
	var MAX_TREE_DEPTH = 10000;
	
	/**
	 * Creates a DOM ID prefix to use when mounting React components.
	 *
	 * @param {number} index A unique integer
	 * @return {string} React root ID.
	 * @internal
	 */
	function getReactRootIDString(index) {
	  return SEPARATOR + index.toString(36);
	}
	
	/**
	 * Checks if a character in the supplied ID is a separator or the end.
	 *
	 * @param {string} id A React DOM ID.
	 * @param {number} index Index of the character to check.
	 * @return {boolean} True if the character is a separator or end of the ID.
	 * @private
	 */
	function isBoundary(id, index) {
	  return id.charAt(index) === SEPARATOR || index === id.length;
	}
	
	/**
	 * Checks if the supplied string is a valid React DOM ID.
	 *
	 * @param {string} id A React DOM ID, maybe.
	 * @return {boolean} True if the string is a valid React DOM ID.
	 * @private
	 */
	function isValidID(id) {
	  return id === '' || id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR;
	}
	
	/**
	 * Checks if the first ID is an ancestor of or equal to the second ID.
	 *
	 * @param {string} ancestorID
	 * @param {string} descendantID
	 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
	 * @internal
	 */
	function isAncestorIDOf(ancestorID, descendantID) {
	  return descendantID.indexOf(ancestorID) === 0 && isBoundary(descendantID, ancestorID.length);
	}
	
	/**
	 * Gets the parent ID of the supplied React DOM ID, `id`.
	 *
	 * @param {string} id ID of a component.
	 * @return {string} ID of the parent, or an empty string.
	 * @private
	 */
	function getParentID(id) {
	  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
	}
	
	/**
	 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
	 * supplied `destinationID`. If they are equal, the ID is returned.
	 *
	 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
	 * @param {string} destinationID ID of the destination node.
	 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
	 * @private
	 */
	function getNextDescendantID(ancestorID, destinationID) {
	  !(isValidID(ancestorID) && isValidID(destinationID)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(%s, %s): Received an invalid React DOM ID.', ancestorID, destinationID) : invariant(false) : undefined;
	  !isAncestorIDOf(ancestorID, destinationID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getNextDescendantID(...): React has made an invalid assumption about ' + 'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.', ancestorID, destinationID) : invariant(false) : undefined;
	  if (ancestorID === destinationID) {
	    return ancestorID;
	  }
	  // Skip over the ancestor and the immediate separator. Traverse until we hit
	  // another separator or we reach the end of `destinationID`.
	  var start = ancestorID.length + SEPARATOR_LENGTH;
	  var i;
	  for (i = start; i < destinationID.length; i++) {
	    if (isBoundary(destinationID, i)) {
	      break;
	    }
	  }
	  return destinationID.substr(0, i);
	}
	
	/**
	 * Gets the nearest common ancestor ID of two IDs.
	 *
	 * Using this ID scheme, the nearest common ancestor ID is the longest common
	 * prefix of the two IDs that immediately preceded a "marker" in both strings.
	 *
	 * @param {string} oneID
	 * @param {string} twoID
	 * @return {string} Nearest common ancestor ID, or the empty string if none.
	 * @private
	 */
	function getFirstCommonAncestorID(oneID, twoID) {
	  var minLength = Math.min(oneID.length, twoID.length);
	  if (minLength === 0) {
	    return '';
	  }
	  var lastCommonMarkerIndex = 0;
	  // Use `<=` to traverse until the "EOL" of the shorter string.
	  for (var i = 0; i <= minLength; i++) {
	    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
	      lastCommonMarkerIndex = i;
	    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
	      break;
	    }
	  }
	  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
	  !isValidID(longestCommonID) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s', oneID, twoID, longestCommonID) : invariant(false) : undefined;
	  return longestCommonID;
	}
	
	/**
	 * Traverses the parent path between two IDs (either up or down). The IDs must
	 * not be the same, and there must exist a parent path between them. If the
	 * callback returns `false`, traversal is stopped.
	 *
	 * @param {?string} start ID at which to start traversal.
	 * @param {?string} stop ID at which to end traversal.
	 * @param {function} cb Callback to invoke each ID with.
	 * @param {*} arg Argument to invoke the callback with.
	 * @param {?boolean} skipFirst Whether or not to skip the first node.
	 * @param {?boolean} skipLast Whether or not to skip the last node.
	 * @private
	 */
	function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
	  start = start || '';
	  stop = stop || '';
	  !(start !== stop) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.', start) : invariant(false) : undefined;
	  var traverseUp = isAncestorIDOf(stop, start);
	  !(traverseUp || isAncestorIDOf(start, stop)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' + 'not have a parent path.', start, stop) : invariant(false) : undefined;
	  // Traverse from `start` to `stop` one depth at a time.
	  var depth = 0;
	  var traverse = traverseUp ? getParentID : getNextDescendantID;
	  for (var id = start;; /* until break */id = traverse(id, stop)) {
	    var ret;
	    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
	      ret = cb(id, traverseUp, arg);
	    }
	    if (ret === false || id === stop) {
	      // Only break //after// visiting `stop`.
	      break;
	    }
	    !(depth++ < MAX_TREE_DEPTH) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' + 'traversing the React DOM ID tree. This may be due to malformed IDs: %s', start, stop, id) : invariant(false) : undefined;
	  }
	}
	
	/**
	 * Manages the IDs assigned to DOM representations of React components. This
	 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
	 * order to simulate events).
	 *
	 * @internal
	 */
	var ReactInstanceHandles = {
	
	  /**
	   * Constructs a React root ID
	   * @return {string} A React root ID.
	   */
	  createReactRootID: function () {
	    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
	  },
	
	  /**
	   * Constructs a React ID by joining a root ID with a name.
	   *
	   * @param {string} rootID Root ID of a parent component.
	   * @param {string} name A component's name (as flattened children).
	   * @return {string} A React ID.
	   * @internal
	   */
	  createReactID: function (rootID, name) {
	    return rootID + name;
	  },
	
	  /**
	   * Gets the DOM ID of the React component that is the root of the tree that
	   * contains the React component with the supplied DOM ID.
	   *
	   * @param {string} id DOM ID of a React component.
	   * @return {?string} DOM ID of the React component that is the root.
	   * @internal
	   */
	  getReactRootIDFromNodeID: function (id) {
	    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
	      var index = id.indexOf(SEPARATOR, 1);
	      return index > -1 ? id.substr(0, index) : id;
	    }
	    return null;
	  },
	
	  /**
	   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
	   * should would receive a `mouseEnter` or `mouseLeave` event.
	   *
	   * NOTE: Does not invoke the callback on the nearest common ancestor because
	   * nothing "entered" or "left" that element.
	   *
	   * @param {string} leaveID ID being left.
	   * @param {string} enterID ID being entered.
	   * @param {function} cb Callback to invoke on each entered/left ID.
	   * @param {*} upArg Argument to invoke the callback with on left IDs.
	   * @param {*} downArg Argument to invoke the callback with on entered IDs.
	   * @internal
	   */
	  traverseEnterLeave: function (leaveID, enterID, cb, upArg, downArg) {
	    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
	    if (ancestorID !== leaveID) {
	      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
	    }
	    if (ancestorID !== enterID) {
	      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
	    }
	  },
	
	  /**
	   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseTwoPhase: function (targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, false);
	      traverseParentPath(targetID, '', cb, arg, false, true);
	    }
	  },
	
	  /**
	   * Same as `traverseTwoPhase` but skips the `targetID`.
	   */
	  traverseTwoPhaseSkipTarget: function (targetID, cb, arg) {
	    if (targetID) {
	      traverseParentPath('', targetID, cb, arg, true, true);
	      traverseParentPath(targetID, '', cb, arg, true, true);
	    }
	  },
	
	  /**
	   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
	   * example, passing `.0.$row-0.1` would result in `cb` getting called
	   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
	   *
	   * NOTE: This traversal happens on IDs without touching the DOM.
	   *
	   * @param {string} targetID ID of the target node.
	   * @param {function} cb Callback to invoke.
	   * @param {*} arg Argument to invoke the callback with.
	   * @internal
	   */
	  traverseAncestors: function (targetID, cb, arg) {
	    traverseParentPath('', targetID, cb, arg, true, false);
	  },
	
	  getFirstCommonAncestorID: getFirstCommonAncestorID,
	
	  /**
	   * Exposed for unit testing.
	   * @private
	   */
	  _getNextDescendantID: getNextDescendantID,
	
	  isAncestorIDOf: isAncestorIDOf,
	
	  SEPARATOR: SEPARATOR
	
	};
	
	module.exports = ReactInstanceHandles;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 92 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactRootIndex.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRootIndex
	 * @typechecks
	 */
	
	'use strict';
	
	var ReactRootIndexInjection = {
	  /**
	   * @param {function} _createReactRootIndex
	   */
	  injectCreateReactRootIndex: function (_createReactRootIndex) {
	    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
	  }
	};
	
	var ReactRootIndex = {
	  createReactRootIndex: null,
	  injection: ReactRootIndexInjection
	};
	
	module.exports = ReactRootIndex;

/***/ },
/* 93 */
/*!*****************************************!*\
  !*** ./~/react/lib/ReactInstanceMap.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInstanceMap
	 */
	
	'use strict';
	
	/**
	 * `ReactInstanceMap` maintains a mapping from a public facing stateful
	 * instance (key) and the internal representation (value). This allows public
	 * methods to accept the user facing instance as an argument and map them back
	 * to internal methods.
	 */
	
	// TODO: Replace this with ES6: var ReactInstanceMap = new Map();
	var ReactInstanceMap = {
	
	  /**
	   * This API should be called `delete` but we'd have to make sure to always
	   * transform these to strings for IE support. When this transform is fully
	   * supported we can rename it.
	   */
	  remove: function (key) {
	    key._reactInternalInstance = undefined;
	  },
	
	  get: function (key) {
	    return key._reactInternalInstance;
	  },
	
	  has: function (key) {
	    return key._reactInternalInstance !== undefined;
	  },
	
	  set: function (key, value) {
	    key._reactInternalInstance = value;
	  }
	
	};
	
	module.exports = ReactInstanceMap;

/***/ },
/* 94 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactMarkupChecksum.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */
	
	'use strict';
	
	var adler32 = __webpack_require__(/*! ./adler32 */ 95);
	
	var TAG_END = /\/?>/;
	
	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',
	
	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function (markup) {
	    var checksum = adler32(markup);
	
	    // Add checksum (handle both parent tags and self-closing tags)
	    return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
	  },
	
	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function (markup, element) {
	    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};
	
	module.exports = ReactMarkupChecksum;

/***/ },
/* 95 */
/*!********************************!*\
  !*** ./~/react/lib/adler32.js ***!
  \********************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 */
	
	'use strict';
	
	var MOD = 65521;
	
	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    for (; i < Math.min(i + 4096, m); i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}
	
	module.exports = adler32;

/***/ },
/* 96 */
/*!****************************************!*\
  !*** ./~/react/lib/ReactReconciler.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconciler
	 */
	
	'use strict';
	
	var ReactRef = __webpack_require__(/*! ./ReactRef */ 97);
	
	/**
	 * Helper to call ReactRef.attachRefs with this composite component, split out
	 * to avoid allocations in the transaction mount-ready queue.
	 */
	function attachRefs() {
	  ReactRef.attachRefs(this, this._currentElement);
	}
	
	var ReactReconciler = {
	
	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function (internalInstance, rootID, transaction, context) {
	    var markup = internalInstance.mountComponent(rootID, transaction, context);
	    if (internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	    return markup;
	  },
	
	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function (internalInstance) {
	    ReactRef.detachRefs(internalInstance, internalInstance._currentElement);
	    internalInstance.unmountComponent();
	  },
	
	  /**
	   * Update a component using a new element.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @internal
	   */
	  receiveComponent: function (internalInstance, nextElement, transaction, context) {
	    var prevElement = internalInstance._currentElement;
	
	    if (nextElement === prevElement && context === internalInstance._context) {
	      // Since elements are immutable after the owner is rendered,
	      // we can do a cheap identity compare here to determine if this is a
	      // superfluous reconcile. It's possible for state to be mutable but such
	      // change should trigger an update of the owner which would recreate
	      // the element. We explicitly check for the existence of an owner since
	      // it's possible for an element created outside a composite to be
	      // deeply mutated and reused.
	
	      // TODO: Bailing out early is just a perf optimization right?
	      // TODO: Removing the return statement should affect correctness?
	      return;
	    }
	
	    var refsChanged = ReactRef.shouldUpdateRefs(prevElement, nextElement);
	
	    if (refsChanged) {
	      ReactRef.detachRefs(internalInstance, prevElement);
	    }
	
	    internalInstance.receiveComponent(nextElement, transaction, context);
	
	    if (refsChanged && internalInstance._currentElement && internalInstance._currentElement.ref != null) {
	      transaction.getReactMountReady().enqueue(attachRefs, internalInstance);
	    }
	  },
	
	  /**
	   * Flush any dirty changes in a component.
	   *
	   * @param {ReactComponent} internalInstance
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function (internalInstance, transaction) {
	    internalInstance.performUpdateIfNecessary(transaction);
	  }
	
	};
	
	module.exports = ReactReconciler;

/***/ },
/* 97 */
/*!*********************************!*\
  !*** ./~/react/lib/ReactRef.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactRef
	 */
	
	'use strict';
	
	var ReactOwner = __webpack_require__(/*! ./ReactOwner */ 98);
	
	var ReactRef = {};
	
	function attachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(component.getPublicInstance());
	  } else {
	    // Legacy ref
	    ReactOwner.addComponentAsRefTo(component, ref, owner);
	  }
	}
	
	function detachRef(ref, component, owner) {
	  if (typeof ref === 'function') {
	    ref(null);
	  } else {
	    // Legacy ref
	    ReactOwner.removeComponentAsRefFrom(component, ref, owner);
	  }
	}
	
	ReactRef.attachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    attachRef(ref, instance, element._owner);
	  }
	};
	
	ReactRef.shouldUpdateRefs = function (prevElement, nextElement) {
	  // If either the owner or a `ref` has changed, make sure the newest owner
	  // has stored a reference to `this`, and the previous owner (if different)
	  // has forgotten the reference to `this`. We use the element instead
	  // of the public this.props because the post processing cannot determine
	  // a ref. The ref conceptually lives on the element.
	
	  // TODO: Should this even be possible? The owner cannot change because
	  // it's forbidden by shouldUpdateReactComponent. The ref can change
	  // if you swap the keys of but not the refs. Reconsider where this check
	  // is made. It probably belongs where the key checking and
	  // instantiateReactComponent is done.
	
	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;
	
	  return(
	    // This has a few false positives w/r/t empty components.
	    prevEmpty || nextEmpty || nextElement._owner !== prevElement._owner || nextElement.ref !== prevElement.ref
	  );
	};
	
	ReactRef.detachRefs = function (instance, element) {
	  if (element === null || element === false) {
	    return;
	  }
	  var ref = element.ref;
	  if (ref != null) {
	    detachRef(ref, instance, element._owner);
	  }
	};
	
	module.exports = ReactRef;

/***/ },
/* 98 */
/*!***********************************!*\
  !*** ./~/react/lib/ReactOwner.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactOwner
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * ReactOwners are capable of storing references to owned components.
	 *
	 * All components are capable of //being// referenced by owner components, but
	 * only ReactOwner components are capable of //referencing// owned components.
	 * The named reference is known as a "ref".
	 *
	 * Refs are available when mounted and updated during reconciliation.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return (
	 *         <div onClick={this.handleClick}>
	 *           <CustomComponent ref="custom" />
	 *         </div>
	 *       );
	 *     },
	 *     handleClick: function() {
	 *       this.refs.custom.handleClick();
	 *     },
	 *     componentDidMount: function() {
	 *       this.refs.custom.initialize();
	 *     }
	 *   });
	 *
	 * Refs should rarely be used. When refs are used, they should only be done to
	 * control data that is not handled by React's data flow.
	 *
	 * @class ReactOwner
	 */
	var ReactOwner = {
	
	  /**
	   * @param {?object} object
	   * @return {boolean} True if `object` is a valid owner.
	   * @final
	   */
	  isValidOwner: function (object) {
	    return !!(object && typeof object.attachRef === 'function' && typeof object.detachRef === 'function');
	  },
	
	  /**
	   * Adds a component by ref to an owner component.
	   *
	   * @param {ReactComponent} component Component to reference.
	   * @param {string} ref Name by which to refer to the component.
	   * @param {ReactOwner} owner Component on which to record the ref.
	   * @final
	   * @internal
	   */
	  addComponentAsRefTo: function (component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might ' + 'be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    owner.attachRef(ref, component);
	  },
	
	  /**
	   * Removes a component by ref from an owner component.
	   *
	   * @param {ReactComponent} component Component to dereference.
	   * @param {string} ref Name of the ref to remove.
	   * @param {ReactOwner} owner Component on which the ref is recorded.
	   * @final
	   * @internal
	   */
	  removeComponentAsRefFrom: function (component, ref, owner) {
	    !ReactOwner.isValidOwner(owner) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might ' + 'be removing a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of React loaded ' + '(details: https://fb.me/react-refs-must-have-owner).') : invariant(false) : undefined;
	    // Check that `component` is still the current ref because we do not want to
	    // detach the ref if another component stole it.
	    if (owner.getPublicInstance().refs[ref] === component.getPublicInstance()) {
	      owner.detachRef(ref);
	    }
	  }
	
	};
	
	module.exports = ReactOwner;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 99 */
/*!*****************************************!*\
  !*** ./~/react/lib/ReactUpdateQueue.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdateQueue
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactInstanceMap = __webpack_require__(/*! ./ReactInstanceMap */ 93);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	function enqueueUpdate(internalInstance) {
	  ReactUpdates.enqueueUpdate(internalInstance);
	}
	
	function getInternalInstanceReadyForUpdate(publicInstance, callerName) {
	  var internalInstance = ReactInstanceMap.get(publicInstance);
	  if (!internalInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      // Only warn when we have a callerName. Otherwise we should be silent.
	      // We're probably calling from enqueueCallback. We don't want to warn
	      // there because we already warned for the corresponding lifecycle method.
	      process.env.NODE_ENV !== 'production' ? warning(!callerName, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor.displayName) : undefined;
	    }
	    return null;
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '%s(...): Cannot update during an existing state transition ' + '(such as within `render`). Render methods should be a pure function ' + 'of props and state.', callerName) : undefined;
	  }
	
	  return internalInstance;
	}
	
	/**
	 * ReactUpdateQueue allows for state updates to be scheduled into a later
	 * reconciliation step.
	 */
	var ReactUpdateQueue = {
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    if (process.env.NODE_ENV !== 'production') {
	      var owner = ReactCurrentOwner.current;
	      if (owner !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing isMounted inside its render() function. ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	        owner._warnedAboutRefsInRender = true;
	      }
	    }
	    var internalInstance = ReactInstanceMap.get(publicInstance);
	    if (internalInstance) {
	      // During componentWillMount and render this will still be null but after
	      // that will always render to something. At least for now. So we can use
	      // this hack.
	      return !!internalInstance._renderedComponent;
	    } else {
	      return false;
	    }
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance);
	
	    // Previously we would throw an error if we didn't have an internal
	    // instance. Since we want to make it a no-op instead, we mirror the same
	    // behavior we have in other enqueue* methods.
	    // We also need to ignore callbacks in componentWillMount. See
	    // enqueueUpdates.
	    if (!internalInstance) {
	      return null;
	    }
	
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    // TODO: The callback here is ignored when setState is called from
	    // componentWillMount. Either fix it or disallow doing so completely in
	    // favor of getInitialState. Alternatively, we can disallow
	    // componentWillMount during server-side rendering.
	    enqueueUpdate(internalInstance);
	  },
	
	  enqueueCallbackInternal: function (internalInstance, callback) {
	    !(typeof callback === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'enqueueCallback(...): You called `setProps`, `replaceProps`, ' + '`setState`, `replaceState`, or `forceUpdate` with a callback that ' + 'isn\'t callable.') : invariant(false) : undefined;
	    if (internalInstance._pendingCallbacks) {
	      internalInstance._pendingCallbacks.push(callback);
	    } else {
	      internalInstance._pendingCallbacks = [callback];
	    }
	    enqueueUpdate(internalInstance);
	  },
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'forceUpdate');
	
	    if (!internalInstance) {
	      return;
	    }
	
	    internalInstance._pendingForceUpdate = true;
	
	    enqueueUpdate(internalInstance);
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceState');
	
	    if (!internalInstance) {
	      return;
	    }
	
	    internalInstance._pendingStateQueue = [completeState];
	    internalInstance._pendingReplaceState = true;
	
	    enqueueUpdate(internalInstance);
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setState');
	
	    if (!internalInstance) {
	      return;
	    }
	
	    var queue = internalInstance._pendingStateQueue || (internalInstance._pendingStateQueue = []);
	    queue.push(partialState);
	
	    enqueueUpdate(internalInstance);
	  },
	
	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function (publicInstance, partialProps) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'setProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueSetPropsInternal(internalInstance, partialProps);
	  },
	
	  enqueueSetPropsInternal: function (internalInstance, partialProps) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setProps(...): You called `setProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;
	
	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    var props = assign({}, element.props, partialProps);
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));
	
	    enqueueUpdate(topLevelWrapper);
	  },
	
	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function (publicInstance, props) {
	    var internalInstance = getInternalInstanceReadyForUpdate(publicInstance, 'replaceProps');
	    if (!internalInstance) {
	      return;
	    }
	    ReactUpdateQueue.enqueueReplacePropsInternal(internalInstance, props);
	  },
	
	  enqueueReplacePropsInternal: function (internalInstance, props) {
	    var topLevelWrapper = internalInstance._topLevelWrapper;
	    !topLevelWrapper ? process.env.NODE_ENV !== 'production' ? invariant(false, 'replaceProps(...): You called `replaceProps` on a ' + 'component with a parent. This is an anti-pattern since props will ' + 'get reactively updated when rendered. Instead, change the owner\'s ' + '`render` method to pass the correct value as props to the component ' + 'where it is created.') : invariant(false) : undefined;
	
	    // Merge with the pending element if it exists, otherwise with existing
	    // element props.
	    var wrapElement = topLevelWrapper._pendingElement || topLevelWrapper._currentElement;
	    var element = wrapElement.props;
	    topLevelWrapper._pendingElement = ReactElement.cloneAndReplaceProps(wrapElement, ReactElement.cloneAndReplaceProps(element, props));
	
	    enqueueUpdate(topLevelWrapper);
	  },
	
	  enqueueElementInternal: function (internalInstance, newElement) {
	    internalInstance._pendingElement = newElement;
	    enqueueUpdate(internalInstance);
	  }
	
	};
	
	module.exports = ReactUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 100 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactUpdates.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactUpdates
	 */
	
	'use strict';
	
	var CallbackQueue = __webpack_require__(/*! ./CallbackQueue */ 101);
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	var Transaction = __webpack_require__(/*! ./Transaction */ 103);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	var dirtyComponents = [];
	var asapCallbackQueue = CallbackQueue.getPooled();
	var asapEnqueued = false;
	
	var batchingStrategy = null;
	
	function ensureInjected() {
	  !(ReactUpdates.ReactReconcileTransaction && batchingStrategy) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must inject a reconcile transaction class and batching ' + 'strategy') : invariant(false) : undefined;
	}
	
	var NESTED_UPDATES = {
	  initialize: function () {
	    this.dirtyComponentsLength = dirtyComponents.length;
	  },
	  close: function () {
	    if (this.dirtyComponentsLength !== dirtyComponents.length) {
	      // Additional updates were enqueued by componentDidUpdate handlers or
	      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
	      // these new updates so that if A's componentDidUpdate calls setState on
	      // B, B will update before the callback A's updater provided when calling
	      // setState.
	      dirtyComponents.splice(0, this.dirtyComponentsLength);
	      flushBatchedUpdates();
	    } else {
	      dirtyComponents.length = 0;
	    }
	  }
	};
	
	var UPDATE_QUEUEING = {
	  initialize: function () {
	    this.callbackQueue.reset();
	  },
	  close: function () {
	    this.callbackQueue.notifyAll();
	  }
	};
	
	var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];
	
	function ReactUpdatesFlushTransaction() {
	  this.reinitializeTransaction();
	  this.dirtyComponentsLength = null;
	  this.callbackQueue = CallbackQueue.getPooled();
	  this.reconcileTransaction = ReactUpdates.ReactReconcileTransaction.getPooled( /* forceHTML */false);
	}
	
	assign(ReactUpdatesFlushTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  destructor: function () {
	    this.dirtyComponentsLength = null;
	    CallbackQueue.release(this.callbackQueue);
	    this.callbackQueue = null;
	    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
	    this.reconcileTransaction = null;
	  },
	
	  perform: function (method, scope, a) {
	    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
	    // with this transaction's wrappers around it.
	    return Transaction.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, method, scope, a);
	  }
	});
	
	PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);
	
	function batchedUpdates(callback, a, b, c, d, e) {
	  ensureInjected();
	  batchingStrategy.batchedUpdates(callback, a, b, c, d, e);
	}
	
	/**
	 * Array comparator for ReactComponents by mount ordering.
	 *
	 * @param {ReactComponent} c1 first component you're comparing
	 * @param {ReactComponent} c2 second component you're comparing
	 * @return {number} Return value usable by Array.prototype.sort().
	 */
	function mountOrderComparator(c1, c2) {
	  return c1._mountOrder - c2._mountOrder;
	}
	
	function runBatchedUpdates(transaction) {
	  var len = transaction.dirtyComponentsLength;
	  !(len === dirtyComponents.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected flush transaction\'s stored dirty-components length (%s) to ' + 'match dirty-components array length (%s).', len, dirtyComponents.length) : invariant(false) : undefined;
	
	  // Since reconciling a component higher in the owner hierarchy usually (not
	  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
	  // them before their children by sorting the array.
	  dirtyComponents.sort(mountOrderComparator);
	
	  for (var i = 0; i < len; i++) {
	    // If a component is unmounted before pending changes apply, it will still
	    // be here, but we assume that it has cleared its _pendingCallbacks and
	    // that performUpdateIfNecessary is a noop.
	    var component = dirtyComponents[i];
	
	    // If performUpdateIfNecessary happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = component._pendingCallbacks;
	    component._pendingCallbacks = null;
	
	    ReactReconciler.performUpdateIfNecessary(component, transaction.reconcileTransaction);
	
	    if (callbacks) {
	      for (var j = 0; j < callbacks.length; j++) {
	        transaction.callbackQueue.enqueue(callbacks[j], component.getPublicInstance());
	      }
	    }
	  }
	}
	
	var flushBatchedUpdates = function () {
	  // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
	  // array and perform any updates enqueued by mount-ready handlers (i.e.,
	  // componentDidUpdate) but we need to check here too in order to catch
	  // updates enqueued by setState callbacks and asap calls.
	  while (dirtyComponents.length || asapEnqueued) {
	    if (dirtyComponents.length) {
	      var transaction = ReactUpdatesFlushTransaction.getPooled();
	      transaction.perform(runBatchedUpdates, null, transaction);
	      ReactUpdatesFlushTransaction.release(transaction);
	    }
	
	    if (asapEnqueued) {
	      asapEnqueued = false;
	      var queue = asapCallbackQueue;
	      asapCallbackQueue = CallbackQueue.getPooled();
	      queue.notifyAll();
	      CallbackQueue.release(queue);
	    }
	  }
	};
	flushBatchedUpdates = ReactPerf.measure('ReactUpdates', 'flushBatchedUpdates', flushBatchedUpdates);
	
	/**
	 * Mark a component as needing a rerender, adding an optional callback to a
	 * list of functions which will be executed once the rerender occurs.
	 */
	function enqueueUpdate(component) {
	  ensureInjected();
	
	  // Various parts of our code (such as ReactCompositeComponent's
	  // _renderValidatedComponent) assume that calls to render aren't nested;
	  // verify that that's the case. (This is called by each top-level update
	  // function, like setProps, setState, forceUpdate, etc.; creation and
	  // destruction of top-level components is guarded in ReactMount.)
	
	  if (!batchingStrategy.isBatchingUpdates) {
	    batchingStrategy.batchedUpdates(enqueueUpdate, component);
	    return;
	  }
	
	  dirtyComponents.push(component);
	}
	
	/**
	 * Enqueue a callback to be run at the end of the current batching cycle. Throws
	 * if no updates are currently being performed.
	 */
	function asap(callback, context) {
	  !batchingStrategy.isBatchingUpdates ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' + 'updates are not being batched.') : invariant(false) : undefined;
	  asapCallbackQueue.enqueue(callback, context);
	  asapEnqueued = true;
	}
	
	var ReactUpdatesInjection = {
	  injectReconcileTransaction: function (ReconcileTransaction) {
	    !ReconcileTransaction ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a reconcile transaction class') : invariant(false) : undefined;
	    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
	  },
	
	  injectBatchingStrategy: function (_batchingStrategy) {
	    !_batchingStrategy ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batching strategy') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.batchedUpdates === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide a batchedUpdates() function') : invariant(false) : undefined;
	    !(typeof _batchingStrategy.isBatchingUpdates === 'boolean') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactUpdates: must provide an isBatchingUpdates boolean attribute') : invariant(false) : undefined;
	    batchingStrategy = _batchingStrategy;
	  }
	};
	
	var ReactUpdates = {
	  /**
	   * React references `ReactReconcileTransaction` using this property in order
	   * to allow dependency injection.
	   *
	   * @internal
	   */
	  ReactReconcileTransaction: null,
	
	  batchedUpdates: batchedUpdates,
	  enqueueUpdate: enqueueUpdate,
	  flushBatchedUpdates: flushBatchedUpdates,
	  injection: ReactUpdatesInjection,
	  asap: asap
	};
	
	module.exports = ReactUpdates;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 101 */
/*!**************************************!*\
  !*** ./~/react/lib/CallbackQueue.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CallbackQueue
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * A specialized pseudo-event module to help keep track of components waiting to
	 * be notified when their DOM representations are available for use.
	 *
	 * This implements `PooledClass`, so you should never need to instantiate this.
	 * Instead, use `CallbackQueue.getPooled()`.
	 *
	 * @class ReactMountReady
	 * @implements PooledClass
	 * @internal
	 */
	function CallbackQueue() {
	  this._callbacks = null;
	  this._contexts = null;
	}
	
	assign(CallbackQueue.prototype, {
	
	  /**
	   * Enqueues a callback to be invoked when `notifyAll` is invoked.
	   *
	   * @param {function} callback Invoked when `notifyAll` is invoked.
	   * @param {?object} context Context to call `callback` with.
	   * @internal
	   */
	  enqueue: function (callback, context) {
	    this._callbacks = this._callbacks || [];
	    this._contexts = this._contexts || [];
	    this._callbacks.push(callback);
	    this._contexts.push(context);
	  },
	
	  /**
	   * Invokes all enqueued callbacks and clears the queue. This is invoked after
	   * the DOM representation of a component has been created or updated.
	   *
	   * @internal
	   */
	  notifyAll: function () {
	    var callbacks = this._callbacks;
	    var contexts = this._contexts;
	    if (callbacks) {
	      !(callbacks.length === contexts.length) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Mismatched list of contexts in callback queue') : invariant(false) : undefined;
	      this._callbacks = null;
	      this._contexts = null;
	      for (var i = 0; i < callbacks.length; i++) {
	        callbacks[i].call(contexts[i]);
	      }
	      callbacks.length = 0;
	      contexts.length = 0;
	    }
	  },
	
	  /**
	   * Resets the internal queue.
	   *
	   * @internal
	   */
	  reset: function () {
	    this._callbacks = null;
	    this._contexts = null;
	  },
	
	  /**
	   * `PooledClass` looks for this.
	   */
	  destructor: function () {
	    this.reset();
	  }
	
	});
	
	PooledClass.addPoolingTo(CallbackQueue);
	
	module.exports = CallbackQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 102 */
/*!************************************!*\
  !*** ./~/react/lib/PooledClass.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule PooledClass
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * Static poolers. Several custom versions for each potential number of
	 * arguments. A completely generic pooler is easy to implement, but would
	 * require accessing the `arguments` object. In each of these, `this` refers to
	 * the Class itself, not an instance. If any others are needed, simply add them
	 * here, or in their own files.
	 */
	var oneArgumentPooler = function (copyFieldsFrom) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, copyFieldsFrom);
	    return instance;
	  } else {
	    return new Klass(copyFieldsFrom);
	  }
	};
	
	var twoArgumentPooler = function (a1, a2) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2);
	    return instance;
	  } else {
	    return new Klass(a1, a2);
	  }
	};
	
	var threeArgumentPooler = function (a1, a2, a3) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3);
	  }
	};
	
	var fourArgumentPooler = function (a1, a2, a3, a4) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4);
	  }
	};
	
	var fiveArgumentPooler = function (a1, a2, a3, a4, a5) {
	  var Klass = this;
	  if (Klass.instancePool.length) {
	    var instance = Klass.instancePool.pop();
	    Klass.call(instance, a1, a2, a3, a4, a5);
	    return instance;
	  } else {
	    return new Klass(a1, a2, a3, a4, a5);
	  }
	};
	
	var standardReleaser = function (instance) {
	  var Klass = this;
	  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : invariant(false) : undefined;
	  instance.destructor();
	  if (Klass.instancePool.length < Klass.poolSize) {
	    Klass.instancePool.push(instance);
	  }
	};
	
	var DEFAULT_POOL_SIZE = 10;
	var DEFAULT_POOLER = oneArgumentPooler;
	
	/**
	 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
	 * itself (statically) not adding any prototypical fields. Any CopyConstructor
	 * you give this may have a `poolSize` property, and will look for a
	 * prototypical `destructor` on instances (optional).
	 *
	 * @param {Function} CopyConstructor Constructor that can be used to reset.
	 * @param {Function} pooler Customizable pooler.
	 */
	var addPoolingTo = function (CopyConstructor, pooler) {
	  var NewKlass = CopyConstructor;
	  NewKlass.instancePool = [];
	  NewKlass.getPooled = pooler || DEFAULT_POOLER;
	  if (!NewKlass.poolSize) {
	    NewKlass.poolSize = DEFAULT_POOL_SIZE;
	  }
	  NewKlass.release = standardReleaser;
	  return NewKlass;
	};
	
	var PooledClass = {
	  addPoolingTo: addPoolingTo,
	  oneArgumentPooler: oneArgumentPooler,
	  twoArgumentPooler: twoArgumentPooler,
	  threeArgumentPooler: threeArgumentPooler,
	  fourArgumentPooler: fourArgumentPooler,
	  fiveArgumentPooler: fiveArgumentPooler
	};
	
	module.exports = PooledClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 103 */
/*!************************************!*\
  !*** ./~/react/lib/Transaction.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Transaction
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * `Transaction` creates a black box that is able to wrap any method such that
	 * certain invariants are maintained before and after the method is invoked
	 * (Even if an exception is thrown while invoking the wrapped method). Whoever
	 * instantiates a transaction can provide enforcers of the invariants at
	 * creation time. The `Transaction` class itself will supply one additional
	 * automatic invariant for you - the invariant that any transaction instance
	 * should not be run while it is already being run. You would typically create a
	 * single instance of a `Transaction` for reuse multiple times, that potentially
	 * is used to wrap several different methods. Wrappers are extremely simple -
	 * they only require implementing two methods.
	 *
	 * <pre>
	 *                       wrappers (injected at creation time)
	 *                                      +        +
	 *                                      |        |
	 *                    +-----------------|--------|--------------+
	 *                    |                 v        |              |
	 *                    |      +---------------+   |              |
	 *                    |   +--|    wrapper1   |---|----+         |
	 *                    |   |  +---------------+   v    |         |
	 *                    |   |          +-------------+  |         |
	 *                    |   |     +----|   wrapper2  |--------+   |
	 *                    |   |     |    +-------------+  |     |   |
	 *                    |   |     |                     |     |   |
	 *                    |   v     v                     v     v   | wrapper
	 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
	 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
	 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | |   | |   |   |         |   |   | |   | |
	 *                    | +---+ +---+   +---------+   +---+ +---+ |
	 *                    |  initialize                    close    |
	 *                    +-----------------------------------------+
	 * </pre>
	 *
	 * Use cases:
	 * - Preserving the input selection ranges before/after reconciliation.
	 *   Restoring selection even in the event of an unexpected error.
	 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
	 *   while guaranteeing that afterwards, the event system is reactivated.
	 * - Flushing a queue of collected DOM mutations to the main UI thread after a
	 *   reconciliation takes place in a worker thread.
	 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
	 *   content.
	 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
	 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
	 * - (Future use case): Layout calculations before and after DOM updates.
	 *
	 * Transactional plugin API:
	 * - A module that has an `initialize` method that returns any precomputation.
	 * - and a `close` method that accepts the precomputation. `close` is invoked
	 *   when the wrapped process is completed, or has failed.
	 *
	 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
	 * that implement `initialize` and `close`.
	 * @return {Transaction} Single transaction for reuse in thread.
	 *
	 * @class Transaction
	 */
	var Mixin = {
	  /**
	   * Sets up this instance so that it is prepared for collecting metrics. Does
	   * so such that this setup method may be used on an instance that is already
	   * initialized, in a way that does not consume additional memory upon reuse.
	   * That can be useful if you decide to make your subclass of this mixin a
	   * "PooledClass".
	   */
	  reinitializeTransaction: function () {
	    this.transactionWrappers = this.getTransactionWrappers();
	    if (this.wrapperInitData) {
	      this.wrapperInitData.length = 0;
	    } else {
	      this.wrapperInitData = [];
	    }
	    this._isInTransaction = false;
	  },
	
	  _isInTransaction: false,
	
	  /**
	   * @abstract
	   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
	   */
	  getTransactionWrappers: null,
	
	  isInTransaction: function () {
	    return !!this._isInTransaction;
	  },
	
	  /**
	   * Executes the function within a safety window. Use this for the top level
	   * methods that result in large amounts of computation/mutations that would
	   * need to be safety checked. The optional arguments helps prevent the need
	   * to bind in many cases.
	   *
	   * @param {function} method Member of scope to call.
	   * @param {Object} scope Scope to invoke from.
	   * @param {Object?=} a Argument to pass to the method.
	   * @param {Object?=} b Argument to pass to the method.
	   * @param {Object?=} c Argument to pass to the method.
	   * @param {Object?=} d Argument to pass to the method.
	   * @param {Object?=} e Argument to pass to the method.
	   * @param {Object?=} f Argument to pass to the method.
	   *
	   * @return {*} Return value from `method`.
	   */
	  perform: function (method, scope, a, b, c, d, e, f) {
	    !!this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.perform(...): Cannot initialize a transaction when there ' + 'is already an outstanding transaction.') : invariant(false) : undefined;
	    var errorThrown;
	    var ret;
	    try {
	      this._isInTransaction = true;
	      // Catching errors makes debugging more difficult, so we start with
	      // errorThrown set to true before setting it to false after calling
	      // close -- if it's still set to true in the finally block, it means
	      // one of these calls threw.
	      errorThrown = true;
	      this.initializeAll(0);
	      ret = method.call(scope, a, b, c, d, e, f);
	      errorThrown = false;
	    } finally {
	      try {
	        if (errorThrown) {
	          // If `method` throws, prefer to show that stack trace over any thrown
	          // by invoking `closeAll`.
	          try {
	            this.closeAll(0);
	          } catch (err) {}
	        } else {
	          // Since `method` didn't throw, we don't want to silence the exception
	          // here.
	          this.closeAll(0);
	        }
	      } finally {
	        this._isInTransaction = false;
	      }
	    }
	    return ret;
	  },
	
	  initializeAll: function (startIndex) {
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      try {
	        // Catching errors makes debugging more difficult, so we start with the
	        // OBSERVED_ERROR state before overwriting it with the real return value
	        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
	        // block, it means wrapper.initialize threw.
	        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
	        this.wrapperInitData[i] = wrapper.initialize ? wrapper.initialize.call(this) : null;
	      } finally {
	        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
	          // The initializer for wrapper i threw an error; initialize the
	          // remaining wrappers but silence any exceptions from them to ensure
	          // that the first error is the one to bubble up.
	          try {
	            this.initializeAll(i + 1);
	          } catch (err) {}
	        }
	      }
	    }
	  },
	
	  /**
	   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
	   * them the respective return values of `this.transactionWrappers.init[i]`
	   * (`close`rs that correspond to initializers that failed will not be
	   * invoked).
	   */
	  closeAll: function (startIndex) {
	    !this.isInTransaction() ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Transaction.closeAll(): Cannot close transaction when none are open.') : invariant(false) : undefined;
	    var transactionWrappers = this.transactionWrappers;
	    for (var i = startIndex; i < transactionWrappers.length; i++) {
	      var wrapper = transactionWrappers[i];
	      var initData = this.wrapperInitData[i];
	      var errorThrown;
	      try {
	        // Catching errors makes debugging more difficult, so we start with
	        // errorThrown set to true before setting it to false after calling
	        // close -- if it's still set to true in the finally block, it means
	        // wrapper.close threw.
	        errorThrown = true;
	        if (initData !== Transaction.OBSERVED_ERROR && wrapper.close) {
	          wrapper.close.call(this, initData);
	        }
	        errorThrown = false;
	      } finally {
	        if (errorThrown) {
	          // The closer for wrapper i threw an error; close the remaining
	          // wrappers but silence any exceptions from them to ensure that the
	          // first error is the one to bubble up.
	          try {
	            this.closeAll(i + 1);
	          } catch (e) {}
	        }
	      }
	    }
	    this.wrapperInitData.length = 0;
	  }
	};
	
	var Transaction = {
	
	  Mixin: Mixin,
	
	  /**
	   * Token to look for to determine if an error occurred.
	   */
	  OBSERVED_ERROR: {}
	
	};
	
	module.exports = Transaction;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 104 */
/*!***********************************!*\
  !*** ./~/fbjs/lib/emptyObject.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule emptyObject
	 */
	
	'use strict';
	
	var emptyObject = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  Object.freeze(emptyObject);
	}
	
	module.exports = emptyObject;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 105 */
/*!************************************!*\
  !*** ./~/fbjs/lib/containsNode.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule containsNode
	 * @typechecks
	 */
	
	'use strict';
	
	var isTextNode = __webpack_require__(/*! ./isTextNode */ 106);
	
	/*eslint-disable no-bitwise */
	
	/**
	 * Checks if a given DOM node contains or is another DOM node.
	 *
	 * @param {?DOMNode} outerNode Outer DOM node.
	 * @param {?DOMNode} innerNode Inner DOM node.
	 * @return {boolean} True if `outerNode` contains or is `innerNode`.
	 */
	function containsNode(_x, _x2) {
	  var _again = true;
	
	  _function: while (_again) {
	    var outerNode = _x,
	        innerNode = _x2;
	    _again = false;
	
	    if (!outerNode || !innerNode) {
	      return false;
	    } else if (outerNode === innerNode) {
	      return true;
	    } else if (isTextNode(outerNode)) {
	      return false;
	    } else if (isTextNode(innerNode)) {
	      _x = outerNode;
	      _x2 = innerNode.parentNode;
	      _again = true;
	      continue _function;
	    } else if (outerNode.contains) {
	      return outerNode.contains(innerNode);
	    } else if (outerNode.compareDocumentPosition) {
	      return !!(outerNode.compareDocumentPosition(innerNode) & 16);
	    } else {
	      return false;
	    }
	  }
	}
	
	module.exports = containsNode;

/***/ },
/* 106 */
/*!**********************************!*\
  !*** ./~/fbjs/lib/isTextNode.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextNode
	 * @typechecks
	 */
	
	'use strict';
	
	var isNode = __webpack_require__(/*! ./isNode */ 107);
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM text node.
	 */
	function isTextNode(object) {
	  return isNode(object) && object.nodeType == 3;
	}
	
	module.exports = isTextNode;

/***/ },
/* 107 */
/*!******************************!*\
  !*** ./~/fbjs/lib/isNode.js ***!
  \******************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isNode
	 * @typechecks
	 */
	
	/**
	 * @param {*} object The object to check.
	 * @return {boolean} Whether or not the object is a DOM node.
	 */
	'use strict';
	
	function isNode(object) {
	  return !!(object && (typeof Node === 'function' ? object instanceof Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
	}
	
	module.exports = isNode;

/***/ },
/* 108 */
/*!**************************************************!*\
  !*** ./~/react/lib/instantiateReactComponent.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule instantiateReactComponent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactCompositeComponent = __webpack_require__(/*! ./ReactCompositeComponent */ 109);
	var ReactEmptyComponent = __webpack_require__(/*! ./ReactEmptyComponent */ 114);
	var ReactNativeComponent = __webpack_require__(/*! ./ReactNativeComponent */ 115);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	// To avoid a cyclic dependency, we create the final class in this module
	var ReactCompositeComponentWrapper = function () {};
	assign(ReactCompositeComponentWrapper.prototype, ReactCompositeComponent.Mixin, {
	  _instantiateReactComponent: instantiateReactComponent
	});
	
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Check if the type reference is a known internal type. I.e. not a user
	 * provided composite type.
	 *
	 * @param {function} type
	 * @return {boolean} Returns true if this is a valid internal type.
	 */
	function isInternalComponentType(type) {
	  return typeof type === 'function' && typeof type.prototype !== 'undefined' && typeof type.prototype.mountComponent === 'function' && typeof type.prototype.receiveComponent === 'function';
	}
	
	/**
	 * Given a ReactNode, create an instance that will actually be mounted.
	 *
	 * @param {ReactNode} node
	 * @return {object} A new instance of the element's constructor.
	 * @protected
	 */
	function instantiateReactComponent(node) {
	  var instance;
	
	  if (node === null || node === false) {
	    instance = new ReactEmptyComponent(instantiateReactComponent);
	  } else if (typeof node === 'object') {
	    var element = node;
	    !(element && (typeof element.type === 'function' || typeof element.type === 'string')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element type is invalid: expected a string (for built-in components) ' + 'or a class/function (for composite components) but got: %s.%s', element.type == null ? element.type : typeof element.type, getDeclarationErrorAddendum(element._owner)) : invariant(false) : undefined;
	
	    // Special case string values
	    if (typeof element.type === 'string') {
	      instance = ReactNativeComponent.createInternalComponent(element);
	    } else if (isInternalComponentType(element.type)) {
	      // This is temporarily available for custom components that are not string
	      // representations. I.e. ART. Once those are updated to use the string
	      // representation, we can drop this code path.
	      instance = new element.type(element);
	    } else {
	      instance = new ReactCompositeComponentWrapper();
	    }
	  } else if (typeof node === 'string' || typeof node === 'number') {
	    instance = ReactNativeComponent.createInstanceForText(node);
	  } else {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Encountered invalid React node of type %s', typeof node) : invariant(false) : undefined;
	  }
	
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(typeof instance.construct === 'function' && typeof instance.mountComponent === 'function' && typeof instance.receiveComponent === 'function' && typeof instance.unmountComponent === 'function', 'Only React Components can be mounted.') : undefined;
	  }
	
	  // Sets up the instance. This can probably just move into the constructor now.
	  instance.construct(node);
	
	  // These two fields are used by the DOM and ART diffing algorithms
	  // respectively. Instead of using expandos on components, we should be
	  // storing the state needed by the diffing algorithms elsewhere.
	  instance._mountIndex = 0;
	  instance._mountImage = null;
	
	  if (process.env.NODE_ENV !== 'production') {
	    instance._isOwnerNecessary = false;
	    instance._warnedAboutRefsInRender = false;
	  }
	
	  // Internal instances should fully constructed at this point, so they should
	  // not get any new fields added to them at this point.
	  if (process.env.NODE_ENV !== 'production') {
	    if (Object.preventExtensions) {
	      Object.preventExtensions(instance);
	    }
	  }
	
	  return instance;
	}
	
	module.exports = instantiateReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 109 */
/*!************************************************!*\
  !*** ./~/react/lib/ReactCompositeComponent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactCompositeComponent
	 */
	
	'use strict';
	
	var ReactComponentEnvironment = __webpack_require__(/*! ./ReactComponentEnvironment */ 110);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactInstanceMap = __webpack_require__(/*! ./ReactInstanceMap */ 93);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ReactPropTypeLocations = __webpack_require__(/*! ./ReactPropTypeLocations */ 111);
	var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ 112);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	var ReactUpdateQueue = __webpack_require__(/*! ./ReactUpdateQueue */ 99);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 104);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var shouldUpdateReactComponent = __webpack_require__(/*! ./shouldUpdateReactComponent */ 113);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	function getDeclarationErrorAddendum(component) {
	  var owner = component._currentElement._owner || null;
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	function StatelessComponent(Component) {}
	StatelessComponent.prototype.render = function () {
	  var Component = ReactInstanceMap.get(this)._currentElement.type;
	  return Component(this.props, this.context, this.updater);
	};
	
	/**
	 * ------------------ The Life-Cycle of a Composite Component ------------------
	 *
	 * - constructor: Initialization of state. The instance is now retained.
	 *   - componentWillMount
	 *   - render
	 *   - [children's constructors]
	 *     - [children's componentWillMount and render]
	 *     - [children's componentDidMount]
	 *     - componentDidMount
	 *
	 *       Update Phases:
	 *       - componentWillReceiveProps (only called if parent updated)
	 *       - shouldComponentUpdate
	 *         - componentWillUpdate
	 *           - render
	 *           - [children's constructors or receive props phases]
	 *         - componentDidUpdate
	 *
	 *     - componentWillUnmount
	 *     - [children's componentWillUnmount]
	 *   - [children destroyed]
	 * - (destroyed): The instance is now blank, released by React and ready for GC.
	 *
	 * -----------------------------------------------------------------------------
	 */
	
	/**
	 * An incrementing ID assigned to each component when it is mounted. This is
	 * used to enforce the order in which `ReactUpdates` updates dirty components.
	 *
	 * @private
	 */
	var nextMountID = 1;
	
	/**
	 * @lends {ReactCompositeComponent.prototype}
	 */
	var ReactCompositeComponentMixin = {
	
	  /**
	   * Base constructor for all composite component.
	   *
	   * @param {ReactElement} element
	   * @final
	   * @internal
	   */
	  construct: function (element) {
	    this._currentElement = element;
	    this._rootNodeID = null;
	    this._instance = null;
	
	    // See ReactUpdateQueue
	    this._pendingElement = null;
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	
	    this._renderedComponent = null;
	
	    this._context = null;
	    this._mountOrder = 0;
	    this._topLevelWrapper = null;
	
	    // See ReactUpdates and ReactUpdateQueue.
	    this._pendingCallbacks = null;
	  },
	
	  /**
	   * Initializes the component, renders markup, and registers event listeners.
	   *
	   * @param {string} rootID DOM ID of the root node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @return {?string} Rendered markup to be inserted into the DOM.
	   * @final
	   * @internal
	   */
	  mountComponent: function (rootID, transaction, context) {
	    this._context = context;
	    this._mountOrder = nextMountID++;
	    this._rootNodeID = rootID;
	
	    var publicProps = this._processProps(this._currentElement.props);
	    var publicContext = this._processContext(context);
	
	    var Component = this._currentElement.type;
	
	    // Initialize the public class
	    var inst;
	    var renderedElement;
	
	    // This is a way to detect if Component is a stateless arrow function
	    // component, which is not newable. It might not be 100% reliable but is
	    // something we can do until we start detecting that Component extends
	    // React.Component. We already assume that typeof Component === 'function'.
	    var canInstantiate = ('prototype' in Component);
	
	    if (canInstantiate) {
	      if (process.env.NODE_ENV !== 'production') {
	        ReactCurrentOwner.current = this;
	        try {
	          inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	        } finally {
	          ReactCurrentOwner.current = null;
	        }
	      } else {
	        inst = new Component(publicProps, publicContext, ReactUpdateQueue);
	      }
	    }
	
	    if (!canInstantiate || inst === null || inst === false || ReactElement.isValidElement(inst)) {
	      renderedElement = inst;
	      inst = new StatelessComponent(Component);
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This will throw later in _renderValidatedComponent, but add an early
	      // warning now to help debugging
	      if (inst.render == null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): No `render` method found on the returned component ' + 'instance: you may have forgotten to define `render`, returned ' + 'null/false from a stateless component, or tried to render an ' + 'element whose type is a function that isn\'t a React component.', Component.displayName || Component.name || 'Component') : undefined;
	      } else {
	        // We support ES6 inheriting from React.Component, the module pattern,
	        // and stateless components, but not ES6 classes that don't extend
	        process.env.NODE_ENV !== 'production' ? warning(Component.prototype && Component.prototype.isReactComponent || !canInstantiate || !(inst instanceof Component), '%s(...): React component classes must extend React.Component.', Component.displayName || Component.name || 'Component') : undefined;
	      }
	    }
	
	    // These should be set up in the constructor, but as a convenience for
	    // simpler class abstractions, we set them up after the fact.
	    inst.props = publicProps;
	    inst.context = publicContext;
	    inst.refs = emptyObject;
	    inst.updater = ReactUpdateQueue;
	
	    this._instance = inst;
	
	    // Store a reference from the instance back to the internal representation
	    ReactInstanceMap.set(inst, this);
	
	    if (process.env.NODE_ENV !== 'production') {
	      // Since plain JS classes are defined without any special initialization
	      // logic, we can not catch common errors early. Therefore, we have to
	      // catch them here, at initialization time, instead.
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getInitialState || inst.getInitialState.isReactClassApproved, 'getInitialState was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Did you mean to define a state property instead?', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.getDefaultProps || inst.getDefaultProps.isReactClassApproved, 'getDefaultProps was defined on %s, a plain JavaScript class. ' + 'This is only supported for classes created using React.createClass. ' + 'Use a static property to define defaultProps instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.propTypes, 'propTypes was defined as an instance property on %s. Use a static ' + 'property to define propTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!inst.contextTypes, 'contextTypes was defined as an instance property on %s. Use a ' + 'static property to define contextTypes instead.', this.getName() || 'a component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentShouldUpdate !== 'function', '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentDidUnmount !== 'function', '%s has a method called ' + 'componentDidUnmount(). But there is no such lifecycle method. ' + 'Did you mean componentWillUnmount()?', this.getName() || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(typeof inst.componentWillRecieveProps !== 'function', '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', this.getName() || 'A component') : undefined;
	    }
	
	    var initialState = inst.state;
	    if (initialState === undefined) {
	      inst.state = initialState = null;
	    }
	    !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.state: must be set to an object or null', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	
	    if (inst.componentWillMount) {
	      inst.componentWillMount();
	      // When mounting, calls to `setState` by `componentWillMount` will set
	      // `this._pendingStateQueue` without triggering a re-render.
	      if (this._pendingStateQueue) {
	        inst.state = this._processPendingState(inst.props, inst.context);
	      }
	    }
	
	    // If not a stateless component, we now render
	    if (renderedElement === undefined) {
	      renderedElement = this._renderValidatedComponent();
	    }
	
	    this._renderedComponent = this._instantiateReactComponent(renderedElement);
	
	    var markup = ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, this._processChildContext(context));
	    if (inst.componentDidMount) {
	      transaction.getReactMountReady().enqueue(inst.componentDidMount, inst);
	    }
	
	    return markup;
	  },
	
	  /**
	   * Releases any resources allocated by `mountComponent`.
	   *
	   * @final
	   * @internal
	   */
	  unmountComponent: function () {
	    var inst = this._instance;
	
	    if (inst.componentWillUnmount) {
	      inst.componentWillUnmount();
	    }
	
	    ReactReconciler.unmountComponent(this._renderedComponent);
	    this._renderedComponent = null;
	    this._instance = null;
	
	    // Reset pending fields
	    // Even if this component is scheduled for another update in ReactUpdates,
	    // it would still be ignored because these fields are reset.
	    this._pendingStateQueue = null;
	    this._pendingReplaceState = false;
	    this._pendingForceUpdate = false;
	    this._pendingCallbacks = null;
	    this._pendingElement = null;
	
	    // These fields do not really need to be reset since this object is no
	    // longer accessible.
	    this._context = null;
	    this._rootNodeID = null;
	    this._topLevelWrapper = null;
	
	    // Delete the reference from the instance to this internal representation
	    // which allow the internals to be properly cleaned up even if the user
	    // leaks a reference to the public instance.
	    ReactInstanceMap.remove(inst);
	
	    // Some existing components rely on inst.props even after they've been
	    // destroyed (in event handlers).
	    // TODO: inst.props = null;
	    // TODO: inst.state = null;
	    // TODO: inst.context = null;
	  },
	
	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _maskContext: function (context) {
	    var maskedContext = null;
	    var Component = this._currentElement.type;
	    var contextTypes = Component.contextTypes;
	    if (!contextTypes) {
	      return emptyObject;
	    }
	    maskedContext = {};
	    for (var contextName in contextTypes) {
	      maskedContext[contextName] = context[contextName];
	    }
	    return maskedContext;
	  },
	
	  /**
	   * Filters the context object to only contain keys specified in
	   * `contextTypes`, and asserts that they are valid.
	   *
	   * @param {object} context
	   * @return {?object}
	   * @private
	   */
	  _processContext: function (context) {
	    var maskedContext = this._maskContext(context);
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.contextTypes) {
	        this._checkPropTypes(Component.contextTypes, maskedContext, ReactPropTypeLocations.context);
	      }
	    }
	    return maskedContext;
	  },
	
	  /**
	   * @param {object} currentContext
	   * @return {object}
	   * @private
	   */
	  _processChildContext: function (currentContext) {
	    var Component = this._currentElement.type;
	    var inst = this._instance;
	    var childContext = inst.getChildContext && inst.getChildContext();
	    if (childContext) {
	      !(typeof Component.childContextTypes === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): childContextTypes must be defined in order to ' + 'use getChildContext().', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	      if (process.env.NODE_ENV !== 'production') {
	        this._checkPropTypes(Component.childContextTypes, childContext, ReactPropTypeLocations.childContext);
	      }
	      for (var name in childContext) {
	        !(name in Component.childContextTypes) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || 'ReactCompositeComponent', name) : invariant(false) : undefined;
	      }
	      return assign({}, currentContext, childContext);
	    }
	    return currentContext;
	  },
	
	  /**
	   * Processes props by setting default values for unspecified props and
	   * asserting that the props are valid. Does not mutate its argument; returns
	   * a new props object with defaults merged in.
	   *
	   * @param {object} newProps
	   * @return {object}
	   * @private
	   */
	  _processProps: function (newProps) {
	    if (process.env.NODE_ENV !== 'production') {
	      var Component = this._currentElement.type;
	      if (Component.propTypes) {
	        this._checkPropTypes(Component.propTypes, newProps, ReactPropTypeLocations.prop);
	      }
	    }
	    return newProps;
	  },
	
	  /**
	   * Assert that the props are valid
	   *
	   * @param {object} propTypes Map of prop name to a ReactPropType
	   * @param {object} props
	   * @param {string} location e.g. "prop", "context", "child context"
	   * @private
	   */
	  _checkPropTypes: function (propTypes, props, location) {
	    // TODO: Stop validating prop types here and only use the element
	    // validation.
	    var componentName = this.getName();
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error;
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually ' + 'from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	          error = propTypes[propName](props, propName, componentName, location);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error instanceof Error) {
	          // We may want to extend this logic for similar errors in
	          // top-level render calls, so I'm abstracting it away into
	          // a function to minimize refactoring in the future
	          var addendum = getDeclarationErrorAddendum(this);
	
	          if (location === ReactPropTypeLocations.prop) {
	            // Preface gives us something to blacklist in warning module
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Composite propType: %s%s', error.message, addendum) : undefined;
	          } else {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Failed Context Types: %s%s', error.message, addendum) : undefined;
	          }
	        }
	      }
	    }
	  },
	
	  receiveComponent: function (nextElement, transaction, nextContext) {
	    var prevElement = this._currentElement;
	    var prevContext = this._context;
	
	    this._pendingElement = null;
	
	    this.updateComponent(transaction, prevElement, nextElement, prevContext, nextContext);
	  },
	
	  /**
	   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
	   * is set, update the component.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  performUpdateIfNecessary: function (transaction) {
	    if (this._pendingElement != null) {
	      ReactReconciler.receiveComponent(this, this._pendingElement || this._currentElement, transaction, this._context);
	    }
	
	    if (this._pendingStateQueue !== null || this._pendingForceUpdate) {
	      this.updateComponent(transaction, this._currentElement, this._currentElement, this._context, this._context);
	    }
	  },
	
	  /**
	   * Perform an update to a mounted component. The componentWillReceiveProps and
	   * shouldComponentUpdate methods are called, then (assuming the update isn't
	   * skipped) the remaining update lifecycle methods are called and the DOM
	   * representation is updated.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevParentElement
	   * @param {ReactElement} nextParentElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevParentElement, nextParentElement, prevUnmaskedContext, nextUnmaskedContext) {
	    var inst = this._instance;
	
	    var nextContext = this._context === nextUnmaskedContext ? inst.context : this._processContext(nextUnmaskedContext);
	    var nextProps;
	
	    // Distinguish between a props update versus a simple state update
	    if (prevParentElement === nextParentElement) {
	      // Skip checking prop types again -- we don't read inst.props to avoid
	      // warning for DOM component props in this upgrade
	      nextProps = nextParentElement.props;
	    } else {
	      nextProps = this._processProps(nextParentElement.props);
	      // An update here will schedule an update but immediately set
	      // _pendingStateQueue which will ensure that any state updates gets
	      // immediately reconciled instead of waiting for the next batch.
	
	      if (inst.componentWillReceiveProps) {
	        inst.componentWillReceiveProps(nextProps, nextContext);
	      }
	    }
	
	    var nextState = this._processPendingState(nextProps, nextContext);
	
	    var shouldUpdate = this._pendingForceUpdate || !inst.shouldComponentUpdate || inst.shouldComponentUpdate(nextProps, nextState, nextContext);
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(typeof shouldUpdate !== 'undefined', '%s.shouldComponentUpdate(): Returned undefined instead of a ' + 'boolean value. Make sure to return true or false.', this.getName() || 'ReactCompositeComponent') : undefined;
	    }
	
	    if (shouldUpdate) {
	      this._pendingForceUpdate = false;
	      // Will set `this.props`, `this.state` and `this.context`.
	      this._performComponentUpdate(nextParentElement, nextProps, nextState, nextContext, transaction, nextUnmaskedContext);
	    } else {
	      // If it's determined that a component should not update, we still want
	      // to set props and state but we shortcut the rest of the update.
	      this._currentElement = nextParentElement;
	      this._context = nextUnmaskedContext;
	      inst.props = nextProps;
	      inst.state = nextState;
	      inst.context = nextContext;
	    }
	  },
	
	  _processPendingState: function (props, context) {
	    var inst = this._instance;
	    var queue = this._pendingStateQueue;
	    var replace = this._pendingReplaceState;
	    this._pendingReplaceState = false;
	    this._pendingStateQueue = null;
	
	    if (!queue) {
	      return inst.state;
	    }
	
	    if (replace && queue.length === 1) {
	      return queue[0];
	    }
	
	    var nextState = assign({}, replace ? queue[0] : inst.state);
	    for (var i = replace ? 1 : 0; i < queue.length; i++) {
	      var partial = queue[i];
	      assign(nextState, typeof partial === 'function' ? partial.call(inst, nextState, props, context) : partial);
	    }
	
	    return nextState;
	  },
	
	  /**
	   * Merges new props and state, notifies delegate methods of update and
	   * performs update.
	   *
	   * @param {ReactElement} nextElement Next element
	   * @param {object} nextProps Next public object to set as properties.
	   * @param {?object} nextState Next object to set as state.
	   * @param {?object} nextContext Next public object to set as context.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?object} unmaskedContext
	   * @private
	   */
	  _performComponentUpdate: function (nextElement, nextProps, nextState, nextContext, transaction, unmaskedContext) {
	    var inst = this._instance;
	
	    var hasComponentDidUpdate = Boolean(inst.componentDidUpdate);
	    var prevProps;
	    var prevState;
	    var prevContext;
	    if (hasComponentDidUpdate) {
	      prevProps = inst.props;
	      prevState = inst.state;
	      prevContext = inst.context;
	    }
	
	    if (inst.componentWillUpdate) {
	      inst.componentWillUpdate(nextProps, nextState, nextContext);
	    }
	
	    this._currentElement = nextElement;
	    this._context = unmaskedContext;
	    inst.props = nextProps;
	    inst.state = nextState;
	    inst.context = nextContext;
	
	    this._updateRenderedComponent(transaction, unmaskedContext);
	
	    if (hasComponentDidUpdate) {
	      transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst, prevProps, prevState, prevContext), inst);
	    }
	  },
	
	  /**
	   * Call the component's `render` method and update the DOM accordingly.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   */
	  _updateRenderedComponent: function (transaction, context) {
	    var prevComponentInstance = this._renderedComponent;
	    var prevRenderedElement = prevComponentInstance._currentElement;
	    var nextRenderedElement = this._renderValidatedComponent();
	    if (shouldUpdateReactComponent(prevRenderedElement, nextRenderedElement)) {
	      ReactReconciler.receiveComponent(prevComponentInstance, nextRenderedElement, transaction, this._processChildContext(context));
	    } else {
	      // These two IDs are actually the same! But nothing should rely on that.
	      var thisID = this._rootNodeID;
	      var prevComponentID = prevComponentInstance._rootNodeID;
	      ReactReconciler.unmountComponent(prevComponentInstance);
	
	      this._renderedComponent = this._instantiateReactComponent(nextRenderedElement);
	      var nextMarkup = ReactReconciler.mountComponent(this._renderedComponent, thisID, transaction, this._processChildContext(context));
	      this._replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	    }
	  },
	
	  /**
	   * @protected
	   */
	  _replaceNodeWithMarkupByID: function (prevComponentID, nextMarkup) {
	    ReactComponentEnvironment.replaceNodeWithMarkupByID(prevComponentID, nextMarkup);
	  },
	
	  /**
	   * @protected
	   */
	  _renderValidatedComponentWithoutOwnerOrContext: function () {
	    var inst = this._instance;
	    var renderedComponent = inst.render();
	    if (process.env.NODE_ENV !== 'production') {
	      // We allow auto-mocks to proceed as if they're returning null.
	      if (typeof renderedComponent === 'undefined' && inst.render._isMockFunction) {
	        // This is probably bad practice. Consider warning here and
	        // deprecating this convenience.
	        renderedComponent = null;
	      }
	    }
	
	    return renderedComponent;
	  },
	
	  /**
	   * @private
	   */
	  _renderValidatedComponent: function () {
	    var renderedComponent;
	    ReactCurrentOwner.current = this;
	    try {
	      renderedComponent = this._renderValidatedComponentWithoutOwnerOrContext();
	    } finally {
	      ReactCurrentOwner.current = null;
	    }
	    !(
	    // TODO: An `isValidNode` function would probably be more appropriate
	    renderedComponent === null || renderedComponent === false || ReactElement.isValidElement(renderedComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.render(): A valid ReactComponent must be returned. You may have ' + 'returned undefined, an array or some other invalid object.', this.getName() || 'ReactCompositeComponent') : invariant(false) : undefined;
	    return renderedComponent;
	  },
	
	  /**
	   * Lazily allocates the refs object and stores `component` as `ref`.
	   *
	   * @param {string} ref Reference name.
	   * @param {component} component Component to store as `ref`.
	   * @final
	   * @private
	   */
	  attachRef: function (ref, component) {
	    var inst = this.getPublicInstance();
	    !(inst != null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Stateless function components cannot have refs.') : invariant(false) : undefined;
	    var publicComponentInstance = component.getPublicInstance();
	    if (process.env.NODE_ENV !== 'production') {
	      var componentName = component && component.getName ? component.getName() : 'a component';
	      process.env.NODE_ENV !== 'production' ? warning(publicComponentInstance != null, 'Stateless function components cannot be given refs ' + '(See ref "%s" in %s created by %s). ' + 'Attempts to access this ref will fail.', ref, componentName, this.getName()) : undefined;
	    }
	    var refs = inst.refs === emptyObject ? inst.refs = {} : inst.refs;
	    refs[ref] = publicComponentInstance;
	  },
	
	  /**
	   * Detaches a reference name.
	   *
	   * @param {string} ref Name to dereference.
	   * @final
	   * @private
	   */
	  detachRef: function (ref) {
	    var refs = this.getPublicInstance().refs;
	    delete refs[ref];
	  },
	
	  /**
	   * Get a text description of the component that can be used to identify it
	   * in error messages.
	   * @return {string} The name or null.
	   * @internal
	   */
	  getName: function () {
	    var type = this._currentElement.type;
	    var constructor = this._instance && this._instance.constructor;
	    return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
	  },
	
	  /**
	   * Get the publicly accessible representation of this component - i.e. what
	   * is exposed by refs and returned by render. Can be null for stateless
	   * components.
	   *
	   * @return {ReactComponent} the public component instance.
	   * @internal
	   */
	  getPublicInstance: function () {
	    var inst = this._instance;
	    if (inst instanceof StatelessComponent) {
	      return null;
	    }
	    return inst;
	  },
	
	  // Stub
	  _instantiateReactComponent: null
	
	};
	
	ReactPerf.measureMethods(ReactCompositeComponentMixin, 'ReactCompositeComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent',
	  _renderValidatedComponent: '_renderValidatedComponent'
	});
	
	var ReactCompositeComponent = {
	
	  Mixin: ReactCompositeComponentMixin
	
	};
	
	module.exports = ReactCompositeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 110 */
/*!**************************************************!*\
  !*** ./~/react/lib/ReactComponentEnvironment.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentEnvironment
	 */
	
	'use strict';
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	var injected = false;
	
	var ReactComponentEnvironment = {
	
	  /**
	   * Optionally injectable environment dependent cleanup hook. (server vs.
	   * browser etc). Example: A browser system caches DOM nodes based on component
	   * ID and must remove that cache entry when this instance is unmounted.
	   */
	  unmountIDFromEnvironment: null,
	
	  /**
	   * Optionally injectable hook for swapping out mount images in the middle of
	   * the tree.
	   */
	  replaceNodeWithMarkupByID: null,
	
	  /**
	   * Optionally injectable hook for processing a queue of child updates. Will
	   * later move into MultiChildComponents.
	   */
	  processChildrenUpdates: null,
	
	  injection: {
	    injectEnvironment: function (environment) {
	      !!injected ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactCompositeComponent: injectEnvironment() can only be called once.') : invariant(false) : undefined;
	      ReactComponentEnvironment.unmountIDFromEnvironment = environment.unmountIDFromEnvironment;
	      ReactComponentEnvironment.replaceNodeWithMarkupByID = environment.replaceNodeWithMarkupByID;
	      ReactComponentEnvironment.processChildrenUpdates = environment.processChildrenUpdates;
	      injected = true;
	    }
	  }
	
	};
	
	module.exports = ReactComponentEnvironment;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 111 */
/*!***********************************************!*\
  !*** ./~/react/lib/ReactPropTypeLocations.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocations
	 */
	
	'use strict';
	
	var keyMirror = __webpack_require__(/*! fbjs/lib/keyMirror */ 63);
	
	var ReactPropTypeLocations = keyMirror({
	  prop: null,
	  context: null,
	  childContext: null
	});
	
	module.exports = ReactPropTypeLocations;

/***/ },
/* 112 */
/*!***************************************************!*\
  !*** ./~/react/lib/ReactPropTypeLocationNames.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypeLocationNames
	 */
	
	'use strict';
	
	var ReactPropTypeLocationNames = {};
	
	if (process.env.NODE_ENV !== 'production') {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	}
	
	module.exports = ReactPropTypeLocationNames;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 113 */
/*!***************************************************!*\
  !*** ./~/react/lib/shouldUpdateReactComponent.js ***!
  \***************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shouldUpdateReactComponent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Given a `prevElement` and `nextElement`, determines if the existing
	 * instance should be updated as opposed to being destroyed or replaced by a new
	 * instance. Both arguments are elements. This ensures that this logic can
	 * operate on stateless trees without any backing instance.
	 *
	 * @param {?object} prevElement
	 * @param {?object} nextElement
	 * @return {boolean} True if the existing instance should be updated.
	 * @protected
	 */
	function shouldUpdateReactComponent(prevElement, nextElement) {
	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;
	  if (prevEmpty || nextEmpty) {
	    return prevEmpty === nextEmpty;
	  }
	
	  var prevType = typeof prevElement;
	  var nextType = typeof nextElement;
	  if (prevType === 'string' || prevType === 'number') {
	    return nextType === 'string' || nextType === 'number';
	  } else {
	    return nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
	  }
	  return false;
	}
	
	module.exports = shouldUpdateReactComponent;

/***/ },
/* 114 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactEmptyComponent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEmptyComponent
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactEmptyComponentRegistry = __webpack_require__(/*! ./ReactEmptyComponentRegistry */ 90);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	
	var placeholderElement;
	
	var ReactEmptyComponentInjection = {
	  injectEmptyComponent: function (component) {
	    placeholderElement = ReactElement.createElement(component);
	  }
	};
	
	var ReactEmptyComponent = function (instantiate) {
	  this._currentElement = null;
	  this._rootNodeID = null;
	  this._renderedComponent = instantiate(placeholderElement);
	};
	assign(ReactEmptyComponent.prototype, {
	  construct: function (element) {},
	  mountComponent: function (rootID, transaction, context) {
	    ReactEmptyComponentRegistry.registerNullComponentID(rootID);
	    this._rootNodeID = rootID;
	    return ReactReconciler.mountComponent(this._renderedComponent, rootID, transaction, context);
	  },
	  receiveComponent: function () {},
	  unmountComponent: function (rootID, transaction, context) {
	    ReactReconciler.unmountComponent(this._renderedComponent);
	    ReactEmptyComponentRegistry.deregisterNullComponentID(this._rootNodeID);
	    this._rootNodeID = null;
	    this._renderedComponent = null;
	  }
	});
	
	ReactEmptyComponent.injection = ReactEmptyComponentInjection;
	
	module.exports = ReactEmptyComponent;

/***/ },
/* 115 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactNativeComponent.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNativeComponent
	 */
	
	'use strict';
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	var autoGenerateWrapperClass = null;
	var genericComponentClass = null;
	// This registry keeps track of wrapper classes around native tags.
	var tagToComponentClass = {};
	var textComponentClass = null;
	
	var ReactNativeComponentInjection = {
	  // This accepts a class that receives the tag string. This is a catch all
	  // that can render any kind of tag.
	  injectGenericComponentClass: function (componentClass) {
	    genericComponentClass = componentClass;
	  },
	  // This accepts a text component class that takes the text string to be
	  // rendered as props.
	  injectTextComponentClass: function (componentClass) {
	    textComponentClass = componentClass;
	  },
	  // This accepts a keyed object with classes as values. Each key represents a
	  // tag. That particular tag will use this class instead of the generic one.
	  injectComponentClasses: function (componentClasses) {
	    assign(tagToComponentClass, componentClasses);
	  }
	};
	
	/**
	 * Get a composite component wrapper class for a specific tag.
	 *
	 * @param {ReactElement} element The tag for which to get the class.
	 * @return {function} The React class constructor function.
	 */
	function getComponentClassForElement(element) {
	  if (typeof element.type === 'function') {
	    return element.type;
	  }
	  var tag = element.type;
	  var componentClass = tagToComponentClass[tag];
	  if (componentClass == null) {
	    tagToComponentClass[tag] = componentClass = autoGenerateWrapperClass(tag);
	  }
	  return componentClass;
	}
	
	/**
	 * Get a native internal component class for a specific tag.
	 *
	 * @param {ReactElement} element The element to create.
	 * @return {function} The internal class constructor function.
	 */
	function createInternalComponent(element) {
	  !genericComponentClass ? process.env.NODE_ENV !== 'production' ? invariant(false, 'There is no registered component for the tag %s', element.type) : invariant(false) : undefined;
	  return new genericComponentClass(element.type, element.props);
	}
	
	/**
	 * @param {ReactText} text
	 * @return {ReactComponent}
	 */
	function createInstanceForText(text) {
	  return new textComponentClass(text);
	}
	
	/**
	 * @param {ReactComponent} component
	 * @return {boolean}
	 */
	function isTextComponent(component) {
	  return component instanceof textComponentClass;
	}
	
	var ReactNativeComponent = {
	  getComponentClassForElement: getComponentClassForElement,
	  createInternalComponent: createInternalComponent,
	  createInstanceForText: createInstanceForText,
	  isTextComponent: isTextComponent,
	  injection: ReactNativeComponentInjection
	};
	
	module.exports = ReactNativeComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 116 */
/*!*******************************************!*\
  !*** ./~/react/lib/validateDOMNesting.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule validateDOMNesting
	 */
	
	'use strict';
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var validateDOMNesting = emptyFunction;
	
	if (process.env.NODE_ENV !== 'production') {
	  // This validation code was written based on the HTML5 parsing spec:
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  //
	  // Note: this does not catch all invalid nesting, nor does it try to (as it's
	  // not clear what practical benefit doing so provides); instead, we warn only
	  // for cases where the parser will give a parse tree differing from what React
	  // intended. For example, <b><div></div></b> is invalid but we don't warn
	  // because it still parses correctly; we do warn for other cases like nested
	  // <p> tags where the beginning of the second element implicitly closes the
	  // first, causing a confusing mess.
	
	  // https://html.spec.whatwg.org/multipage/syntax.html#special
	  var specialTags = ['address', 'applet', 'area', 'article', 'aside', 'base', 'basefont', 'bgsound', 'blockquote', 'body', 'br', 'button', 'caption', 'center', 'col', 'colgroup', 'dd', 'details', 'dir', 'div', 'dl', 'dt', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'iframe', 'img', 'input', 'isindex', 'li', 'link', 'listing', 'main', 'marquee', 'menu', 'menuitem', 'meta', 'nav', 'noembed', 'noframes', 'noscript', 'object', 'ol', 'p', 'param', 'plaintext', 'pre', 'script', 'section', 'select', 'source', 'style', 'summary', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'title', 'tr', 'track', 'ul', 'wbr', 'xmp'];
	
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
	  var inScopeTags = ['applet', 'caption', 'html', 'table', 'td', 'th', 'marquee', 'object', 'template',
	
	  // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
	  // TODO: Distinguish by namespace here -- for <title>, including it here
	  // errs on the side of fewer warnings
	  'foreignObject', 'desc', 'title'];
	
	  // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
	  var buttonScopeTags = inScopeTags.concat(['button']);
	
	  // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
	  var impliedEndTags = ['dd', 'dt', 'li', 'option', 'optgroup', 'p', 'rp', 'rt'];
	
	  var emptyAncestorInfo = {
	    parentTag: null,
	
	    formTag: null,
	    aTagInScope: null,
	    buttonTagInScope: null,
	    nobrTagInScope: null,
	    pTagInButtonScope: null,
	
	    listItemTagAutoclosing: null,
	    dlItemTagAutoclosing: null
	  };
	
	  var updatedAncestorInfo = function (oldInfo, tag, instance) {
	    var ancestorInfo = assign({}, oldInfo || emptyAncestorInfo);
	    var info = { tag: tag, instance: instance };
	
	    if (inScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.aTagInScope = null;
	      ancestorInfo.buttonTagInScope = null;
	      ancestorInfo.nobrTagInScope = null;
	    }
	    if (buttonScopeTags.indexOf(tag) !== -1) {
	      ancestorInfo.pTagInButtonScope = null;
	    }
	
	    // See rules for 'li', 'dd', 'dt' start tags in
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    if (specialTags.indexOf(tag) !== -1 && tag !== 'address' && tag !== 'div' && tag !== 'p') {
	      ancestorInfo.listItemTagAutoclosing = null;
	      ancestorInfo.dlItemTagAutoclosing = null;
	    }
	
	    ancestorInfo.parentTag = info;
	
	    if (tag === 'form') {
	      ancestorInfo.formTag = info;
	    }
	    if (tag === 'a') {
	      ancestorInfo.aTagInScope = info;
	    }
	    if (tag === 'button') {
	      ancestorInfo.buttonTagInScope = info;
	    }
	    if (tag === 'nobr') {
	      ancestorInfo.nobrTagInScope = info;
	    }
	    if (tag === 'p') {
	      ancestorInfo.pTagInButtonScope = info;
	    }
	    if (tag === 'li') {
	      ancestorInfo.listItemTagAutoclosing = info;
	    }
	    if (tag === 'dd' || tag === 'dt') {
	      ancestorInfo.dlItemTagAutoclosing = info;
	    }
	
	    return ancestorInfo;
	  };
	
	  /**
	   * Returns whether
	   */
	  var isTagValidWithParent = function (tag, parentTag) {
	    // First, let's check if we're in an unusual parsing mode...
	    switch (parentTag) {
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
	      case 'select':
	        return tag === 'option' || tag === 'optgroup' || tag === '#text';
	      case 'optgroup':
	        return tag === 'option' || tag === '#text';
	      // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
	      // but
	      case 'option':
	        return tag === '#text';
	
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
	      // No special behavior since these rules fall back to "in body" mode for
	      // all except special table nodes which cause bad parsing behavior anyway.
	
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
	      case 'tr':
	        return tag === 'th' || tag === 'td' || tag === 'style' || tag === 'script' || tag === 'template';
	
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
	      case 'tbody':
	      case 'thead':
	      case 'tfoot':
	        return tag === 'tr' || tag === 'style' || tag === 'script' || tag === 'template';
	
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
	      case 'colgroup':
	        return tag === 'col' || tag === 'template';
	
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
	      case 'table':
	        return tag === 'caption' || tag === 'colgroup' || tag === 'tbody' || tag === 'tfoot' || tag === 'thead' || tag === 'style' || tag === 'script' || tag === 'template';
	
	      // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
	      case 'head':
	        return tag === 'base' || tag === 'basefont' || tag === 'bgsound' || tag === 'link' || tag === 'meta' || tag === 'title' || tag === 'noscript' || tag === 'noframes' || tag === 'style' || tag === 'script' || tag === 'template';
	
	      // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
	      case 'html':
	        return tag === 'head' || tag === 'body';
	    }
	
	    // Probably in the "in body" parsing mode, so we outlaw only tag combos
	    // where the parsing rules cause implicit opens or closes to be added.
	    // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
	    switch (tag) {
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return parentTag !== 'h1' && parentTag !== 'h2' && parentTag !== 'h3' && parentTag !== 'h4' && parentTag !== 'h5' && parentTag !== 'h6';
	
	      case 'rp':
	      case 'rt':
	        return impliedEndTags.indexOf(parentTag) === -1;
	
	      case 'caption':
	      case 'col':
	      case 'colgroup':
	      case 'frame':
	      case 'head':
	      case 'tbody':
	      case 'td':
	      case 'tfoot':
	      case 'th':
	      case 'thead':
	      case 'tr':
	        // These tags are only valid with a few parents that have special child
	        // parsing rules -- if we're down here, then none of those matched and
	        // so we allow it only if we don't know what the parent is, as all other
	        // cases are invalid.
	        return parentTag == null;
	    }
	
	    return true;
	  };
	
	  /**
	   * Returns whether
	   */
	  var findInvalidAncestorForTag = function (tag, ancestorInfo) {
	    switch (tag) {
	      case 'address':
	      case 'article':
	      case 'aside':
	      case 'blockquote':
	      case 'center':
	      case 'details':
	      case 'dialog':
	      case 'dir':
	      case 'div':
	      case 'dl':
	      case 'fieldset':
	      case 'figcaption':
	      case 'figure':
	      case 'footer':
	      case 'header':
	      case 'hgroup':
	      case 'main':
	      case 'menu':
	      case 'nav':
	      case 'ol':
	      case 'p':
	      case 'section':
	      case 'summary':
	      case 'ul':
	
	      case 'pre':
	      case 'listing':
	
	      case 'table':
	
	      case 'hr':
	
	      case 'xmp':
	
	      case 'h1':
	      case 'h2':
	      case 'h3':
	      case 'h4':
	      case 'h5':
	      case 'h6':
	        return ancestorInfo.pTagInButtonScope;
	
	      case 'form':
	        return ancestorInfo.formTag || ancestorInfo.pTagInButtonScope;
	
	      case 'li':
	        return ancestorInfo.listItemTagAutoclosing;
	
	      case 'dd':
	      case 'dt':
	        return ancestorInfo.dlItemTagAutoclosing;
	
	      case 'button':
	        return ancestorInfo.buttonTagInScope;
	
	      case 'a':
	        // Spec says something about storing a list of markers, but it sounds
	        // equivalent to this check.
	        return ancestorInfo.aTagInScope;
	
	      case 'nobr':
	        return ancestorInfo.nobrTagInScope;
	    }
	
	    return null;
	  };
	
	  /**
	   * Given a ReactCompositeComponent instance, return a list of its recursive
	   * owners, starting at the root and ending with the instance itself.
	   */
	  var findOwnerStack = function (instance) {
	    if (!instance) {
	      return [];
	    }
	
	    var stack = [];
	    /*eslint-disable space-after-keywords */
	    do {
	      /*eslint-enable space-after-keywords */
	      stack.push(instance);
	    } while (instance = instance._currentElement._owner);
	    stack.reverse();
	    return stack;
	  };
	
	  var didWarn = {};
	
	  validateDOMNesting = function (childTag, childInstance, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;
	
	    var invalidParent = isTagValidWithParent(childTag, parentTag) ? null : parentInfo;
	    var invalidAncestor = invalidParent ? null : findInvalidAncestorForTag(childTag, ancestorInfo);
	    var problematic = invalidParent || invalidAncestor;
	
	    if (problematic) {
	      var ancestorTag = problematic.tag;
	      var ancestorInstance = problematic.instance;
	
	      var childOwner = childInstance && childInstance._currentElement._owner;
	      var ancestorOwner = ancestorInstance && ancestorInstance._currentElement._owner;
	
	      var childOwners = findOwnerStack(childOwner);
	      var ancestorOwners = findOwnerStack(ancestorOwner);
	
	      var minStackLen = Math.min(childOwners.length, ancestorOwners.length);
	      var i;
	
	      var deepestCommon = -1;
	      for (i = 0; i < minStackLen; i++) {
	        if (childOwners[i] === ancestorOwners[i]) {
	          deepestCommon = i;
	        } else {
	          break;
	        }
	      }
	
	      var UNKNOWN = '(unknown)';
	      var childOwnerNames = childOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ancestorOwnerNames = ancestorOwners.slice(deepestCommon + 1).map(function (inst) {
	        return inst.getName() || UNKNOWN;
	      });
	      var ownerInfo = [].concat(
	      // If the parent and child instances have a common owner ancestor, start
	      // with that -- otherwise we just start with the parent's owners.
	      deepestCommon !== -1 ? childOwners[deepestCommon].getName() || UNKNOWN : [], ancestorOwnerNames, ancestorTag,
	      // If we're warning about an invalid (non-parent) ancestry, add '...'
	      invalidAncestor ? ['...'] : [], childOwnerNames, childTag).join(' > ');
	
	      var warnKey = !!invalidParent + '|' + childTag + '|' + ancestorTag + '|' + ownerInfo;
	      if (didWarn[warnKey]) {
	        return;
	      }
	      didWarn[warnKey] = true;
	
	      if (invalidParent) {
	        var info = '';
	        if (ancestorTag === 'table' && childTag === 'tr') {
	          info += ' Add a <tbody> to your code to match the DOM tree generated by ' + 'the browser.';
	        }
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a child of <%s>. ' + 'See %s.%s', childTag, ancestorTag, ownerInfo, info) : undefined;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'validateDOMNesting(...): <%s> cannot appear as a descendant of ' + '<%s>. See %s.', childTag, ancestorTag, ownerInfo) : undefined;
	      }
	    }
	  };
	
	  validateDOMNesting.ancestorInfoContextKey = '__validateDOMNesting_ancestorInfo$' + Math.random().toString(36).slice(2);
	
	  validateDOMNesting.updatedAncestorInfo = updatedAncestorInfo;
	
	  // For testing
	  validateDOMNesting.isTagValidInContext = function (tag, ancestorInfo) {
	    ancestorInfo = ancestorInfo || emptyAncestorInfo;
	    var parentInfo = ancestorInfo.parentTag;
	    var parentTag = parentInfo && parentInfo.tag;
	    return isTagValidWithParent(tag, parentTag) && !findInvalidAncestorForTag(tag, ancestorInfo);
	  };
	}
	
	module.exports = validateDOMNesting;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 117 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactDefaultInjection.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultInjection
	 */
	
	'use strict';
	
	var BeforeInputEventPlugin = __webpack_require__(/*! ./BeforeInputEventPlugin */ 118);
	var ChangeEventPlugin = __webpack_require__(/*! ./ChangeEventPlugin */ 126);
	var ClientReactRootIndex = __webpack_require__(/*! ./ClientReactRootIndex */ 129);
	var DefaultEventPluginOrder = __webpack_require__(/*! ./DefaultEventPluginOrder */ 130);
	var EnterLeaveEventPlugin = __webpack_require__(/*! ./EnterLeaveEventPlugin */ 131);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var HTMLDOMPropertyConfig = __webpack_require__(/*! ./HTMLDOMPropertyConfig */ 135);
	var ReactBrowserComponentMixin = __webpack_require__(/*! ./ReactBrowserComponentMixin */ 136);
	var ReactComponentBrowserEnvironment = __webpack_require__(/*! ./ReactComponentBrowserEnvironment */ 72);
	var ReactDefaultBatchingStrategy = __webpack_require__(/*! ./ReactDefaultBatchingStrategy */ 138);
	var ReactDOMComponent = __webpack_require__(/*! ./ReactDOMComponent */ 139);
	var ReactDOMTextComponent = __webpack_require__(/*! ./ReactDOMTextComponent */ 52);
	var ReactEventListener = __webpack_require__(/*! ./ReactEventListener */ 164);
	var ReactInjection = __webpack_require__(/*! ./ReactInjection */ 167);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 91);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactReconcileTransaction = __webpack_require__(/*! ./ReactReconcileTransaction */ 171);
	var SelectEventPlugin = __webpack_require__(/*! ./SelectEventPlugin */ 176);
	var ServerReactRootIndex = __webpack_require__(/*! ./ServerReactRootIndex */ 177);
	var SimpleEventPlugin = __webpack_require__(/*! ./SimpleEventPlugin */ 178);
	var SVGDOMPropertyConfig = __webpack_require__(/*! ./SVGDOMPropertyConfig */ 187);
	
	var alreadyInjected = false;
	
	function inject() {
	  if (alreadyInjected) {
	    // TODO: This is currently true because these injections are shared between
	    // the client and the server package. They should be built independently
	    // and not share any injection state. Then this problem will be solved.
	    return;
	  }
	  alreadyInjected = true;
	
	  ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
	
	  /**
	   * Inject modules for resolving DOM hierarchy and plugin ordering.
	   */
	  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
	  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
	  ReactInjection.EventPluginHub.injectMount(ReactMount);
	
	  /**
	   * Some important event plugins included by default (without having to require
	   * them).
	   */
	  ReactInjection.EventPluginHub.injectEventPluginsByName({
	    SimpleEventPlugin: SimpleEventPlugin,
	    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
	    ChangeEventPlugin: ChangeEventPlugin,
	    SelectEventPlugin: SelectEventPlugin,
	    BeforeInputEventPlugin: BeforeInputEventPlugin
	  });
	
	  ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);
	
	  ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);
	
	  ReactInjection.Class.injectMixin(ReactBrowserComponentMixin);
	
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
	  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
	
	  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');
	
	  ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
	  ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	
	  ReactInjection.RootIndex.injectCreateReactRootIndex(ExecutionEnvironment.canUseDOM ? ClientReactRootIndex.createReactRootIndex : ServerReactRootIndex.createReactRootIndex);
	
	  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
	
	  if (process.env.NODE_ENV !== 'production') {
	    var url = ExecutionEnvironment.canUseDOM && window.location.href || '';
	    if (/[?&]react_perf\b/.test(url)) {
	      var ReactDefaultPerf = __webpack_require__(/*! ./ReactDefaultPerf */ 188);
	      ReactDefaultPerf.start();
	    }
	  }
	}
	
	module.exports = {
	  inject: inject
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 118 */
/*!***********************************************!*\
  !*** ./~/react/lib/BeforeInputEventPlugin.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015 Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule BeforeInputEventPlugin
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 119);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var FallbackCompositionState = __webpack_require__(/*! ./FallbackCompositionState */ 120);
	var SyntheticCompositionEvent = __webpack_require__(/*! ./SyntheticCompositionEvent */ 122);
	var SyntheticInputEvent = __webpack_require__(/*! ./SyntheticInputEvent */ 124);
	
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	
	var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
	var START_KEYCODE = 229;
	
	var canUseCompositionEvent = ExecutionEnvironment.canUseDOM && 'CompositionEvent' in window;
	
	var documentMode = null;
	if (ExecutionEnvironment.canUseDOM && 'documentMode' in document) {
	  documentMode = document.documentMode;
	}
	
	// Webkit offers a very useful `textInput` event that can be used to
	// directly represent `beforeInput`. The IE `textinput` event is not as
	// useful, so we don't use it.
	var canUseTextInputEvent = ExecutionEnvironment.canUseDOM && 'TextEvent' in window && !documentMode && !isPresto();
	
	// In IE9+, we have access to composition events, but the data supplied
	// by the native compositionend event may be incorrect. Japanese ideographic
	// spaces, for instance (\u3000) are not recorded correctly.
	var useFallbackCompositionData = ExecutionEnvironment.canUseDOM && (!canUseCompositionEvent || documentMode && documentMode > 8 && documentMode <= 11);
	
	/**
	 * Opera <= 12 includes TextEvent in window, but does not fire
	 * text input events. Rely on keypress instead.
	 */
	function isPresto() {
	  var opera = window.opera;
	  return typeof opera === 'object' && typeof opera.version === 'function' && parseInt(opera.version(), 10) <= 12;
	}
	
	var SPACEBAR_CODE = 32;
	var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	// Events and their corresponding property names.
	var eventTypes = {
	  beforeInput: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBeforeInput: null }),
	      captured: keyOf({ onBeforeInputCapture: null })
	    },
	    dependencies: [topLevelTypes.topCompositionEnd, topLevelTypes.topKeyPress, topLevelTypes.topTextInput, topLevelTypes.topPaste]
	  },
	  compositionEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionEnd: null }),
	      captured: keyOf({ onCompositionEndCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionEnd, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionStart: null }),
	      captured: keyOf({ onCompositionStartCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionStart, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  },
	  compositionUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCompositionUpdate: null }),
	      captured: keyOf({ onCompositionUpdateCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topCompositionUpdate, topLevelTypes.topKeyDown, topLevelTypes.topKeyPress, topLevelTypes.topKeyUp, topLevelTypes.topMouseDown]
	  }
	};
	
	// Track whether we've ever handled a keypress on the space key.
	var hasSpaceKeypress = false;
	
	/**
	 * Return whether a native keypress event is assumed to be a command.
	 * This is required because Firefox fires `keypress` events for key commands
	 * (cut, copy, select-all, etc.) even though no character is inserted.
	 */
	function isKeypressCommand(nativeEvent) {
	  return (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
	  // ctrlKey && altKey is equivalent to AltGr, and is not a command.
	  !(nativeEvent.ctrlKey && nativeEvent.altKey);
	}
	
	/**
	 * Translate native top level events into event types.
	 *
	 * @param {string} topLevelType
	 * @return {object}
	 */
	function getCompositionEventType(topLevelType) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionStart:
	      return eventTypes.compositionStart;
	    case topLevelTypes.topCompositionEnd:
	      return eventTypes.compositionEnd;
	    case topLevelTypes.topCompositionUpdate:
	      return eventTypes.compositionUpdate;
	  }
	}
	
	/**
	 * Does our fallback best-guess model think this event signifies that
	 * composition has begun?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionStart(topLevelType, nativeEvent) {
	  return topLevelType === topLevelTypes.topKeyDown && nativeEvent.keyCode === START_KEYCODE;
	}
	
	/**
	 * Does our fallback mode think that this event is the end of composition?
	 *
	 * @param {string} topLevelType
	 * @param {object} nativeEvent
	 * @return {boolean}
	 */
	function isFallbackCompositionEnd(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topKeyUp:
	      // Command keys insert or clear IME input.
	      return END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1;
	    case topLevelTypes.topKeyDown:
	      // Expect IME keyCode on each keydown. If we get any other
	      // code we must have exited earlier.
	      return nativeEvent.keyCode !== START_KEYCODE;
	    case topLevelTypes.topKeyPress:
	    case topLevelTypes.topMouseDown:
	    case topLevelTypes.topBlur:
	      // Events are not possible without cancelling IME.
	      return true;
	    default:
	      return false;
	  }
	}
	
	/**
	 * Google Input Tools provides composition data via a CustomEvent,
	 * with the `data` property populated in the `detail` object. If this
	 * is available on the event object, use it. If not, this is a plain
	 * composition event and we have nothing special to extract.
	 *
	 * @param {object} nativeEvent
	 * @return {?string}
	 */
	function getDataFromCustomEvent(nativeEvent) {
	  var detail = nativeEvent.detail;
	  if (typeof detail === 'object' && 'data' in detail) {
	    return detail.data;
	  }
	  return null;
	}
	
	// Track the current IME composition fallback object, if any.
	var currentComposition = null;
	
	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticCompositionEvent.
	 */
	function extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var eventType;
	  var fallbackData;
	
	  if (canUseCompositionEvent) {
	    eventType = getCompositionEventType(topLevelType);
	  } else if (!currentComposition) {
	    if (isFallbackCompositionStart(topLevelType, nativeEvent)) {
	      eventType = eventTypes.compositionStart;
	    }
	  } else if (isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	    eventType = eventTypes.compositionEnd;
	  }
	
	  if (!eventType) {
	    return null;
	  }
	
	  if (useFallbackCompositionData) {
	    // The current composition is stored statically and must not be
	    // overwritten while composition continues.
	    if (!currentComposition && eventType === eventTypes.compositionStart) {
	      currentComposition = FallbackCompositionState.getPooled(topLevelTarget);
	    } else if (eventType === eventTypes.compositionEnd) {
	      if (currentComposition) {
	        fallbackData = currentComposition.getData();
	      }
	    }
	  }
	
	  var event = SyntheticCompositionEvent.getPooled(eventType, topLevelTargetID, nativeEvent, nativeEventTarget);
	
	  if (fallbackData) {
	    // Inject data generated from fallback path into the synthetic event.
	    // This matches the property of native CompositionEventInterface.
	    event.data = fallbackData;
	  } else {
	    var customData = getDataFromCustomEvent(nativeEvent);
	    if (customData !== null) {
	      event.data = customData;
	    }
	  }
	
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}
	
	/**
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The string corresponding to this `beforeInput` event.
	 */
	function getNativeBeforeInputChars(topLevelType, nativeEvent) {
	  switch (topLevelType) {
	    case topLevelTypes.topCompositionEnd:
	      return getDataFromCustomEvent(nativeEvent);
	    case topLevelTypes.topKeyPress:
	      /**
	       * If native `textInput` events are available, our goal is to make
	       * use of them. However, there is a special case: the spacebar key.
	       * In Webkit, preventing default on a spacebar `textInput` event
	       * cancels character insertion, but it *also* causes the browser
	       * to fall back to its default spacebar behavior of scrolling the
	       * page.
	       *
	       * Tracking at:
	       * https://code.google.com/p/chromium/issues/detail?id=355103
	       *
	       * To avoid this issue, use the keypress event as if no `textInput`
	       * event is available.
	       */
	      var which = nativeEvent.which;
	      if (which !== SPACEBAR_CODE) {
	        return null;
	      }
	
	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;
	
	    case topLevelTypes.topTextInput:
	      // Record the characters to be added to the DOM.
	      var chars = nativeEvent.data;
	
	      // If it's a spacebar character, assume that we have already handled
	      // it at the keypress level and bail immediately. Android Chrome
	      // doesn't give us keycodes, so we need to blacklist it.
	      if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
	        return null;
	      }
	
	      return chars;
	
	    default:
	      // For other native event types, do nothing.
	      return null;
	  }
	}
	
	/**
	 * For browsers that do not provide the `textInput` event, extract the
	 * appropriate string to use for SyntheticInputEvent.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?string} The fallback string for this `beforeInput` event.
	 */
	function getFallbackBeforeInputChars(topLevelType, nativeEvent) {
	  // If we are currently composing (IME) and using a fallback to do so,
	  // try to extract the composed characters from the fallback object.
	  if (currentComposition) {
	    if (topLevelType === topLevelTypes.topCompositionEnd || isFallbackCompositionEnd(topLevelType, nativeEvent)) {
	      var chars = currentComposition.getData();
	      FallbackCompositionState.release(currentComposition);
	      currentComposition = null;
	      return chars;
	    }
	    return null;
	  }
	
	  switch (topLevelType) {
	    case topLevelTypes.topPaste:
	      // If a paste event occurs after a keypress, throw out the input
	      // chars. Paste events should not lead to BeforeInput events.
	      return null;
	    case topLevelTypes.topKeyPress:
	      /**
	       * As of v27, Firefox may fire keypress events even when no character
	       * will be inserted. A few possibilities:
	       *
	       * - `which` is `0`. Arrow keys, Esc key, etc.
	       *
	       * - `which` is the pressed key code, but no char is available.
	       *   Ex: 'AltGr + d` in Polish. There is no modified character for
	       *   this key combination and no character is inserted into the
	       *   document, but FF fires the keypress for char code `100` anyway.
	       *   No `input` event will occur.
	       *
	       * - `which` is the pressed key code, but a command combination is
	       *   being used. Ex: `Cmd+C`. No character is inserted, and no
	       *   `input` event will occur.
	       */
	      if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
	        return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case topLevelTypes.topCompositionEnd:
	      return useFallbackCompositionData ? null : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	
	/**
	 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
	 * `textInput` or fallback behavior.
	 *
	 * @param {string} topLevelType Record from `EventConstants`.
	 * @param {DOMEventTarget} topLevelTarget The listening component root node.
	 * @param {string} topLevelTargetID ID of `topLevelTarget`.
	 * @param {object} nativeEvent Native browser event.
	 * @return {?object} A SyntheticInputEvent.
	 */
	function extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	  var chars;
	
	  if (canUseTextInputEvent) {
	    chars = getNativeBeforeInputChars(topLevelType, nativeEvent);
	  } else {
	    chars = getFallbackBeforeInputChars(topLevelType, nativeEvent);
	  }
	
	  // If no characters are being inserted, no BeforeInput event should
	  // be fired.
	  if (!chars) {
	    return null;
	  }
	
	  var event = SyntheticInputEvent.getPooled(eventTypes.beforeInput, topLevelTargetID, nativeEvent, nativeEventTarget);
	
	  event.data = chars;
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	  return event;
	}
	
	/**
	 * Create an `onBeforeInput` event to match
	 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
	 *
	 * This event plugin is based on the native `textInput` event
	 * available in Chrome, Safari, Opera, and IE. This event fires after
	 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
	 *
	 * `beforeInput` is spec'd but not implemented in any browsers, and
	 * the `input` event does not provide any useful information about what has
	 * actually been added, contrary to the spec. Thus, `textInput` is the best
	 * available event to identify the characters that have actually been inserted
	 * into the target node.
	 *
	 * This plugin is also responsible for emitting `composition` events, thus
	 * allowing us to share composition fallback code for both `beforeInput` and
	 * `composition` event types.
	 */
	var BeforeInputEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    return [extractCompositionEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget), extractBeforeInputEvent(topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget)];
	  }
	};
	
	module.exports = BeforeInputEventPlugin;

/***/ },
/* 119 */
/*!*****************************************!*\
  !*** ./~/react/lib/EventPropagators.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EventPropagators
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 77);
	
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var accumulateInto = __webpack_require__(/*! ./accumulateInto */ 81);
	var forEachAccumulated = __webpack_require__(/*! ./forEachAccumulated */ 82);
	
	var PropagationPhases = EventConstants.PropagationPhases;
	var getListener = EventPluginHub.getListener;
	
	/**
	 * Some event types have a notion of different registration names for different
	 * "phases" of propagation. This finds listeners by a given phase.
	 */
	function listenerAtPhase(id, event, propagationPhase) {
	  var registrationName = event.dispatchConfig.phasedRegistrationNames[propagationPhase];
	  return getListener(id, registrationName);
	}
	
	/**
	 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
	 * here, allows us to not have to bind or create functions for each event.
	 * Mutating the event's members allows us to not have to create a wrapping
	 * "dispatch" object that pairs the event with the listener.
	 */
	function accumulateDirectionalDispatches(domID, upwards, event) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(domID, 'Dispatching id must not be null') : undefined;
	  }
	  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
	  var listener = listenerAtPhase(domID, event, phase);
	  if (listener) {
	    event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
	  }
	}
	
	/**
	 * Collect dispatches (must be entirely collected before dispatching - see unit
	 * tests). Lazily allocate the array to conserve memory.  We must loop through
	 * each event and perform the traversal for each one. We cannot perform a
	 * single traversal for the entire collection of events because each event may
	 * have a different target.
	 */
	function accumulateTwoPhaseDispatchesSingle(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}
	
	/**
	 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
	 */
	function accumulateTwoPhaseDispatchesSingleSkipTarget(event) {
	  if (event && event.dispatchConfig.phasedRegistrationNames) {
	    EventPluginHub.injection.getInstanceHandle().traverseTwoPhaseSkipTarget(event.dispatchMarker, accumulateDirectionalDispatches, event);
	  }
	}
	
	/**
	 * Accumulates without regard to direction, does not look for phased
	 * registration names. Same as `accumulateDirectDispatchesSingle` but without
	 * requiring that the `dispatchMarker` be the same as the dispatched ID.
	 */
	function accumulateDispatches(id, ignoredDirection, event) {
	  if (event && event.dispatchConfig.registrationName) {
	    var registrationName = event.dispatchConfig.registrationName;
	    var listener = getListener(id, registrationName);
	    if (listener) {
	      event._dispatchListeners = accumulateInto(event._dispatchListeners, listener);
	      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
	    }
	  }
	}
	
	/**
	 * Accumulates dispatches on an `SyntheticEvent`, but only for the
	 * `dispatchMarker`.
	 * @param {SyntheticEvent} event
	 */
	function accumulateDirectDispatchesSingle(event) {
	  if (event && event.dispatchConfig.registrationName) {
	    accumulateDispatches(event.dispatchMarker, null, event);
	  }
	}
	
	function accumulateTwoPhaseDispatches(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
	}
	
	function accumulateTwoPhaseDispatchesSkipTarget(events) {
	  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingleSkipTarget);
	}
	
	function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
	  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(fromID, toID, accumulateDispatches, leave, enter);
	}
	
	function accumulateDirectDispatches(events) {
	  forEachAccumulated(events, accumulateDirectDispatchesSingle);
	}
	
	/**
	 * A small set of propagation patterns, each of which will accept a small amount
	 * of information, and generate a set of "dispatch ready event objects" - which
	 * are sets of events that have already been annotated with a set of dispatched
	 * listener functions/ids. The API is designed this way to discourage these
	 * propagation strategies from actually executing the dispatches, since we
	 * always want to collect the entire set of dispatches before executing event a
	 * single one.
	 *
	 * @constructor EventPropagators
	 */
	var EventPropagators = {
	  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
	  accumulateTwoPhaseDispatchesSkipTarget: accumulateTwoPhaseDispatchesSkipTarget,
	  accumulateDirectDispatches: accumulateDirectDispatches,
	  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
	};
	
	module.exports = EventPropagators;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 120 */
/*!*************************************************!*\
  !*** ./~/react/lib/FallbackCompositionState.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule FallbackCompositionState
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var getTextContentAccessor = __webpack_require__(/*! ./getTextContentAccessor */ 121);
	
	/**
	 * This helper class stores information about text content of a target node,
	 * allowing comparison of content before and after a given event.
	 *
	 * Identify the node where selection currently begins, then observe
	 * both its text content and its current position in the DOM. Since the
	 * browser may natively replace the target node during composition, we can
	 * use its position to find its replacement.
	 *
	 * @param {DOMEventTarget} root
	 */
	function FallbackCompositionState(root) {
	  this._root = root;
	  this._startText = this.getText();
	  this._fallbackText = null;
	}
	
	assign(FallbackCompositionState.prototype, {
	  destructor: function () {
	    this._root = null;
	    this._startText = null;
	    this._fallbackText = null;
	  },
	
	  /**
	   * Get current text of input.
	   *
	   * @return {string}
	   */
	  getText: function () {
	    if ('value' in this._root) {
	      return this._root.value;
	    }
	    return this._root[getTextContentAccessor()];
	  },
	
	  /**
	   * Determine the differing substring between the initially stored
	   * text content and the current content.
	   *
	   * @return {string}
	   */
	  getData: function () {
	    if (this._fallbackText) {
	      return this._fallbackText;
	    }
	
	    var start;
	    var startValue = this._startText;
	    var startLength = startValue.length;
	    var end;
	    var endValue = this.getText();
	    var endLength = endValue.length;
	
	    for (start = 0; start < startLength; start++) {
	      if (startValue[start] !== endValue[start]) {
	        break;
	      }
	    }
	
	    var minEnd = startLength - start;
	    for (end = 1; end <= minEnd; end++) {
	      if (startValue[startLength - end] !== endValue[endLength - end]) {
	        break;
	      }
	    }
	
	    var sliceTail = end > 1 ? 1 - end : undefined;
	    this._fallbackText = endValue.slice(start, sliceTail);
	    return this._fallbackText;
	  }
	});
	
	PooledClass.addPoolingTo(FallbackCompositionState);
	
	module.exports = FallbackCompositionState;

/***/ },
/* 121 */
/*!***********************************************!*\
  !*** ./~/react/lib/getTextContentAccessor.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getTextContentAccessor
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	
	var contentKey = null;
	
	/**
	 * Gets the key used to access text content on a DOM node.
	 *
	 * @return {?string} Key used to access text content.
	 * @internal
	 */
	function getTextContentAccessor() {
	  if (!contentKey && ExecutionEnvironment.canUseDOM) {
	    // Prefer textContent to innerText because many browsers support both but
	    // SVG <text> elements don't support innerText even when <div> does.
	    contentKey = 'textContent' in document.documentElement ? 'textContent' : 'innerText';
	  }
	  return contentKey;
	}
	
	module.exports = getTextContentAccessor;

/***/ },
/* 122 */
/*!**************************************************!*\
  !*** ./~/react/lib/SyntheticCompositionEvent.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticCompositionEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
	 */
	var CompositionEventInterface = {
	  data: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticCompositionEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticCompositionEvent, CompositionEventInterface);
	
	module.exports = SyntheticCompositionEvent;

/***/ },
/* 123 */
/*!***************************************!*\
  !*** ./~/react/lib/SyntheticEvent.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var EventInterface = {
	  type: null,
	  // currentTarget is set when dispatching; no use in copying it here
	  currentTarget: emptyFunction.thatReturnsNull,
	  eventPhase: null,
	  bubbles: null,
	  cancelable: null,
	  timeStamp: function (event) {
	    return event.timeStamp || Date.now();
	  },
	  defaultPrevented: null,
	  isTrusted: null
	};
	
	/**
	 * Synthetic events are dispatched by event plugins, typically in response to a
	 * top-level event delegation handler.
	 *
	 * These systems should generally use pooling to reduce the frequency of garbage
	 * collection. The system should check `isPersistent` to determine whether the
	 * event should be released into the pool after being dispatched. Users that
	 * need a persisted event should invoke `persist`.
	 *
	 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
	 * normalizing browser quirks. Subclasses do not necessarily have to implement a
	 * DOM interface; custom application-specific events can also subclass this.
	 *
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 */
	function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  this.dispatchConfig = dispatchConfig;
	  this.dispatchMarker = dispatchMarker;
	  this.nativeEvent = nativeEvent;
	  this.target = nativeEventTarget;
	  this.currentTarget = nativeEventTarget;
	
	  var Interface = this.constructor.Interface;
	  for (var propName in Interface) {
	    if (!Interface.hasOwnProperty(propName)) {
	      continue;
	    }
	    var normalize = Interface[propName];
	    if (normalize) {
	      this[propName] = normalize(nativeEvent);
	    } else {
	      this[propName] = nativeEvent[propName];
	    }
	  }
	
	  var defaultPrevented = nativeEvent.defaultPrevented != null ? nativeEvent.defaultPrevented : nativeEvent.returnValue === false;
	  if (defaultPrevented) {
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  } else {
	    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
	  }
	  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
	}
	
	assign(SyntheticEvent.prototype, {
	
	  preventDefault: function () {
	    this.defaultPrevented = true;
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `preventDefault` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }
	
	    if (event.preventDefault) {
	      event.preventDefault();
	    } else {
	      event.returnValue = false;
	    }
	    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
	  },
	
	  stopPropagation: function () {
	    var event = this.nativeEvent;
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(event, 'This synthetic event is reused for performance reasons. If you\'re ' + 'seeing this, you\'re calling `stopPropagation` on a ' + 'released/nullified synthetic event. This is a no-op. See ' + 'https://fb.me/react-event-pooling for more information.') : undefined;
	    }
	    if (!event) {
	      return;
	    }
	
	    if (event.stopPropagation) {
	      event.stopPropagation();
	    } else {
	      event.cancelBubble = true;
	    }
	    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
	  },
	
	  /**
	   * We release all dispatched `SyntheticEvent`s after each event loop, adding
	   * them back into the pool. This allows a way to hold onto a reference that
	   * won't be added back into the pool.
	   */
	  persist: function () {
	    this.isPersistent = emptyFunction.thatReturnsTrue;
	  },
	
	  /**
	   * Checks if this event should be released back into the pool.
	   *
	   * @return {boolean} True if this should not be released, false otherwise.
	   */
	  isPersistent: emptyFunction.thatReturnsFalse,
	
	  /**
	   * `PooledClass` looks for `destructor` on each instance it releases.
	   */
	  destructor: function () {
	    var Interface = this.constructor.Interface;
	    for (var propName in Interface) {
	      this[propName] = null;
	    }
	    this.dispatchConfig = null;
	    this.dispatchMarker = null;
	    this.nativeEvent = null;
	  }
	
	});
	
	SyntheticEvent.Interface = EventInterface;
	
	/**
	 * Helper to reduce boilerplate when creating subclasses.
	 *
	 * @param {function} Class
	 * @param {?object} Interface
	 */
	SyntheticEvent.augmentClass = function (Class, Interface) {
	  var Super = this;
	
	  var prototype = Object.create(Super.prototype);
	  assign(prototype, Class.prototype);
	  Class.prototype = prototype;
	  Class.prototype.constructor = Class;
	
	  Class.Interface = assign({}, Super.Interface, Interface);
	  Class.augmentClass = Super.augmentClass;
	
	  PooledClass.addPoolingTo(Class, PooledClass.fourArgumentPooler);
	};
	
	PooledClass.addPoolingTo(SyntheticEvent, PooledClass.fourArgumentPooler);
	
	module.exports = SyntheticEvent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 124 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticInputEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticInputEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
	 *      /#events-inputevents
	 */
	var InputEventInterface = {
	  data: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticInputEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticInputEvent, InputEventInterface);
	
	module.exports = SyntheticInputEvent;

/***/ },
/* 125 */
/*!*****************************!*\
  !*** ./~/fbjs/lib/keyOf.js ***!
  \*****************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule keyOf
	 */
	
	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	"use strict";
	
	var keyOf = function (oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};
	
	module.exports = keyOf;

/***/ },
/* 126 */
/*!******************************************!*\
  !*** ./~/react/lib/ChangeEventPlugin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ChangeEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 77);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 119);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	
	var getEventTarget = __webpack_require__(/*! ./getEventTarget */ 127);
	var isEventSupported = __webpack_require__(/*! ./isEventSupported */ 86);
	var isTextInputElement = __webpack_require__(/*! ./isTextInputElement */ 128);
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  change: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onChange: null }),
	      captured: keyOf({ onChangeCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topChange, topLevelTypes.topClick, topLevelTypes.topFocus, topLevelTypes.topInput, topLevelTypes.topKeyDown, topLevelTypes.topKeyUp, topLevelTypes.topSelectionChange]
	  }
	};
	
	/**
	 * For IE shims
	 */
	var activeElement = null;
	var activeElementID = null;
	var activeElementValue = null;
	var activeElementValueProp = null;
	
	/**
	 * SECTION: handle `change` event
	 */
	function shouldUseChangeEvent(elem) {
	  var nodeName = elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName === 'select' || nodeName === 'input' && elem.type === 'file';
	}
	
	var doesChangeEventBubble = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // See `handleChange` comment below
	  doesChangeEventBubble = isEventSupported('change') && (!('documentMode' in document) || document.documentMode > 8);
	}
	
	function manualDispatchChangeEvent(nativeEvent) {
	  var event = SyntheticEvent.getPooled(eventTypes.change, activeElementID, nativeEvent, getEventTarget(nativeEvent));
	  EventPropagators.accumulateTwoPhaseDispatches(event);
	
	  // If change and propertychange bubbled, we'd just bind to it like all the
	  // other events and have it go through ReactBrowserEventEmitter. Since it
	  // doesn't, we manually listen for the events and so we have to enqueue and
	  // process the abstract event manually.
	  //
	  // Batching is necessary here in order to ensure that all event handlers run
	  // before the next rerender (including event handlers attached to ancestor
	  // elements instead of directly on the input). Without this, controlled
	  // components don't work properly in conjunction with event bubbling because
	  // the component is rerendered and the value reverted before all the event
	  // handlers can run. See https://github.com/facebook/react/issues/708.
	  ReactUpdates.batchedUpdates(runEventInBatch, event);
	}
	
	function runEventInBatch(event) {
	  EventPluginHub.enqueueEvents(event);
	  EventPluginHub.processEventQueue(false);
	}
	
	function startWatchingForChangeEventIE8(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
	}
	
	function stopWatchingForChangeEventIE8() {
	  if (!activeElement) {
	    return;
	  }
	  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
	  activeElement = null;
	  activeElementID = null;
	}
	
	function getTargetIDForChangeEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topChange) {
	    return topLevelTargetID;
	  }
	}
	function handleEventsForChangeEventIE8(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForChangeEventIE8();
	    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForChangeEventIE8();
	  }
	}
	
	/**
	 * SECTION: handle `input` event
	 */
	var isInputEventSupported = false;
	if (ExecutionEnvironment.canUseDOM) {
	  // IE9 claims to support the input event but fails to trigger it when
	  // deleting text, so we ignore its input events
	  isInputEventSupported = isEventSupported('input') && (!('documentMode' in document) || document.documentMode > 9);
	}
	
	/**
	 * (For old IE.) Replacement getter/setter for the `value` property that gets
	 * set on the active element.
	 */
	var newValueProp = {
	  get: function () {
	    return activeElementValueProp.get.call(this);
	  },
	  set: function (val) {
	    // Cast to a string so we can do equality checks.
	    activeElementValue = '' + val;
	    activeElementValueProp.set.call(this, val);
	  }
	};
	
	/**
	 * (For old IE.) Starts tracking propertychange events on the passed-in element
	 * and override the value property so that we can distinguish user events from
	 * value changes in JS.
	 */
	function startWatchingForValueChange(target, targetID) {
	  activeElement = target;
	  activeElementID = targetID;
	  activeElementValue = target.value;
	  activeElementValueProp = Object.getOwnPropertyDescriptor(target.constructor.prototype, 'value');
	
	  // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
	  // on DOM elements
	  Object.defineProperty(activeElement, 'value', newValueProp);
	  activeElement.attachEvent('onpropertychange', handlePropertyChange);
	}
	
	/**
	 * (For old IE.) Removes the event listeners from the currently-tracked element,
	 * if any exists.
	 */
	function stopWatchingForValueChange() {
	  if (!activeElement) {
	    return;
	  }
	
	  // delete restores the original property definition
	  delete activeElement.value;
	  activeElement.detachEvent('onpropertychange', handlePropertyChange);
	
	  activeElement = null;
	  activeElementID = null;
	  activeElementValue = null;
	  activeElementValueProp = null;
	}
	
	/**
	 * (For old IE.) Handles a propertychange event, sending a `change` event if
	 * the value of the active element has changed.
	 */
	function handlePropertyChange(nativeEvent) {
	  if (nativeEvent.propertyName !== 'value') {
	    return;
	  }
	  var value = nativeEvent.srcElement.value;
	  if (value === activeElementValue) {
	    return;
	  }
	  activeElementValue = value;
	
	  manualDispatchChangeEvent(nativeEvent);
	}
	
	/**
	 * If a `change` event should be fired, returns the target's ID.
	 */
	function getTargetIDForInputEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topInput) {
	    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
	    // what we want so fall through here and trigger an abstract event
	    return topLevelTargetID;
	  }
	}
	
	// For IE8 and IE9.
	function handleEventsForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topFocus) {
	    // In IE8, we can capture almost all .value changes by adding a
	    // propertychange handler and looking for events with propertyName
	    // equal to 'value'
	    // In IE9, propertychange fires for most input events but is buggy and
	    // doesn't fire when text is deleted, but conveniently, selectionchange
	    // appears to fire in all of the remaining cases so we catch those and
	    // forward the event if the value has changed
	    // In either case, we don't want to call the event handler if the value
	    // is changed from JS so we redefine a setter for `.value` that updates
	    // our activeElementValue variable, allowing us to ignore those changes
	    //
	    // stopWatching() should be a noop here but we call it just in case we
	    // missed a blur event somehow.
	    stopWatchingForValueChange();
	    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
	  } else if (topLevelType === topLevelTypes.topBlur) {
	    stopWatchingForValueChange();
	  }
	}
	
	// For IE8 and IE9.
	function getTargetIDForInputEventIE(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topSelectionChange || topLevelType === topLevelTypes.topKeyUp || topLevelType === topLevelTypes.topKeyDown) {
	    // On the selectionchange event, the target is just document which isn't
	    // helpful for us so just check activeElement instead.
	    //
	    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
	    // propertychange on the first input event after setting `value` from a
	    // script and fires only keydown, keypress, keyup. Catching keyup usually
	    // gets it and catching keydown lets us fire an event for the first
	    // keystroke if user does a key repeat (it'll be a little delayed: right
	    // before the second keystroke). Other input methods (e.g., paste) seem to
	    // fire selectionchange normally.
	    if (activeElement && activeElement.value !== activeElementValue) {
	      activeElementValue = activeElement.value;
	      return activeElementID;
	    }
	  }
	}
	
	/**
	 * SECTION: handle `click` event
	 */
	function shouldUseClickEvent(elem) {
	  // Use the `click` event to detect changes to checkbox and radio inputs.
	  // This approach works across all browsers, whereas `change` does not fire
	  // until `blur` in IE8.
	  return elem.nodeName && elem.nodeName.toLowerCase() === 'input' && (elem.type === 'checkbox' || elem.type === 'radio');
	}
	
	function getTargetIDForClickEvent(topLevelType, topLevelTarget, topLevelTargetID) {
	  if (topLevelType === topLevelTypes.topClick) {
	    return topLevelTargetID;
	  }
	}
	
	/**
	 * This plugin creates an `onChange` event that normalizes change events
	 * across form elements. This event fires at a time when it's possible to
	 * change the element's value without seeing a flicker.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - select
	 */
	var ChangeEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	
	    var getTargetIDFunc, handleEventFunc;
	    if (shouldUseChangeEvent(topLevelTarget)) {
	      if (doesChangeEventBubble) {
	        getTargetIDFunc = getTargetIDForChangeEvent;
	      } else {
	        handleEventFunc = handleEventsForChangeEventIE8;
	      }
	    } else if (isTextInputElement(topLevelTarget)) {
	      if (isInputEventSupported) {
	        getTargetIDFunc = getTargetIDForInputEvent;
	      } else {
	        getTargetIDFunc = getTargetIDForInputEventIE;
	        handleEventFunc = handleEventsForInputEventIE;
	      }
	    } else if (shouldUseClickEvent(topLevelTarget)) {
	      getTargetIDFunc = getTargetIDForClickEvent;
	    }
	
	    if (getTargetIDFunc) {
	      var targetID = getTargetIDFunc(topLevelType, topLevelTarget, topLevelTargetID);
	      if (targetID) {
	        var event = SyntheticEvent.getPooled(eventTypes.change, targetID, nativeEvent, nativeEventTarget);
	        event.type = 'change';
	        EventPropagators.accumulateTwoPhaseDispatches(event);
	        return event;
	      }
	    }
	
	    if (handleEventFunc) {
	      handleEventFunc(topLevelType, topLevelTarget, topLevelTargetID);
	    }
	  }
	
	};
	
	module.exports = ChangeEventPlugin;

/***/ },
/* 127 */
/*!***************************************!*\
  !*** ./~/react/lib/getEventTarget.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventTarget
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Gets the target node from a native browser event by accounting for
	 * inconsistencies in browser DOM APIs.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {DOMEventTarget} Target node.
	 */
	function getEventTarget(nativeEvent) {
	  var target = nativeEvent.target || nativeEvent.srcElement || window;
	  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
	  // @see http://www.quirksmode.org/js/events_properties.html
	  return target.nodeType === 3 ? target.parentNode : target;
	}
	
	module.exports = getEventTarget;

/***/ },
/* 128 */
/*!*******************************************!*\
  !*** ./~/react/lib/isTextInputElement.js ***!
  \*******************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule isTextInputElement
	 */
	
	'use strict';
	
	/**
	 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
	 */
	var supportedInputTypes = {
	  'color': true,
	  'date': true,
	  'datetime': true,
	  'datetime-local': true,
	  'email': true,
	  'month': true,
	  'number': true,
	  'password': true,
	  'range': true,
	  'search': true,
	  'tel': true,
	  'text': true,
	  'time': true,
	  'url': true,
	  'week': true
	};
	
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return nodeName && (nodeName === 'input' && supportedInputTypes[elem.type] || nodeName === 'textarea');
	}
	
	module.exports = isTextInputElement;

/***/ },
/* 129 */
/*!*********************************************!*\
  !*** ./~/react/lib/ClientReactRootIndex.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ClientReactRootIndex
	 * @typechecks
	 */
	
	'use strict';
	
	var nextReactRootIndex = 0;
	
	var ClientReactRootIndex = {
	  createReactRootIndex: function () {
	    return nextReactRootIndex++;
	  }
	};
	
	module.exports = ClientReactRootIndex;

/***/ },
/* 130 */
/*!************************************************!*\
  !*** ./~/react/lib/DefaultEventPluginOrder.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule DefaultEventPluginOrder
	 */
	
	'use strict';
	
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	
	/**
	 * Module that is injectable into `EventPluginHub`, that specifies a
	 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
	 * plugins, without having to package every one of them. This is better than
	 * having plugins be ordered in the same order that they are injected because
	 * that ordering would be influenced by the packaging order.
	 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
	 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
	 */
	var DefaultEventPluginOrder = [keyOf({ ResponderEventPlugin: null }), keyOf({ SimpleEventPlugin: null }), keyOf({ TapEventPlugin: null }), keyOf({ EnterLeaveEventPlugin: null }), keyOf({ ChangeEventPlugin: null }), keyOf({ SelectEventPlugin: null }), keyOf({ BeforeInputEventPlugin: null })];
	
	module.exports = DefaultEventPluginOrder;

/***/ },
/* 131 */
/*!**********************************************!*\
  !*** ./~/react/lib/EnterLeaveEventPlugin.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule EnterLeaveEventPlugin
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 119);
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 132);
	
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	var getFirstReactDOM = ReactMount.getFirstReactDOM;
	
	var eventTypes = {
	  mouseEnter: {
	    registrationName: keyOf({ onMouseEnter: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  },
	  mouseLeave: {
	    registrationName: keyOf({ onMouseLeave: null }),
	    dependencies: [topLevelTypes.topMouseOut, topLevelTypes.topMouseOver]
	  }
	};
	
	var extractedEvents = [null, null];
	
	var EnterLeaveEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * For almost every interaction we care about, there will be both a top-level
	   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
	   * we do not extract duplicate events. However, moving the mouse into the
	   * browser from outside will not fire a `mouseout` event. In this case, we use
	   * the `mouseover` top-level event.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (topLevelType === topLevelTypes.topMouseOver && (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
	      return null;
	    }
	    if (topLevelType !== topLevelTypes.topMouseOut && topLevelType !== topLevelTypes.topMouseOver) {
	      // Must not be a mouse in or mouse out - ignoring.
	      return null;
	    }
	
	    var win;
	    if (topLevelTarget.window === topLevelTarget) {
	      // `topLevelTarget` is probably a window object.
	      win = topLevelTarget;
	    } else {
	      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	      var doc = topLevelTarget.ownerDocument;
	      if (doc) {
	        win = doc.defaultView || doc.parentWindow;
	      } else {
	        win = window;
	      }
	    }
	
	    var from;
	    var to;
	    var fromID = '';
	    var toID = '';
	    if (topLevelType === topLevelTypes.topMouseOut) {
	      from = topLevelTarget;
	      fromID = topLevelTargetID;
	      to = getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement);
	      if (to) {
	        toID = ReactMount.getID(to);
	      } else {
	        to = win;
	      }
	      to = to || win;
	    } else {
	      from = win;
	      to = topLevelTarget;
	      toID = topLevelTargetID;
	    }
	
	    if (from === to) {
	      // Nothing pertains to our managed components.
	      return null;
	    }
	
	    var leave = SyntheticMouseEvent.getPooled(eventTypes.mouseLeave, fromID, nativeEvent, nativeEventTarget);
	    leave.type = 'mouseleave';
	    leave.target = from;
	    leave.relatedTarget = to;
	
	    var enter = SyntheticMouseEvent.getPooled(eventTypes.mouseEnter, toID, nativeEvent, nativeEventTarget);
	    enter.type = 'mouseenter';
	    enter.target = to;
	    enter.relatedTarget = from;
	
	    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);
	
	    extractedEvents[0] = leave;
	    extractedEvents[1] = enter;
	
	    return extractedEvents;
	  }
	
	};
	
	module.exports = EnterLeaveEventPlugin;

/***/ },
/* 132 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticMouseEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticMouseEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 133);
	var ViewportMetrics = __webpack_require__(/*! ./ViewportMetrics */ 84);
	
	var getEventModifierState = __webpack_require__(/*! ./getEventModifierState */ 134);
	
	/**
	 * @interface MouseEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var MouseEventInterface = {
	  screenX: null,
	  screenY: null,
	  clientX: null,
	  clientY: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  getModifierState: getEventModifierState,
	  button: function (event) {
	    // Webkit, Firefox, IE9+
	    // which:  1 2 3
	    // button: 0 1 2 (standard)
	    var button = event.button;
	    if ('which' in event) {
	      return button;
	    }
	    // IE<9
	    // which:  undefined
	    // button: 0 0 0
	    // button: 1 4 2 (onmouseup)
	    return button === 2 ? 2 : button === 4 ? 1 : 0;
	  },
	  buttons: null,
	  relatedTarget: function (event) {
	    return event.relatedTarget || (event.fromElement === event.srcElement ? event.toElement : event.fromElement);
	  },
	  // "Proprietary" Interface.
	  pageX: function (event) {
	    return 'pageX' in event ? event.pageX : event.clientX + ViewportMetrics.currentScrollLeft;
	  },
	  pageY: function (event) {
	    return 'pageY' in event ? event.pageY : event.clientY + ViewportMetrics.currentScrollTop;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);
	
	module.exports = SyntheticMouseEvent;

/***/ },
/* 133 */
/*!*****************************************!*\
  !*** ./~/react/lib/SyntheticUIEvent.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticUIEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	
	var getEventTarget = __webpack_require__(/*! ./getEventTarget */ 127);
	
	/**
	 * @interface UIEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var UIEventInterface = {
	  view: function (event) {
	    if (event.view) {
	      return event.view;
	    }
	
	    var target = getEventTarget(event);
	    if (target != null && target.window === target) {
	      // target is a window object
	      return target;
	    }
	
	    var doc = target.ownerDocument;
	    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
	    if (doc) {
	      return doc.defaultView || doc.parentWindow;
	    } else {
	      return window;
	    }
	  },
	  detail: function (event) {
	    return event.detail || 0;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticEvent}
	 */
	function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);
	
	module.exports = SyntheticUIEvent;

/***/ },
/* 134 */
/*!**********************************************!*\
  !*** ./~/react/lib/getEventModifierState.js ***!
  \**********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventModifierState
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Translation from modifier key to the associated property in the event.
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
	 */
	
	var modifierKeyToProp = {
	  'Alt': 'altKey',
	  'Control': 'ctrlKey',
	  'Meta': 'metaKey',
	  'Shift': 'shiftKey'
	};
	
	// IE8 does not implement getModifierState so we simply map it to the only
	// modifier keys exposed by the event itself, does not support Lock-keys.
	// Currently, all major browsers except Chrome seems to support Lock-keys.
	function modifierStateGetter(keyArg) {
	  var syntheticEvent = this;
	  var nativeEvent = syntheticEvent.nativeEvent;
	  if (nativeEvent.getModifierState) {
	    return nativeEvent.getModifierState(keyArg);
	  }
	  var keyProp = modifierKeyToProp[keyArg];
	  return keyProp ? !!nativeEvent[keyProp] : false;
	}
	
	function getEventModifierState(nativeEvent) {
	  return modifierStateGetter;
	}
	
	module.exports = getEventModifierState;

/***/ },
/* 135 */
/*!**********************************************!*\
  !*** ./~/react/lib/HTMLDOMPropertyConfig.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule HTMLDOMPropertyConfig
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	
	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
	var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
	var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
	var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
	var HAS_POSITIVE_NUMERIC_VALUE = DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
	var HAS_OVERLOADED_BOOLEAN_VALUE = DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;
	
	var hasSVG;
	if (ExecutionEnvironment.canUseDOM) {
	  var implementation = document.implementation;
	  hasSVG = implementation && implementation.hasFeature && implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#BasicStructure', '1.1');
	}
	
	var HTMLDOMPropertyConfig = {
	  isCustomAttribute: RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),
	  Properties: {
	    /**
	     * Standard Properties
	     */
	    accept: null,
	    acceptCharset: null,
	    accessKey: null,
	    action: null,
	    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    allowTransparency: MUST_USE_ATTRIBUTE,
	    alt: null,
	    async: HAS_BOOLEAN_VALUE,
	    autoComplete: null,
	    // autoFocus is polyfilled/normalized by AutoFocusUtils
	    // autoFocus: HAS_BOOLEAN_VALUE,
	    autoPlay: HAS_BOOLEAN_VALUE,
	    capture: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    cellPadding: null,
	    cellSpacing: null,
	    charSet: MUST_USE_ATTRIBUTE,
	    challenge: MUST_USE_ATTRIBUTE,
	    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    classID: MUST_USE_ATTRIBUTE,
	    // To set className on SVG elements, it's necessary to use .setAttribute;
	    // this works on HTML elements too in all browsers except IE8. Conveniently,
	    // IE8 doesn't support SVG and so we can simply use the attribute in
	    // browsers that support SVG and the property in browsers that don't,
	    // regardless of whether the element is HTML or SVG.
	    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
	    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    colSpan: null,
	    content: null,
	    contentEditable: null,
	    contextMenu: MUST_USE_ATTRIBUTE,
	    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    coords: null,
	    crossOrigin: null,
	    data: null, // For `<object />` acts as `src`.
	    dateTime: MUST_USE_ATTRIBUTE,
	    'default': HAS_BOOLEAN_VALUE,
	    defer: HAS_BOOLEAN_VALUE,
	    dir: null,
	    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    download: HAS_OVERLOADED_BOOLEAN_VALUE,
	    draggable: null,
	    encType: null,
	    form: MUST_USE_ATTRIBUTE,
	    formAction: MUST_USE_ATTRIBUTE,
	    formEncType: MUST_USE_ATTRIBUTE,
	    formMethod: MUST_USE_ATTRIBUTE,
	    formNoValidate: HAS_BOOLEAN_VALUE,
	    formTarget: MUST_USE_ATTRIBUTE,
	    frameBorder: MUST_USE_ATTRIBUTE,
	    headers: null,
	    height: MUST_USE_ATTRIBUTE,
	    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    high: null,
	    href: null,
	    hrefLang: null,
	    htmlFor: null,
	    httpEquiv: null,
	    icon: null,
	    id: MUST_USE_PROPERTY,
	    inputMode: MUST_USE_ATTRIBUTE,
	    integrity: null,
	    is: MUST_USE_ATTRIBUTE,
	    keyParams: MUST_USE_ATTRIBUTE,
	    keyType: MUST_USE_ATTRIBUTE,
	    kind: null,
	    label: null,
	    lang: null,
	    list: MUST_USE_ATTRIBUTE,
	    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    low: null,
	    manifest: MUST_USE_ATTRIBUTE,
	    marginHeight: null,
	    marginWidth: null,
	    max: null,
	    maxLength: MUST_USE_ATTRIBUTE,
	    media: MUST_USE_ATTRIBUTE,
	    mediaGroup: null,
	    method: null,
	    min: null,
	    minLength: MUST_USE_ATTRIBUTE,
	    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    name: null,
	    nonce: MUST_USE_ATTRIBUTE,
	    noValidate: HAS_BOOLEAN_VALUE,
	    open: HAS_BOOLEAN_VALUE,
	    optimum: null,
	    pattern: null,
	    placeholder: null,
	    poster: null,
	    preload: null,
	    radioGroup: null,
	    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    rel: null,
	    required: HAS_BOOLEAN_VALUE,
	    reversed: HAS_BOOLEAN_VALUE,
	    role: MUST_USE_ATTRIBUTE,
	    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    rowSpan: null,
	    sandbox: null,
	    scope: null,
	    scoped: HAS_BOOLEAN_VALUE,
	    scrolling: null,
	    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
	    shape: null,
	    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
	    sizes: MUST_USE_ATTRIBUTE,
	    span: HAS_POSITIVE_NUMERIC_VALUE,
	    spellCheck: null,
	    src: null,
	    srcDoc: MUST_USE_PROPERTY,
	    srcLang: null,
	    srcSet: MUST_USE_ATTRIBUTE,
	    start: HAS_NUMERIC_VALUE,
	    step: null,
	    style: null,
	    summary: null,
	    tabIndex: null,
	    target: null,
	    title: null,
	    type: null,
	    useMap: null,
	    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
	    width: MUST_USE_ATTRIBUTE,
	    wmode: MUST_USE_ATTRIBUTE,
	    wrap: null,
	
	    /**
	     * RDFa Properties
	     */
	    about: MUST_USE_ATTRIBUTE,
	    datatype: MUST_USE_ATTRIBUTE,
	    inlist: MUST_USE_ATTRIBUTE,
	    prefix: MUST_USE_ATTRIBUTE,
	    // property is also supported for OpenGraph in meta tags.
	    property: MUST_USE_ATTRIBUTE,
	    resource: MUST_USE_ATTRIBUTE,
	    'typeof': MUST_USE_ATTRIBUTE,
	    vocab: MUST_USE_ATTRIBUTE,
	
	    /**
	     * Non-standard Properties
	     */
	    // autoCapitalize and autoCorrect are supported in Mobile Safari for
	    // keyboard hints.
	    autoCapitalize: MUST_USE_ATTRIBUTE,
	    autoCorrect: MUST_USE_ATTRIBUTE,
	    // autoSave allows WebKit/Blink to persist values of input fields on page reloads
	    autoSave: null,
	    // color is for Safari mask-icon link
	    color: null,
	    // itemProp, itemScope, itemType are for
	    // Microdata support. See http://schema.org/docs/gs.html
	    itemProp: MUST_USE_ATTRIBUTE,
	    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
	    itemType: MUST_USE_ATTRIBUTE,
	    // itemID and itemRef are for Microdata support as well but
	    // only specified in the the WHATWG spec document. See
	    // https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
	    itemID: MUST_USE_ATTRIBUTE,
	    itemRef: MUST_USE_ATTRIBUTE,
	    // results show looking glass icon and recent searches on input
	    // search fields in WebKit/Blink
	    results: null,
	    // IE-only attribute that specifies security restrictions on an iframe
	    // as an alternative to the sandbox attribute on IE<10
	    security: MUST_USE_ATTRIBUTE,
	    // IE-only attribute that controls focus behavior
	    unselectable: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNames: {
	    acceptCharset: 'accept-charset',
	    className: 'class',
	    htmlFor: 'for',
	    httpEquiv: 'http-equiv'
	  },
	  DOMPropertyNames: {
	    autoComplete: 'autocomplete',
	    autoFocus: 'autofocus',
	    autoPlay: 'autoplay',
	    autoSave: 'autosave',
	    // `encoding` is equivalent to `enctype`, IE8 lacks an `enctype` setter.
	    // http://www.w3.org/TR/html5/forms.html#dom-fs-encoding
	    encType: 'encoding',
	    hrefLang: 'hreflang',
	    radioGroup: 'radiogroup',
	    spellCheck: 'spellcheck',
	    srcDoc: 'srcdoc',
	    srcSet: 'srcset'
	  }
	};
	
	module.exports = HTMLDOMPropertyConfig;

/***/ },
/* 136 */
/*!***************************************************!*\
  !*** ./~/react/lib/ReactBrowserComponentMixin.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactBrowserComponentMixin
	 */
	
	'use strict';
	
	var ReactInstanceMap = __webpack_require__(/*! ./ReactInstanceMap */ 93);
	
	var findDOMNode = __webpack_require__(/*! ./findDOMNode */ 137);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var didWarnKey = '_getDOMNodeDidWarn';
	
	var ReactBrowserComponentMixin = {
	  /**
	   * Returns the DOM node rendered by this component.
	   *
	   * @return {DOMElement} The root node of this component.
	   * @final
	   * @protected
	   */
	  getDOMNode: function () {
	    process.env.NODE_ENV !== 'production' ? warning(this.constructor[didWarnKey], '%s.getDOMNode(...) is deprecated. Please use ' + 'ReactDOM.findDOMNode(instance) instead.', ReactInstanceMap.get(this).getName() || this.tagName || 'Unknown') : undefined;
	    this.constructor[didWarnKey] = true;
	    return findDOMNode(this);
	  }
	};
	
	module.exports = ReactBrowserComponentMixin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 137 */
/*!************************************!*\
  !*** ./~/react/lib/findDOMNode.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactInstanceMap = __webpack_require__(/*! ./ReactInstanceMap */ 93);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if (process.env.NODE_ENV !== 'production') {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing getDOMNode or findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : undefined;
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === 1) {
	    return componentOrElement;
	  }
	  if (ReactInstanceMap.has(componentOrElement)) {
	    return ReactMount.getNodeFromInstance(componentOrElement);
	  }
	  !(componentOrElement.render == null || typeof componentOrElement.render !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : invariant(false) : undefined;
	   true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : invariant(false) : undefined;
	}
	
	module.exports = findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 138 */
/*!*****************************************************!*\
  !*** ./~/react/lib/ReactDefaultBatchingStrategy.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultBatchingStrategy
	 */
	
	'use strict';
	
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	var Transaction = __webpack_require__(/*! ./Transaction */ 103);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	
	var RESET_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: function () {
	    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
	  }
	};
	
	var FLUSH_BATCHED_UPDATES = {
	  initialize: emptyFunction,
	  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
	};
	
	var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];
	
	function ReactDefaultBatchingStrategyTransaction() {
	  this.reinitializeTransaction();
	}
	
	assign(ReactDefaultBatchingStrategyTransaction.prototype, Transaction.Mixin, {
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  }
	});
	
	var transaction = new ReactDefaultBatchingStrategyTransaction();
	
	var ReactDefaultBatchingStrategy = {
	  isBatchingUpdates: false,
	
	  /**
	   * Call the provided function in a context within which calls to `setState`
	   * and friends are batched such that components aren't updated unnecessarily.
	   */
	  batchedUpdates: function (callback, a, b, c, d, e) {
	    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;
	
	    ReactDefaultBatchingStrategy.isBatchingUpdates = true;
	
	    // The code is written this way to avoid extra allocations
	    if (alreadyBatchingUpdates) {
	      callback(a, b, c, d, e);
	    } else {
	      transaction.perform(callback, null, a, b, c, d, e);
	    }
	  }
	};
	
	module.exports = ReactDefaultBatchingStrategy;

/***/ },
/* 139 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactDOMComponent.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMComponent
	 * @typechecks static-only
	 */
	
	/* global hasOwnProperty:true */
	
	'use strict';
	
	var AutoFocusUtils = __webpack_require__(/*! ./AutoFocusUtils */ 140);
	var CSSPropertyOperations = __webpack_require__(/*! ./CSSPropertyOperations */ 142);
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	var DOMPropertyOperations = __webpack_require__(/*! ./DOMPropertyOperations */ 68);
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 75);
	var ReactComponentBrowserEnvironment = __webpack_require__(/*! ./ReactComponentBrowserEnvironment */ 72);
	var ReactDOMButton = __webpack_require__(/*! ./ReactDOMButton */ 150);
	var ReactDOMInput = __webpack_require__(/*! ./ReactDOMInput */ 151);
	var ReactDOMOption = __webpack_require__(/*! ./ReactDOMOption */ 155);
	var ReactDOMSelect = __webpack_require__(/*! ./ReactDOMSelect */ 158);
	var ReactDOMTextarea = __webpack_require__(/*! ./ReactDOMTextarea */ 159);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactMultiChild = __webpack_require__(/*! ./ReactMultiChild */ 160);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ReactUpdateQueue = __webpack_require__(/*! ./ReactUpdateQueue */ 99);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ 89);
	var escapeTextContentForBrowser = __webpack_require__(/*! ./escapeTextContentForBrowser */ 67);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var isEventSupported = __webpack_require__(/*! ./isEventSupported */ 86);
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	var setInnerHTML = __webpack_require__(/*! ./setInnerHTML */ 65);
	var setTextContent = __webpack_require__(/*! ./setTextContent */ 66);
	var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ 163);
	var validateDOMNesting = __webpack_require__(/*! ./validateDOMNesting */ 116);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var deleteListener = ReactBrowserEventEmitter.deleteListener;
	var listenTo = ReactBrowserEventEmitter.listenTo;
	var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;
	
	// For quickly matching children type, to test if can be treated as content.
	var CONTENT_TYPES = { 'string': true, 'number': true };
	
	var CHILDREN = keyOf({ children: null });
	var STYLE = keyOf({ style: null });
	var HTML = keyOf({ __html: null });
	
	var ELEMENT_NODE_TYPE = 1;
	
	function getDeclarationErrorAddendum(internalInstance) {
	  if (internalInstance) {
	    var owner = internalInstance._currentElement._owner || null;
	    if (owner) {
	      var name = owner.getName();
	      if (name) {
	        return ' This DOM node was rendered by `' + name + '`.';
	      }
	    }
	  }
	  return '';
	}
	
	var legacyPropsDescriptor;
	if (process.env.NODE_ENV !== 'production') {
	  legacyPropsDescriptor = {
	    props: {
	      enumerable: false,
	      get: function () {
	        var component = this._reactInternalComponent;
	        process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .props of a DOM node; instead, ' + 'recreate the props as `render` did originally or read the DOM ' + 'properties/attributes directly from this node (e.g., ' + 'this.refs.box.className).%s', getDeclarationErrorAddendum(component)) : undefined;
	        return component._currentElement.props;
	      }
	    }
	  };
	}
	
	function legacyGetDOMNode() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .getDOMNode() of a DOM node; ' + 'instead, use the node directly.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return this;
	}
	
	function legacyIsMounted() {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .isMounted() of a DOM node.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  return !!component;
	}
	
	function legacySetStateEtc() {
	  if (process.env.NODE_ENV !== 'production') {
	    var component = this._reactInternalComponent;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setState(), .replaceState(), or ' + '.forceUpdate() of a DOM node. This is a no-op.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	}
	
	function legacySetProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .setProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueSetPropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}
	
	function legacyReplaceProps(partialProps, callback) {
	  var component = this._reactInternalComponent;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'ReactDOMComponent: Do not access .replaceProps() of a DOM node. ' + 'Instead, call ReactDOM.render again at the top level.%s', getDeclarationErrorAddendum(component)) : undefined;
	  }
	  if (!component) {
	    return;
	  }
	  ReactUpdateQueue.enqueueReplacePropsInternal(component, partialProps);
	  if (callback) {
	    ReactUpdateQueue.enqueueCallbackInternal(component, callback);
	  }
	}
	
	function friendlyStringify(obj) {
	  if (typeof obj === 'object') {
	    if (Array.isArray(obj)) {
	      return '[' + obj.map(friendlyStringify).join(', ') + ']';
	    } else {
	      var pairs = [];
	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key)) {
	          var keyEscaped = /^[a-z$_][\w$_]*$/i.test(key) ? key : JSON.stringify(key);
	          pairs.push(keyEscaped + ': ' + friendlyStringify(obj[key]));
	        }
	      }
	      return '{' + pairs.join(', ') + '}';
	    }
	  } else if (typeof obj === 'string') {
	    return JSON.stringify(obj);
	  } else if (typeof obj === 'function') {
	    return '[function object]';
	  }
	  // Differs from JSON.stringify in that undefined becauses undefined and that
	  // inf and nan don't become null
	  return String(obj);
	}
	
	var styleMutationWarning = {};
	
	function checkAndWarnForMutatedStyle(style1, style2, component) {
	  if (style1 == null || style2 == null) {
	    return;
	  }
	  if (shallowEqual(style1, style2)) {
	    return;
	  }
	
	  var componentName = component._tag;
	  var owner = component._currentElement._owner;
	  var ownerName;
	  if (owner) {
	    ownerName = owner.getName();
	  }
	
	  var hash = ownerName + '|' + componentName;
	
	  if (styleMutationWarning.hasOwnProperty(hash)) {
	    return;
	  }
	
	  styleMutationWarning[hash] = true;
	
	  process.env.NODE_ENV !== 'production' ? warning(false, '`%s` was passed a style object that has previously been mutated. ' + 'Mutating `style` is deprecated. Consider cloning it beforehand. Check ' + 'the `render` %s. Previous style: %s. Mutated style: %s.', componentName, owner ? 'of `' + ownerName + '`' : 'using <' + componentName + '>', friendlyStringify(style1), friendlyStringify(style2)) : undefined;
	}
	
	/**
	 * @param {object} component
	 * @param {?object} props
	 */
	function assertValidProps(component, props) {
	  if (!props) {
	    return;
	  }
	  // Note the use of `==` which checks for null or undefined.
	  if (process.env.NODE_ENV !== 'production') {
	    if (voidElementTags[component._tag]) {
	      process.env.NODE_ENV !== 'production' ? warning(props.children == null && props.dangerouslySetInnerHTML == null, '%s is a void element tag and must not have `children` or ' + 'use `props.dangerouslySetInnerHTML`.%s', component._tag, component._currentElement._owner ? ' Check the render method of ' + component._currentElement._owner.getName() + '.' : '') : undefined;
	    }
	  }
	  if (props.dangerouslySetInnerHTML != null) {
	    !(props.children == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Can only set one of `children` or `props.dangerouslySetInnerHTML`.') : invariant(false) : undefined;
	    !(typeof props.dangerouslySetInnerHTML === 'object' && HTML in props.dangerouslySetInnerHTML) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. ' + 'Please visit https://fb.me/react-invariant-dangerously-set-inner-html ' + 'for more information.') : invariant(false) : undefined;
	  }
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(props.innerHTML == null, 'Directly setting property `innerHTML` is not permitted. ' + 'For more information, lookup documentation on `dangerouslySetInnerHTML`.') : undefined;
	    process.env.NODE_ENV !== 'production' ? warning(!props.contentEditable || props.children == null, 'A component is `contentEditable` and contains `children` managed by ' + 'React. It is now your responsibility to guarantee that none of ' + 'those nodes are unexpectedly modified or duplicated. This is ' + 'probably not intentional.') : undefined;
	  }
	  !(props.style == null || typeof props.style === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'The `style` prop expects a mapping from style properties to values, ' + 'not a string. For example, style={{marginRight: spacing + \'em\'}} when ' + 'using JSX.%s', getDeclarationErrorAddendum(component)) : invariant(false) : undefined;
	}
	
	function enqueuePutListener(id, registrationName, listener, transaction) {
	  if (process.env.NODE_ENV !== 'production') {
	    // IE8 has no API for event capturing and the `onScroll` event doesn't
	    // bubble.
	    process.env.NODE_ENV !== 'production' ? warning(registrationName !== 'onScroll' || isEventSupported('scroll', true), 'This browser doesn\'t support the `onScroll` event') : undefined;
	  }
	  var container = ReactMount.findReactContainerForID(id);
	  if (container) {
	    var doc = container.nodeType === ELEMENT_NODE_TYPE ? container.ownerDocument : container;
	    listenTo(registrationName, doc);
	  }
	  transaction.getReactMountReady().enqueue(putListener, {
	    id: id,
	    registrationName: registrationName,
	    listener: listener
	  });
	}
	
	function putListener() {
	  var listenerToPut = this;
	  ReactBrowserEventEmitter.putListener(listenerToPut.id, listenerToPut.registrationName, listenerToPut.listener);
	}
	
	// There are so many media events, it makes sense to just
	// maintain a list rather than create a `trapBubbledEvent` for each
	var mediaEvents = {
	  topAbort: 'abort',
	  topCanPlay: 'canplay',
	  topCanPlayThrough: 'canplaythrough',
	  topDurationChange: 'durationchange',
	  topEmptied: 'emptied',
	  topEncrypted: 'encrypted',
	  topEnded: 'ended',
	  topError: 'error',
	  topLoadedData: 'loadeddata',
	  topLoadedMetadata: 'loadedmetadata',
	  topLoadStart: 'loadstart',
	  topPause: 'pause',
	  topPlay: 'play',
	  topPlaying: 'playing',
	  topProgress: 'progress',
	  topRateChange: 'ratechange',
	  topSeeked: 'seeked',
	  topSeeking: 'seeking',
	  topStalled: 'stalled',
	  topSuspend: 'suspend',
	  topTimeUpdate: 'timeupdate',
	  topVolumeChange: 'volumechange',
	  topWaiting: 'waiting'
	};
	
	function trapBubbledEventsLocal() {
	  var inst = this;
	  // If a component renders to null or if another component fatals and causes
	  // the state of the tree to be corrupted, `node` here can be null.
	  !inst._rootNodeID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Must be mounted to trap events') : invariant(false) : undefined;
	  var node = ReactMount.getNode(inst._rootNodeID);
	  !node ? process.env.NODE_ENV !== 'production' ? invariant(false, 'trapBubbledEvent(...): Requires node to be rendered.') : invariant(false) : undefined;
	
	  switch (inst._tag) {
	    case 'iframe':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'video':
	    case 'audio':
	
	      inst._wrapperState.listeners = [];
	      // create listener for each media event
	      for (var event in mediaEvents) {
	        if (mediaEvents.hasOwnProperty(event)) {
	          inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event], mediaEvents[event], node));
	        }
	      }
	
	      break;
	    case 'img':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load', node)];
	      break;
	    case 'form':
	      inst._wrapperState.listeners = [ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset', node), ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit', node)];
	      break;
	  }
	}
	
	function mountReadyInputWrapper() {
	  ReactDOMInput.mountReadyWrapper(this);
	}
	
	function postUpdateSelectWrapper() {
	  ReactDOMSelect.postUpdateWrapper(this);
	}
	
	// For HTML, certain tags should omit their close tag. We keep a whitelist for
	// those special cased tags.
	
	var omittedCloseTags = {
	  'area': true,
	  'base': true,
	  'br': true,
	  'col': true,
	  'embed': true,
	  'hr': true,
	  'img': true,
	  'input': true,
	  'keygen': true,
	  'link': true,
	  'meta': true,
	  'param': true,
	  'source': true,
	  'track': true,
	  'wbr': true
	};
	
	// NOTE: menuitem's close tag should be omitted, but that causes problems.
	var newlineEatingTags = {
	  'listing': true,
	  'pre': true,
	  'textarea': true
	};
	
	// For HTML, certain tags cannot have children. This has the same purpose as
	// `omittedCloseTags` except that `menuitem` should still have its closing tag.
	
	var voidElementTags = assign({
	  'menuitem': true
	}, omittedCloseTags);
	
	// We accept any tag to be rendered but since this gets injected into arbitrary
	// HTML, we want to make sure that it's a safe tag.
	// http://www.w3.org/TR/REC-xml/#NT-Name
	
	var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
	var validatedTagCache = {};
	var hasOwnProperty = ({}).hasOwnProperty;
	
	function validateDangerousTag(tag) {
	  if (!hasOwnProperty.call(validatedTagCache, tag)) {
	    !VALID_TAG_REGEX.test(tag) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Invalid tag: %s', tag) : invariant(false) : undefined;
	    validatedTagCache[tag] = true;
	  }
	}
	
	function processChildContextDev(context, inst) {
	  // Pass down our tag name to child components for validation purposes
	  context = assign({}, context);
	  var info = context[validateDOMNesting.ancestorInfoContextKey];
	  context[validateDOMNesting.ancestorInfoContextKey] = validateDOMNesting.updatedAncestorInfo(info, inst._tag, inst);
	  return context;
	}
	
	function isCustomComponent(tagName, props) {
	  return tagName.indexOf('-') >= 0 || props.is != null;
	}
	
	/**
	 * Creates a new React class that is idempotent and capable of containing other
	 * React components. It accepts event listeners and DOM properties that are
	 * valid according to `DOMProperty`.
	 *
	 *  - Event listeners: `onClick`, `onMouseDown`, etc.
	 *  - DOM properties: `className`, `name`, `title`, etc.
	 *
	 * The `style` property functions differently from the DOM API. It accepts an
	 * object mapping of style properties to values.
	 *
	 * @constructor ReactDOMComponent
	 * @extends ReactMultiChild
	 */
	function ReactDOMComponent(tag) {
	  validateDangerousTag(tag);
	  this._tag = tag.toLowerCase();
	  this._renderedChildren = null;
	  this._previousStyle = null;
	  this._previousStyleCopy = null;
	  this._rootNodeID = null;
	  this._wrapperState = null;
	  this._topLevelWrapper = null;
	  this._nodeWithLegacyProperties = null;
	  if (process.env.NODE_ENV !== 'production') {
	    this._unprocessedContextDev = null;
	    this._processedContextDev = null;
	  }
	}
	
	ReactDOMComponent.displayName = 'ReactDOMComponent';
	
	ReactDOMComponent.Mixin = {
	
	  construct: function (element) {
	    this._currentElement = element;
	  },
	
	  /**
	   * Generates root tag markup then recurses. This method has side effects and
	   * is not idempotent.
	   *
	   * @internal
	   * @param {string} rootID The root DOM ID for this node.
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   * @return {string} The computed markup.
	   */
	  mountComponent: function (rootID, transaction, context) {
	    this._rootNodeID = rootID;
	
	    var props = this._currentElement.props;
	
	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        this._wrapperState = {
	          listeners: null
	        };
	        transaction.getReactMountReady().enqueue(trapBubbledEventsLocal, this);
	        break;
	      case 'button':
	        props = ReactDOMButton.getNativeProps(this, props, context);
	        break;
	      case 'input':
	        ReactDOMInput.mountWrapper(this, props, context);
	        props = ReactDOMInput.getNativeProps(this, props, context);
	        break;
	      case 'option':
	        ReactDOMOption.mountWrapper(this, props, context);
	        props = ReactDOMOption.getNativeProps(this, props, context);
	        break;
	      case 'select':
	        ReactDOMSelect.mountWrapper(this, props, context);
	        props = ReactDOMSelect.getNativeProps(this, props, context);
	        context = ReactDOMSelect.processChildContext(this, props, context);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.mountWrapper(this, props, context);
	        props = ReactDOMTextarea.getNativeProps(this, props, context);
	        break;
	    }
	
	    assertValidProps(this, props);
	    if (process.env.NODE_ENV !== 'production') {
	      if (context[validateDOMNesting.ancestorInfoContextKey]) {
	        validateDOMNesting(this._tag, this, context[validateDOMNesting.ancestorInfoContextKey]);
	      }
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      this._unprocessedContextDev = context;
	      this._processedContextDev = processChildContextDev(context, this);
	      context = this._processedContextDev;
	    }
	
	    var mountImage;
	    if (transaction.useCreateElement) {
	      var ownerDocument = context[ReactMount.ownerDocumentContextKey];
	      var el = ownerDocument.createElement(this._currentElement.type);
	      DOMPropertyOperations.setAttributeForID(el, this._rootNodeID);
	      // Populate node cache
	      ReactMount.getID(el);
	      this._updateDOMProperties({}, props, transaction, el);
	      this._createInitialChildren(transaction, props, context, el);
	      mountImage = el;
	    } else {
	      var tagOpen = this._createOpenTagMarkupAndPutListeners(transaction, props);
	      var tagContent = this._createContentMarkup(transaction, props, context);
	      if (!tagContent && omittedCloseTags[this._tag]) {
	        mountImage = tagOpen + '/>';
	      } else {
	        mountImage = tagOpen + '>' + tagContent + '</' + this._currentElement.type + '>';
	      }
	    }
	
	    switch (this._tag) {
	      case 'input':
	        transaction.getReactMountReady().enqueue(mountReadyInputWrapper, this);
	      // falls through
	      case 'button':
	      case 'select':
	      case 'textarea':
	        if (props.autoFocus) {
	          transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent, this);
	        }
	        break;
	    }
	
	    return mountImage;
	  },
	
	  /**
	   * Creates markup for the open tag and all attributes.
	   *
	   * This method has side effects because events get registered.
	   *
	   * Iterating over object properties is faster than iterating over arrays.
	   * @see http://jsperf.com/obj-vs-arr-iteration
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @return {string} Markup of opening tag.
	   */
	  _createOpenTagMarkupAndPutListeners: function (transaction, props) {
	    var ret = '<' + this._currentElement.type;
	
	    for (var propKey in props) {
	      if (!props.hasOwnProperty(propKey)) {
	        continue;
	      }
	      var propValue = props[propKey];
	      if (propValue == null) {
	        continue;
	      }
	      if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (propValue) {
	          enqueuePutListener(this._rootNodeID, propKey, propValue, transaction);
	        }
	      } else {
	        if (propKey === STYLE) {
	          if (propValue) {
	            if (process.env.NODE_ENV !== 'production') {
	              // See `_updateDOMProperties`. style block
	              this._previousStyle = propValue;
	            }
	            propValue = this._previousStyleCopy = assign({}, props.style);
	          }
	          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
	        }
	        var markup = null;
	        if (this._tag != null && isCustomComponent(this._tag, props)) {
	          if (propKey !== CHILDREN) {
	            markup = DOMPropertyOperations.createMarkupForCustomAttribute(propKey, propValue);
	          }
	        } else {
	          markup = DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
	        }
	        if (markup) {
	          ret += ' ' + markup;
	        }
	      }
	    }
	
	    // For static pages, no need to put React ID and checksum. Saves lots of
	    // bytes.
	    if (transaction.renderToStaticMarkup) {
	      return ret;
	    }
	
	    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
	    return ret + ' ' + markupForID;
	  },
	
	  /**
	   * Creates markup for the content between the tags.
	   *
	   * @private
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} props
	   * @param {object} context
	   * @return {string} Content markup.
	   */
	  _createContentMarkup: function (transaction, props, context) {
	    var ret = '';
	
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        ret = innerHTML.__html;
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        ret = escapeTextContentForBrowser(contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        ret = mountImages.join('');
	      }
	    }
	    if (newlineEatingTags[this._tag] && ret.charAt(0) === '\n') {
	      // text/html ignores the first character in these tags if it's a newline
	      // Prefer to break application/xml over text/html (for now) by adding
	      // a newline specifically to get eaten by the parser. (Alternately for
	      // textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
	      // \r is normalized out by HTMLTextAreaElement#value.)
	      // See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
	      // See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
	      // See: <http://www.w3.org/TR/html5/syntax.html#newlines>
	      // See: Parsing of "textarea" "listing" and "pre" elements
	      //  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
	      return '\n' + ret;
	    } else {
	      return ret;
	    }
	  },
	
	  _createInitialChildren: function (transaction, props, context, el) {
	    // Intentional use of != to avoid catching zero/false.
	    var innerHTML = props.dangerouslySetInnerHTML;
	    if (innerHTML != null) {
	      if (innerHTML.__html != null) {
	        setInnerHTML(el, innerHTML.__html);
	      }
	    } else {
	      var contentToUse = CONTENT_TYPES[typeof props.children] ? props.children : null;
	      var childrenToUse = contentToUse != null ? null : props.children;
	      if (contentToUse != null) {
	        // TODO: Validate that text is allowed as a child of this node
	        setTextContent(el, contentToUse);
	      } else if (childrenToUse != null) {
	        var mountImages = this.mountChildren(childrenToUse, transaction, context);
	        for (var i = 0; i < mountImages.length; i++) {
	          el.appendChild(mountImages[i]);
	        }
	      }
	    }
	  },
	
	  /**
	   * Receives a next element and updates the component.
	   *
	   * @internal
	   * @param {ReactElement} nextElement
	   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
	   * @param {object} context
	   */
	  receiveComponent: function (nextElement, transaction, context) {
	    var prevElement = this._currentElement;
	    this._currentElement = nextElement;
	    this.updateComponent(transaction, prevElement, nextElement, context);
	  },
	
	  /**
	   * Updates a native DOM component after it has already been allocated and
	   * attached to the DOM. Reconciles the root DOM node, then recurses.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @param {ReactElement} prevElement
	   * @param {ReactElement} nextElement
	   * @internal
	   * @overridable
	   */
	  updateComponent: function (transaction, prevElement, nextElement, context) {
	    var lastProps = prevElement.props;
	    var nextProps = this._currentElement.props;
	
	    switch (this._tag) {
	      case 'button':
	        lastProps = ReactDOMButton.getNativeProps(this, lastProps);
	        nextProps = ReactDOMButton.getNativeProps(this, nextProps);
	        break;
	      case 'input':
	        ReactDOMInput.updateWrapper(this);
	        lastProps = ReactDOMInput.getNativeProps(this, lastProps);
	        nextProps = ReactDOMInput.getNativeProps(this, nextProps);
	        break;
	      case 'option':
	        lastProps = ReactDOMOption.getNativeProps(this, lastProps);
	        nextProps = ReactDOMOption.getNativeProps(this, nextProps);
	        break;
	      case 'select':
	        lastProps = ReactDOMSelect.getNativeProps(this, lastProps);
	        nextProps = ReactDOMSelect.getNativeProps(this, nextProps);
	        break;
	      case 'textarea':
	        ReactDOMTextarea.updateWrapper(this);
	        lastProps = ReactDOMTextarea.getNativeProps(this, lastProps);
	        nextProps = ReactDOMTextarea.getNativeProps(this, nextProps);
	        break;
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // If the context is reference-equal to the old one, pass down the same
	      // processed object so the update bailout in ReactReconciler behaves
	      // correctly (and identically in dev and prod). See #5005.
	      if (this._unprocessedContextDev !== context) {
	        this._unprocessedContextDev = context;
	        this._processedContextDev = processChildContextDev(context, this);
	      }
	      context = this._processedContextDev;
	    }
	
	    assertValidProps(this, nextProps);
	    this._updateDOMProperties(lastProps, nextProps, transaction, null);
	    this._updateDOMChildren(lastProps, nextProps, transaction, context);
	
	    if (!canDefineProperty && this._nodeWithLegacyProperties) {
	      this._nodeWithLegacyProperties.props = nextProps;
	    }
	
	    if (this._tag === 'select') {
	      // <select> value update needs to occur after <option> children
	      // reconciliation
	      transaction.getReactMountReady().enqueue(postUpdateSelectWrapper, this);
	    }
	  },
	
	  /**
	   * Reconciles the properties by detecting differences in property values and
	   * updating the DOM as necessary. This function is probably the single most
	   * critical path for performance optimization.
	   *
	   * TODO: Benchmark whether checking for changed values in memory actually
	   *       improves performance (especially statically positioned elements).
	   * TODO: Benchmark the effects of putting this at the top since 99% of props
	   *       do not change for a given reconciliation.
	   * TODO: Benchmark areas that can be improved with caching.
	   *
	   * @private
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {?DOMElement} node
	   */
	  _updateDOMProperties: function (lastProps, nextProps, transaction, node) {
	    var propKey;
	    var styleName;
	    var styleUpdates;
	    for (propKey in lastProps) {
	      if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey)) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        var lastStyle = this._previousStyleCopy;
	        for (styleName in lastStyle) {
	          if (lastStyle.hasOwnProperty(styleName)) {
	            styleUpdates = styleUpdates || {};
	            styleUpdates[styleName] = '';
	          }
	        }
	        this._previousStyleCopy = null;
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (lastProps[propKey]) {
	          // Only call deleteListener if there was a listener previously or
	          // else willDeleteListener gets called when there wasn't actually a
	          // listener (e.g., onClick={null})
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        DOMPropertyOperations.deleteValueForProperty(node, propKey);
	      }
	    }
	    for (propKey in nextProps) {
	      var nextProp = nextProps[propKey];
	      var lastProp = propKey === STYLE ? this._previousStyleCopy : lastProps[propKey];
	      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
	        continue;
	      }
	      if (propKey === STYLE) {
	        if (nextProp) {
	          if (process.env.NODE_ENV !== 'production') {
	            checkAndWarnForMutatedStyle(this._previousStyleCopy, this._previousStyle, this);
	            this._previousStyle = nextProp;
	          }
	          nextProp = this._previousStyleCopy = assign({}, nextProp);
	        } else {
	          this._previousStyleCopy = null;
	        }
	        if (lastProp) {
	          // Unset styles on `lastProp` but not on `nextProp`.
	          for (styleName in lastProp) {
	            if (lastProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          // Update styles that changed since `lastProp`.
	          for (styleName in nextProp) {
	            if (nextProp.hasOwnProperty(styleName) && lastProp[styleName] !== nextProp[styleName]) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = nextProp[styleName];
	            }
	          }
	        } else {
	          // Relies on `updateStylesByID` not mutating `styleUpdates`.
	          styleUpdates = nextProp;
	        }
	      } else if (registrationNameModules.hasOwnProperty(propKey)) {
	        if (nextProp) {
	          enqueuePutListener(this._rootNodeID, propKey, nextProp, transaction);
	        } else if (lastProp) {
	          deleteListener(this._rootNodeID, propKey);
	        }
	      } else if (isCustomComponent(this._tag, nextProps)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        if (propKey === CHILDREN) {
	          nextProp = null;
	        }
	        DOMPropertyOperations.setValueForAttribute(node, propKey, nextProp);
	      } else if (DOMProperty.properties[propKey] || DOMProperty.isCustomAttribute(propKey)) {
	        if (!node) {
	          node = ReactMount.getNode(this._rootNodeID);
	        }
	        // If we're updating to null or undefined, we should remove the property
	        // from the DOM node instead of inadvertantly setting to a string. This
	        // brings us in line with the same behavior we have on initial render.
	        if (nextProp != null) {
	          DOMPropertyOperations.setValueForProperty(node, propKey, nextProp);
	        } else {
	          DOMPropertyOperations.deleteValueForProperty(node, propKey);
	        }
	      }
	    }
	    if (styleUpdates) {
	      if (!node) {
	        node = ReactMount.getNode(this._rootNodeID);
	      }
	      CSSPropertyOperations.setValueForStyles(node, styleUpdates);
	    }
	  },
	
	  /**
	   * Reconciles the children with the various properties that affect the
	   * children content.
	   *
	   * @param {object} lastProps
	   * @param {object} nextProps
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   */
	  _updateDOMChildren: function (lastProps, nextProps, transaction, context) {
	    var lastContent = CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
	    var nextContent = CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;
	
	    var lastHtml = lastProps.dangerouslySetInnerHTML && lastProps.dangerouslySetInnerHTML.__html;
	    var nextHtml = nextProps.dangerouslySetInnerHTML && nextProps.dangerouslySetInnerHTML.__html;
	
	    // Note the use of `!=` which checks for null or undefined.
	    var lastChildren = lastContent != null ? null : lastProps.children;
	    var nextChildren = nextContent != null ? null : nextProps.children;
	
	    // If we're switching from children to content/html or vice versa, remove
	    // the old content
	    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
	    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
	    if (lastChildren != null && nextChildren == null) {
	      this.updateChildren(null, transaction, context);
	    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
	      this.updateTextContent('');
	    }
	
	    if (nextContent != null) {
	      if (lastContent !== nextContent) {
	        this.updateTextContent('' + nextContent);
	      }
	    } else if (nextHtml != null) {
	      if (lastHtml !== nextHtml) {
	        this.updateMarkup('' + nextHtml);
	      }
	    } else if (nextChildren != null) {
	      this.updateChildren(nextChildren, transaction, context);
	    }
	  },
	
	  /**
	   * Destroys all event registrations for this instance. Does not remove from
	   * the DOM. That must be done by the parent.
	   *
	   * @internal
	   */
	  unmountComponent: function () {
	    switch (this._tag) {
	      case 'iframe':
	      case 'img':
	      case 'form':
	      case 'video':
	      case 'audio':
	        var listeners = this._wrapperState.listeners;
	        if (listeners) {
	          for (var i = 0; i < listeners.length; i++) {
	            listeners[i].remove();
	          }
	        }
	        break;
	      case 'input':
	        ReactDOMInput.unmountWrapper(this);
	        break;
	      case 'html':
	      case 'head':
	      case 'body':
	        /**
	         * Components like <html> <head> and <body> can't be removed or added
	         * easily in a cross-browser way, however it's valuable to be able to
	         * take advantage of React's reconciliation for styling and <title>
	         * management. So we just document it and throw in dangerous cases.
	         */
	         true ? process.env.NODE_ENV !== 'production' ? invariant(false, '<%s> tried to unmount. Because of cross-browser quirks it is ' + 'impossible to unmount some top-level components (eg <html>, ' + '<head>, and <body>) reliably and efficiently. To fix this, have a ' + 'single top-level component that never unmounts render these ' + 'elements.', this._tag) : invariant(false) : undefined;
	        break;
	    }
	
	    this.unmountChildren();
	    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
	    ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);
	    this._rootNodeID = null;
	    this._wrapperState = null;
	    if (this._nodeWithLegacyProperties) {
	      var node = this._nodeWithLegacyProperties;
	      node._reactInternalComponent = null;
	      this._nodeWithLegacyProperties = null;
	    }
	  },
	
	  getPublicInstance: function () {
	    if (!this._nodeWithLegacyProperties) {
	      var node = ReactMount.getNode(this._rootNodeID);
	
	      node._reactInternalComponent = this;
	      node.getDOMNode = legacyGetDOMNode;
	      node.isMounted = legacyIsMounted;
	      node.setState = legacySetStateEtc;
	      node.replaceState = legacySetStateEtc;
	      node.forceUpdate = legacySetStateEtc;
	      node.setProps = legacySetProps;
	      node.replaceProps = legacyReplaceProps;
	
	      if (process.env.NODE_ENV !== 'production') {
	        if (canDefineProperty) {
	          Object.defineProperties(node, legacyPropsDescriptor);
	        } else {
	          // updateComponent will update this property on subsequent renders
	          node.props = this._currentElement.props;
	        }
	      } else {
	        // updateComponent will update this property on subsequent renders
	        node.props = this._currentElement.props;
	      }
	
	      this._nodeWithLegacyProperties = node;
	    }
	    return this._nodeWithLegacyProperties;
	  }
	
	};
	
	ReactPerf.measureMethods(ReactDOMComponent, 'ReactDOMComponent', {
	  mountComponent: 'mountComponent',
	  updateComponent: 'updateComponent'
	});
	
	assign(ReactDOMComponent.prototype, ReactDOMComponent.Mixin, ReactMultiChild.Mixin);
	
	module.exports = ReactDOMComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 140 */
/*!***************************************!*\
  !*** ./~/react/lib/AutoFocusUtils.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule AutoFocusUtils
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	
	var findDOMNode = __webpack_require__(/*! ./findDOMNode */ 137);
	var focusNode = __webpack_require__(/*! fbjs/lib/focusNode */ 141);
	
	var Mixin = {
	  componentDidMount: function () {
	    if (this.props.autoFocus) {
	      focusNode(findDOMNode(this));
	    }
	  }
	};
	
	var AutoFocusUtils = {
	  Mixin: Mixin,
	
	  focusDOMComponent: function () {
	    focusNode(ReactMount.getNode(this._rootNodeID));
	  }
	};
	
	module.exports = AutoFocusUtils;

/***/ },
/* 141 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/focusNode.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule focusNode
	 */
	
	'use strict';
	
	/**
	 * @param {DOMElement} node input/textarea to focus
	 */
	function focusNode(node) {
	  // IE8 can throw "Can't move focus to the control because it is invisible,
	  // not enabled, or of a type that does not accept the focus." for all kinds of
	  // reasons that are too expensive and fragile to test.
	  try {
	    node.focus();
	  } catch (e) {}
	}
	
	module.exports = focusNode;

/***/ },
/* 142 */
/*!**********************************************!*\
  !*** ./~/react/lib/CSSPropertyOperations.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSPropertyOperations
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var CSSProperty = __webpack_require__(/*! ./CSSProperty */ 143);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	
	var camelizeStyleName = __webpack_require__(/*! fbjs/lib/camelizeStyleName */ 144);
	var dangerousStyleValue = __webpack_require__(/*! ./dangerousStyleValue */ 146);
	var hyphenateStyleName = __webpack_require__(/*! fbjs/lib/hyphenateStyleName */ 147);
	var memoizeStringOnly = __webpack_require__(/*! fbjs/lib/memoizeStringOnly */ 149);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var processStyleName = memoizeStringOnly(function (styleName) {
	  return hyphenateStyleName(styleName);
	});
	
	var hasShorthandPropertyBug = false;
	var styleFloatAccessor = 'cssFloat';
	if (ExecutionEnvironment.canUseDOM) {
	  var tempStyle = document.createElement('div').style;
	  try {
	    // IE8 throws "Invalid argument." if resetting shorthand style properties.
	    tempStyle.font = '';
	  } catch (e) {
	    hasShorthandPropertyBug = true;
	  }
	  // IE8 only supports accessing cssFloat (standard) as styleFloat
	  if (document.documentElement.style.cssFloat === undefined) {
	    styleFloatAccessor = 'styleFloat';
	  }
	}
	
	if (process.env.NODE_ENV !== 'production') {
	  // 'msTransform' is correct, but the other prefixes should be capitalized
	  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;
	
	  // style values shouldn't contain a semicolon
	  var badStyleValueWithSemicolonPattern = /;\s*$/;
	
	  var warnedStyleNames = {};
	  var warnedStyleValues = {};
	
	  var warnHyphenatedStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?', name, camelizeStyleName(name)) : undefined;
	  };
	
	  var warnBadVendoredStyleName = function (name) {
	    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
	      return;
	    }
	
	    warnedStyleNames[name] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?', name, name.charAt(0).toUpperCase() + name.slice(1)) : undefined;
	  };
	
	  var warnStyleValueWithSemicolon = function (name, value) {
	    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
	      return;
	    }
	
	    warnedStyleValues[value] = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon. ' + 'Try "%s: %s" instead.', name, value.replace(badStyleValueWithSemicolonPattern, '')) : undefined;
	  };
	
	  /**
	   * @param {string} name
	   * @param {*} value
	   */
	  var warnValidStyle = function (name, value) {
	    if (name.indexOf('-') > -1) {
	      warnHyphenatedStyleName(name);
	    } else if (badVendoredStyleNamePattern.test(name)) {
	      warnBadVendoredStyleName(name);
	    } else if (badStyleValueWithSemicolonPattern.test(value)) {
	      warnStyleValueWithSemicolon(name, value);
	    }
	  };
	}
	
	/**
	 * Operations for dealing with CSS properties.
	 */
	var CSSPropertyOperations = {
	
	  /**
	   * Serializes a mapping of style properties for use as inline styles:
	   *
	   *   > createMarkupForStyles({width: '200px', height: 0})
	   *   "width:200px;height:0;"
	   *
	   * Undefined values are ignored so that declarative programming is easier.
	   * The result should be HTML-escaped before insertion into the DOM.
	   *
	   * @param {object} styles
	   * @return {?string}
	   */
	  createMarkupForStyles: function (styles) {
	    var serialized = '';
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      var styleValue = styles[styleName];
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styleValue);
	      }
	      if (styleValue != null) {
	        serialized += processStyleName(styleName) + ':';
	        serialized += dangerousStyleValue(styleName, styleValue) + ';';
	      }
	    }
	    return serialized || null;
	  },
	
	  /**
	   * Sets the value for multiple styles on a node.  If a value is specified as
	   * '' (empty string), the corresponding style property will be unset.
	   *
	   * @param {DOMElement} node
	   * @param {object} styles
	   */
	  setValueForStyles: function (node, styles) {
	    var style = node.style;
	    for (var styleName in styles) {
	      if (!styles.hasOwnProperty(styleName)) {
	        continue;
	      }
	      if (process.env.NODE_ENV !== 'production') {
	        warnValidStyle(styleName, styles[styleName]);
	      }
	      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
	      if (styleName === 'float') {
	        styleName = styleFloatAccessor;
	      }
	      if (styleValue) {
	        style[styleName] = styleValue;
	      } else {
	        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
	        if (expansion) {
	          // Shorthand property that IE8 won't like unsetting, so unset each
	          // component to placate it
	          for (var individualStyleName in expansion) {
	            style[individualStyleName] = '';
	          }
	        } else {
	          style[styleName] = '';
	        }
	      }
	    }
	  }
	
	};
	
	ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
	  setValueForStyles: 'setValueForStyles'
	});
	
	module.exports = CSSPropertyOperations;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 143 */
/*!************************************!*\
  !*** ./~/react/lib/CSSProperty.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule CSSProperty
	 */
	
	'use strict';
	
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var isUnitlessNumber = {
	  animationIterationCount: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  fontWeight: true,
	  lineClamp: true,
	  lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	
	  // SVG-related properties
	  fillOpacity: true,
	  stopOpacity: true,
	  strokeDashoffset: true,
	  strokeOpacity: true,
	  strokeWidth: true
	};
	
	/**
	 * @param {string} prefix vendor-specific prefix, eg: Webkit
	 * @param {string} key style name, eg: transitionDuration
	 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
	 * WebkitTransitionDuration
	 */
	function prefixKey(prefix, key) {
	  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
	}
	
	/**
	 * Support style names that may come passed in prefixed by adding permutations
	 * of vendor prefixes.
	 */
	var prefixes = ['Webkit', 'ms', 'Moz', 'O'];
	
	// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
	// infinite loop, because it iterates over the newly added props too.
	Object.keys(isUnitlessNumber).forEach(function (prop) {
	  prefixes.forEach(function (prefix) {
	    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
	  });
	});
	
	/**
	 * Most style properties can be unset by doing .style[prop] = '' but IE8
	 * doesn't like doing that with shorthand properties so for the properties that
	 * IE8 breaks on, which are listed here, we instead unset each of the
	 * individual properties. See http://bugs.jquery.com/ticket/12385.
	 * The 4-value 'clock' properties like margin, padding, border-width seem to
	 * behave without any problems. Curiously, list-style works too without any
	 * special prodding.
	 */
	var shorthandPropertyExpansions = {
	  background: {
	    backgroundAttachment: true,
	    backgroundColor: true,
	    backgroundImage: true,
	    backgroundPositionX: true,
	    backgroundPositionY: true,
	    backgroundRepeat: true
	  },
	  backgroundPosition: {
	    backgroundPositionX: true,
	    backgroundPositionY: true
	  },
	  border: {
	    borderWidth: true,
	    borderStyle: true,
	    borderColor: true
	  },
	  borderBottom: {
	    borderBottomWidth: true,
	    borderBottomStyle: true,
	    borderBottomColor: true
	  },
	  borderLeft: {
	    borderLeftWidth: true,
	    borderLeftStyle: true,
	    borderLeftColor: true
	  },
	  borderRight: {
	    borderRightWidth: true,
	    borderRightStyle: true,
	    borderRightColor: true
	  },
	  borderTop: {
	    borderTopWidth: true,
	    borderTopStyle: true,
	    borderTopColor: true
	  },
	  font: {
	    fontStyle: true,
	    fontVariant: true,
	    fontWeight: true,
	    fontSize: true,
	    lineHeight: true,
	    fontFamily: true
	  },
	  outline: {
	    outlineWidth: true,
	    outlineStyle: true,
	    outlineColor: true
	  }
	};
	
	var CSSProperty = {
	  isUnitlessNumber: isUnitlessNumber,
	  shorthandPropertyExpansions: shorthandPropertyExpansions
	};
	
	module.exports = CSSProperty;

/***/ },
/* 144 */
/*!*****************************************!*\
  !*** ./~/fbjs/lib/camelizeStyleName.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelizeStyleName
	 * @typechecks
	 */
	
	'use strict';
	
	var camelize = __webpack_require__(/*! ./camelize */ 145);
	
	var msPattern = /^-ms-/;
	
	/**
	 * Camelcases a hyphenated CSS property name, for example:
	 *
	 *   > camelizeStyleName('background-color')
	 *   < "backgroundColor"
	 *   > camelizeStyleName('-moz-transition')
	 *   < "MozTransition"
	 *   > camelizeStyleName('-ms-transition')
	 *   < "msTransition"
	 *
	 * As Andi Smith suggests
	 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
	 * is converted to lowercase `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelizeStyleName(string) {
	  return camelize(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = camelizeStyleName;

/***/ },
/* 145 */
/*!********************************!*\
  !*** ./~/fbjs/lib/camelize.js ***!
  \********************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule camelize
	 * @typechecks
	 */
	
	"use strict";
	
	var _hyphenPattern = /-(.)/g;
	
	/**
	 * Camelcases a hyphenated string, for example:
	 *
	 *   > camelize('background-color')
	 *   < "backgroundColor"
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function camelize(string) {
	  return string.replace(_hyphenPattern, function (_, character) {
	    return character.toUpperCase();
	  });
	}
	
	module.exports = camelize;

/***/ },
/* 146 */
/*!********************************************!*\
  !*** ./~/react/lib/dangerousStyleValue.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule dangerousStyleValue
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var CSSProperty = __webpack_require__(/*! ./CSSProperty */ 143);
	
	var isUnitlessNumber = CSSProperty.isUnitlessNumber;
	
	/**
	 * Convert a value into the proper css writable value. The style name `name`
	 * should be logical (no hyphens), as specified
	 * in `CSSProperty.isUnitlessNumber`.
	 *
	 * @param {string} name CSS property name such as `topMargin`.
	 * @param {*} value CSS property value such as `10px`.
	 * @return {string} Normalized style value with dimensions applied.
	 */
	function dangerousStyleValue(name, value) {
	  // Note that we've removed escapeTextForBrowser() calls here since the
	  // whole string will be escaped when the attribute is injected into
	  // the markup. If you provide unsafe user data here they can inject
	  // arbitrary CSS which may be problematic (I couldn't repro this):
	  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
	  // This is not an XSS hole but instead a potential CSS injection issue
	  // which has lead to a greater discussion about how we're going to
	  // trust URLs moving forward. See #2115901
	
	  var isEmpty = value == null || typeof value === 'boolean' || value === '';
	  if (isEmpty) {
	    return '';
	  }
	
	  var isNonNumeric = isNaN(value);
	  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
	    return '' + value; // cast to string
	  }
	
	  if (typeof value === 'string') {
	    value = value.trim();
	  }
	  return value + 'px';
	}
	
	module.exports = dangerousStyleValue;

/***/ },
/* 147 */
/*!******************************************!*\
  !*** ./~/fbjs/lib/hyphenateStyleName.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenateStyleName
	 * @typechecks
	 */
	
	'use strict';
	
	var hyphenate = __webpack_require__(/*! ./hyphenate */ 148);
	
	var msPattern = /^ms-/;
	
	/**
	 * Hyphenates a camelcased CSS property name, for example:
	 *
	 *   > hyphenateStyleName('backgroundColor')
	 *   < "background-color"
	 *   > hyphenateStyleName('MozTransition')
	 *   < "-moz-transition"
	 *   > hyphenateStyleName('msTransition')
	 *   < "-ms-transition"
	 *
	 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
	 * is converted to `-ms-`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenateStyleName(string) {
	  return hyphenate(string).replace(msPattern, '-ms-');
	}
	
	module.exports = hyphenateStyleName;

/***/ },
/* 148 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/hyphenate.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule hyphenate
	 * @typechecks
	 */
	
	'use strict';
	
	var _uppercasePattern = /([A-Z])/g;
	
	/**
	 * Hyphenates a camelcased string, for example:
	 *
	 *   > hyphenate('backgroundColor')
	 *   < "background-color"
	 *
	 * For CSS style names, use `hyphenateStyleName` instead which works properly
	 * with all vendor prefixes, including `ms`.
	 *
	 * @param {string} string
	 * @return {string}
	 */
	function hyphenate(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	module.exports = hyphenate;

/***/ },
/* 149 */
/*!*****************************************!*\
  !*** ./~/fbjs/lib/memoizeStringOnly.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule memoizeStringOnly
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * Memoizes the return value of a function that accepts one string argument.
	 *
	 * @param {function} callback
	 * @return {function}
	 */
	function memoizeStringOnly(callback) {
	  var cache = {};
	  return function (string) {
	    if (!cache.hasOwnProperty(string)) {
	      cache[string] = callback.call(this, string);
	    }
	    return cache[string];
	  };
	}
	
	module.exports = memoizeStringOnly;

/***/ },
/* 150 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMButton.js ***!
  \***************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMButton
	 */
	
	'use strict';
	
	var mouseListenerNames = {
	  onClick: true,
	  onDoubleClick: true,
	  onMouseDown: true,
	  onMouseMove: true,
	  onMouseUp: true,
	
	  onClickCapture: true,
	  onDoubleClickCapture: true,
	  onMouseDownCapture: true,
	  onMouseMoveCapture: true,
	  onMouseUpCapture: true
	};
	
	/**
	 * Implements a <button> native component that does not receive mouse events
	 * when `disabled` is set.
	 */
	var ReactDOMButton = {
	  getNativeProps: function (inst, props, context) {
	    if (!props.disabled) {
	      return props;
	    }
	
	    // Copy the props, except the mouse listeners
	    var nativeProps = {};
	    for (var key in props) {
	      if (props.hasOwnProperty(key) && !mouseListenerNames[key]) {
	        nativeProps[key] = props[key];
	      }
	    }
	
	    return nativeProps;
	  }
	};
	
	module.exports = ReactDOMButton;

/***/ },
/* 151 */
/*!**************************************!*\
  !*** ./~/react/lib/ReactDOMInput.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMInput
	 */
	
	'use strict';
	
	var ReactDOMIDOperations = __webpack_require__(/*! ./ReactDOMIDOperations */ 73);
	var LinkedValueUtils = __webpack_require__(/*! ./LinkedValueUtils */ 152);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	var instancesByReactID = {};
	
	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMInput.updateWrapper(this);
	  }
	}
	
	/**
	 * Implements an <input> native component that allows setting these optional
	 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
	 *
	 * If `checked` or `value` are not supplied (or null/undefined), user actions
	 * that affect the checked state or value will trigger updates to the element.
	 *
	 * If they are supplied (and not null/undefined), the rendered element will not
	 * trigger updates to the element. Instead, the props must change in order for
	 * the rendered element to be updated.
	 *
	 * The rendered element will be initialized as unchecked (or `defaultChecked`)
	 * with an empty value (or `defaultValue`).
	 *
	 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
	 */
	var ReactDOMInput = {
	  getNativeProps: function (inst, props, context) {
	    var value = LinkedValueUtils.getValue(props);
	    var checked = LinkedValueUtils.getChecked(props);
	
	    var nativeProps = assign({}, props, {
	      defaultChecked: undefined,
	      defaultValue: undefined,
	      value: value != null ? value : inst._wrapperState.initialValue,
	      checked: checked != null ? checked : inst._wrapperState.initialChecked,
	      onChange: inst._wrapperState.onChange
	    });
	
	    return nativeProps;
	  },
	
	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('input', props, inst._currentElement._owner);
	    }
	
	    var defaultValue = props.defaultValue;
	    inst._wrapperState = {
	      initialChecked: props.defaultChecked || false,
	      initialValue: defaultValue != null ? defaultValue : null,
	      onChange: _handleChange.bind(inst)
	    };
	  },
	
	  mountReadyWrapper: function (inst) {
	    // Can't be in mountWrapper or else server rendering leaks.
	    instancesByReactID[inst._rootNodeID] = inst;
	  },
	
	  unmountWrapper: function (inst) {
	    delete instancesByReactID[inst._rootNodeID];
	  },
	
	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	
	    // TODO: Shouldn't this be getChecked(props)?
	    var checked = props.checked;
	    if (checked != null) {
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'checked', checked || false);
	    }
	
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};
	
	function _handleChange(event) {
	  var props = this._currentElement.props;
	
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	
	  // Here we use asap to wait until all updates have propagated, which
	  // is important when using controlled components within layers:
	  // https://github.com/facebook/react/issues/1698
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	
	  var name = props.name;
	  if (props.type === 'radio' && name != null) {
	    var rootNode = ReactMount.getNode(this._rootNodeID);
	    var queryRoot = rootNode;
	
	    while (queryRoot.parentNode) {
	      queryRoot = queryRoot.parentNode;
	    }
	
	    // If `rootNode.form` was non-null, then we could try `form.elements`,
	    // but that sometimes behaves strangely in IE8. We could also try using
	    // `form.getElementsByName`, but that will only return direct children
	    // and won't include inputs that use the HTML5 `form=` attribute. Since
	    // the input might not even be in a form, let's just use the global
	    // `querySelectorAll` to ensure we don't miss anything.
	    var group = queryRoot.querySelectorAll('input[name=' + JSON.stringify('' + name) + '][type="radio"]');
	
	    for (var i = 0; i < group.length; i++) {
	      var otherNode = group[i];
	      if (otherNode === rootNode || otherNode.form !== rootNode.form) {
	        continue;
	      }
	      // This will throw if radio buttons rendered by different copies of React
	      // and the same name are rendered into the same form (same as #1939).
	      // That's probably okay; we don't support it just as we don't support
	      // mixing React with non-React.
	      var otherID = ReactMount.getID(otherNode);
	      !otherID ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Mixing React and non-React radio inputs with the ' + 'same `name` is not supported.') : invariant(false) : undefined;
	      var otherInstance = instancesByReactID[otherID];
	      !otherInstance ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOMInput: Unknown radio button ID %s.', otherID) : invariant(false) : undefined;
	      // If this is a controlled radio button group, forcing the input that
	      // was previously checked to update will cause it to be come re-checked
	      // as appropriate.
	      ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
	    }
	  }
	
	  return returnValue;
	}
	
	module.exports = ReactDOMInput;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 152 */
/*!*****************************************!*\
  !*** ./~/react/lib/LinkedValueUtils.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule LinkedValueUtils
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactPropTypes = __webpack_require__(/*! ./ReactPropTypes */ 153);
	var ReactPropTypeLocations = __webpack_require__(/*! ./ReactPropTypeLocations */ 111);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var hasReadOnlyValue = {
	  'button': true,
	  'checkbox': true,
	  'image': true,
	  'hidden': true,
	  'radio': true,
	  'reset': true,
	  'submit': true
	};
	
	function _assertSingleLink(inputProps) {
	  !(inputProps.checkedLink == null || inputProps.valueLink == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a valueLink. If you want to use ' + 'checkedLink, you probably don\'t want to use valueLink and vice versa.') : invariant(false) : undefined;
	}
	function _assertValueLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.value == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a valueLink and a value or onChange event. If you want ' + 'to use value or onChange, you probably don\'t want to use valueLink.') : invariant(false) : undefined;
	}
	
	function _assertCheckedLink(inputProps) {
	  _assertSingleLink(inputProps);
	  !(inputProps.checked == null && inputProps.onChange == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot provide a checkedLink and a checked property or onChange event. ' + 'If you want to use checked or onChange, you probably don\'t want to ' + 'use checkedLink') : invariant(false) : undefined;
	}
	
	var propTypes = {
	  value: function (props, propName, componentName) {
	    if (!props[propName] || hasReadOnlyValue[props.type] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `value` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultValue`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  checked: function (props, propName, componentName) {
	    if (!props[propName] || props.onChange || props.readOnly || props.disabled) {
	      return null;
	    }
	    return new Error('You provided a `checked` prop to a form field without an ' + '`onChange` handler. This will render a read-only field. If ' + 'the field should be mutable use `defaultChecked`. Otherwise, ' + 'set either `onChange` or `readOnly`.');
	  },
	  onChange: ReactPropTypes.func
	};
	
	var loggedTypeFailures = {};
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Provide a linked `value` attribute for controlled forms. You should not use
	 * this outside of the ReactDOM controlled form components.
	 */
	var LinkedValueUtils = {
	  checkPropTypes: function (tagName, props, owner) {
	    for (var propName in propTypes) {
	      if (propTypes.hasOwnProperty(propName)) {
	        var error = propTypes[propName](props, propName, tagName, ReactPropTypeLocations.prop);
	      }
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var addendum = getDeclarationErrorAddendum(owner);
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed form propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  },
	
	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current value of the input either from value prop or link.
	   */
	  getValue: function (inputProps) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.value;
	    }
	    return inputProps.value;
	  },
	
	  /**
	   * @param {object} inputProps Props for form component
	   * @return {*} current checked status of the input either from checked prop
	   *             or link.
	   */
	  getChecked: function (inputProps) {
	    if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.value;
	    }
	    return inputProps.checked;
	  },
	
	  /**
	   * @param {object} inputProps Props for form component
	   * @param {SyntheticEvent} event change event to handle
	   */
	  executeOnChange: function (inputProps, event) {
	    if (inputProps.valueLink) {
	      _assertValueLink(inputProps);
	      return inputProps.valueLink.requestChange(event.target.value);
	    } else if (inputProps.checkedLink) {
	      _assertCheckedLink(inputProps);
	      return inputProps.checkedLink.requestChange(event.target.checked);
	    } else if (inputProps.onChange) {
	      return inputProps.onChange.call(undefined, event);
	    }
	  }
	};
	
	module.exports = LinkedValueUtils;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 153 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactPropTypes.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactPropTypes
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ 112);
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	var getIteratorFn = __webpack_require__(/*! ./getIteratorFn */ 154);
	
	/**
	 * Collection of methods that allow declaration and validation of props that are
	 * supplied to React components. Example usage:
	 *
	 *   var Props = require('ReactPropTypes');
	 *   var MyArticle = React.createClass({
	 *     propTypes: {
	 *       // An optional string prop named "description".
	 *       description: Props.string,
	 *
	 *       // A required enum prop named "category".
	 *       category: Props.oneOf(['News','Photos']).isRequired,
	 *
	 *       // A prop named "dialog" that requires an instance of Dialog.
	 *       dialog: Props.instanceOf(Dialog).isRequired
	 *     },
	 *     render: function() { ... }
	 *   });
	 *
	 * A more formal specification of how these methods are used:
	 *
	 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	 *   decl := ReactPropTypes.{type}(.isRequired)?
	 *
	 * Each and every declaration produces a function with the same signature. This
	 * allows the creation of custom validation functions. For example:
	 *
	 *  var MyLink = React.createClass({
	 *    propTypes: {
	 *      // An optional string or URI prop named "href".
	 *      href: function(props, propName, componentName) {
	 *        var propValue = props[propName];
	 *        if (propValue != null && typeof propValue !== 'string' &&
	 *            !(propValue instanceof URI)) {
	 *          return new Error(
	 *            'Expected a string or an URI for ' + propName + ' in ' +
	 *            componentName
	 *          );
	 *        }
	 *      }
	 *    },
	 *    render: function() {...}
	 *  });
	 *
	 * @internal
	 */
	
	var ANONYMOUS = '<<anonymous>>';
	
	var ReactPropTypes = {
	  array: createPrimitiveTypeChecker('array'),
	  bool: createPrimitiveTypeChecker('boolean'),
	  func: createPrimitiveTypeChecker('function'),
	  number: createPrimitiveTypeChecker('number'),
	  object: createPrimitiveTypeChecker('object'),
	  string: createPrimitiveTypeChecker('string'),
	
	  any: createAnyTypeChecker(),
	  arrayOf: createArrayOfTypeChecker,
	  element: createElementTypeChecker(),
	  instanceOf: createInstanceTypeChecker,
	  node: createNodeChecker(),
	  objectOf: createObjectOfTypeChecker,
	  oneOf: createEnumTypeChecker,
	  oneOfType: createUnionTypeChecker,
	  shape: createShapeTypeChecker
	};
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    componentName = componentName || ANONYMOUS;
	    propFullName = propFullName || propName;
	    if (props[propName] == null) {
	      var locationName = ReactPropTypeLocationNames[location];
	      if (isRequired) {
	        return new Error('Required ' + locationName + ' `' + propFullName + '` was not specified in ' + ('`' + componentName + '`.'));
	      }
	      return null;
	    } else {
	      return validate(props, propName, componentName, location, propFullName);
	    }
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}
	
	function createPrimitiveTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== expectedType) {
	      var locationName = ReactPropTypeLocationNames[location];
	      // `propValue` being instance of, say, date/regexp, pass the 'object'
	      // check, but we can offer a more precise error message here rather than
	      // 'of type `object`'.
	      var preciseType = getPreciseType(propValue);
	
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createAnyTypeChecker() {
	  return createChainableTypeChecker(emptyFunction.thatReturns(null));
	}
	
	function createArrayOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    if (!Array.isArray(propValue)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var propType = getPropType(propValue);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	    }
	    for (var i = 0; i < propValue.length; i++) {
	      var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']');
	      if (error instanceof Error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createElementTypeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!ReactElement.isValidElement(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a single ReactElement.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createInstanceTypeChecker(expectedClass) {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!(props[propName] instanceof expectedClass)) {
	      var locationName = ReactPropTypeLocationNames[location];
	      var expectedClassName = expectedClass.name || ANONYMOUS;
	      var actualClassName = getClassName(props[propName]);
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createEnumTypeChecker(expectedValues) {
	  if (!Array.isArray(expectedValues)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOf, expected an instance of array.');
	    });
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    for (var i = 0; i < expectedValues.length; i++) {
	      if (propValue === expectedValues[i]) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    var valuesString = JSON.stringify(expectedValues);
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createObjectOfTypeChecker(typeChecker) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	    }
	    for (var key in propValue) {
	      if (propValue.hasOwnProperty(key)) {
	        var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createUnionTypeChecker(arrayOfTypeCheckers) {
	  if (!Array.isArray(arrayOfTypeCheckers)) {
	    return createChainableTypeChecker(function () {
	      return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');
	    });
	  }
	
	  function validate(props, propName, componentName, location, propFullName) {
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (checker(props, propName, componentName, location, propFullName) == null) {
	        return null;
	      }
	    }
	
	    var locationName = ReactPropTypeLocationNames[location];
	    return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createNodeChecker() {
	  function validate(props, propName, componentName, location, propFullName) {
	    if (!isNode(props[propName])) {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function createShapeTypeChecker(shapeTypes) {
	  function validate(props, propName, componentName, location, propFullName) {
	    var propValue = props[propName];
	    var propType = getPropType(propValue);
	    if (propType !== 'object') {
	      var locationName = ReactPropTypeLocationNames[location];
	      return new Error('Invalid ' + locationName + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	    }
	    for (var key in shapeTypes) {
	      var checker = shapeTypes[key];
	      if (!checker) {
	        continue;
	      }
	      var error = checker(propValue, key, componentName, location, propFullName + '.' + key);
	      if (error) {
	        return error;
	      }
	    }
	    return null;
	  }
	  return createChainableTypeChecker(validate);
	}
	
	function isNode(propValue) {
	  switch (typeof propValue) {
	    case 'number':
	    case 'string':
	    case 'undefined':
	      return true;
	    case 'boolean':
	      return !propValue;
	    case 'object':
	      if (Array.isArray(propValue)) {
	        return propValue.every(isNode);
	      }
	      if (propValue === null || ReactElement.isValidElement(propValue)) {
	        return true;
	      }
	
	      var iteratorFn = getIteratorFn(propValue);
	      if (iteratorFn) {
	        var iterator = iteratorFn.call(propValue);
	        var step;
	        if (iteratorFn !== propValue.entries) {
	          while (!(step = iterator.next()).done) {
	            if (!isNode(step.value)) {
	              return false;
	            }
	          }
	        } else {
	          // Iterator will provide entry [k,v] tuples rather than values.
	          while (!(step = iterator.next()).done) {
	            var entry = step.value;
	            if (entry) {
	              if (!isNode(entry[1])) {
	                return false;
	              }
	            }
	          }
	        }
	      } else {
	        return false;
	      }
	
	      return true;
	    default:
	      return false;
	  }
	}
	
	// Equivalent of `typeof` but with special handling for array and regexp.
	function getPropType(propValue) {
	  var propType = typeof propValue;
	  if (Array.isArray(propValue)) {
	    return 'array';
	  }
	  if (propValue instanceof RegExp) {
	    // Old webkits (at least until Android 4.0) return 'function' rather than
	    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	    // passes PropTypes.object.
	    return 'object';
	  }
	  return propType;
	}
	
	// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function getPreciseType(propValue) {
	  var propType = getPropType(propValue);
	  if (propType === 'object') {
	    if (propValue instanceof Date) {
	      return 'date';
	    } else if (propValue instanceof RegExp) {
	      return 'regexp';
	    }
	  }
	  return propType;
	}
	
	// Returns class name of the object, if any.
	function getClassName(propValue) {
	  if (!propValue.constructor || !propValue.constructor.name) {
	    return '<<anonymous>>';
	  }
	  return propValue.constructor.name;
	}
	
	module.exports = ReactPropTypes;

/***/ },
/* 154 */
/*!**************************************!*\
  !*** ./~/react/lib/getIteratorFn.js ***!
  \**************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getIteratorFn
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/* global Symbol */
	var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
	
	/**
	 * Returns the iterator method function contained on the iterable object.
	 *
	 * Be sure to invoke the function with the iterable as context:
	 *
	 *     var iteratorFn = getIteratorFn(myIterable);
	 *     if (iteratorFn) {
	 *       var iterator = iteratorFn.call(myIterable);
	 *       ...
	 *     }
	 *
	 * @param {?object} maybeIterable
	 * @return {?function}
	 */
	function getIteratorFn(maybeIterable) {
	  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	  if (typeof iteratorFn === 'function') {
	    return iteratorFn;
	  }
	}
	
	module.exports = getIteratorFn;

/***/ },
/* 155 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMOption.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMOption
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(/*! ./ReactChildren */ 156);
	var ReactDOMSelect = __webpack_require__(/*! ./ReactDOMSelect */ 158);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var valueContextKey = ReactDOMSelect.valueContextKey;
	
	/**
	 * Implements an <option> native component that warns when `selected` is set.
	 */
	var ReactDOMOption = {
	  mountWrapper: function (inst, props, context) {
	    // TODO (yungsters): Remove support for `selected` in <option>.
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(props.selected == null, 'Use the `defaultValue` or `value` props on <select> instead of ' + 'setting `selected` on <option>.') : undefined;
	    }
	
	    // Look up whether this option is 'selected' via context
	    var selectValue = context[valueContextKey];
	
	    // If context key is null (e.g., no specified value or after initial mount)
	    // or missing (e.g., for <datalist>), we don't change props.selected
	    var selected = null;
	    if (selectValue != null) {
	      selected = false;
	      if (Array.isArray(selectValue)) {
	        // multiple
	        for (var i = 0; i < selectValue.length; i++) {
	          if ('' + selectValue[i] === '' + props.value) {
	            selected = true;
	            break;
	          }
	        }
	      } else {
	        selected = '' + selectValue === '' + props.value;
	      }
	    }
	
	    inst._wrapperState = { selected: selected };
	  },
	
	  getNativeProps: function (inst, props, context) {
	    var nativeProps = assign({ selected: undefined, children: undefined }, props);
	
	    // Read state only from initial mount because <select> updates value
	    // manually; we need the initial state only for server rendering
	    if (inst._wrapperState.selected != null) {
	      nativeProps.selected = inst._wrapperState.selected;
	    }
	
	    var content = '';
	
	    // Flatten children and warn if they aren't strings or numbers;
	    // invalid types are ignored.
	    ReactChildren.forEach(props.children, function (child) {
	      if (child == null) {
	        return;
	      }
	      if (typeof child === 'string' || typeof child === 'number') {
	        content += child;
	      } else {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Only strings and numbers are supported as <option> children.') : undefined;
	      }
	    });
	
	    nativeProps.children = content;
	    return nativeProps;
	  }
	
	};
	
	module.exports = ReactDOMOption;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 156 */
/*!**************************************!*\
  !*** ./~/react/lib/ReactChildren.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildren
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	var traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ 157);
	
	var twoArgumentPooler = PooledClass.twoArgumentPooler;
	var fourArgumentPooler = PooledClass.fourArgumentPooler;
	
	var userProvidedKeyEscapeRegex = /\/(?!\/)/g;
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, '//');
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * traversal. Allows avoiding binding callbacks.
	 *
	 * @constructor ForEachBookKeeping
	 * @param {!function} forEachFunction Function to perform traversal with.
	 * @param {?*} forEachContext Context to perform context with.
	 */
	function ForEachBookKeeping(forEachFunction, forEachContext) {
	  this.func = forEachFunction;
	  this.context = forEachContext;
	  this.count = 0;
	}
	ForEachBookKeeping.prototype.destructor = function () {
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
	
	function forEachSingleChild(bookKeeping, child, name) {
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	  func.call(context, child, bookKeeping.count++);
	}
	
	/**
	 * Iterates through children that are typically specified as `props.children`.
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} forEachFunc
	 * @param {*} forEachContext Context for forEachContext.
	 */
	function forEachChildren(children, forEachFunc, forEachContext) {
	  if (children == null) {
	    return children;
	  }
	  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
	  traverseAllChildren(children, forEachSingleChild, traverseContext);
	  ForEachBookKeeping.release(traverseContext);
	}
	
	/**
	 * PooledClass representing the bookkeeping associated with performing a child
	 * mapping. Allows avoiding binding callbacks.
	 *
	 * @constructor MapBookKeeping
	 * @param {!*} mapResult Object containing the ordered map of results.
	 * @param {!function} mapFunction Function to perform mapping with.
	 * @param {?*} mapContext Context to perform mapping with.
	 */
	function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
	  this.result = mapResult;
	  this.keyPrefix = keyPrefix;
	  this.func = mapFunction;
	  this.context = mapContext;
	  this.count = 0;
	}
	MapBookKeeping.prototype.destructor = function () {
	  this.result = null;
	  this.keyPrefix = null;
	  this.func = null;
	  this.context = null;
	  this.count = 0;
	};
	PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);
	
	function mapSingleChildIntoContext(bookKeeping, child, childKey) {
	  var result = bookKeeping.result;
	  var keyPrefix = bookKeeping.keyPrefix;
	  var func = bookKeeping.func;
	  var context = bookKeeping.context;
	
	  var mappedChild = func.call(context, child, bookKeeping.count++);
	  if (Array.isArray(mappedChild)) {
	    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
	  } else if (mappedChild != null) {
	    if (ReactElement.isValidElement(mappedChild)) {
	      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
	      // Keep both the (mapped) and old keys if they differ, just as
	      // traverseAllChildren used to do for objects as children
	      keyPrefix + (mappedChild !== child ? escapeUserProvidedKey(mappedChild.key || '') + '/' : '') + childKey);
	    }
	    result.push(mappedChild);
	  }
	}
	
	function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
	  var escapedPrefix = '';
	  if (prefix != null) {
	    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
	  }
	  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
	  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
	  MapBookKeeping.release(traverseContext);
	}
	
	/**
	 * Maps children that are typically specified as `props.children`.
	 *
	 * The provided mapFunction(child, key, index) will be called for each
	 * leaf child.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func The map function.
	 * @param {*} context Context for mapFunction.
	 * @return {object} Object containing the ordered map of results.
	 */
	function mapChildren(children, func, context) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
	  return result;
	}
	
	function forEachSingleChildDummy(traverseContext, child, name) {
	  return null;
	}
	
	/**
	 * Count the number of children that are typically specified as
	 * `props.children`.
	 *
	 * @param {?*} children Children tree container.
	 * @return {number} The number of children.
	 */
	function countChildren(children, context) {
	  return traverseAllChildren(children, forEachSingleChildDummy, null);
	}
	
	/**
	 * Flatten a children object (typically specified as `props.children`) and
	 * return an array with appropriately re-keyed children.
	 */
	function toArray(children) {
	  var result = [];
	  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
	  return result;
	}
	
	var ReactChildren = {
	  forEach: forEachChildren,
	  map: mapChildren,
	  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
	  count: countChildren,
	  toArray: toArray
	};
	
	module.exports = ReactChildren;

/***/ },
/* 157 */
/*!********************************************!*\
  !*** ./~/react/lib/traverseAllChildren.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule traverseAllChildren
	 */
	
	'use strict';
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 91);
	
	var getIteratorFn = __webpack_require__(/*! ./getIteratorFn */ 154);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var SEPARATOR = ReactInstanceHandles.SEPARATOR;
	var SUBSEPARATOR = ':';
	
	/**
	 * TODO: Test that a single child and an array with one item have the same key
	 * pattern.
	 */
	
	var userProvidedKeyEscaperLookup = {
	  '=': '=0',
	  '.': '=1',
	  ':': '=2'
	};
	
	var userProvidedKeyEscapeRegex = /[=.:]/g;
	
	var didWarnAboutMaps = false;
	
	function userProvidedKeyEscaper(match) {
	  return userProvidedKeyEscaperLookup[match];
	}
	
	/**
	 * Generate a key string that identifies a component within a set.
	 *
	 * @param {*} component A component that could contain a manual key.
	 * @param {number} index Index that is used if a manual key is not provided.
	 * @return {string}
	 */
	function getComponentKey(component, index) {
	  if (component && component.key != null) {
	    // Explicit key
	    return wrapUserProvidedKey(component.key);
	  }
	  // Implicit key determined by the index in the set
	  return index.toString(36);
	}
	
	/**
	 * Escape a component key so that it is safe to use in a reactid.
	 *
	 * @param {*} text Component key to be escaped.
	 * @return {string} An escaped string.
	 */
	function escapeUserProvidedKey(text) {
	  return ('' + text).replace(userProvidedKeyEscapeRegex, userProvidedKeyEscaper);
	}
	
	/**
	 * Wrap a `key` value explicitly provided by the user to distinguish it from
	 * implicitly-generated keys generated by a component's index in its parent.
	 *
	 * @param {string} key Value of a user-provided `key` attribute
	 * @return {string}
	 */
	function wrapUserProvidedKey(key) {
	  return '$' + escapeUserProvidedKey(key);
	}
	
	/**
	 * @param {?*} children Children tree container.
	 * @param {!string} nameSoFar Name of the key path so far.
	 * @param {!function} callback Callback to invoke with each child found.
	 * @param {?*} traverseContext Used to pass information throughout the traversal
	 * process.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
	  var type = typeof children;
	
	  if (type === 'undefined' || type === 'boolean') {
	    // All of the above are perceived as null.
	    children = null;
	  }
	
	  if (children === null || type === 'string' || type === 'number' || ReactElement.isValidElement(children)) {
	    callback(traverseContext, children,
	    // If it's the only child, treat the name as if it was wrapped in an array
	    // so that it's consistent if the number of children grows.
	    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
	    return 1;
	  }
	
	  var child;
	  var nextName;
	  var subtreeCount = 0; // Count of children found in the current subtree.
	  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
	
	  if (Array.isArray(children)) {
	    for (var i = 0; i < children.length; i++) {
	      child = children[i];
	      nextName = nextNamePrefix + getComponentKey(child, i);
	      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	    }
	  } else {
	    var iteratorFn = getIteratorFn(children);
	    if (iteratorFn) {
	      var iterator = iteratorFn.call(children);
	      var step;
	      if (iteratorFn !== children.entries) {
	        var ii = 0;
	        while (!(step = iterator.next()).done) {
	          child = step.value;
	          nextName = nextNamePrefix + getComponentKey(child, ii++);
	          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	        }
	      } else {
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.') : undefined;
	          didWarnAboutMaps = true;
	        }
	        // Iterator will provide entry [k,v] tuples rather than values.
	        while (!(step = iterator.next()).done) {
	          var entry = step.value;
	          if (entry) {
	            child = entry[1];
	            nextName = nextNamePrefix + wrapUserProvidedKey(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
	            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
	          }
	        }
	      }
	    } else if (type === 'object') {
	      var addendum = '';
	      if (process.env.NODE_ENV !== 'production') {
	        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
	        if (children._isReactElement) {
	          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
	        }
	        if (ReactCurrentOwner.current) {
	          var name = ReactCurrentOwner.current.getName();
	          if (name) {
	            addendum += ' Check the render method of `' + name + '`.';
	          }
	        }
	      }
	      var childrenString = String(children);
	       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : invariant(false) : undefined;
	    }
	  }
	
	  return subtreeCount;
	}
	
	/**
	 * Traverses children that are typically specified as `props.children`, but
	 * might also be specified through attributes:
	 *
	 * - `traverseAllChildren(this.props.children, ...)`
	 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
	 *
	 * The `traverseContext` is an optional argument that is passed through the
	 * entire traversal. It can be used to store accumulations or anything else that
	 * the callback might find relevant.
	 *
	 * @param {?*} children Children tree object.
	 * @param {!function} callback To invoke upon traversing each child.
	 * @param {?*} traverseContext Context for traversal.
	 * @return {!number} The number of children in this subtree.
	 */
	function traverseAllChildren(children, callback, traverseContext) {
	  if (children == null) {
	    return 0;
	  }
	
	  return traverseAllChildrenImpl(children, '', callback, traverseContext);
	}
	
	module.exports = traverseAllChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 158 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMSelect.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelect
	 */
	
	'use strict';
	
	var LinkedValueUtils = __webpack_require__(/*! ./LinkedValueUtils */ 152);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var valueContextKey = '__ReactDOMSelect_value$' + Math.random().toString(36).slice(2);
	
	function updateOptionsIfPendingUpdateAndMounted() {
	  if (this._rootNodeID && this._wrapperState.pendingUpdate) {
	    this._wrapperState.pendingUpdate = false;
	
	    var props = this._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);
	
	    if (value != null) {
	      updateOptions(this, Boolean(props.multiple), value);
	    }
	  }
	}
	
	function getDeclarationErrorAddendum(owner) {
	  if (owner) {
	    var name = owner.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	var valuePropNames = ['value', 'defaultValue'];
	
	/**
	 * Validation function for `value` and `defaultValue`.
	 * @private
	 */
	function checkSelectPropTypes(inst, props) {
	  var owner = inst._currentElement._owner;
	  LinkedValueUtils.checkPropTypes('select', props, owner);
	
	  for (var i = 0; i < valuePropNames.length; i++) {
	    var propName = valuePropNames[i];
	    if (props[propName] == null) {
	      continue;
	    }
	    if (props.multiple) {
	      process.env.NODE_ENV !== 'production' ? warning(Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be an array if ' + '`multiple` is true.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    } else {
	      process.env.NODE_ENV !== 'production' ? warning(!Array.isArray(props[propName]), 'The `%s` prop supplied to <select> must be a scalar ' + 'value if `multiple` is false.%s', propName, getDeclarationErrorAddendum(owner)) : undefined;
	    }
	  }
	}
	
	/**
	 * @param {ReactDOMComponent} inst
	 * @param {boolean} multiple
	 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
	 * @private
	 */
	function updateOptions(inst, multiple, propValue) {
	  var selectedValue, i;
	  var options = ReactMount.getNode(inst._rootNodeID).options;
	
	  if (multiple) {
	    selectedValue = {};
	    for (i = 0; i < propValue.length; i++) {
	      selectedValue['' + propValue[i]] = true;
	    }
	    for (i = 0; i < options.length; i++) {
	      var selected = selectedValue.hasOwnProperty(options[i].value);
	      if (options[i].selected !== selected) {
	        options[i].selected = selected;
	      }
	    }
	  } else {
	    // Do not set `select.value` as exact behavior isn't consistent across all
	    // browsers for all cases.
	    selectedValue = '' + propValue;
	    for (i = 0; i < options.length; i++) {
	      if (options[i].value === selectedValue) {
	        options[i].selected = true;
	        return;
	      }
	    }
	    if (options.length) {
	      options[0].selected = true;
	    }
	  }
	}
	
	/**
	 * Implements a <select> native component that allows optionally setting the
	 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
	 * stringable. If `multiple` is true, the prop must be an array of stringables.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that change the
	 * selected option will trigger updates to the rendered options.
	 *
	 * If it is supplied (and not null/undefined), the rendered options will not
	 * update in response to user actions. Instead, the `value` prop must change in
	 * order for the rendered options to update.
	 *
	 * If `defaultValue` is provided, any options with the supplied values will be
	 * selected.
	 */
	var ReactDOMSelect = {
	  valueContextKey: valueContextKey,
	
	  getNativeProps: function (inst, props, context) {
	    return assign({}, props, {
	      onChange: inst._wrapperState.onChange,
	      value: undefined
	    });
	  },
	
	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      checkSelectPropTypes(inst, props);
	    }
	
	    var value = LinkedValueUtils.getValue(props);
	    inst._wrapperState = {
	      pendingUpdate: false,
	      initialValue: value != null ? value : props.defaultValue,
	      onChange: _handleChange.bind(inst),
	      wasMultiple: Boolean(props.multiple)
	    };
	  },
	
	  processChildContext: function (inst, props, context) {
	    // Pass down initial value so initial generated markup has correct
	    // `selected` attributes
	    var childContext = assign({}, context);
	    childContext[valueContextKey] = inst._wrapperState.initialValue;
	    return childContext;
	  },
	
	  postUpdateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	
	    // After the initial mount, we control selected-ness manually so don't pass
	    // the context value down
	    inst._wrapperState.initialValue = undefined;
	
	    var wasMultiple = inst._wrapperState.wasMultiple;
	    inst._wrapperState.wasMultiple = Boolean(props.multiple);
	
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      inst._wrapperState.pendingUpdate = false;
	      updateOptions(inst, Boolean(props.multiple), value);
	    } else if (wasMultiple !== Boolean(props.multiple)) {
	      // For simplicity, reapply `defaultValue` if `multiple` is toggled.
	      if (props.defaultValue != null) {
	        updateOptions(inst, Boolean(props.multiple), props.defaultValue);
	      } else {
	        // Revert the select back to its default unselected state.
	        updateOptions(inst, Boolean(props.multiple), props.multiple ? [] : '');
	      }
	    }
	  }
	};
	
	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	
	  this._wrapperState.pendingUpdate = true;
	  ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted, this);
	  return returnValue;
	}
	
	module.exports = ReactDOMSelect;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 159 */
/*!*****************************************!*\
  !*** ./~/react/lib/ReactDOMTextarea.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMTextarea
	 */
	
	'use strict';
	
	var LinkedValueUtils = __webpack_require__(/*! ./LinkedValueUtils */ 152);
	var ReactDOMIDOperations = __webpack_require__(/*! ./ReactDOMIDOperations */ 73);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	function forceUpdateIfMounted() {
	  if (this._rootNodeID) {
	    // DOM component is still mounted; update
	    ReactDOMTextarea.updateWrapper(this);
	  }
	}
	
	/**
	 * Implements a <textarea> native component that allows setting `value`, and
	 * `defaultValue`. This differs from the traditional DOM API because value is
	 * usually set as PCDATA children.
	 *
	 * If `value` is not supplied (or null/undefined), user actions that affect the
	 * value will trigger updates to the element.
	 *
	 * If `value` is supplied (and not null/undefined), the rendered element will
	 * not trigger updates to the element. Instead, the `value` prop must change in
	 * order for the rendered element to be updated.
	 *
	 * The rendered element will be initialized with an empty value, the prop
	 * `defaultValue` if specified, or the children content (deprecated).
	 */
	var ReactDOMTextarea = {
	  getNativeProps: function (inst, props, context) {
	    !(props.dangerouslySetInnerHTML == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, '`dangerouslySetInnerHTML` does not make sense on <textarea>.') : invariant(false) : undefined;
	
	    // Always set children to the same thing. In IE9, the selection range will
	    // get reset if `textContent` is mutated.
	    var nativeProps = assign({}, props, {
	      defaultValue: undefined,
	      value: undefined,
	      children: inst._wrapperState.initialValue,
	      onChange: inst._wrapperState.onChange
	    });
	
	    return nativeProps;
	  },
	
	  mountWrapper: function (inst, props) {
	    if (process.env.NODE_ENV !== 'production') {
	      LinkedValueUtils.checkPropTypes('textarea', props, inst._currentElement._owner);
	    }
	
	    var defaultValue = props.defaultValue;
	    // TODO (yungsters): Remove support for children content in <textarea>.
	    var children = props.children;
	    if (children != null) {
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Use the `defaultValue` or `value` props instead of setting ' + 'children on <textarea>.') : undefined;
	      }
	      !(defaultValue == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'If you supply `defaultValue` on a <textarea>, do not pass children.') : invariant(false) : undefined;
	      if (Array.isArray(children)) {
	        !(children.length <= 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, '<textarea> can only have at most one child.') : invariant(false) : undefined;
	        children = children[0];
	      }
	
	      defaultValue = '' + children;
	    }
	    if (defaultValue == null) {
	      defaultValue = '';
	    }
	    var value = LinkedValueUtils.getValue(props);
	
	    inst._wrapperState = {
	      // We save the initial value so that `ReactDOMComponent` doesn't update
	      // `textContent` (unnecessary since we update value).
	      // The initial value can be a boolean or object so that's why it's
	      // forced to be a string.
	      initialValue: '' + (value != null ? value : defaultValue),
	      onChange: _handleChange.bind(inst)
	    };
	  },
	
	  updateWrapper: function (inst) {
	    var props = inst._currentElement.props;
	    var value = LinkedValueUtils.getValue(props);
	    if (value != null) {
	      // Cast `value` to a string to ensure the value is set correctly. While
	      // browsers typically do this as necessary, jsdom doesn't.
	      ReactDOMIDOperations.updatePropertyByID(inst._rootNodeID, 'value', '' + value);
	    }
	  }
	};
	
	function _handleChange(event) {
	  var props = this._currentElement.props;
	  var returnValue = LinkedValueUtils.executeOnChange(props, event);
	  ReactUpdates.asap(forceUpdateIfMounted, this);
	  return returnValue;
	}
	
	module.exports = ReactDOMTextarea;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 160 */
/*!****************************************!*\
  !*** ./~/react/lib/ReactMultiChild.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMultiChild
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactComponentEnvironment = __webpack_require__(/*! ./ReactComponentEnvironment */ 110);
	var ReactMultiChildUpdateTypes = __webpack_require__(/*! ./ReactMultiChildUpdateTypes */ 62);
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	var ReactChildReconciler = __webpack_require__(/*! ./ReactChildReconciler */ 161);
	
	var flattenChildren = __webpack_require__(/*! ./flattenChildren */ 162);
	
	/**
	 * Updating children of a component may trigger recursive updates. The depth is
	 * used to batch recursive updates to render markup more efficiently.
	 *
	 * @type {number}
	 * @private
	 */
	var updateDepth = 0;
	
	/**
	 * Queue of update configuration objects.
	 *
	 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
	 *
	 * @type {array<object>}
	 * @private
	 */
	var updateQueue = [];
	
	/**
	 * Queue of markup to be rendered.
	 *
	 * @type {array<string>}
	 * @private
	 */
	var markupQueue = [];
	
	/**
	 * Enqueues markup to be rendered and inserted at a supplied index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @param {number} toIndex Destination index.
	 * @private
	 */
	function enqueueInsertMarkup(parentID, markup, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
	    markupIndex: markupQueue.push(markup) - 1,
	    content: null,
	    fromIndex: null,
	    toIndex: toIndex
	  });
	}
	
	/**
	 * Enqueues moving an existing element to another index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Source index of the existing element.
	 * @param {number} toIndex Destination index of the element.
	 * @private
	 */
	function enqueueMove(parentID, fromIndex, toIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: toIndex
	  });
	}
	
	/**
	 * Enqueues removing an element at an index.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {number} fromIndex Index of the element to remove.
	 * @private
	 */
	function enqueueRemove(parentID, fromIndex) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
	    markupIndex: null,
	    content: null,
	    fromIndex: fromIndex,
	    toIndex: null
	  });
	}
	
	/**
	 * Enqueues setting the markup of a node.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} markup Markup that renders into an element.
	 * @private
	 */
	function enqueueSetMarkup(parentID, markup) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.SET_MARKUP,
	    markupIndex: null,
	    content: markup,
	    fromIndex: null,
	    toIndex: null
	  });
	}
	
	/**
	 * Enqueues setting the text content.
	 *
	 * @param {string} parentID ID of the parent component.
	 * @param {string} textContent Text content to set.
	 * @private
	 */
	function enqueueTextContent(parentID, textContent) {
	  // NOTE: Null values reduce hidden classes.
	  updateQueue.push({
	    parentID: parentID,
	    parentNode: null,
	    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
	    markupIndex: null,
	    content: textContent,
	    fromIndex: null,
	    toIndex: null
	  });
	}
	
	/**
	 * Processes any enqueued updates.
	 *
	 * @private
	 */
	function processQueue() {
	  if (updateQueue.length) {
	    ReactComponentEnvironment.processChildrenUpdates(updateQueue, markupQueue);
	    clearQueue();
	  }
	}
	
	/**
	 * Clears any enqueued updates.
	 *
	 * @private
	 */
	function clearQueue() {
	  updateQueue.length = 0;
	  markupQueue.length = 0;
	}
	
	/**
	 * ReactMultiChild are capable of reconciling multiple children.
	 *
	 * @class ReactMultiChild
	 * @internal
	 */
	var ReactMultiChild = {
	
	  /**
	   * Provides common functionality for components that must reconcile multiple
	   * children. This is used by `ReactDOMComponent` to mount, update, and
	   * unmount child components.
	   *
	   * @lends {ReactMultiChild.prototype}
	   */
	  Mixin: {
	
	    _reconcilerInstantiateChildren: function (nestedChildren, transaction, context) {
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	        }
	      }
	      return ReactChildReconciler.instantiateChildren(nestedChildren, transaction, context);
	    },
	
	    _reconcilerUpdateChildren: function (prevChildren, nextNestedChildrenElements, transaction, context) {
	      var nextChildren;
	      if (process.env.NODE_ENV !== 'production') {
	        if (this._currentElement) {
	          try {
	            ReactCurrentOwner.current = this._currentElement._owner;
	            nextChildren = flattenChildren(nextNestedChildrenElements);
	          } finally {
	            ReactCurrentOwner.current = null;
	          }
	          return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	        }
	      }
	      nextChildren = flattenChildren(nextNestedChildrenElements);
	      return ReactChildReconciler.updateChildren(prevChildren, nextChildren, transaction, context);
	    },
	
	    /**
	     * Generates a "mount image" for each of the supplied children. In the case
	     * of `ReactDOMComponent`, a mount image is a string of markup.
	     *
	     * @param {?object} nestedChildren Nested child maps.
	     * @return {array} An array of mounted representations.
	     * @internal
	     */
	    mountChildren: function (nestedChildren, transaction, context) {
	      var children = this._reconcilerInstantiateChildren(nestedChildren, transaction, context);
	      this._renderedChildren = children;
	      var mountImages = [];
	      var index = 0;
	      for (var name in children) {
	        if (children.hasOwnProperty(name)) {
	          var child = children[name];
	          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	          var rootID = this._rootNodeID + name;
	          var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	          child._mountIndex = index++;
	          mountImages.push(mountImage);
	        }
	      }
	      return mountImages;
	    },
	
	    /**
	     * Replaces any rendered children with a text content string.
	     *
	     * @param {string} nextContent String of content.
	     * @internal
	     */
	    updateTextContent: function (nextContent) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        // TODO: The setTextContent operation should be enough
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChild(prevChildren[name]);
	          }
	        }
	        // Set new text content.
	        this.setTextContent(nextContent);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },
	
	    /**
	     * Replaces any rendered children with a markup string.
	     *
	     * @param {string} nextMarkup String of markup.
	     * @internal
	     */
	    updateMarkup: function (nextMarkup) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        var prevChildren = this._renderedChildren;
	        // Remove any rendered children.
	        ReactChildReconciler.unmountChildren(prevChildren);
	        for (var name in prevChildren) {
	          if (prevChildren.hasOwnProperty(name)) {
	            this._unmountChildByName(prevChildren[name], name);
	          }
	        }
	        this.setMarkup(nextMarkup);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },
	
	    /**
	     * Updates the rendered children with new children.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     */
	    updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      updateDepth++;
	      var errorThrown = true;
	      try {
	        this._updateChildren(nextNestedChildrenElements, transaction, context);
	        errorThrown = false;
	      } finally {
	        updateDepth--;
	        if (!updateDepth) {
	          if (errorThrown) {
	            clearQueue();
	          } else {
	            processQueue();
	          }
	        }
	      }
	    },
	
	    /**
	     * Improve performance by isolating this hot code path from the try/catch
	     * block in `updateChildren`.
	     *
	     * @param {?object} nextNestedChildrenElements Nested child element maps.
	     * @param {ReactReconcileTransaction} transaction
	     * @final
	     * @protected
	     */
	    _updateChildren: function (nextNestedChildrenElements, transaction, context) {
	      var prevChildren = this._renderedChildren;
	      var nextChildren = this._reconcilerUpdateChildren(prevChildren, nextNestedChildrenElements, transaction, context);
	      this._renderedChildren = nextChildren;
	      if (!nextChildren && !prevChildren) {
	        return;
	      }
	      var name;
	      // `nextIndex` will increment for each child in `nextChildren`, but
	      // `lastIndex` will be the last index visited in `prevChildren`.
	      var lastIndex = 0;
	      var nextIndex = 0;
	      for (name in nextChildren) {
	        if (!nextChildren.hasOwnProperty(name)) {
	          continue;
	        }
	        var prevChild = prevChildren && prevChildren[name];
	        var nextChild = nextChildren[name];
	        if (prevChild === nextChild) {
	          this.moveChild(prevChild, nextIndex, lastIndex);
	          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	          prevChild._mountIndex = nextIndex;
	        } else {
	          if (prevChild) {
	            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	            this._unmountChild(prevChild);
	          }
	          // The child must be instantiated before it's mounted.
	          this._mountChildByNameAtIndex(nextChild, name, nextIndex, transaction, context);
	        }
	        nextIndex++;
	      }
	      // Remove children that are no longer present.
	      for (name in prevChildren) {
	        if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	          this._unmountChild(prevChildren[name]);
	        }
	      }
	    },
	
	    /**
	     * Unmounts all rendered children. This should be used to clean up children
	     * when this component is unmounted.
	     *
	     * @internal
	     */
	    unmountChildren: function () {
	      var renderedChildren = this._renderedChildren;
	      ReactChildReconciler.unmountChildren(renderedChildren);
	      this._renderedChildren = null;
	    },
	
	    /**
	     * Moves a child component to the supplied index.
	     *
	     * @param {ReactComponent} child Component to move.
	     * @param {number} toIndex Destination index of the element.
	     * @param {number} lastIndex Last index visited of the siblings of `child`.
	     * @protected
	     */
	    moveChild: function (child, toIndex, lastIndex) {
	      // If the index of `child` is less than `lastIndex`, then it needs to
	      // be moved. Otherwise, we do not need to move it because a child will be
	      // inserted or moved before `child`.
	      if (child._mountIndex < lastIndex) {
	        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
	      }
	    },
	
	    /**
	     * Creates a child component.
	     *
	     * @param {ReactComponent} child Component to create.
	     * @param {string} mountImage Markup to insert.
	     * @protected
	     */
	    createChild: function (child, mountImage) {
	      enqueueInsertMarkup(this._rootNodeID, mountImage, child._mountIndex);
	    },
	
	    /**
	     * Removes a child component.
	     *
	     * @param {ReactComponent} child Child to remove.
	     * @protected
	     */
	    removeChild: function (child) {
	      enqueueRemove(this._rootNodeID, child._mountIndex);
	    },
	
	    /**
	     * Sets this text content string.
	     *
	     * @param {string} textContent Text content to set.
	     * @protected
	     */
	    setTextContent: function (textContent) {
	      enqueueTextContent(this._rootNodeID, textContent);
	    },
	
	    /**
	     * Sets this markup string.
	     *
	     * @param {string} markup Markup to set.
	     * @protected
	     */
	    setMarkup: function (markup) {
	      enqueueSetMarkup(this._rootNodeID, markup);
	    },
	
	    /**
	     * Mounts a child with the supplied name.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to mount.
	     * @param {string} name Name of the child.
	     * @param {number} index Index at which to insert the child.
	     * @param {ReactReconcileTransaction} transaction
	     * @private
	     */
	    _mountChildByNameAtIndex: function (child, name, index, transaction, context) {
	      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
	      var rootID = this._rootNodeID + name;
	      var mountImage = ReactReconciler.mountComponent(child, rootID, transaction, context);
	      child._mountIndex = index;
	      this.createChild(child, mountImage);
	    },
	
	    /**
	     * Unmounts a rendered child.
	     *
	     * NOTE: This is part of `updateChildren` and is here for readability.
	     *
	     * @param {ReactComponent} child Component to unmount.
	     * @private
	     */
	    _unmountChild: function (child) {
	      this.removeChild(child);
	      child._mountIndex = null;
	    }
	
	  }
	
	};
	
	module.exports = ReactMultiChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 161 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactChildReconciler.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactChildReconciler
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactReconciler = __webpack_require__(/*! ./ReactReconciler */ 96);
	
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 108);
	var shouldUpdateReactComponent = __webpack_require__(/*! ./shouldUpdateReactComponent */ 113);
	var traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ 157);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	function instantiateChild(childInstances, child, name) {
	  // We found a component instance.
	  var keyUnique = childInstances[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (child != null && keyUnique) {
	    childInstances[name] = instantiateReactComponent(child, null);
	  }
	}
	
	/**
	 * ReactChildReconciler provides helpers for initializing or updating a set of
	 * children. Its output is suitable for passing it onto ReactMultiChild which
	 * does diffed reordering and insertion.
	 */
	var ReactChildReconciler = {
	  /**
	   * Generates a "mount image" for each of the supplied children. In the case
	   * of `ReactDOMComponent`, a mount image is a string of markup.
	   *
	   * @param {?object} nestedChildNodes Nested child maps.
	   * @return {?object} A set of child instances.
	   * @internal
	   */
	  instantiateChildren: function (nestedChildNodes, transaction, context) {
	    if (nestedChildNodes == null) {
	      return null;
	    }
	    var childInstances = {};
	    traverseAllChildren(nestedChildNodes, instantiateChild, childInstances);
	    return childInstances;
	  },
	
	  /**
	   * Updates the rendered children and returns a new set of children.
	   *
	   * @param {?object} prevChildren Previously initialized set of children.
	   * @param {?object} nextChildren Flat child element maps.
	   * @param {ReactReconcileTransaction} transaction
	   * @param {object} context
	   * @return {?object} A new set of child instances.
	   * @internal
	   */
	  updateChildren: function (prevChildren, nextChildren, transaction, context) {
	    // We currently don't have a way to track moves here but if we use iterators
	    // instead of for..in we can zip the iterators and check if an item has
	    // moved.
	    // TODO: If nothing has changed, return the prevChildren object so that we
	    // can quickly bailout if nothing has changed.
	    if (!nextChildren && !prevChildren) {
	      return null;
	    }
	    var name;
	    for (name in nextChildren) {
	      if (!nextChildren.hasOwnProperty(name)) {
	        continue;
	      }
	      var prevChild = prevChildren && prevChildren[name];
	      var prevElement = prevChild && prevChild._currentElement;
	      var nextElement = nextChildren[name];
	      if (prevChild != null && shouldUpdateReactComponent(prevElement, nextElement)) {
	        ReactReconciler.receiveComponent(prevChild, nextElement, transaction, context);
	        nextChildren[name] = prevChild;
	      } else {
	        if (prevChild) {
	          ReactReconciler.unmountComponent(prevChild, name);
	        }
	        // The child must be instantiated before it's mounted.
	        var nextChildInstance = instantiateReactComponent(nextElement, null);
	        nextChildren[name] = nextChildInstance;
	      }
	    }
	    // Unmount children that are no longer present.
	    for (name in prevChildren) {
	      if (prevChildren.hasOwnProperty(name) && !(nextChildren && nextChildren.hasOwnProperty(name))) {
	        ReactReconciler.unmountComponent(prevChildren[name]);
	      }
	    }
	    return nextChildren;
	  },
	
	  /**
	   * Unmounts all rendered children. This should be used to clean up children
	   * when this component is unmounted.
	   *
	   * @param {?object} renderedChildren Previously initialized set of children.
	   * @internal
	   */
	  unmountChildren: function (renderedChildren) {
	    for (var name in renderedChildren) {
	      if (renderedChildren.hasOwnProperty(name)) {
	        var renderedChild = renderedChildren[name];
	        ReactReconciler.unmountComponent(renderedChild);
	      }
	    }
	  }
	
	};
	
	module.exports = ReactChildReconciler;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 162 */
/*!****************************************!*\
  !*** ./~/react/lib/flattenChildren.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule flattenChildren
	 */
	
	'use strict';
	
	var traverseAllChildren = __webpack_require__(/*! ./traverseAllChildren */ 157);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * @param {function} traverseContext Context passed through traversal.
	 * @param {?ReactComponent} child React child component.
	 * @param {!string} name String name of key path to child.
	 */
	function flattenSingleChildIntoContext(traverseContext, child, name) {
	  // We found a component instance.
	  var result = traverseContext;
	  var keyUnique = result[name] === undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(keyUnique, 'flattenChildren(...): Encountered two children with the same key, ' + '`%s`. Child keys must be unique; when two children share a key, only ' + 'the first child will be used.', name) : undefined;
	  }
	  if (keyUnique && child != null) {
	    result[name] = child;
	  }
	}
	
	/**
	 * Flattens children that are typically specified as `props.children`. Any null
	 * children will not be included in the resulting object.
	 * @return {!object} flattened children keyed by name.
	 */
	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = {};
	  traverseAllChildren(children, flattenSingleChildIntoContext, result);
	  return result;
	}
	
	module.exports = flattenChildren;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 163 */
/*!************************************!*\
  !*** ./~/fbjs/lib/shallowEqual.js ***!
  \************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = shallowEqual;

/***/ },
/* 164 */
/*!*******************************************!*\
  !*** ./~/react/lib/ReactEventListener.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactEventListener
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var EventListener = __webpack_require__(/*! fbjs/lib/EventListener */ 165);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 91);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var getEventTarget = __webpack_require__(/*! ./getEventTarget */ 127);
	var getUnboundedScrollPosition = __webpack_require__(/*! fbjs/lib/getUnboundedScrollPosition */ 166);
	
	var DOCUMENT_FRAGMENT_NODE_TYPE = 11;
	
	/**
	 * Finds the parent React component of `node`.
	 *
	 * @param {*} node
	 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
	 *                           is not nested.
	 */
	function findParent(node) {
	  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
	  // traversal, but caching is difficult to do correctly without using a
	  // mutation observer to listen for all DOM changes.
	  var nodeID = ReactMount.getID(node);
	  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
	  var container = ReactMount.findReactContainerForID(rootID);
	  var parent = ReactMount.getFirstReactDOM(container);
	  return parent;
	}
	
	// Used to store ancestor hierarchy in top level callback
	function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
	  this.topLevelType = topLevelType;
	  this.nativeEvent = nativeEvent;
	  this.ancestors = [];
	}
	assign(TopLevelCallbackBookKeeping.prototype, {
	  destructor: function () {
	    this.topLevelType = null;
	    this.nativeEvent = null;
	    this.ancestors.length = 0;
	  }
	});
	PooledClass.addPoolingTo(TopLevelCallbackBookKeeping, PooledClass.twoArgumentPooler);
	
	function handleTopLevelImpl(bookKeeping) {
	  // TODO: Re-enable event.path handling
	  //
	  // if (bookKeeping.nativeEvent.path && bookKeeping.nativeEvent.path.length > 1) {
	  //   // New browsers have a path attribute on native events
	  //   handleTopLevelWithPath(bookKeeping);
	  // } else {
	  //   // Legacy browsers don't have a path attribute on native events
	  //   handleTopLevelWithoutPath(bookKeeping);
	  // }
	
	  void handleTopLevelWithPath; // temporarily unused
	  handleTopLevelWithoutPath(bookKeeping);
	}
	
	// Legacy browsers don't have a path attribute on native events
	function handleTopLevelWithoutPath(bookKeeping) {
	  var topLevelTarget = ReactMount.getFirstReactDOM(getEventTarget(bookKeeping.nativeEvent)) || window;
	
	  // Loop through the hierarchy, in case there's any nested components.
	  // It's important that we build the array of ancestors before calling any
	  // event handlers, because event handlers can modify the DOM, leading to
	  // inconsistencies with ReactMount's node cache. See #1105.
	  var ancestor = topLevelTarget;
	  while (ancestor) {
	    bookKeeping.ancestors.push(ancestor);
	    ancestor = findParent(ancestor);
	  }
	
	  for (var i = 0; i < bookKeeping.ancestors.length; i++) {
	    topLevelTarget = bookKeeping.ancestors[i];
	    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, topLevelTarget, topLevelTargetID, bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}
	
	// New browsers have a path attribute on native events
	function handleTopLevelWithPath(bookKeeping) {
	  var path = bookKeeping.nativeEvent.path;
	  var currentNativeTarget = path[0];
	  var eventsFired = 0;
	  for (var i = 0; i < path.length; i++) {
	    var currentPathElement = path[i];
	    if (currentPathElement.nodeType === DOCUMENT_FRAGMENT_NODE_TYPE) {
	      currentNativeTarget = path[i + 1];
	    }
	    // TODO: slow
	    var reactParent = ReactMount.getFirstReactDOM(currentPathElement);
	    if (reactParent === currentPathElement) {
	      var currentPathElementID = ReactMount.getID(currentPathElement);
	      var newRootID = ReactInstanceHandles.getReactRootIDFromNodeID(currentPathElementID);
	      bookKeeping.ancestors.push(currentPathElement);
	
	      var topLevelTargetID = ReactMount.getID(currentPathElement) || '';
	      eventsFired++;
	      ReactEventListener._handleTopLevel(bookKeeping.topLevelType, currentPathElement, topLevelTargetID, bookKeeping.nativeEvent, currentNativeTarget);
	
	      // Jump to the root of this React render tree
	      while (currentPathElementID !== newRootID) {
	        i++;
	        currentPathElement = path[i];
	        currentPathElementID = ReactMount.getID(currentPathElement);
	      }
	    }
	  }
	  if (eventsFired === 0) {
	    ReactEventListener._handleTopLevel(bookKeeping.topLevelType, window, '', bookKeeping.nativeEvent, getEventTarget(bookKeeping.nativeEvent));
	  }
	}
	
	function scrollValueMonitor(cb) {
	  var scrollPosition = getUnboundedScrollPosition(window);
	  cb(scrollPosition);
	}
	
	var ReactEventListener = {
	  _enabled: true,
	  _handleTopLevel: null,
	
	  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,
	
	  setHandleTopLevel: function (handleTopLevel) {
	    ReactEventListener._handleTopLevel = handleTopLevel;
	  },
	
	  setEnabled: function (enabled) {
	    ReactEventListener._enabled = !!enabled;
	  },
	
	  isEnabled: function () {
	    return ReactEventListener._enabled;
	  },
	
	  /**
	   * Traps top-level events by using event bubbling.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapBubbledEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.listen(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },
	
	  /**
	   * Traps a top-level event by using event capturing.
	   *
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {string} handlerBaseName Event name (e.g. "click").
	   * @param {object} handle Element on which to attach listener.
	   * @return {?object} An object with a remove function which will forcefully
	   *                  remove the listener.
	   * @internal
	   */
	  trapCapturedEvent: function (topLevelType, handlerBaseName, handle) {
	    var element = handle;
	    if (!element) {
	      return null;
	    }
	    return EventListener.capture(element, handlerBaseName, ReactEventListener.dispatchEvent.bind(null, topLevelType));
	  },
	
	  monitorScrollValue: function (refresh) {
	    var callback = scrollValueMonitor.bind(null, refresh);
	    EventListener.listen(window, 'scroll', callback);
	  },
	
	  dispatchEvent: function (topLevelType, nativeEvent) {
	    if (!ReactEventListener._enabled) {
	      return;
	    }
	
	    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(topLevelType, nativeEvent);
	    try {
	      // Event queue being processed in the same cycle allows
	      // `preventDefault`.
	      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
	    } finally {
	      TopLevelCallbackBookKeeping.release(bookKeeping);
	    }
	  }
	};
	
	module.exports = ReactEventListener;

/***/ },
/* 165 */
/*!*************************************!*\
  !*** ./~/fbjs/lib/EventListener.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 * @providesModule EventListener
	 * @typechecks
	 */
	
	'use strict';
	
	var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 61);
	
	/**
	 * Upstream version of event listener. Does not take into account specific
	 * nature of platform.
	 */
	var EventListener = {
	  /**
	   * Listen to DOM events during the bubble phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  listen: function (target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, false);
	      return {
	        remove: function () {
	          target.removeEventListener(eventType, callback, false);
	        }
	      };
	    } else if (target.attachEvent) {
	      target.attachEvent('on' + eventType, callback);
	      return {
	        remove: function () {
	          target.detachEvent('on' + eventType, callback);
	        }
	      };
	    }
	  },
	
	  /**
	   * Listen to DOM events during the capture phase.
	   *
	   * @param {DOMEventTarget} target DOM element to register listener on.
	   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
	   * @param {function} callback Callback function.
	   * @return {object} Object with a `remove` method.
	   */
	  capture: function (target, eventType, callback) {
	    if (target.addEventListener) {
	      target.addEventListener(eventType, callback, true);
	      return {
	        remove: function () {
	          target.removeEventListener(eventType, callback, true);
	        }
	      };
	    } else {
	      if (process.env.NODE_ENV !== 'production') {
	        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
	      }
	      return {
	        remove: emptyFunction
	      };
	    }
	  },
	
	  registerDefault: function () {}
	};
	
	module.exports = EventListener;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 166 */
/*!**************************************************!*\
  !*** ./~/fbjs/lib/getUnboundedScrollPosition.js ***!
  \**************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getUnboundedScrollPosition
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * Gets the scroll position of the supplied element or window.
	 *
	 * The return values are unbounded, unlike `getScrollPosition`. This means they
	 * may be negative or exceed the element boundaries (which is possible using
	 * inertial scrolling).
	 *
	 * @param {DOMWindow|DOMElement} scrollable
	 * @return {object} Map with `x` and `y` keys.
	 */
	function getUnboundedScrollPosition(scrollable) {
	  if (scrollable === window) {
	    return {
	      x: window.pageXOffset || document.documentElement.scrollLeft,
	      y: window.pageYOffset || document.documentElement.scrollTop
	    };
	  }
	  return {
	    x: scrollable.scrollLeft,
	    y: scrollable.scrollTop
	  };
	}
	
	module.exports = getUnboundedScrollPosition;

/***/ },
/* 167 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactInjection.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInjection
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	var EventPluginHub = __webpack_require__(/*! ./EventPluginHub */ 77);
	var ReactComponentEnvironment = __webpack_require__(/*! ./ReactComponentEnvironment */ 110);
	var ReactClass = __webpack_require__(/*! ./ReactClass */ 168);
	var ReactEmptyComponent = __webpack_require__(/*! ./ReactEmptyComponent */ 114);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 75);
	var ReactNativeComponent = __webpack_require__(/*! ./ReactNativeComponent */ 115);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	var ReactRootIndex = __webpack_require__(/*! ./ReactRootIndex */ 92);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var ReactInjection = {
	  Component: ReactComponentEnvironment.injection,
	  Class: ReactClass.injection,
	  DOMProperty: DOMProperty.injection,
	  EmptyComponent: ReactEmptyComponent.injection,
	  EventPluginHub: EventPluginHub.injection,
	  EventEmitter: ReactBrowserEventEmitter.injection,
	  NativeComponent: ReactNativeComponent.injection,
	  Perf: ReactPerf.injection,
	  RootIndex: ReactRootIndex.injection,
	  Updates: ReactUpdates.injection
	};
	
	module.exports = ReactInjection;

/***/ },
/* 168 */
/*!***********************************!*\
  !*** ./~/react/lib/ReactClass.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactClass
	 */
	
	'use strict';
	
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 169);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactPropTypeLocations = __webpack_require__(/*! ./ReactPropTypeLocations */ 111);
	var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ 112);
	var ReactNoopUpdateQueue = __webpack_require__(/*! ./ReactNoopUpdateQueue */ 170);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 104);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var keyMirror = __webpack_require__(/*! fbjs/lib/keyMirror */ 63);
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	var MIXINS_KEY = keyOf({ mixins: null });
	
	/**
	 * Policies that describe methods in `ReactClassInterface`.
	 */
	var SpecPolicy = keyMirror({
	  /**
	   * These methods may be defined only once by the class specification or mixin.
	   */
	  DEFINE_ONCE: null,
	  /**
	   * These methods may be defined by both the class specification and mixins.
	   * Subsequent definitions will be chained. These methods must return void.
	   */
	  DEFINE_MANY: null,
	  /**
	   * These methods are overriding the base class.
	   */
	  OVERRIDE_BASE: null,
	  /**
	   * These methods are similar to DEFINE_MANY, except we assume they return
	   * objects. We try to merge the keys of the return values of all the mixed in
	   * functions. If there is a key conflict we throw.
	   */
	  DEFINE_MANY_MERGED: null
	});
	
	var injectedMixins = [];
	
	var warnedSetProps = false;
	function warnSetProps() {
	  if (!warnedSetProps) {
	    warnedSetProps = true;
	    process.env.NODE_ENV !== 'production' ? warning(false, 'setProps(...) and replaceProps(...) are deprecated. ' + 'Instead, call render again at the top level.') : undefined;
	  }
	}
	
	/**
	 * Composite components are higher-level components that compose other composite
	 * or native components.
	 *
	 * To create a new type of `ReactClass`, pass a specification of
	 * your new class to `React.createClass`. The only requirement of your class
	 * specification is that you implement a `render` method.
	 *
	 *   var MyComponent = React.createClass({
	 *     render: function() {
	 *       return <div>Hello World</div>;
	 *     }
	 *   });
	 *
	 * The class specification supports a specific protocol of methods that have
	 * special meaning (e.g. `render`). See `ReactClassInterface` for
	 * more the comprehensive protocol. Any other properties and methods in the
	 * class specification will be available on the prototype.
	 *
	 * @interface ReactClassInterface
	 * @internal
	 */
	var ReactClassInterface = {
	
	  /**
	   * An array of Mixin objects to include when defining your component.
	   *
	   * @type {array}
	   * @optional
	   */
	  mixins: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * An object containing properties and methods that should be defined on
	   * the component's constructor instead of its prototype (static methods).
	   *
	   * @type {object}
	   * @optional
	   */
	  statics: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of prop types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  propTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types for this component.
	   *
	   * @type {object}
	   * @optional
	   */
	  contextTypes: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Definition of context types this component sets for its children.
	   *
	   * @type {object}
	   * @optional
	   */
	  childContextTypes: SpecPolicy.DEFINE_MANY,
	
	  // ==== Definition methods ====
	
	  /**
	   * Invoked when the component is mounted. Values in the mapping will be set on
	   * `this.props` if that prop is not specified (i.e. using an `in` check).
	   *
	   * This method is invoked before `getInitialState` and therefore cannot rely
	   * on `this.state` or use `this.setState`.
	   *
	   * @return {object}
	   * @optional
	   */
	  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Invoked once before the component is mounted. The return value will be used
	   * as the initial value of `this.state`.
	   *
	   *   getInitialState: function() {
	   *     return {
	   *       isOn: false,
	   *       fooBaz: new BazFoo()
	   *     }
	   *   }
	   *
	   * @return {object}
	   * @optional
	   */
	  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * @return {object}
	   * @optional
	   */
	  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,
	
	  /**
	   * Uses props from `this.props` and state from `this.state` to render the
	   * structure of the component.
	   *
	   * No guarantees are made about when or how often this method is invoked, so
	   * it must not have side effects.
	   *
	   *   render: function() {
	   *     var name = this.props.name;
	   *     return <div>Hello, {name}!</div>;
	   *   }
	   *
	   * @return {ReactComponent}
	   * @nosideeffects
	   * @required
	   */
	  render: SpecPolicy.DEFINE_ONCE,
	
	  // ==== Delegate methods ====
	
	  /**
	   * Invoked when the component is initially created and about to be mounted.
	   * This may have side effects, but any external subscriptions or data created
	   * by this method must be cleaned up in `componentWillUnmount`.
	   *
	   * @optional
	   */
	  componentWillMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component has been mounted and has a DOM representation.
	   * However, there is no guarantee that the DOM node is in the document.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been mounted (initialized and rendered) for the first time.
	   *
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidMount: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked before the component receives new props.
	   *
	   * Use this as an opportunity to react to a prop transition by updating the
	   * state using `this.setState`. Current props are accessed via `this.props`.
	   *
	   *   componentWillReceiveProps: function(nextProps, nextContext) {
	   *     this.setState({
	   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	   *     });
	   *   }
	   *
	   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	   * transition may cause a state change, but the opposite is not true. If you
	   * need it, you are probably looking for `componentWillUpdate`.
	   *
	   * @param {object} nextProps
	   * @optional
	   */
	  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked while deciding if the component should be updated as a result of
	   * receiving new props, state and/or context.
	   *
	   * Use this as an opportunity to `return false` when you're certain that the
	   * transition to the new props/state/context will not require a component
	   * update.
	   *
	   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	   *     return !equal(nextProps, this.props) ||
	   *       !equal(nextState, this.state) ||
	   *       !equal(nextContext, this.context);
	   *   }
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @return {boolean} True if the component should update.
	   * @optional
	   */
	  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,
	
	  /**
	   * Invoked when the component is about to update due to a transition from
	   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	   * and `nextContext`.
	   *
	   * Use this as an opportunity to perform preparation before an update occurs.
	   *
	   * NOTE: You **cannot** use `this.setState()` in this method.
	   *
	   * @param {object} nextProps
	   * @param {?object} nextState
	   * @param {?object} nextContext
	   * @param {ReactReconcileTransaction} transaction
	   * @optional
	   */
	  componentWillUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component's DOM representation has been updated.
	   *
	   * Use this as an opportunity to operate on the DOM when the component has
	   * been updated.
	   *
	   * @param {object} prevProps
	   * @param {?object} prevState
	   * @param {?object} prevContext
	   * @param {DOMElement} rootNode DOM element representing the component.
	   * @optional
	   */
	  componentDidUpdate: SpecPolicy.DEFINE_MANY,
	
	  /**
	   * Invoked when the component is about to be removed from its parent and have
	   * its DOM representation destroyed.
	   *
	   * Use this as an opportunity to deallocate any external resources.
	   *
	   * NOTE: There is no `componentDidUnmount` since your component will have been
	   * destroyed by that point.
	   *
	   * @optional
	   */
	  componentWillUnmount: SpecPolicy.DEFINE_MANY,
	
	  // ==== Advanced methods ====
	
	  /**
	   * Updates the component's currently mounted DOM representation.
	   *
	   * By default, this implements React's rendering and reconciliation algorithm.
	   * Sophisticated clients may wish to override this.
	   *
	   * @param {ReactReconcileTransaction} transaction
	   * @internal
	   * @overridable
	   */
	  updateComponent: SpecPolicy.OVERRIDE_BASE
	
	};
	
	/**
	 * Mapping from class specification keys to special processing functions.
	 *
	 * Although these are declared like instance properties in the specification
	 * when defining classes using `React.createClass`, they are actually static
	 * and are accessible on the constructor instead of the prototype. Despite
	 * being static, they must be defined outside of the "statics" key under
	 * which all other static methods are defined.
	 */
	var RESERVED_SPEC_KEYS = {
	  displayName: function (Constructor, displayName) {
	    Constructor.displayName = displayName;
	  },
	  mixins: function (Constructor, mixins) {
	    if (mixins) {
	      for (var i = 0; i < mixins.length; i++) {
	        mixSpecIntoComponent(Constructor, mixins[i]);
	      }
	    }
	  },
	  childContextTypes: function (Constructor, childContextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, childContextTypes, ReactPropTypeLocations.childContext);
	    }
	    Constructor.childContextTypes = assign({}, Constructor.childContextTypes, childContextTypes);
	  },
	  contextTypes: function (Constructor, contextTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, contextTypes, ReactPropTypeLocations.context);
	    }
	    Constructor.contextTypes = assign({}, Constructor.contextTypes, contextTypes);
	  },
	  /**
	   * Special case getDefaultProps which should move into statics but requires
	   * automatic merging.
	   */
	  getDefaultProps: function (Constructor, getDefaultProps) {
	    if (Constructor.getDefaultProps) {
	      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
	    } else {
	      Constructor.getDefaultProps = getDefaultProps;
	    }
	  },
	  propTypes: function (Constructor, propTypes) {
	    if (process.env.NODE_ENV !== 'production') {
	      validateTypeDef(Constructor, propTypes, ReactPropTypeLocations.prop);
	    }
	    Constructor.propTypes = assign({}, Constructor.propTypes, propTypes);
	  },
	  statics: function (Constructor, statics) {
	    mixStaticSpecIntoComponent(Constructor, statics);
	  },
	  autobind: function () {} };
	
	// noop
	function validateTypeDef(Constructor, typeDef, location) {
	  for (var propName in typeDef) {
	    if (typeDef.hasOwnProperty(propName)) {
	      // use a warning instead of an invariant so components
	      // don't show up in prod but not in __DEV__
	      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : undefined;
	    }
	  }
	}
	
	function validateMethodOverride(proto, name) {
	  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
	
	  // Disallow overriding of base class methods unless explicitly allowed.
	  if (ReactClassMixin.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.OVERRIDE_BASE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name) : invariant(false) : undefined;
	  }
	
	  // Disallow defining methods more than once unless explicitly allowed.
	  if (proto.hasOwnProperty(name)) {
	    !(specPolicy === SpecPolicy.DEFINE_MANY || specPolicy === SpecPolicy.DEFINE_MANY_MERGED) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name) : invariant(false) : undefined;
	  }
	}
	
	/**
	 * Mixin helper which handles policy validation and reserved
	 * specification keys when building React classses.
	 */
	function mixSpecIntoComponent(Constructor, spec) {
	  if (!spec) {
	    return;
	  }
	
	  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component class as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
	  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to ' + 'use a component as a mixin. Instead, just use a regular object.') : invariant(false) : undefined;
	
	  var proto = Constructor.prototype;
	
	  // By handling mixins before any other properties, we ensure the same
	  // chaining order is applied to methods with DEFINE_MANY policy, whether
	  // mixins are listed before or after these methods in the spec.
	  if (spec.hasOwnProperty(MIXINS_KEY)) {
	    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	  }
	
	  for (var name in spec) {
	    if (!spec.hasOwnProperty(name)) {
	      continue;
	    }
	
	    if (name === MIXINS_KEY) {
	      // We have already handled mixins in a special case above.
	      continue;
	    }
	
	    var property = spec[name];
	    validateMethodOverride(proto, name);
	
	    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	      RESERVED_SPEC_KEYS[name](Constructor, property);
	    } else {
	      // Setup methods on prototype:
	      // The following member methods should not be automatically bound:
	      // 1. Expected ReactClass methods (in the "interface").
	      // 2. Overridden methods (that were mixed in).
	      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      var isFunction = typeof property === 'function';
	      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
	
	      if (shouldAutoBind) {
	        if (!proto.__reactAutoBindMap) {
	          proto.__reactAutoBindMap = {};
	        }
	        proto.__reactAutoBindMap[name] = property;
	        proto[name] = property;
	      } else {
	        if (isAlreadyDefined) {
	          var specPolicy = ReactClassInterface[name];
	
	          // These cases should already be caught by validateMethodOverride.
	          !(isReactClassMethod && (specPolicy === SpecPolicy.DEFINE_MANY_MERGED || specPolicy === SpecPolicy.DEFINE_MANY)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name) : invariant(false) : undefined;
	
	          // For methods which are defined more than once, call the existing
	          // methods before calling the new property, merging if appropriate.
	          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
	            proto[name] = createMergedResultFunction(proto[name], property);
	          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
	            proto[name] = createChainedFunction(proto[name], property);
	          }
	        } else {
	          proto[name] = property;
	          if (process.env.NODE_ENV !== 'production') {
	            // Add verbose displayName to the function, which helps when looking
	            // at profiling tools.
	            if (typeof property === 'function' && spec.displayName) {
	              proto[name].displayName = spec.displayName + '_' + name;
	            }
	          }
	        }
	      }
	    }
	  }
	}
	
	function mixStaticSpecIntoComponent(Constructor, statics) {
	  if (!statics) {
	    return;
	  }
	  for (var name in statics) {
	    var property = statics[name];
	    if (!statics.hasOwnProperty(name)) {
	      continue;
	    }
	
	    var isReserved = (name in RESERVED_SPEC_KEYS);
	    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name) : invariant(false) : undefined;
	
	    var isInherited = (name in Constructor);
	    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name) : invariant(false) : undefined;
	    Constructor[name] = property;
	  }
	}
	
	/**
	 * Merge two objects, but throw if both contain the same key.
	 *
	 * @param {object} one The first object, which is mutated.
	 * @param {object} two The second object
	 * @return {object} one after it has been mutated to contain everything in two.
	 */
	function mergeIntoWithNoDuplicateKeys(one, two) {
	  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : invariant(false) : undefined;
	
	  for (var key in two) {
	    if (two.hasOwnProperty(key)) {
	      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key) : invariant(false) : undefined;
	      one[key] = two[key];
	    }
	  }
	  return one;
	}
	
	/**
	 * Creates a function that invokes two functions and merges their return values.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createMergedResultFunction(one, two) {
	  return function mergedResult() {
	    var a = one.apply(this, arguments);
	    var b = two.apply(this, arguments);
	    if (a == null) {
	      return b;
	    } else if (b == null) {
	      return a;
	    }
	    var c = {};
	    mergeIntoWithNoDuplicateKeys(c, a);
	    mergeIntoWithNoDuplicateKeys(c, b);
	    return c;
	  };
	}
	
	/**
	 * Creates a function that invokes two functions and ignores their return vales.
	 *
	 * @param {function} one Function to invoke first.
	 * @param {function} two Function to invoke second.
	 * @return {function} Function that invokes the two argument functions.
	 * @private
	 */
	function createChainedFunction(one, two) {
	  return function chainedFunction() {
	    one.apply(this, arguments);
	    two.apply(this, arguments);
	  };
	}
	
	/**
	 * Binds a method to the component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 * @param {function} method Method to be bound.
	 * @return {function} The bound method.
	 */
	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);
	  if (process.env.NODE_ENV !== 'production') {
	    boundMethod.__reactBoundContext = component;
	    boundMethod.__reactBoundMethod = method;
	    boundMethod.__reactBoundArguments = null;
	    var componentName = component.constructor.displayName;
	    var _bind = boundMethod.bind;
	    /* eslint-disable block-scoped-var, no-undef */
	    boundMethod.bind = function (newThis) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      // User is trying to bind() an autobound method; we effectively will
	      // ignore the value of "this" that the user is trying to use, so
	      // let's warn.
	      if (newThis !== component && newThis !== null) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : undefined;
	      } else if (!args.length) {
	        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : undefined;
	        return boundMethod;
	      }
	      var reboundMethod = _bind.apply(boundMethod, arguments);
	      reboundMethod.__reactBoundContext = component;
	      reboundMethod.__reactBoundMethod = method;
	      reboundMethod.__reactBoundArguments = args;
	      return reboundMethod;
	      /* eslint-enable */
	    };
	  }
	  return boundMethod;
	}
	
	/**
	 * Binds all auto-bound methods in a component.
	 *
	 * @param {object} component Component whose method is going to be bound.
	 */
	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      var method = component.__reactAutoBindMap[autoBindKey];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }
	}
	
	/**
	 * Add more to the ReactClass base class. These are all legacy features and
	 * therefore not already part of the modern ReactComponent.
	 */
	var ReactClassMixin = {
	
	  /**
	   * TODO: This will be deprecated because state should always keep a consistent
	   * type signature and the only use case for this, is to avoid that.
	   */
	  replaceState: function (newState, callback) {
	    this.updater.enqueueReplaceState(this, newState);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function () {
	    return this.updater.isMounted(this);
	  },
	
	  /**
	   * Sets a subset of the props.
	   *
	   * @param {object} partialProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  setProps: function (partialProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueSetProps(this, partialProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  },
	
	  /**
	   * Replace all the props.
	   *
	   * @param {object} newProps Subset of the next props.
	   * @param {?function} callback Called after props are updated.
	   * @final
	   * @public
	   * @deprecated
	   */
	  replaceProps: function (newProps, callback) {
	    if (process.env.NODE_ENV !== 'production') {
	      warnSetProps();
	    }
	    this.updater.enqueueReplaceProps(this, newProps);
	    if (callback) {
	      this.updater.enqueueCallback(this, callback);
	    }
	  }
	};
	
	var ReactClassComponent = function () {};
	assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
	
	/**
	 * Module for creating composite components.
	 *
	 * @class ReactClass
	 */
	var ReactClass = {
	
	  /**
	   * Creates a composite component class given a class specification.
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  createClass: function (spec) {
	    var Constructor = function (props, context, updater) {
	      // This constructor is overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : undefined;
	      }
	
	      // Wire up auto-binding
	      if (this.__reactAutoBindMap) {
	        bindAutoBindMethods(this);
	      }
	
	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;
	
	      this.state = null;
	
	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.
	
	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (process.env.NODE_ENV !== 'production') {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (typeof initialState === 'undefined' && this.getInitialState._isMockFunction) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : invariant(false) : undefined;
	
	      this.state = initialState;
	    };
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	
	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
	
	    mixSpecIntoComponent(Constructor, spec);
	
	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }
	
	    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : invariant(false) : undefined;
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : undefined;
	      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : undefined;
	    }
	
	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }
	
	    return Constructor;
	  },
	
	  injection: {
	    injectMixin: function (mixin) {
	      injectedMixins.push(mixin);
	    }
	  }
	
	};
	
	module.exports = ReactClass;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 169 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactComponent.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponent
	 */
	
	'use strict';
	
	var ReactNoopUpdateQueue = __webpack_require__(/*! ./ReactNoopUpdateQueue */ 170);
	
	var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ 89);
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 104);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * Base class helpers for the updating state of a component.
	 */
	function ReactComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  // We initialize the default updater but the real one gets injected by the
	  // renderer.
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	
	ReactComponent.prototype.isReactComponent = {};
	
	/**
	 * Sets a subset of the state. Always use this to mutate
	 * state. You should treat `this.state` as immutable.
	 *
	 * There is no guarantee that `this.state` will be immediately updated, so
	 * accessing `this.state` after calling this method may return the old value.
	 *
	 * There is no guarantee that calls to `setState` will run synchronously,
	 * as they may eventually be batched together.  You can provide an optional
	 * callback that will be executed when the call to setState is actually
	 * completed.
	 *
	 * When a function is provided to setState, it will be called at some point in
	 * the future (not synchronously). It will be called with the up to date
	 * component arguments (state, props, context). These values can be different
	 * from this.* because your function may be called after receiveProps but before
	 * shouldComponentUpdate, and this new state, props, and context will not yet be
	 * assigned to this.
	 *
	 * @param {object|function} partialState Next partial state or function to
	 *        produce next partial state to be merged with current state.
	 * @param {?function} callback Called after state is updated.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.setState = function (partialState, callback) {
	  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.') : invariant(false) : undefined;
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(partialState != null, 'setState(...): You passed an undefined or null state object; ' + 'instead, use forceUpdate().') : undefined;
	  }
	  this.updater.enqueueSetState(this, partialState);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};
	
	/**
	 * Forces an update. This should only be invoked when it is known with
	 * certainty that we are **not** in a DOM transaction.
	 *
	 * You may want to call this when you know that some deeper aspect of the
	 * component's state has changed but `setState` was not called.
	 *
	 * This will not invoke `shouldComponentUpdate`, but it will invoke
	 * `componentWillUpdate` and `componentDidUpdate`.
	 *
	 * @param {?function} callback Called after update is complete.
	 * @final
	 * @protected
	 */
	ReactComponent.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this);
	  if (callback) {
	    this.updater.enqueueCallback(this, callback);
	  }
	};
	
	/**
	 * Deprecated APIs. These APIs used to exist on classic React classes but since
	 * we would like to deprecate them, we're not going to move them over to this
	 * modern base class. Instead, we define a getter that warns if it's accessed.
	 */
	if (process.env.NODE_ENV !== 'production') {
	  var deprecatedAPIs = {
	    getDOMNode: ['getDOMNode', 'Use ReactDOM.findDOMNode(component) instead.'],
	    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
	    replaceProps: ['replaceProps', 'Instead, call render again at the top level.'],
	    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).'],
	    setProps: ['setProps', 'Instead, call render again at the top level.']
	  };
	  var defineDeprecationWarning = function (methodName, info) {
	    if (canDefineProperty) {
	      Object.defineProperty(ReactComponent.prototype, methodName, {
	        get: function () {
	          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : undefined;
	          return undefined;
	        }
	      });
	    }
	  };
	  for (var fnName in deprecatedAPIs) {
	    if (deprecatedAPIs.hasOwnProperty(fnName)) {
	      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
	    }
	  }
	}
	
	module.exports = ReactComponent;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 170 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactNoopUpdateQueue.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactNoopUpdateQueue
	 */
	
	'use strict';
	
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	function warnTDZ(publicInstance, callerName) {
	  if (process.env.NODE_ENV !== 'production') {
	    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, publicInstance.constructor && publicInstance.constructor.displayName || '') : undefined;
	  }
	}
	
	/**
	 * This is the abstract API for an update queue.
	 */
	var ReactNoopUpdateQueue = {
	
	  /**
	   * Checks whether or not this composite component is mounted.
	   * @param {ReactClass} publicInstance The instance we want to test.
	   * @return {boolean} True if mounted, false otherwise.
	   * @protected
	   * @final
	   */
	  isMounted: function (publicInstance) {
	    return false;
	  },
	
	  /**
	   * Enqueue a callback that will be executed after all the pending updates
	   * have processed.
	   *
	   * @param {ReactClass} publicInstance The instance to use as `this` context.
	   * @param {?function} callback Called after state is updated.
	   * @internal
	   */
	  enqueueCallback: function (publicInstance, callback) {},
	
	  /**
	   * Forces an update. This should only be invoked when it is known with
	   * certainty that we are **not** in a DOM transaction.
	   *
	   * You may want to call this when you know that some deeper aspect of the
	   * component's state has changed but `setState` was not called.
	   *
	   * This will not invoke `shouldComponentUpdate`, but it will invoke
	   * `componentWillUpdate` and `componentDidUpdate`.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @internal
	   */
	  enqueueForceUpdate: function (publicInstance) {
	    warnTDZ(publicInstance, 'forceUpdate');
	  },
	
	  /**
	   * Replaces all of the state. Always use this or `setState` to mutate state.
	   * You should treat `this.state` as immutable.
	   *
	   * There is no guarantee that `this.state` will be immediately updated, so
	   * accessing `this.state` after calling this method may return the old value.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} completeState Next state.
	   * @internal
	   */
	  enqueueReplaceState: function (publicInstance, completeState) {
	    warnTDZ(publicInstance, 'replaceState');
	  },
	
	  /**
	   * Sets a subset of the state. This only exists because _pendingState is
	   * internal. This provides a merging strategy that is not available to deep
	   * properties which is confusing. TODO: Expose pendingState or don't use it
	   * during the merge.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialState Next partial state to be merged with state.
	   * @internal
	   */
	  enqueueSetState: function (publicInstance, partialState) {
	    warnTDZ(publicInstance, 'setState');
	  },
	
	  /**
	   * Sets a subset of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} partialProps Subset of the next props.
	   * @internal
	   */
	  enqueueSetProps: function (publicInstance, partialProps) {
	    warnTDZ(publicInstance, 'setProps');
	  },
	
	  /**
	   * Replaces all of the props.
	   *
	   * @param {ReactClass} publicInstance The instance that should rerender.
	   * @param {object} props New props.
	   * @internal
	   */
	  enqueueReplaceProps: function (publicInstance, props) {
	    warnTDZ(publicInstance, 'replaceProps');
	  }
	
	};
	
	module.exports = ReactNoopUpdateQueue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 171 */
/*!**************************************************!*\
  !*** ./~/react/lib/ReactReconcileTransaction.js ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactReconcileTransaction
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var CallbackQueue = __webpack_require__(/*! ./CallbackQueue */ 101);
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	var ReactBrowserEventEmitter = __webpack_require__(/*! ./ReactBrowserEventEmitter */ 75);
	var ReactDOMFeatureFlags = __webpack_require__(/*! ./ReactDOMFeatureFlags */ 87);
	var ReactInputSelection = __webpack_require__(/*! ./ReactInputSelection */ 172);
	var Transaction = __webpack_require__(/*! ./Transaction */ 103);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	
	/**
	 * Ensures that, when possible, the selection range (currently selected text
	 * input) is not disturbed by performing the transaction.
	 */
	var SELECTION_RESTORATION = {
	  /**
	   * @return {Selection} Selection information.
	   */
	  initialize: ReactInputSelection.getSelectionInformation,
	  /**
	   * @param {Selection} sel Selection information returned from `initialize`.
	   */
	  close: ReactInputSelection.restoreSelection
	};
	
	/**
	 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
	 * high level DOM manipulations (like temporarily removing a text input from the
	 * DOM).
	 */
	var EVENT_SUPPRESSION = {
	  /**
	   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
	   * the reconciliation.
	   */
	  initialize: function () {
	    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
	    ReactBrowserEventEmitter.setEnabled(false);
	    return currentlyEnabled;
	  },
	
	  /**
	   * @param {boolean} previouslyEnabled Enabled status of
	   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
	   *   restores the previous value.
	   */
	  close: function (previouslyEnabled) {
	    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
	  }
	};
	
	/**
	 * Provides a queue for collecting `componentDidMount` and
	 * `componentDidUpdate` callbacks during the the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },
	
	  /**
	   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
	   */
	  close: function () {
	    this.reactMountReady.notifyAll();
	  }
	};
	
	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [SELECTION_RESTORATION, EVENT_SUPPRESSION, ON_DOM_READY_QUEUEING];
	
	/**
	 * Currently:
	 * - The order that these are listed in the transaction is critical:
	 * - Suppresses events.
	 * - Restores selection range.
	 *
	 * Future:
	 * - Restore document/overflow scroll positions that were unintentionally
	 *   modified via DOM insertions above the top viewport boundary.
	 * - Implement/integrate with customized constraint based layout system and keep
	 *   track of which dimensions must be remeasured.
	 *
	 * @class ReactReconcileTransaction
	 */
	function ReactReconcileTransaction(forceHTML) {
	  this.reinitializeTransaction();
	  // Only server-side rendering really needs this option (see
	  // `ReactServerRendering`), but server-side uses
	  // `ReactServerRenderingTransaction` instead. This option is here so that it's
	  // accessible and defaults to false when `ReactDOMComponent` and
	  // `ReactTextComponent` checks it in `mountComponent`.`
	  this.renderToStaticMarkup = false;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = !forceHTML && ReactDOMFeatureFlags.useCreateElement;
	}
	
	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array<object>} List of operation wrap procedures.
	   *   TODO: convert to array<TransactionWrapper>
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },
	
	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};
	
	assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);
	
	PooledClass.addPoolingTo(ReactReconcileTransaction);
	
	module.exports = ReactReconcileTransaction;

/***/ },
/* 172 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactInputSelection.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactInputSelection
	 */
	
	'use strict';
	
	var ReactDOMSelection = __webpack_require__(/*! ./ReactDOMSelection */ 173);
	
	var containsNode = __webpack_require__(/*! fbjs/lib/containsNode */ 105);
	var focusNode = __webpack_require__(/*! fbjs/lib/focusNode */ 141);
	var getActiveElement = __webpack_require__(/*! fbjs/lib/getActiveElement */ 175);
	
	function isInDocument(node) {
	  return containsNode(document.documentElement, node);
	}
	
	/**
	 * @ReactInputSelection: React input selection module. Based on Selection.js,
	 * but modified to be suitable for react and has a couple of bug fixes (doesn't
	 * assume buttons have range selections allowed).
	 * Input selection module for React.
	 */
	var ReactInputSelection = {
	
	  hasSelectionCapabilities: function (elem) {
	    var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	    return nodeName && (nodeName === 'input' && elem.type === 'text' || nodeName === 'textarea' || elem.contentEditable === 'true');
	  },
	
	  getSelectionInformation: function () {
	    var focusedElem = getActiveElement();
	    return {
	      focusedElem: focusedElem,
	      selectionRange: ReactInputSelection.hasSelectionCapabilities(focusedElem) ? ReactInputSelection.getSelection(focusedElem) : null
	    };
	  },
	
	  /**
	   * @restoreSelection: If any selection information was potentially lost,
	   * restore it. This is useful when performing operations that could remove dom
	   * nodes and place them back in, resulting in focus being lost.
	   */
	  restoreSelection: function (priorSelectionInformation) {
	    var curFocusedElem = getActiveElement();
	    var priorFocusedElem = priorSelectionInformation.focusedElem;
	    var priorSelectionRange = priorSelectionInformation.selectionRange;
	    if (curFocusedElem !== priorFocusedElem && isInDocument(priorFocusedElem)) {
	      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
	        ReactInputSelection.setSelection(priorFocusedElem, priorSelectionRange);
	      }
	      focusNode(priorFocusedElem);
	    }
	  },
	
	  /**
	   * @getSelection: Gets the selection bounds of a focused textarea, input or
	   * contentEditable node.
	   * -@input: Look up selection bounds of this input
	   * -@return {start: selectionStart, end: selectionEnd}
	   */
	  getSelection: function (input) {
	    var selection;
	
	    if ('selectionStart' in input) {
	      // Modern browser with input or textarea.
	      selection = {
	        start: input.selectionStart,
	        end: input.selectionEnd
	      };
	    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
	      // IE8 input.
	      var range = document.selection.createRange();
	      // There can only be one selection per document in IE, so it must
	      // be in our element.
	      if (range.parentElement() === input) {
	        selection = {
	          start: -range.moveStart('character', -input.value.length),
	          end: -range.moveEnd('character', -input.value.length)
	        };
	      }
	    } else {
	      // Content editable or old IE textarea.
	      selection = ReactDOMSelection.getOffsets(input);
	    }
	
	    return selection || { start: 0, end: 0 };
	  },
	
	  /**
	   * @setSelection: Sets the selection bounds of a textarea or input and focuses
	   * the input.
	   * -@input     Set selection bounds of this input or textarea
	   * -@offsets   Object of same form that is returned from get*
	   */
	  setSelection: function (input, offsets) {
	    var start = offsets.start;
	    var end = offsets.end;
	    if (typeof end === 'undefined') {
	      end = start;
	    }
	
	    if ('selectionStart' in input) {
	      input.selectionStart = start;
	      input.selectionEnd = Math.min(end, input.value.length);
	    } else if (document.selection && (input.nodeName && input.nodeName.toLowerCase() === 'input')) {
	      var range = input.createTextRange();
	      range.collapse(true);
	      range.moveStart('character', start);
	      range.moveEnd('character', end - start);
	      range.select();
	    } else {
	      ReactDOMSelection.setOffsets(input, offsets);
	    }
	  }
	};
	
	module.exports = ReactInputSelection;

/***/ },
/* 173 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactDOMSelection.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMSelection
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	
	var getNodeForCharacterOffset = __webpack_require__(/*! ./getNodeForCharacterOffset */ 174);
	var getTextContentAccessor = __webpack_require__(/*! ./getTextContentAccessor */ 121);
	
	/**
	 * While `isCollapsed` is available on the Selection object and `collapsed`
	 * is available on the Range object, IE11 sometimes gets them wrong.
	 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
	 */
	function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
	  return anchorNode === focusNode && anchorOffset === focusOffset;
	}
	
	/**
	 * Get the appropriate anchor and focus node/offset pairs for IE.
	 *
	 * The catch here is that IE's selection API doesn't provide information
	 * about whether the selection is forward or backward, so we have to
	 * behave as though it's always forward.
	 *
	 * IE text differs from modern selection in that it behaves as though
	 * block elements end with a new line. This means character offsets will
	 * differ between the two APIs.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getIEOffsets(node) {
	  var selection = document.selection;
	  var selectedRange = selection.createRange();
	  var selectedLength = selectedRange.text.length;
	
	  // Duplicate selection so we can move range without breaking user selection.
	  var fromStart = selectedRange.duplicate();
	  fromStart.moveToElementText(node);
	  fromStart.setEndPoint('EndToStart', selectedRange);
	
	  var startOffset = fromStart.text.length;
	  var endOffset = startOffset + selectedLength;
	
	  return {
	    start: startOffset,
	    end: endOffset
	  };
	}
	
	/**
	 * @param {DOMElement} node
	 * @return {?object}
	 */
	function getModernOffsets(node) {
	  var selection = window.getSelection && window.getSelection();
	
	  if (!selection || selection.rangeCount === 0) {
	    return null;
	  }
	
	  var anchorNode = selection.anchorNode;
	  var anchorOffset = selection.anchorOffset;
	  var focusNode = selection.focusNode;
	  var focusOffset = selection.focusOffset;
	
	  var currentRange = selection.getRangeAt(0);
	
	  // In Firefox, range.startContainer and range.endContainer can be "anonymous
	  // divs", e.g. the up/down buttons on an <input type="number">. Anonymous
	  // divs do not seem to expose properties, triggering a "Permission denied
	  // error" if any of its properties are accessed. The only seemingly possible
	  // way to avoid erroring is to access a property that typically works for
	  // non-anonymous divs and catch any error that may otherwise arise. See
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=208427
	  try {
	    /* eslint-disable no-unused-expressions */
	    currentRange.startContainer.nodeType;
	    currentRange.endContainer.nodeType;
	    /* eslint-enable no-unused-expressions */
	  } catch (e) {
	    return null;
	  }
	
	  // If the node and offset values are the same, the selection is collapsed.
	  // `Selection.isCollapsed` is available natively, but IE sometimes gets
	  // this value wrong.
	  var isSelectionCollapsed = isCollapsed(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
	
	  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;
	
	  var tempRange = currentRange.cloneRange();
	  tempRange.selectNodeContents(node);
	  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);
	
	  var isTempRangeCollapsed = isCollapsed(tempRange.startContainer, tempRange.startOffset, tempRange.endContainer, tempRange.endOffset);
	
	  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
	  var end = start + rangeLength;
	
	  // Detect whether the selection is backward.
	  var detectionRange = document.createRange();
	  detectionRange.setStart(anchorNode, anchorOffset);
	  detectionRange.setEnd(focusNode, focusOffset);
	  var isBackward = detectionRange.collapsed;
	
	  return {
	    start: isBackward ? end : start,
	    end: isBackward ? start : end
	  };
	}
	
	/**
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setIEOffsets(node, offsets) {
	  var range = document.selection.createRange().duplicate();
	  var start, end;
	
	  if (typeof offsets.end === 'undefined') {
	    start = offsets.start;
	    end = start;
	  } else if (offsets.start > offsets.end) {
	    start = offsets.end;
	    end = offsets.start;
	  } else {
	    start = offsets.start;
	    end = offsets.end;
	  }
	
	  range.moveToElementText(node);
	  range.moveStart('character', start);
	  range.setEndPoint('EndToStart', range);
	  range.moveEnd('character', end - start);
	  range.select();
	}
	
	/**
	 * In modern non-IE browsers, we can support both forward and backward
	 * selections.
	 *
	 * Note: IE10+ supports the Selection object, but it does not support
	 * the `extend` method, which means that even in modern IE, it's not possible
	 * to programatically create a backward selection. Thus, for all IE
	 * versions, we use the old IE API to create our selections.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @param {object} offsets
	 */
	function setModernOffsets(node, offsets) {
	  if (!window.getSelection) {
	    return;
	  }
	
	  var selection = window.getSelection();
	  var length = node[getTextContentAccessor()].length;
	  var start = Math.min(offsets.start, length);
	  var end = typeof offsets.end === 'undefined' ? start : Math.min(offsets.end, length);
	
	  // IE 11 uses modern selection, but doesn't support the extend method.
	  // Flip backward selections, so we can set with a single range.
	  if (!selection.extend && start > end) {
	    var temp = end;
	    end = start;
	    start = temp;
	  }
	
	  var startMarker = getNodeForCharacterOffset(node, start);
	  var endMarker = getNodeForCharacterOffset(node, end);
	
	  if (startMarker && endMarker) {
	    var range = document.createRange();
	    range.setStart(startMarker.node, startMarker.offset);
	    selection.removeAllRanges();
	
	    if (start > end) {
	      selection.addRange(range);
	      selection.extend(endMarker.node, endMarker.offset);
	    } else {
	      range.setEnd(endMarker.node, endMarker.offset);
	      selection.addRange(range);
	    }
	  }
	}
	
	var useIEOffsets = ExecutionEnvironment.canUseDOM && 'selection' in document && !('getSelection' in window);
	
	var ReactDOMSelection = {
	  /**
	   * @param {DOMElement} node
	   */
	  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,
	
	  /**
	   * @param {DOMElement|DOMTextNode} node
	   * @param {object} offsets
	   */
	  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
	};
	
	module.exports = ReactDOMSelection;

/***/ },
/* 174 */
/*!**************************************************!*\
  !*** ./~/react/lib/getNodeForCharacterOffset.js ***!
  \**************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getNodeForCharacterOffset
	 */
	
	'use strict';
	
	/**
	 * Given any node return the first leaf node without children.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {DOMElement|DOMTextNode}
	 */
	function getLeafNode(node) {
	  while (node && node.firstChild) {
	    node = node.firstChild;
	  }
	  return node;
	}
	
	/**
	 * Get the next sibling within a container. This will walk up the
	 * DOM if a node's siblings have been exhausted.
	 *
	 * @param {DOMElement|DOMTextNode} node
	 * @return {?DOMElement|DOMTextNode}
	 */
	function getSiblingNode(node) {
	  while (node) {
	    if (node.nextSibling) {
	      return node.nextSibling;
	    }
	    node = node.parentNode;
	  }
	}
	
	/**
	 * Get object describing the nodes which contain characters at offset.
	 *
	 * @param {DOMElement|DOMTextNode} root
	 * @param {number} offset
	 * @return {?object}
	 */
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  var nodeStart = 0;
	  var nodeEnd = 0;
	
	  while (node) {
	    if (node.nodeType === 3) {
	      nodeEnd = nodeStart + node.textContent.length;
	
	      if (nodeStart <= offset && nodeEnd >= offset) {
	        return {
	          node: node,
	          offset: offset - nodeStart
	        };
	      }
	
	      nodeStart = nodeEnd;
	    }
	
	    node = getLeafNode(getSiblingNode(node));
	  }
	}
	
	module.exports = getNodeForCharacterOffset;

/***/ },
/* 175 */
/*!****************************************!*\
  !*** ./~/fbjs/lib/getActiveElement.js ***!
  \****************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getActiveElement
	 * @typechecks
	 */
	
	/* eslint-disable fb-www/typeof-undefined */
	
	/**
	 * Same as document.activeElement but wraps in a try-catch block. In IE it is
	 * not safe to call document.activeElement if there is nothing focused.
	 *
	 * The activeElement will be null only if the document or document body is not
	 * yet defined.
	 */
	'use strict';
	
	function getActiveElement() /*?DOMElement*/{
	  if (typeof document === 'undefined') {
	    return null;
	  }
	  try {
	    return document.activeElement || document.body;
	  } catch (e) {
	    return document.body;
	  }
	}
	
	module.exports = getActiveElement;

/***/ },
/* 176 */
/*!******************************************!*\
  !*** ./~/react/lib/SelectEventPlugin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SelectEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 119);
	var ExecutionEnvironment = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ 55);
	var ReactInputSelection = __webpack_require__(/*! ./ReactInputSelection */ 172);
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	
	var getActiveElement = __webpack_require__(/*! fbjs/lib/getActiveElement */ 175);
	var isTextInputElement = __webpack_require__(/*! ./isTextInputElement */ 128);
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	var shallowEqual = __webpack_require__(/*! fbjs/lib/shallowEqual */ 163);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var skipSelectionChangeEvent = ExecutionEnvironment.canUseDOM && 'documentMode' in document && document.documentMode <= 11;
	
	var eventTypes = {
	  select: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSelect: null }),
	      captured: keyOf({ onSelectCapture: null })
	    },
	    dependencies: [topLevelTypes.topBlur, topLevelTypes.topContextMenu, topLevelTypes.topFocus, topLevelTypes.topKeyDown, topLevelTypes.topMouseDown, topLevelTypes.topMouseUp, topLevelTypes.topSelectionChange]
	  }
	};
	
	var activeElement = null;
	var activeElementID = null;
	var lastSelection = null;
	var mouseDown = false;
	
	// Track whether a listener exists for this plugin. If none exist, we do
	// not extract events.
	var hasListener = false;
	var ON_SELECT_KEY = keyOf({ onSelect: null });
	
	/**
	 * Get an object which is a unique representation of the current selection.
	 *
	 * The return value will not be consistent across nodes or browsers, but
	 * two identical selections on the same node will return identical objects.
	 *
	 * @param {DOMElement} node
	 * @return {object}
	 */
	function getSelection(node) {
	  if ('selectionStart' in node && ReactInputSelection.hasSelectionCapabilities(node)) {
	    return {
	      start: node.selectionStart,
	      end: node.selectionEnd
	    };
	  } else if (window.getSelection) {
	    var selection = window.getSelection();
	    return {
	      anchorNode: selection.anchorNode,
	      anchorOffset: selection.anchorOffset,
	      focusNode: selection.focusNode,
	      focusOffset: selection.focusOffset
	    };
	  } else if (document.selection) {
	    var range = document.selection.createRange();
	    return {
	      parentElement: range.parentElement(),
	      text: range.text,
	      top: range.boundingTop,
	      left: range.boundingLeft
	    };
	  }
	}
	
	/**
	 * Poll selection to see whether it's changed.
	 *
	 * @param {object} nativeEvent
	 * @return {?SyntheticEvent}
	 */
	function constructSelectEvent(nativeEvent, nativeEventTarget) {
	  // Ensure we have the right element, and that the user is not dragging a
	  // selection (this matches native `select` event behavior). In HTML5, select
	  // fires only on input and textarea thus if there's no focused element we
	  // won't dispatch.
	  if (mouseDown || activeElement == null || activeElement !== getActiveElement()) {
	    return null;
	  }
	
	  // Only fire when selection has actually changed.
	  var currentSelection = getSelection(activeElement);
	  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
	    lastSelection = currentSelection;
	
	    var syntheticEvent = SyntheticEvent.getPooled(eventTypes.select, activeElementID, nativeEvent, nativeEventTarget);
	
	    syntheticEvent.type = 'select';
	    syntheticEvent.target = activeElement;
	
	    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);
	
	    return syntheticEvent;
	  }
	
	  return null;
	}
	
	/**
	 * This plugin creates an `onSelect` event that normalizes select events
	 * across form elements.
	 *
	 * Supported elements are:
	 * - input (see `isTextInputElement`)
	 * - textarea
	 * - contentEditable
	 *
	 * This differs from native browser implementations in the following ways:
	 * - Fires on contentEditable fields as well as inputs.
	 * - Fires for collapsed selection.
	 * - Fires after user input.
	 */
	var SelectEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    if (!hasListener) {
	      return null;
	    }
	
	    switch (topLevelType) {
	      // Track the input node that has focus.
	      case topLevelTypes.topFocus:
	        if (isTextInputElement(topLevelTarget) || topLevelTarget.contentEditable === 'true') {
	          activeElement = topLevelTarget;
	          activeElementID = topLevelTargetID;
	          lastSelection = null;
	        }
	        break;
	      case topLevelTypes.topBlur:
	        activeElement = null;
	        activeElementID = null;
	        lastSelection = null;
	        break;
	
	      // Don't fire the event while the user is dragging. This matches the
	      // semantics of the native select event.
	      case topLevelTypes.topMouseDown:
	        mouseDown = true;
	        break;
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topMouseUp:
	        mouseDown = false;
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	
	      // Chrome and IE fire non-standard event when selection is changed (and
	      // sometimes when it hasn't). IE's event fires out of order with respect
	      // to key and input events on deletion, so we discard it.
	      //
	      // Firefox doesn't support selectionchange, so check selection status
	      // after each key entry. The selection changes after keydown and before
	      // keyup, but we check on keydown as well in the case of holding down a
	      // key, when multiple keydown events are fired but only one keyup is.
	      // This is also our approach for IE handling, for the reason above.
	      case topLevelTypes.topSelectionChange:
	        if (skipSelectionChangeEvent) {
	          break;
	        }
	      // falls through
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        return constructSelectEvent(nativeEvent, nativeEventTarget);
	    }
	
	    return null;
	  },
	
	  didPutListener: function (id, registrationName, listener) {
	    if (registrationName === ON_SELECT_KEY) {
	      hasListener = true;
	    }
	  }
	};
	
	module.exports = SelectEventPlugin;

/***/ },
/* 177 */
/*!*********************************************!*\
  !*** ./~/react/lib/ServerReactRootIndex.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ServerReactRootIndex
	 * @typechecks
	 */
	
	'use strict';
	
	/**
	 * Size of the reactRoot ID space. We generate random numbers for React root
	 * IDs and if there's a collision the events and DOM update system will
	 * get confused. In the future we need a way to generate GUIDs but for
	 * now this will work on a smaller scale.
	 */
	var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);
	
	var ServerReactRootIndex = {
	  createReactRootIndex: function () {
	    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
	  }
	};
	
	module.exports = ServerReactRootIndex;

/***/ },
/* 178 */
/*!******************************************!*\
  !*** ./~/react/lib/SimpleEventPlugin.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SimpleEventPlugin
	 */
	
	'use strict';
	
	var EventConstants = __webpack_require__(/*! ./EventConstants */ 76);
	var EventListener = __webpack_require__(/*! fbjs/lib/EventListener */ 165);
	var EventPropagators = __webpack_require__(/*! ./EventPropagators */ 119);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var SyntheticClipboardEvent = __webpack_require__(/*! ./SyntheticClipboardEvent */ 179);
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	var SyntheticFocusEvent = __webpack_require__(/*! ./SyntheticFocusEvent */ 180);
	var SyntheticKeyboardEvent = __webpack_require__(/*! ./SyntheticKeyboardEvent */ 181);
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 132);
	var SyntheticDragEvent = __webpack_require__(/*! ./SyntheticDragEvent */ 184);
	var SyntheticTouchEvent = __webpack_require__(/*! ./SyntheticTouchEvent */ 185);
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 133);
	var SyntheticWheelEvent = __webpack_require__(/*! ./SyntheticWheelEvent */ 186);
	
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	var getEventCharCode = __webpack_require__(/*! ./getEventCharCode */ 182);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var keyOf = __webpack_require__(/*! fbjs/lib/keyOf */ 125);
	
	var topLevelTypes = EventConstants.topLevelTypes;
	
	var eventTypes = {
	  abort: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onAbort: true }),
	      captured: keyOf({ onAbortCapture: true })
	    }
	  },
	  blur: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onBlur: true }),
	      captured: keyOf({ onBlurCapture: true })
	    }
	  },
	  canPlay: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlay: true }),
	      captured: keyOf({ onCanPlayCapture: true })
	    }
	  },
	  canPlayThrough: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCanPlayThrough: true }),
	      captured: keyOf({ onCanPlayThroughCapture: true })
	    }
	  },
	  click: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onClick: true }),
	      captured: keyOf({ onClickCapture: true })
	    }
	  },
	  contextMenu: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onContextMenu: true }),
	      captured: keyOf({ onContextMenuCapture: true })
	    }
	  },
	  copy: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCopy: true }),
	      captured: keyOf({ onCopyCapture: true })
	    }
	  },
	  cut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onCut: true }),
	      captured: keyOf({ onCutCapture: true })
	    }
	  },
	  doubleClick: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDoubleClick: true }),
	      captured: keyOf({ onDoubleClickCapture: true })
	    }
	  },
	  drag: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrag: true }),
	      captured: keyOf({ onDragCapture: true })
	    }
	  },
	  dragEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnd: true }),
	      captured: keyOf({ onDragEndCapture: true })
	    }
	  },
	  dragEnter: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragEnter: true }),
	      captured: keyOf({ onDragEnterCapture: true })
	    }
	  },
	  dragExit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragExit: true }),
	      captured: keyOf({ onDragExitCapture: true })
	    }
	  },
	  dragLeave: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragLeave: true }),
	      captured: keyOf({ onDragLeaveCapture: true })
	    }
	  },
	  dragOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragOver: true }),
	      captured: keyOf({ onDragOverCapture: true })
	    }
	  },
	  dragStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDragStart: true }),
	      captured: keyOf({ onDragStartCapture: true })
	    }
	  },
	  drop: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDrop: true }),
	      captured: keyOf({ onDropCapture: true })
	    }
	  },
	  durationChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onDurationChange: true }),
	      captured: keyOf({ onDurationChangeCapture: true })
	    }
	  },
	  emptied: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEmptied: true }),
	      captured: keyOf({ onEmptiedCapture: true })
	    }
	  },
	  encrypted: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEncrypted: true }),
	      captured: keyOf({ onEncryptedCapture: true })
	    }
	  },
	  ended: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onEnded: true }),
	      captured: keyOf({ onEndedCapture: true })
	    }
	  },
	  error: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onError: true }),
	      captured: keyOf({ onErrorCapture: true })
	    }
	  },
	  focus: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onFocus: true }),
	      captured: keyOf({ onFocusCapture: true })
	    }
	  },
	  input: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onInput: true }),
	      captured: keyOf({ onInputCapture: true })
	    }
	  },
	  keyDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyDown: true }),
	      captured: keyOf({ onKeyDownCapture: true })
	    }
	  },
	  keyPress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyPress: true }),
	      captured: keyOf({ onKeyPressCapture: true })
	    }
	  },
	  keyUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onKeyUp: true }),
	      captured: keyOf({ onKeyUpCapture: true })
	    }
	  },
	  load: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoad: true }),
	      captured: keyOf({ onLoadCapture: true })
	    }
	  },
	  loadedData: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedData: true }),
	      captured: keyOf({ onLoadedDataCapture: true })
	    }
	  },
	  loadedMetadata: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadedMetadata: true }),
	      captured: keyOf({ onLoadedMetadataCapture: true })
	    }
	  },
	  loadStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onLoadStart: true }),
	      captured: keyOf({ onLoadStartCapture: true })
	    }
	  },
	  // Note: We do not allow listening to mouseOver events. Instead, use the
	  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
	  mouseDown: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseDown: true }),
	      captured: keyOf({ onMouseDownCapture: true })
	    }
	  },
	  mouseMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseMove: true }),
	      captured: keyOf({ onMouseMoveCapture: true })
	    }
	  },
	  mouseOut: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOut: true }),
	      captured: keyOf({ onMouseOutCapture: true })
	    }
	  },
	  mouseOver: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseOver: true }),
	      captured: keyOf({ onMouseOverCapture: true })
	    }
	  },
	  mouseUp: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onMouseUp: true }),
	      captured: keyOf({ onMouseUpCapture: true })
	    }
	  },
	  paste: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPaste: true }),
	      captured: keyOf({ onPasteCapture: true })
	    }
	  },
	  pause: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPause: true }),
	      captured: keyOf({ onPauseCapture: true })
	    }
	  },
	  play: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlay: true }),
	      captured: keyOf({ onPlayCapture: true })
	    }
	  },
	  playing: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onPlaying: true }),
	      captured: keyOf({ onPlayingCapture: true })
	    }
	  },
	  progress: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onProgress: true }),
	      captured: keyOf({ onProgressCapture: true })
	    }
	  },
	  rateChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onRateChange: true }),
	      captured: keyOf({ onRateChangeCapture: true })
	    }
	  },
	  reset: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onReset: true }),
	      captured: keyOf({ onResetCapture: true })
	    }
	  },
	  scroll: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onScroll: true }),
	      captured: keyOf({ onScrollCapture: true })
	    }
	  },
	  seeked: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeked: true }),
	      captured: keyOf({ onSeekedCapture: true })
	    }
	  },
	  seeking: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSeeking: true }),
	      captured: keyOf({ onSeekingCapture: true })
	    }
	  },
	  stalled: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onStalled: true }),
	      captured: keyOf({ onStalledCapture: true })
	    }
	  },
	  submit: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSubmit: true }),
	      captured: keyOf({ onSubmitCapture: true })
	    }
	  },
	  suspend: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onSuspend: true }),
	      captured: keyOf({ onSuspendCapture: true })
	    }
	  },
	  timeUpdate: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTimeUpdate: true }),
	      captured: keyOf({ onTimeUpdateCapture: true })
	    }
	  },
	  touchCancel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchCancel: true }),
	      captured: keyOf({ onTouchCancelCapture: true })
	    }
	  },
	  touchEnd: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchEnd: true }),
	      captured: keyOf({ onTouchEndCapture: true })
	    }
	  },
	  touchMove: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchMove: true }),
	      captured: keyOf({ onTouchMoveCapture: true })
	    }
	  },
	  touchStart: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onTouchStart: true }),
	      captured: keyOf({ onTouchStartCapture: true })
	    }
	  },
	  volumeChange: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onVolumeChange: true }),
	      captured: keyOf({ onVolumeChangeCapture: true })
	    }
	  },
	  waiting: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWaiting: true }),
	      captured: keyOf({ onWaitingCapture: true })
	    }
	  },
	  wheel: {
	    phasedRegistrationNames: {
	      bubbled: keyOf({ onWheel: true }),
	      captured: keyOf({ onWheelCapture: true })
	    }
	  }
	};
	
	var topLevelEventsToDispatchConfig = {
	  topAbort: eventTypes.abort,
	  topBlur: eventTypes.blur,
	  topCanPlay: eventTypes.canPlay,
	  topCanPlayThrough: eventTypes.canPlayThrough,
	  topClick: eventTypes.click,
	  topContextMenu: eventTypes.contextMenu,
	  topCopy: eventTypes.copy,
	  topCut: eventTypes.cut,
	  topDoubleClick: eventTypes.doubleClick,
	  topDrag: eventTypes.drag,
	  topDragEnd: eventTypes.dragEnd,
	  topDragEnter: eventTypes.dragEnter,
	  topDragExit: eventTypes.dragExit,
	  topDragLeave: eventTypes.dragLeave,
	  topDragOver: eventTypes.dragOver,
	  topDragStart: eventTypes.dragStart,
	  topDrop: eventTypes.drop,
	  topDurationChange: eventTypes.durationChange,
	  topEmptied: eventTypes.emptied,
	  topEncrypted: eventTypes.encrypted,
	  topEnded: eventTypes.ended,
	  topError: eventTypes.error,
	  topFocus: eventTypes.focus,
	  topInput: eventTypes.input,
	  topKeyDown: eventTypes.keyDown,
	  topKeyPress: eventTypes.keyPress,
	  topKeyUp: eventTypes.keyUp,
	  topLoad: eventTypes.load,
	  topLoadedData: eventTypes.loadedData,
	  topLoadedMetadata: eventTypes.loadedMetadata,
	  topLoadStart: eventTypes.loadStart,
	  topMouseDown: eventTypes.mouseDown,
	  topMouseMove: eventTypes.mouseMove,
	  topMouseOut: eventTypes.mouseOut,
	  topMouseOver: eventTypes.mouseOver,
	  topMouseUp: eventTypes.mouseUp,
	  topPaste: eventTypes.paste,
	  topPause: eventTypes.pause,
	  topPlay: eventTypes.play,
	  topPlaying: eventTypes.playing,
	  topProgress: eventTypes.progress,
	  topRateChange: eventTypes.rateChange,
	  topReset: eventTypes.reset,
	  topScroll: eventTypes.scroll,
	  topSeeked: eventTypes.seeked,
	  topSeeking: eventTypes.seeking,
	  topStalled: eventTypes.stalled,
	  topSubmit: eventTypes.submit,
	  topSuspend: eventTypes.suspend,
	  topTimeUpdate: eventTypes.timeUpdate,
	  topTouchCancel: eventTypes.touchCancel,
	  topTouchEnd: eventTypes.touchEnd,
	  topTouchMove: eventTypes.touchMove,
	  topTouchStart: eventTypes.touchStart,
	  topVolumeChange: eventTypes.volumeChange,
	  topWaiting: eventTypes.waiting,
	  topWheel: eventTypes.wheel
	};
	
	for (var type in topLevelEventsToDispatchConfig) {
	  topLevelEventsToDispatchConfig[type].dependencies = [type];
	}
	
	var ON_CLICK_KEY = keyOf({ onClick: null });
	var onClickListeners = {};
	
	var SimpleEventPlugin = {
	
	  eventTypes: eventTypes,
	
	  /**
	   * @param {string} topLevelType Record from `EventConstants`.
	   * @param {DOMEventTarget} topLevelTarget The listening component root node.
	   * @param {string} topLevelTargetID ID of `topLevelTarget`.
	   * @param {object} nativeEvent Native browser event.
	   * @return {*} An accumulation of synthetic events.
	   * @see {EventPluginHub.extractEvents}
	   */
	  extractEvents: function (topLevelType, topLevelTarget, topLevelTargetID, nativeEvent, nativeEventTarget) {
	    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
	    if (!dispatchConfig) {
	      return null;
	    }
	    var EventConstructor;
	    switch (topLevelType) {
	      case topLevelTypes.topAbort:
	      case topLevelTypes.topCanPlay:
	      case topLevelTypes.topCanPlayThrough:
	      case topLevelTypes.topDurationChange:
	      case topLevelTypes.topEmptied:
	      case topLevelTypes.topEncrypted:
	      case topLevelTypes.topEnded:
	      case topLevelTypes.topError:
	      case topLevelTypes.topInput:
	      case topLevelTypes.topLoad:
	      case topLevelTypes.topLoadedData:
	      case topLevelTypes.topLoadedMetadata:
	      case topLevelTypes.topLoadStart:
	      case topLevelTypes.topPause:
	      case topLevelTypes.topPlay:
	      case topLevelTypes.topPlaying:
	      case topLevelTypes.topProgress:
	      case topLevelTypes.topRateChange:
	      case topLevelTypes.topReset:
	      case topLevelTypes.topSeeked:
	      case topLevelTypes.topSeeking:
	      case topLevelTypes.topStalled:
	      case topLevelTypes.topSubmit:
	      case topLevelTypes.topSuspend:
	      case topLevelTypes.topTimeUpdate:
	      case topLevelTypes.topVolumeChange:
	      case topLevelTypes.topWaiting:
	        // HTML Events
	        // @see http://www.w3.org/TR/html5/index.html#events-0
	        EventConstructor = SyntheticEvent;
	        break;
	      case topLevelTypes.topKeyPress:
	        // FireFox creates a keypress event for function keys too. This removes
	        // the unwanted keypress events. Enter is however both printable and
	        // non-printable. One would expect Tab to be as well (but it isn't).
	        if (getEventCharCode(nativeEvent) === 0) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topKeyDown:
	      case topLevelTypes.topKeyUp:
	        EventConstructor = SyntheticKeyboardEvent;
	        break;
	      case topLevelTypes.topBlur:
	      case topLevelTypes.topFocus:
	        EventConstructor = SyntheticFocusEvent;
	        break;
	      case topLevelTypes.topClick:
	        // Firefox creates a click event on right mouse clicks. This removes the
	        // unwanted click events.
	        if (nativeEvent.button === 2) {
	          return null;
	        }
	      /* falls through */
	      case topLevelTypes.topContextMenu:
	      case topLevelTypes.topDoubleClick:
	      case topLevelTypes.topMouseDown:
	      case topLevelTypes.topMouseMove:
	      case topLevelTypes.topMouseOut:
	      case topLevelTypes.topMouseOver:
	      case topLevelTypes.topMouseUp:
	        EventConstructor = SyntheticMouseEvent;
	        break;
	      case topLevelTypes.topDrag:
	      case topLevelTypes.topDragEnd:
	      case topLevelTypes.topDragEnter:
	      case topLevelTypes.topDragExit:
	      case topLevelTypes.topDragLeave:
	      case topLevelTypes.topDragOver:
	      case topLevelTypes.topDragStart:
	      case topLevelTypes.topDrop:
	        EventConstructor = SyntheticDragEvent;
	        break;
	      case topLevelTypes.topTouchCancel:
	      case topLevelTypes.topTouchEnd:
	      case topLevelTypes.topTouchMove:
	      case topLevelTypes.topTouchStart:
	        EventConstructor = SyntheticTouchEvent;
	        break;
	      case topLevelTypes.topScroll:
	        EventConstructor = SyntheticUIEvent;
	        break;
	      case topLevelTypes.topWheel:
	        EventConstructor = SyntheticWheelEvent;
	        break;
	      case topLevelTypes.topCopy:
	      case topLevelTypes.topCut:
	      case topLevelTypes.topPaste:
	        EventConstructor = SyntheticClipboardEvent;
	        break;
	    }
	    !EventConstructor ? process.env.NODE_ENV !== 'production' ? invariant(false, 'SimpleEventPlugin: Unhandled event type, `%s`.', topLevelType) : invariant(false) : undefined;
	    var event = EventConstructor.getPooled(dispatchConfig, topLevelTargetID, nativeEvent, nativeEventTarget);
	    EventPropagators.accumulateTwoPhaseDispatches(event);
	    return event;
	  },
	
	  didPutListener: function (id, registrationName, listener) {
	    // Mobile Safari does not fire properly bubble click events on
	    // non-interactive elements, which means delegated click listeners do not
	    // fire. The workaround for this bug involves attaching an empty click
	    // listener on the target node.
	    if (registrationName === ON_CLICK_KEY) {
	      var node = ReactMount.getNode(id);
	      if (!onClickListeners[id]) {
	        onClickListeners[id] = EventListener.listen(node, 'click', emptyFunction);
	      }
	    }
	  },
	
	  willDeleteListener: function (id, registrationName) {
	    if (registrationName === ON_CLICK_KEY) {
	      onClickListeners[id].remove();
	      delete onClickListeners[id];
	    }
	  }
	
	};
	
	module.exports = SimpleEventPlugin;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 179 */
/*!************************************************!*\
  !*** ./~/react/lib/SyntheticClipboardEvent.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticClipboardEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticEvent = __webpack_require__(/*! ./SyntheticEvent */ 123);
	
	/**
	 * @interface Event
	 * @see http://www.w3.org/TR/clipboard-apis/
	 */
	var ClipboardEventInterface = {
	  clipboardData: function (event) {
	    return 'clipboardData' in event ? event.clipboardData : window.clipboardData;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);
	
	module.exports = SyntheticClipboardEvent;

/***/ },
/* 180 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticFocusEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticFocusEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 133);
	
	/**
	 * @interface FocusEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var FocusEventInterface = {
	  relatedTarget: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);
	
	module.exports = SyntheticFocusEvent;

/***/ },
/* 181 */
/*!***********************************************!*\
  !*** ./~/react/lib/SyntheticKeyboardEvent.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticKeyboardEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 133);
	
	var getEventCharCode = __webpack_require__(/*! ./getEventCharCode */ 182);
	var getEventKey = __webpack_require__(/*! ./getEventKey */ 183);
	var getEventModifierState = __webpack_require__(/*! ./getEventModifierState */ 134);
	
	/**
	 * @interface KeyboardEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var KeyboardEventInterface = {
	  key: getEventKey,
	  location: null,
	  ctrlKey: null,
	  shiftKey: null,
	  altKey: null,
	  metaKey: null,
	  repeat: null,
	  locale: null,
	  getModifierState: getEventModifierState,
	  // Legacy Interface
	  charCode: function (event) {
	    // `charCode` is the result of a KeyPress event and represents the value of
	    // the actual printable character.
	
	    // KeyPress is deprecated, but its replacement is not yet final and not
	    // implemented in any major browser. Only KeyPress has charCode.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    return 0;
	  },
	  keyCode: function (event) {
	    // `keyCode` is the result of a KeyDown/Up event and represents the value of
	    // physical keyboard key.
	
	    // The actual meaning of the value depends on the users' keyboard layout
	    // which cannot be detected. Assuming that it is a US keyboard layout
	    // provides a surprisingly accurate mapping for US and European users.
	    // Due to this, it is left to the user to implement at this time.
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  },
	  which: function (event) {
	    // `which` is an alias for either `keyCode` or `charCode` depending on the
	    // type of the event.
	    if (event.type === 'keypress') {
	      return getEventCharCode(event);
	    }
	    if (event.type === 'keydown' || event.type === 'keyup') {
	      return event.keyCode;
	    }
	    return 0;
	  }
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);
	
	module.exports = SyntheticKeyboardEvent;

/***/ },
/* 182 */
/*!*****************************************!*\
  !*** ./~/react/lib/getEventCharCode.js ***!
  \*****************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventCharCode
	 * @typechecks static-only
	 */
	
	'use strict';
	
	/**
	 * `charCode` represents the actual "character code" and is safe to use with
	 * `String.fromCharCode`. As such, only keys that correspond to printable
	 * characters produce a valid `charCode`, the only exception to this is Enter.
	 * The Tab-key is considered non-printable and does not have a `charCode`,
	 * presumably because it does not produce a tab-character in browsers.
	 *
	 * @param {object} nativeEvent Native browser event.
	 * @return {number} Normalized `charCode` property.
	 */
	function getEventCharCode(nativeEvent) {
	  var charCode;
	  var keyCode = nativeEvent.keyCode;
	
	  if ('charCode' in nativeEvent) {
	    charCode = nativeEvent.charCode;
	
	    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
	    if (charCode === 0 && keyCode === 13) {
	      charCode = 13;
	    }
	  } else {
	    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
	    charCode = keyCode;
	  }
	
	  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
	  // Must not discard the (non-)printable Enter-key.
	  if (charCode >= 32 || charCode === 13) {
	    return charCode;
	  }
	
	  return 0;
	}
	
	module.exports = getEventCharCode;

/***/ },
/* 183 */
/*!************************************!*\
  !*** ./~/react/lib/getEventKey.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getEventKey
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var getEventCharCode = __webpack_require__(/*! ./getEventCharCode */ 182);
	
	/**
	 * Normalization of deprecated HTML5 `key` values
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var normalizeKey = {
	  'Esc': 'Escape',
	  'Spacebar': ' ',
	  'Left': 'ArrowLeft',
	  'Up': 'ArrowUp',
	  'Right': 'ArrowRight',
	  'Down': 'ArrowDown',
	  'Del': 'Delete',
	  'Win': 'OS',
	  'Menu': 'ContextMenu',
	  'Apps': 'ContextMenu',
	  'Scroll': 'ScrollLock',
	  'MozPrintableKey': 'Unidentified'
	};
	
	/**
	 * Translation from legacy `keyCode` to HTML5 `key`
	 * Only special keys supported, all others depend on keyboard layout or browser
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
	 */
	var translateToKey = {
	  8: 'Backspace',
	  9: 'Tab',
	  12: 'Clear',
	  13: 'Enter',
	  16: 'Shift',
	  17: 'Control',
	  18: 'Alt',
	  19: 'Pause',
	  20: 'CapsLock',
	  27: 'Escape',
	  32: ' ',
	  33: 'PageUp',
	  34: 'PageDown',
	  35: 'End',
	  36: 'Home',
	  37: 'ArrowLeft',
	  38: 'ArrowUp',
	  39: 'ArrowRight',
	  40: 'ArrowDown',
	  45: 'Insert',
	  46: 'Delete',
	  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
	  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
	  144: 'NumLock',
	  145: 'ScrollLock',
	  224: 'Meta'
	};
	
	/**
	 * @param {object} nativeEvent Native browser event.
	 * @return {string} Normalized `key` property.
	 */
	function getEventKey(nativeEvent) {
	  if (nativeEvent.key) {
	    // Normalize inconsistent values reported by browsers due to
	    // implementations of a working draft specification.
	
	    // FireFox implements `key` but returns `MozPrintableKey` for all
	    // printable characters (normalized to `Unidentified`), ignore it.
	    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	    if (key !== 'Unidentified') {
	      return key;
	    }
	  }
	
	  // Browser does not implement `key`, polyfill as much of it as we can.
	  if (nativeEvent.type === 'keypress') {
	    var charCode = getEventCharCode(nativeEvent);
	
	    // The enter-key is technically both printable and non-printable and can
	    // thus be captured by `keypress`, no other non-printable key should.
	    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
	  }
	  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
	    // While user keyboard layout determines the actual meaning of each
	    // `keyCode` value, almost all function keys have a universal value.
	    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
	  }
	  return '';
	}
	
	module.exports = getEventKey;

/***/ },
/* 184 */
/*!*******************************************!*\
  !*** ./~/react/lib/SyntheticDragEvent.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticDragEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 132);
	
	/**
	 * @interface DragEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var DragEventInterface = {
	  dataTransfer: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);
	
	module.exports = SyntheticDragEvent;

/***/ },
/* 185 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticTouchEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticTouchEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticUIEvent = __webpack_require__(/*! ./SyntheticUIEvent */ 133);
	
	var getEventModifierState = __webpack_require__(/*! ./getEventModifierState */ 134);
	
	/**
	 * @interface TouchEvent
	 * @see http://www.w3.org/TR/touch-events/
	 */
	var TouchEventInterface = {
	  touches: null,
	  targetTouches: null,
	  changedTouches: null,
	  altKey: null,
	  metaKey: null,
	  ctrlKey: null,
	  shiftKey: null,
	  getModifierState: getEventModifierState
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticUIEvent}
	 */
	function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);
	
	module.exports = SyntheticTouchEvent;

/***/ },
/* 186 */
/*!********************************************!*\
  !*** ./~/react/lib/SyntheticWheelEvent.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SyntheticWheelEvent
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var SyntheticMouseEvent = __webpack_require__(/*! ./SyntheticMouseEvent */ 132);
	
	/**
	 * @interface WheelEvent
	 * @see http://www.w3.org/TR/DOM-Level-3-Events/
	 */
	var WheelEventInterface = {
	  deltaX: function (event) {
	    return 'deltaX' in event ? event.deltaX :
	    // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
	    'wheelDeltaX' in event ? -event.wheelDeltaX : 0;
	  },
	  deltaY: function (event) {
	    return 'deltaY' in event ? event.deltaY :
	    // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
	    'wheelDeltaY' in event ? -event.wheelDeltaY :
	    // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
	    'wheelDelta' in event ? -event.wheelDelta : 0;
	  },
	  deltaZ: null,
	
	  // Browsers without "deltaMode" is reporting in raw wheel delta where one
	  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
	  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
	  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
	  deltaMode: null
	};
	
	/**
	 * @param {object} dispatchConfig Configuration used to dispatch this event.
	 * @param {string} dispatchMarker Marker identifying the event target.
	 * @param {object} nativeEvent Native browser event.
	 * @extends {SyntheticMouseEvent}
	 */
	function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget) {
	  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent, nativeEventTarget);
	}
	
	SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);
	
	module.exports = SyntheticWheelEvent;

/***/ },
/* 187 */
/*!*********************************************!*\
  !*** ./~/react/lib/SVGDOMPropertyConfig.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule SVGDOMPropertyConfig
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	
	var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
	
	var NS = {
	  xlink: 'http://www.w3.org/1999/xlink',
	  xml: 'http://www.w3.org/XML/1998/namespace'
	};
	
	var SVGDOMPropertyConfig = {
	  Properties: {
	    clipPath: MUST_USE_ATTRIBUTE,
	    cx: MUST_USE_ATTRIBUTE,
	    cy: MUST_USE_ATTRIBUTE,
	    d: MUST_USE_ATTRIBUTE,
	    dx: MUST_USE_ATTRIBUTE,
	    dy: MUST_USE_ATTRIBUTE,
	    fill: MUST_USE_ATTRIBUTE,
	    fillOpacity: MUST_USE_ATTRIBUTE,
	    fontFamily: MUST_USE_ATTRIBUTE,
	    fontSize: MUST_USE_ATTRIBUTE,
	    fx: MUST_USE_ATTRIBUTE,
	    fy: MUST_USE_ATTRIBUTE,
	    gradientTransform: MUST_USE_ATTRIBUTE,
	    gradientUnits: MUST_USE_ATTRIBUTE,
	    markerEnd: MUST_USE_ATTRIBUTE,
	    markerMid: MUST_USE_ATTRIBUTE,
	    markerStart: MUST_USE_ATTRIBUTE,
	    offset: MUST_USE_ATTRIBUTE,
	    opacity: MUST_USE_ATTRIBUTE,
	    patternContentUnits: MUST_USE_ATTRIBUTE,
	    patternUnits: MUST_USE_ATTRIBUTE,
	    points: MUST_USE_ATTRIBUTE,
	    preserveAspectRatio: MUST_USE_ATTRIBUTE,
	    r: MUST_USE_ATTRIBUTE,
	    rx: MUST_USE_ATTRIBUTE,
	    ry: MUST_USE_ATTRIBUTE,
	    spreadMethod: MUST_USE_ATTRIBUTE,
	    stopColor: MUST_USE_ATTRIBUTE,
	    stopOpacity: MUST_USE_ATTRIBUTE,
	    stroke: MUST_USE_ATTRIBUTE,
	    strokeDasharray: MUST_USE_ATTRIBUTE,
	    strokeLinecap: MUST_USE_ATTRIBUTE,
	    strokeOpacity: MUST_USE_ATTRIBUTE,
	    strokeWidth: MUST_USE_ATTRIBUTE,
	    textAnchor: MUST_USE_ATTRIBUTE,
	    transform: MUST_USE_ATTRIBUTE,
	    version: MUST_USE_ATTRIBUTE,
	    viewBox: MUST_USE_ATTRIBUTE,
	    x1: MUST_USE_ATTRIBUTE,
	    x2: MUST_USE_ATTRIBUTE,
	    x: MUST_USE_ATTRIBUTE,
	    xlinkActuate: MUST_USE_ATTRIBUTE,
	    xlinkArcrole: MUST_USE_ATTRIBUTE,
	    xlinkHref: MUST_USE_ATTRIBUTE,
	    xlinkRole: MUST_USE_ATTRIBUTE,
	    xlinkShow: MUST_USE_ATTRIBUTE,
	    xlinkTitle: MUST_USE_ATTRIBUTE,
	    xlinkType: MUST_USE_ATTRIBUTE,
	    xmlBase: MUST_USE_ATTRIBUTE,
	    xmlLang: MUST_USE_ATTRIBUTE,
	    xmlSpace: MUST_USE_ATTRIBUTE,
	    y1: MUST_USE_ATTRIBUTE,
	    y2: MUST_USE_ATTRIBUTE,
	    y: MUST_USE_ATTRIBUTE
	  },
	  DOMAttributeNamespaces: {
	    xlinkActuate: NS.xlink,
	    xlinkArcrole: NS.xlink,
	    xlinkHref: NS.xlink,
	    xlinkRole: NS.xlink,
	    xlinkShow: NS.xlink,
	    xlinkTitle: NS.xlink,
	    xlinkType: NS.xlink,
	    xmlBase: NS.xml,
	    xmlLang: NS.xml,
	    xmlSpace: NS.xml
	  },
	  DOMAttributeNames: {
	    clipPath: 'clip-path',
	    fillOpacity: 'fill-opacity',
	    fontFamily: 'font-family',
	    fontSize: 'font-size',
	    gradientTransform: 'gradientTransform',
	    gradientUnits: 'gradientUnits',
	    markerEnd: 'marker-end',
	    markerMid: 'marker-mid',
	    markerStart: 'marker-start',
	    patternContentUnits: 'patternContentUnits',
	    patternUnits: 'patternUnits',
	    preserveAspectRatio: 'preserveAspectRatio',
	    spreadMethod: 'spreadMethod',
	    stopColor: 'stop-color',
	    stopOpacity: 'stop-opacity',
	    strokeDasharray: 'stroke-dasharray',
	    strokeLinecap: 'stroke-linecap',
	    strokeOpacity: 'stroke-opacity',
	    strokeWidth: 'stroke-width',
	    textAnchor: 'text-anchor',
	    viewBox: 'viewBox',
	    xlinkActuate: 'xlink:actuate',
	    xlinkArcrole: 'xlink:arcrole',
	    xlinkHref: 'xlink:href',
	    xlinkRole: 'xlink:role',
	    xlinkShow: 'xlink:show',
	    xlinkTitle: 'xlink:title',
	    xlinkType: 'xlink:type',
	    xmlBase: 'xml:base',
	    xmlLang: 'xml:lang',
	    xmlSpace: 'xml:space'
	  }
	};
	
	module.exports = SVGDOMPropertyConfig;

/***/ },
/* 188 */
/*!*****************************************!*\
  !*** ./~/react/lib/ReactDefaultPerf.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerf
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 69);
	var ReactDefaultPerfAnalysis = __webpack_require__(/*! ./ReactDefaultPerfAnalysis */ 189);
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	var ReactPerf = __webpack_require__(/*! ./ReactPerf */ 64);
	
	var performanceNow = __webpack_require__(/*! fbjs/lib/performanceNow */ 190);
	
	function roundFloat(val) {
	  return Math.floor(val * 100) / 100;
	}
	
	function addValue(obj, key, val) {
	  obj[key] = (obj[key] || 0) + val;
	}
	
	var ReactDefaultPerf = {
	  _allMeasurements: [], // last item in the list is the current one
	  _mountStack: [0],
	  _injected: false,
	
	  start: function () {
	    if (!ReactDefaultPerf._injected) {
	      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
	    }
	
	    ReactDefaultPerf._allMeasurements.length = 0;
	    ReactPerf.enableMeasure = true;
	  },
	
	  stop: function () {
	    ReactPerf.enableMeasure = false;
	  },
	
	  getLastMeasurements: function () {
	    return ReactDefaultPerf._allMeasurements;
	  },
	
	  printExclusive: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Component class name': item.componentName,
	        'Total inclusive time (ms)': roundFloat(item.inclusive),
	        'Exclusive mount time (ms)': roundFloat(item.exclusive),
	        'Exclusive render time (ms)': roundFloat(item.render),
	        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
	        'Render time per instance (ms)': roundFloat(item.render / item.count),
	        'Instances': item.count
	      };
	    }));
	    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
	    // number.
	  },
	
	  printInclusive: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
	    console.table(summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Inclusive time (ms)': roundFloat(item.time),
	        'Instances': item.count
	      };
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },
	
	  getMeasurementsSummaryMap: function (measurements) {
	    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements, true);
	    return summary.map(function (item) {
	      return {
	        'Owner > component': item.componentName,
	        'Wasted time (ms)': item.time,
	        'Instances': item.count
	      };
	    });
	  },
	
	  printWasted: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },
	
	  printDOM: function (measurements) {
	    measurements = measurements || ReactDefaultPerf._allMeasurements;
	    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
	    console.table(summary.map(function (item) {
	      var result = {};
	      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
	      result.type = item.type;
	      result.args = JSON.stringify(item.args);
	      return result;
	    }));
	    console.log('Total time:', ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms');
	  },
	
	  _recordWrite: function (id, fnName, totalTime, args) {
	    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
	    var writes = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].writes;
	    writes[id] = writes[id] || [];
	    writes[id].push({
	      type: fnName,
	      time: totalTime,
	      args: args
	    });
	  },
	
	  measure: function (moduleName, fnName, func) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      var totalTime;
	      var rv;
	      var start;
	
	      if (fnName === '_renderNewRootComponent' || fnName === 'flushBatchedUpdates') {
	        // A "measurement" is a set of metrics recorded for each flush. We want
	        // to group the metrics for a given flush together so we can look at the
	        // components that rendered and the DOM operations that actually
	        // happened to determine the amount of "wasted work" performed.
	        ReactDefaultPerf._allMeasurements.push({
	          exclusive: {},
	          inclusive: {},
	          render: {},
	          counts: {},
	          writes: {},
	          displayNames: {},
	          totalTime: 0,
	          created: {}
	        });
	        start = performanceNow();
	        rv = func.apply(this, args);
	        ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1].totalTime = performanceNow() - start;
	        return rv;
	      } else if (fnName === '_mountImageIntoNode' || moduleName === 'ReactBrowserEventEmitter' || moduleName === 'ReactDOMIDOperations' || moduleName === 'CSSPropertyOperations' || moduleName === 'DOMChildrenOperations' || moduleName === 'DOMPropertyOperations') {
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;
	
	        if (fnName === '_mountImageIntoNode') {
	          var mountID = ReactMount.getID(args[1]);
	          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
	        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
	          // special format
	          args[0].forEach(function (update) {
	            var writeArgs = {};
	            if (update.fromIndex !== null) {
	              writeArgs.fromIndex = update.fromIndex;
	            }
	            if (update.toIndex !== null) {
	              writeArgs.toIndex = update.toIndex;
	            }
	            if (update.textContent !== null) {
	              writeArgs.textContent = update.textContent;
	            }
	            if (update.markupIndex !== null) {
	              writeArgs.markup = args[1][update.markupIndex];
	            }
	            ReactDefaultPerf._recordWrite(update.parentID, update.type, totalTime, writeArgs);
	          });
	        } else {
	          // basic format
	          var id = args[0];
	          if (typeof id === 'object') {
	            id = ReactMount.getID(args[0]);
	          }
	          ReactDefaultPerf._recordWrite(id, fnName, totalTime, Array.prototype.slice.call(args, 1));
	        }
	        return rv;
	      } else if (moduleName === 'ReactCompositeComponent' && (fnName === 'mountComponent' || fnName === 'updateComponent' || // TODO: receiveComponent()?
	      fnName === '_renderValidatedComponent')) {
	
	        if (this._currentElement.type === ReactMount.TopLevelWrapper) {
	          return func.apply(this, args);
	        }
	
	        var rootNodeID = fnName === 'mountComponent' ? args[0] : this._rootNodeID;
	        var isRender = fnName === '_renderValidatedComponent';
	        var isMount = fnName === 'mountComponent';
	
	        var mountStack = ReactDefaultPerf._mountStack;
	        var entry = ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1];
	
	        if (isRender) {
	          addValue(entry.counts, rootNodeID, 1);
	        } else if (isMount) {
	          entry.created[rootNodeID] = true;
	          mountStack.push(0);
	        }
	
	        start = performanceNow();
	        rv = func.apply(this, args);
	        totalTime = performanceNow() - start;
	
	        if (isRender) {
	          addValue(entry.render, rootNodeID, totalTime);
	        } else if (isMount) {
	          var subMountTime = mountStack.pop();
	          mountStack[mountStack.length - 1] += totalTime;
	          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        } else {
	          addValue(entry.inclusive, rootNodeID, totalTime);
	        }
	
	        entry.displayNames[rootNodeID] = {
	          current: this.getName(),
	          owner: this._currentElement._owner ? this._currentElement._owner.getName() : '<root>'
	        };
	
	        return rv;
	      } else {
	        return func.apply(this, args);
	      }
	    };
	  }
	};
	
	module.exports = ReactDefaultPerf;

/***/ },
/* 189 */
/*!*************************************************!*\
  !*** ./~/react/lib/ReactDefaultPerfAnalysis.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDefaultPerfAnalysis
	 */
	
	'use strict';
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	
	// Don't try to save users less than 1.2ms (a number I made up)
	var DONT_CARE_THRESHOLD = 1.2;
	var DOM_OPERATION_TYPES = {
	  '_mountImageIntoNode': 'set innerHTML',
	  INSERT_MARKUP: 'set innerHTML',
	  MOVE_EXISTING: 'move',
	  REMOVE_NODE: 'remove',
	  SET_MARKUP: 'set innerHTML',
	  TEXT_CONTENT: 'set textContent',
	  'setValueForProperty': 'update attribute',
	  'setValueForAttribute': 'update attribute',
	  'deleteValueForProperty': 'remove attribute',
	  'setValueForStyles': 'update styles',
	  'replaceNodeWithMarkup': 'replace',
	  'updateTextContent': 'set textContent'
	};
	
	function getTotalTime(measurements) {
	  // TODO: return number of DOM ops? could be misleading.
	  // TODO: measure dropped frames after reconcile?
	  // TODO: log total time of each reconcile and the top-level component
	  // class that triggered it.
	  var totalTime = 0;
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    totalTime += measurement.totalTime;
	  }
	  return totalTime;
	}
	
	function getDOMSummary(measurements) {
	  var items = [];
	  measurements.forEach(function (measurement) {
	    Object.keys(measurement.writes).forEach(function (id) {
	      measurement.writes[id].forEach(function (write) {
	        items.push({
	          id: id,
	          type: DOM_OPERATION_TYPES[write.type] || write.type,
	          args: write.args
	        });
	      });
	    });
	  });
	  return items;
	}
	
	function getExclusiveSummary(measurements) {
	  var candidates = {};
	  var displayName;
	
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	
	    for (var id in allIDs) {
	      displayName = measurement.displayNames[id].current;
	
	      candidates[displayName] = candidates[displayName] || {
	        componentName: displayName,
	        inclusive: 0,
	        exclusive: 0,
	        render: 0,
	        count: 0
	      };
	      if (measurement.render[id]) {
	        candidates[displayName].render += measurement.render[id];
	      }
	      if (measurement.exclusive[id]) {
	        candidates[displayName].exclusive += measurement.exclusive[id];
	      }
	      if (measurement.inclusive[id]) {
	        candidates[displayName].inclusive += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[displayName].count += measurement.counts[id];
	      }
	    }
	  }
	
	  // Now make a sorted array with the results.
	  var arr = [];
	  for (displayName in candidates) {
	    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[displayName]);
	    }
	  }
	
	  arr.sort(function (a, b) {
	    return b.exclusive - a.exclusive;
	  });
	
	  return arr;
	}
	
	function getInclusiveSummary(measurements, onlyClean) {
	  var candidates = {};
	  var inclusiveKey;
	
	  for (var i = 0; i < measurements.length; i++) {
	    var measurement = measurements[i];
	    var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	    var cleanComponents;
	
	    if (onlyClean) {
	      cleanComponents = getUnchangedComponents(measurement);
	    }
	
	    for (var id in allIDs) {
	      if (onlyClean && !cleanComponents[id]) {
	        continue;
	      }
	
	      var displayName = measurement.displayNames[id];
	
	      // Inclusive time is not useful for many components without knowing where
	      // they are instantiated. So we aggregate inclusive time with both the
	      // owner and current displayName as the key.
	      inclusiveKey = displayName.owner + ' > ' + displayName.current;
	
	      candidates[inclusiveKey] = candidates[inclusiveKey] || {
	        componentName: inclusiveKey,
	        time: 0,
	        count: 0
	      };
	
	      if (measurement.inclusive[id]) {
	        candidates[inclusiveKey].time += measurement.inclusive[id];
	      }
	      if (measurement.counts[id]) {
	        candidates[inclusiveKey].count += measurement.counts[id];
	      }
	    }
	  }
	
	  // Now make a sorted array with the results.
	  var arr = [];
	  for (inclusiveKey in candidates) {
	    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
	      arr.push(candidates[inclusiveKey]);
	    }
	  }
	
	  arr.sort(function (a, b) {
	    return b.time - a.time;
	  });
	
	  return arr;
	}
	
	function getUnchangedComponents(measurement) {
	  // For a given reconcile, look at which components did not actually
	  // render anything to the DOM and return a mapping of their ID to
	  // the amount of time it took to render the entire subtree.
	  var cleanComponents = {};
	  var dirtyLeafIDs = Object.keys(measurement.writes);
	  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);
	
	  for (var id in allIDs) {
	    var isDirty = false;
	    // For each component that rendered, see if a component that triggered
	    // a DOM op is in its subtree.
	    for (var i = 0; i < dirtyLeafIDs.length; i++) {
	      if (dirtyLeafIDs[i].indexOf(id) === 0) {
	        isDirty = true;
	        break;
	      }
	    }
	    // check if component newly created
	    if (measurement.created[id]) {
	      isDirty = true;
	    }
	    if (!isDirty && measurement.counts[id] > 0) {
	      cleanComponents[id] = true;
	    }
	  }
	  return cleanComponents;
	}
	
	var ReactDefaultPerfAnalysis = {
	  getExclusiveSummary: getExclusiveSummary,
	  getInclusiveSummary: getInclusiveSummary,
	  getDOMSummary: getDOMSummary,
	  getTotalTime: getTotalTime
	};
	
	module.exports = ReactDefaultPerfAnalysis;

/***/ },
/* 190 */
/*!**************************************!*\
  !*** ./~/fbjs/lib/performanceNow.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performanceNow
	 * @typechecks
	 */
	
	'use strict';
	
	var performance = __webpack_require__(/*! ./performance */ 191);
	
	var performanceNow;
	
	/**
	 * Detect if we can use `window.performance.now()` and gracefully fallback to
	 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
	 * because of Facebook's testing infrastructure.
	 */
	if (performance.now) {
	  performanceNow = function () {
	    return performance.now();
	  };
	} else {
	  performanceNow = function () {
	    return Date.now();
	  };
	}
	
	module.exports = performanceNow;

/***/ },
/* 191 */
/*!***********************************!*\
  !*** ./~/fbjs/lib/performance.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule performance
	 * @typechecks
	 */
	
	'use strict';
	
	var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ 55);
	
	var performance;
	
	if (ExecutionEnvironment.canUseDOM) {
	  performance = window.performance || window.msPerformance || window.webkitPerformance;
	}
	
	module.exports = performance || {};

/***/ },
/* 192 */
/*!*************************************!*\
  !*** ./~/react/lib/ReactVersion.js ***!
  \*************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactVersion
	 */
	
	'use strict';
	
	module.exports = '0.14.6';

/***/ },
/* 193 */
/*!***************************************************!*\
  !*** ./~/react/lib/renderSubtreeIntoContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule renderSubtreeIntoContainer
	*/
	
	'use strict';
	
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 74);
	
	module.exports = ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 194 */
/*!***************************************!*\
  !*** ./~/react/lib/ReactDOMServer.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMServer
	 */
	
	'use strict';
	
	var ReactDefaultInjection = __webpack_require__(/*! ./ReactDefaultInjection */ 117);
	var ReactServerRendering = __webpack_require__(/*! ./ReactServerRendering */ 195);
	var ReactVersion = __webpack_require__(/*! ./ReactVersion */ 192);
	
	ReactDefaultInjection.inject();
	
	var ReactDOMServer = {
	  renderToString: ReactServerRendering.renderToString,
	  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
	  version: ReactVersion
	};
	
	module.exports = ReactDOMServer;

/***/ },
/* 195 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactServerRendering.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks static-only
	 * @providesModule ReactServerRendering
	 */
	'use strict';
	
	var ReactDefaultBatchingStrategy = __webpack_require__(/*! ./ReactDefaultBatchingStrategy */ 138);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactInstanceHandles = __webpack_require__(/*! ./ReactInstanceHandles */ 91);
	var ReactMarkupChecksum = __webpack_require__(/*! ./ReactMarkupChecksum */ 94);
	var ReactServerBatchingStrategy = __webpack_require__(/*! ./ReactServerBatchingStrategy */ 196);
	var ReactServerRenderingTransaction = __webpack_require__(/*! ./ReactServerRenderingTransaction */ 197);
	var ReactUpdates = __webpack_require__(/*! ./ReactUpdates */ 100);
	
	var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 104);
	var instantiateReactComponent = __webpack_require__(/*! ./instantiateReactComponent */ 108);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup
	 */
	function renderToString(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : invariant(false) : undefined;
	
	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
	
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(false);
	
	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      var markup = componentInstance.mountComponent(id, transaction, emptyObject);
	      return ReactMarkupChecksum.addChecksumToMarkup(markup);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}
	
	/**
	 * @param {ReactElement} element
	 * @return {string} the HTML markup, without the extra React ID and checksum
	 * (for generating static pages)
	 */
	function renderToStaticMarkup(element) {
	  !ReactElement.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : invariant(false) : undefined;
	
	  var transaction;
	  try {
	    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);
	
	    var id = ReactInstanceHandles.createReactRootID();
	    transaction = ReactServerRenderingTransaction.getPooled(true);
	
	    return transaction.perform(function () {
	      var componentInstance = instantiateReactComponent(element, null);
	      return componentInstance.mountComponent(id, transaction, emptyObject);
	    }, null);
	  } finally {
	    ReactServerRenderingTransaction.release(transaction);
	    // Revert to the DOM batching strategy since these two renderers
	    // currently share these stateful modules.
	    ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
	  }
	}
	
	module.exports = {
	  renderToString: renderToString,
	  renderToStaticMarkup: renderToStaticMarkup
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 196 */
/*!****************************************************!*\
  !*** ./~/react/lib/ReactServerBatchingStrategy.js ***!
  \****************************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerBatchingStrategy
	 * @typechecks
	 */
	
	'use strict';
	
	var ReactServerBatchingStrategy = {
	  isBatchingUpdates: false,
	  batchedUpdates: function (callback) {
	    // Don't do anything here. During the server rendering we don't want to
	    // schedule any updates. We will simply ignore them.
	  }
	};
	
	module.exports = ReactServerBatchingStrategy;

/***/ },
/* 197 */
/*!********************************************************!*\
  !*** ./~/react/lib/ReactServerRenderingTransaction.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactServerRenderingTransaction
	 * @typechecks
	 */
	
	'use strict';
	
	var PooledClass = __webpack_require__(/*! ./PooledClass */ 102);
	var CallbackQueue = __webpack_require__(/*! ./CallbackQueue */ 101);
	var Transaction = __webpack_require__(/*! ./Transaction */ 103);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var emptyFunction = __webpack_require__(/*! fbjs/lib/emptyFunction */ 61);
	
	/**
	 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
	 * during the performing of the transaction.
	 */
	var ON_DOM_READY_QUEUEING = {
	  /**
	   * Initializes the internal `onDOMReady` queue.
	   */
	  initialize: function () {
	    this.reactMountReady.reset();
	  },
	
	  close: emptyFunction
	};
	
	/**
	 * Executed within the scope of the `Transaction` instance. Consider these as
	 * being member methods, but with an implied ordering while being isolated from
	 * each other.
	 */
	var TRANSACTION_WRAPPERS = [ON_DOM_READY_QUEUEING];
	
	/**
	 * @class ReactServerRenderingTransaction
	 * @param {boolean} renderToStaticMarkup
	 */
	function ReactServerRenderingTransaction(renderToStaticMarkup) {
	  this.reinitializeTransaction();
	  this.renderToStaticMarkup = renderToStaticMarkup;
	  this.reactMountReady = CallbackQueue.getPooled(null);
	  this.useCreateElement = false;
	}
	
	var Mixin = {
	  /**
	   * @see Transaction
	   * @abstract
	   * @final
	   * @return {array} Empty list of operation wrap procedures.
	   */
	  getTransactionWrappers: function () {
	    return TRANSACTION_WRAPPERS;
	  },
	
	  /**
	   * @return {object} The queue to collect `onDOMReady` callbacks with.
	   */
	  getReactMountReady: function () {
	    return this.reactMountReady;
	  },
	
	  /**
	   * `PooledClass` looks for this, and will invoke this before allowing this
	   * instance to be reused.
	   */
	  destructor: function () {
	    CallbackQueue.release(this.reactMountReady);
	    this.reactMountReady = null;
	  }
	};
	
	assign(ReactServerRenderingTransaction.prototype, Transaction.Mixin, Mixin);
	
	PooledClass.addPoolingTo(ReactServerRenderingTransaction);
	
	module.exports = ReactServerRenderingTransaction;

/***/ },
/* 198 */
/*!****************************************!*\
  !*** ./~/react/lib/ReactIsomorphic.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactIsomorphic
	 */
	
	'use strict';
	
	var ReactChildren = __webpack_require__(/*! ./ReactChildren */ 156);
	var ReactComponent = __webpack_require__(/*! ./ReactComponent */ 169);
	var ReactClass = __webpack_require__(/*! ./ReactClass */ 168);
	var ReactDOMFactories = __webpack_require__(/*! ./ReactDOMFactories */ 199);
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ 200);
	var ReactPropTypes = __webpack_require__(/*! ./ReactPropTypes */ 153);
	var ReactVersion = __webpack_require__(/*! ./ReactVersion */ 192);
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var onlyChild = __webpack_require__(/*! ./onlyChild */ 202);
	
	var createElement = ReactElement.createElement;
	var createFactory = ReactElement.createFactory;
	var cloneElement = ReactElement.cloneElement;
	
	if (process.env.NODE_ENV !== 'production') {
	  createElement = ReactElementValidator.createElement;
	  createFactory = ReactElementValidator.createFactory;
	  cloneElement = ReactElementValidator.cloneElement;
	}
	
	var React = {
	
	  // Modern
	
	  Children: {
	    map: ReactChildren.map,
	    forEach: ReactChildren.forEach,
	    count: ReactChildren.count,
	    toArray: ReactChildren.toArray,
	    only: onlyChild
	  },
	
	  Component: ReactComponent,
	
	  createElement: createElement,
	  cloneElement: cloneElement,
	  isValidElement: ReactElement.isValidElement,
	
	  // Classic
	
	  PropTypes: ReactPropTypes,
	  createClass: ReactClass.createClass,
	  createFactory: createFactory,
	  createMixin: function (mixin) {
	    // Currently a noop. Will be used to validate and trace mixins.
	    return mixin;
	  },
	
	  // This looks DOM specific but these are actually isomorphic helpers
	  // since they are just generating DOM strings.
	  DOM: ReactDOMFactories,
	
	  version: ReactVersion,
	
	  // Hook for JSX spread, don't use this for anything else.
	  __spread: assign
	};
	
	module.exports = React;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 199 */
/*!******************************************!*\
  !*** ./~/react/lib/ReactDOMFactories.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFactories
	 * @typechecks static-only
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactElementValidator = __webpack_require__(/*! ./ReactElementValidator */ 200);
	
	var mapObject = __webpack_require__(/*! fbjs/lib/mapObject */ 201);
	
	/**
	 * Create a factory that creates HTML tag elements.
	 *
	 * @param {string} tag Tag name (e.g. `div`).
	 * @private
	 */
	function createDOMFactory(tag) {
	  if (process.env.NODE_ENV !== 'production') {
	    return ReactElementValidator.createFactory(tag);
	  }
	  return ReactElement.createFactory(tag);
	}
	
	/**
	 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
	 * This is also accessible via `React.DOM`.
	 *
	 * @public
	 */
	var ReactDOMFactories = mapObject({
	  a: 'a',
	  abbr: 'abbr',
	  address: 'address',
	  area: 'area',
	  article: 'article',
	  aside: 'aside',
	  audio: 'audio',
	  b: 'b',
	  base: 'base',
	  bdi: 'bdi',
	  bdo: 'bdo',
	  big: 'big',
	  blockquote: 'blockquote',
	  body: 'body',
	  br: 'br',
	  button: 'button',
	  canvas: 'canvas',
	  caption: 'caption',
	  cite: 'cite',
	  code: 'code',
	  col: 'col',
	  colgroup: 'colgroup',
	  data: 'data',
	  datalist: 'datalist',
	  dd: 'dd',
	  del: 'del',
	  details: 'details',
	  dfn: 'dfn',
	  dialog: 'dialog',
	  div: 'div',
	  dl: 'dl',
	  dt: 'dt',
	  em: 'em',
	  embed: 'embed',
	  fieldset: 'fieldset',
	  figcaption: 'figcaption',
	  figure: 'figure',
	  footer: 'footer',
	  form: 'form',
	  h1: 'h1',
	  h2: 'h2',
	  h3: 'h3',
	  h4: 'h4',
	  h5: 'h5',
	  h6: 'h6',
	  head: 'head',
	  header: 'header',
	  hgroup: 'hgroup',
	  hr: 'hr',
	  html: 'html',
	  i: 'i',
	  iframe: 'iframe',
	  img: 'img',
	  input: 'input',
	  ins: 'ins',
	  kbd: 'kbd',
	  keygen: 'keygen',
	  label: 'label',
	  legend: 'legend',
	  li: 'li',
	  link: 'link',
	  main: 'main',
	  map: 'map',
	  mark: 'mark',
	  menu: 'menu',
	  menuitem: 'menuitem',
	  meta: 'meta',
	  meter: 'meter',
	  nav: 'nav',
	  noscript: 'noscript',
	  object: 'object',
	  ol: 'ol',
	  optgroup: 'optgroup',
	  option: 'option',
	  output: 'output',
	  p: 'p',
	  param: 'param',
	  picture: 'picture',
	  pre: 'pre',
	  progress: 'progress',
	  q: 'q',
	  rp: 'rp',
	  rt: 'rt',
	  ruby: 'ruby',
	  s: 's',
	  samp: 'samp',
	  script: 'script',
	  section: 'section',
	  select: 'select',
	  small: 'small',
	  source: 'source',
	  span: 'span',
	  strong: 'strong',
	  style: 'style',
	  sub: 'sub',
	  summary: 'summary',
	  sup: 'sup',
	  table: 'table',
	  tbody: 'tbody',
	  td: 'td',
	  textarea: 'textarea',
	  tfoot: 'tfoot',
	  th: 'th',
	  thead: 'thead',
	  time: 'time',
	  title: 'title',
	  tr: 'tr',
	  track: 'track',
	  u: 'u',
	  ul: 'ul',
	  'var': 'var',
	  video: 'video',
	  wbr: 'wbr',
	
	  // SVG
	  circle: 'circle',
	  clipPath: 'clipPath',
	  defs: 'defs',
	  ellipse: 'ellipse',
	  g: 'g',
	  image: 'image',
	  line: 'line',
	  linearGradient: 'linearGradient',
	  mask: 'mask',
	  path: 'path',
	  pattern: 'pattern',
	  polygon: 'polygon',
	  polyline: 'polyline',
	  radialGradient: 'radialGradient',
	  rect: 'rect',
	  stop: 'stop',
	  svg: 'svg',
	  text: 'text',
	  tspan: 'tspan'
	
	}, createDOMFactory);
	
	module.exports = ReactDOMFactories;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 200 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactElementValidator.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactElementValidator
	 */
	
	/**
	 * ReactElementValidator provides a wrapper around a element factory
	 * which validates the props passed to the element. This is intended to be
	 * used only in DEV and could be replaced by a static type checker for languages
	 * that support it.
	 */
	
	'use strict';
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	var ReactPropTypeLocations = __webpack_require__(/*! ./ReactPropTypeLocations */ 111);
	var ReactPropTypeLocationNames = __webpack_require__(/*! ./ReactPropTypeLocationNames */ 112);
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 51);
	
	var canDefineProperty = __webpack_require__(/*! ./canDefineProperty */ 89);
	var getIteratorFn = __webpack_require__(/*! ./getIteratorFn */ 154);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	function getDeclarationErrorAddendum() {
	  if (ReactCurrentOwner.current) {
	    var name = ReactCurrentOwner.current.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}
	
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */
	var ownerHasKeyUseWarning = {};
	
	var loggedTypeFailures = {};
	
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */
	function validateExplicitKey(element, parentType) {
	  if (!element._store || element._store.validated || element.key != null) {
	    return;
	  }
	  element._store.validated = true;
	
	  var addenda = getAddendaForKeyUse('uniqueKey', element, parentType);
	  if (addenda === null) {
	    // we already showed the warning
	    return;
	  }
	  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s%s', addenda.parentOrOwner || '', addenda.childOwner || '', addenda.url || '') : undefined;
	}
	
	/**
	 * Shared warning and monitoring code for the key warnings.
	 *
	 * @internal
	 * @param {string} messageType A key used for de-duping warnings.
	 * @param {ReactElement} element Component that requires a key.
	 * @param {*} parentType element's parent's type.
	 * @returns {?object} A set of addenda to use in the warning message, or null
	 * if the warning has already been shown before (and shouldn't be shown again).
	 */
	function getAddendaForKeyUse(messageType, element, parentType) {
	  var addendum = getDeclarationErrorAddendum();
	  if (!addendum) {
	    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
	    if (parentName) {
	      addendum = ' Check the top-level render call using <' + parentName + '>.';
	    }
	  }
	
	  var memoizer = ownerHasKeyUseWarning[messageType] || (ownerHasKeyUseWarning[messageType] = {});
	  if (memoizer[addendum]) {
	    return null;
	  }
	  memoizer[addendum] = true;
	
	  var addenda = {
	    parentOrOwner: addendum,
	    url: ' See https://fb.me/react-warning-keys for more information.',
	    childOwner: null
	  };
	
	  // Usually the current owner is the offender, but if it accepts children as a
	  // property, it may be the creator of the child that's responsible for
	  // assigning it a key.
	  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
	    // Give the component that originally created this child.
	    addenda.childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
	  }
	
	  return addenda;
	}
	
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */
	function validateChildKeys(node, parentType) {
	  if (typeof node !== 'object') {
	    return;
	  }
	  if (Array.isArray(node)) {
	    for (var i = 0; i < node.length; i++) {
	      var child = node[i];
	      if (ReactElement.isValidElement(child)) {
	        validateExplicitKey(child, parentType);
	      }
	    }
	  } else if (ReactElement.isValidElement(node)) {
	    // This element was passed in a valid location.
	    if (node._store) {
	      node._store.validated = true;
	    }
	  } else if (node) {
	    var iteratorFn = getIteratorFn(node);
	    // Entry iterators provide implicit keys.
	    if (iteratorFn) {
	      if (iteratorFn !== node.entries) {
	        var iterator = iteratorFn.call(node);
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (ReactElement.isValidElement(step.value)) {
	            validateExplicitKey(step.value, parentType);
	          }
	        }
	      }
	    }
	  }
	}
	
	/**
	 * Assert that the props are valid
	 *
	 * @param {string} componentName Name of the component for error messages.
	 * @param {object} propTypes Map of prop name to a ReactPropType
	 * @param {object} props
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @private
	 */
	function checkPropTypes(componentName, propTypes, props, location) {
	  for (var propName in propTypes) {
	    if (propTypes.hasOwnProperty(propName)) {
	      var error;
	      // Prop type validation may throw. In case they do, we don't want to
	      // fail the render phase where it didn't fail before. So we log it.
	      // After these have been cleaned up, we'll let them throw.
	      try {
	        // This is intentionally an invariant that gets caught. It's the same
	        // behavior as without this statement except with a better message.
	        !(typeof propTypes[propName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], propName) : invariant(false) : undefined;
	        error = propTypes[propName](props, propName, componentName, location);
	      } catch (ex) {
	        error = ex;
	      }
	      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], propName, typeof error) : undefined;
	      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	        // Only monitor this failure once because there tends to be a lot of the
	        // same error.
	        loggedTypeFailures[error.message] = true;
	
	        var addendum = getDeclarationErrorAddendum();
	        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed propType: %s%s', error.message, addendum) : undefined;
	      }
	    }
	  }
	}
	
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */
	function validatePropTypes(element) {
	  var componentClass = element.type;
	  if (typeof componentClass !== 'function') {
	    return;
	  }
	  var name = componentClass.displayName || componentClass.name;
	  if (componentClass.propTypes) {
	    checkPropTypes(name, componentClass.propTypes, element.props, ReactPropTypeLocations.prop);
	  }
	  if (typeof componentClass.getDefaultProps === 'function') {
	    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : undefined;
	  }
	}
	
	var ReactElementValidator = {
	
	  createElement: function (type, props, children) {
	    var validType = typeof type === 'string' || typeof type === 'function';
	    // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.
	    process.env.NODE_ENV !== 'production' ? warning(validType, 'React.createElement: type should not be null, undefined, boolean, or ' + 'number. It should be a string (for DOM elements) or a ReactClass ' + '(for composite components).%s', getDeclarationErrorAddendum()) : undefined;
	
	    var element = ReactElement.createElement.apply(this, arguments);
	
	    // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.
	    if (element == null) {
	      return element;
	    }
	
	    // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)
	    if (validType) {
	      for (var i = 2; i < arguments.length; i++) {
	        validateChildKeys(arguments[i], type);
	      }
	    }
	
	    validatePropTypes(element);
	
	    return element;
	  },
	
	  createFactory: function (type) {
	    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
	    // Legacy hook TODO: Warn if this is accessed
	    validatedFactory.type = type;
	
	    if (process.env.NODE_ENV !== 'production') {
	      if (canDefineProperty) {
	        Object.defineProperty(validatedFactory, 'type', {
	          enumerable: false,
	          get: function () {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : undefined;
	            Object.defineProperty(this, 'type', {
	              value: type
	            });
	            return type;
	          }
	        });
	      }
	    }
	
	    return validatedFactory;
	  },
	
	  cloneElement: function (element, props, children) {
	    var newElement = ReactElement.cloneElement.apply(this, arguments);
	    for (var i = 2; i < arguments.length; i++) {
	      validateChildKeys(arguments[i], newElement.type);
	    }
	    validatePropTypes(newElement);
	    return newElement;
	  }
	
	};
	
	module.exports = ReactElementValidator;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 201 */
/*!*********************************!*\
  !*** ./~/fbjs/lib/mapObject.js ***!
  \*********************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule mapObject
	 */
	
	'use strict';
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	/**
	 * Executes the provided `callback` once for each enumerable own property in the
	 * object and constructs a new object from the results. The `callback` is
	 * invoked with three arguments:
	 *
	 *  - the property value
	 *  - the property name
	 *  - the object being traversed
	 *
	 * Properties that are added after the call to `mapObject` will not be visited
	 * by `callback`. If the values of existing properties are changed, the value
	 * passed to `callback` will be the value at the time `mapObject` visits them.
	 * Properties that are deleted before being visited are not visited.
	 *
	 * @grep function objectMap()
	 * @grep function objMap()
	 *
	 * @param {?object} object
	 * @param {function} callback
	 * @param {*} context
	 * @return {?object}
	 */
	function mapObject(object, callback, context) {
	  if (!object) {
	    return null;
	  }
	  var result = {};
	  for (var name in object) {
	    if (hasOwnProperty.call(object, name)) {
	      result[name] = callback.call(context, object[name], name, object);
	    }
	  }
	  return result;
	}
	
	module.exports = mapObject;

/***/ },
/* 202 */
/*!**********************************!*\
  !*** ./~/react/lib/onlyChild.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule onlyChild
	 */
	'use strict';
	
	var ReactElement = __webpack_require__(/*! ./ReactElement */ 88);
	
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 59);
	
	/**
	 * Returns the first child in a collection of children and verifies that there
	 * is only one child in the collection. The current implementation of this
	 * function assumes that a single child gets passed without a wrapper, but the
	 * purpose of this helper function is to abstract away the particular structure
	 * of children.
	 *
	 * @param {?object} children Child collection structure.
	 * @return {ReactComponent} The first and only `ReactComponent` contained in the
	 * structure.
	 */
	function onlyChild(children) {
	  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'onlyChild must be passed a children with exactly one child.') : invariant(false) : undefined;
	  return children;
	}
	
	module.exports = onlyChild;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 203 */
/*!***********************************!*\
  !*** ./~/react/lib/deprecated.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule deprecated
	 */
	
	'use strict';
	
	var assign = __webpack_require__(/*! ./Object.assign */ 85);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 71);
	
	/**
	 * This will log a single deprecation notice per function and forward the call
	 * on to the new API.
	 *
	 * @param {string} fnName The name of the function
	 * @param {string} newModule The module that fn will exist in
	 * @param {string} newPackage The module that fn will exist in
	 * @param {*} ctx The context this forwarded call should run in
	 * @param {function} fn The function to forward on to
	 * @return {function} The function that will warn once and then call fn
	 */
	function deprecated(fnName, newModule, newPackage, ctx, fn) {
	  var warned = false;
	  if (process.env.NODE_ENV !== 'production') {
	    var newFn = function () {
	      process.env.NODE_ENV !== 'production' ? warning(warned,
	      // Require examples in this string must be split to prevent React's
	      // build tools from mistaking them for real requires.
	      // Otherwise the build tools will attempt to build a '%s' module.
	      'React.%s is deprecated. Please use %s.%s from require' + '(\'%s\') ' + 'instead.', fnName, newModule, fnName, newPackage) : undefined;
	      warned = true;
	      return fn.apply(ctx, arguments);
	    };
	    // We need to make sure all properties of the original fn are copied over.
	    // In particular, this is needed to support PropTypes
	    return assign(newFn, fn);
	  }
	
	  return fn;
	}
	
	module.exports = deprecated;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./~/process/browser.js */ 50)))

/***/ },
/* 204 */
/*!******************************!*\
  !*** ./~/react-dom/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(/*! react/lib/ReactDOM */ 49);


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map