webpackJsonp([35783957827783],{

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(43);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	
	  if (isObjectObject(o) === false) return false;
	
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	
	  // Most likely a plain Object
	  return true;
	};


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

	/** @license React v16.3.2
	 * react-is.production.min.js
	 *
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';Object.defineProperty(exports,"__esModule",{value:!0});var b="function"===typeof Symbol&&Symbol["for"],c=b?Symbol["for"]("react.element"):60103,d=b?Symbol["for"]("react.portal"):60106,e=b?Symbol["for"]("react.fragment"):60107,f=b?Symbol["for"]("react.strict_mode"):60108,g=b?Symbol["for"]("react.provider"):60109,h=b?Symbol["for"]("react.context"):60110,k=b?Symbol["for"]("react.async_mode"):60111,l=b?Symbol["for"]("react.forward_ref"):60112;
	function m(a){if("object"===typeof a&&null!==a){var n=a.$$typeof;switch(n){case c:switch(a=a.type,a){case k:case e:case f:return a;default:switch(a=a&&a.$$typeof,a){case h:case l:case g:return a;default:return n}}case d:return n}}}exports.typeOf=m;exports.AsyncMode=k;exports.ContextConsumer=h;exports.ContextProvider=g;exports.Element=c;exports.ForwardRef=l;exports.Fragment=e;exports.Portal=d;exports.StrictMode=f;
	exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===k||a===f||"object"===typeof a&&null!==a&&(a.$$typeof===g||a.$$typeof===h||a.$$typeof===l)};exports.isAsyncMode=function(a){return m(a)===k};exports.isContextConsumer=function(a){return m(a)===h};exports.isContextProvider=function(a){return m(a)===g};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return m(a)===l};
	exports.isFragment=function(a){return m(a)===e};exports.isPortal=function(a){return m(a)===d};exports.isStrictMode=function(a){return m(a)===f};


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	if (true) {
	  module.exports = __webpack_require__(48);
	} else {
	  module.exports = require('./cjs/react-is.development.js');
	}


/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process, module) {'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var isPlainObject = _interopDefault(__webpack_require__(42));
	var Stylis = _interopDefault(__webpack_require__(52));
	var _insertRulePlugin = _interopDefault(__webpack_require__(51));
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(2));
	var reactIs = __webpack_require__(49);
	var hoistStatics = _interopDefault(__webpack_require__(40));
	
	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * @typechecks
	 */
	
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
	function hyphenate$2(string) {
	  return string.replace(_uppercasePattern, '-$1').toLowerCase();
	}
	
	var hyphenate_1 = hyphenate$2;
	
	var hyphenate = hyphenate_1;
	
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
	
	var hyphenateStyleName_1 = hyphenateStyleName;
	
	// 
	var objToCss = function objToCss(obj, prevKey) {
	  var css = Object.keys(obj).filter(function (key) {
	    var chunk = obj[key];
	    return chunk !== undefined && chunk !== null && chunk !== false && chunk !== '';
	  }).map(function (key) {
	    if (isPlainObject(obj[key])) return objToCss(obj[key], key);
	    return hyphenateStyleName_1(key) + ': ' + obj[key] + ';';
	  }).join(' ');
	  return prevKey ? prevKey + ' {\n  ' + css + '\n}' : css;
	};
	
	var flatten = function flatten(chunks, executionContext) {
	  return chunks.reduce(function (ruleSet, chunk) {
	    /* Remove falsey values */
	    if (chunk === undefined || chunk === null || chunk === false || chunk === '') {
	      return ruleSet;
	    }
	    /* Flatten ruleSet */
	    if (Array.isArray(chunk)) {
	      return [].concat(ruleSet, flatten(chunk, executionContext));
	    }
	
	    /* Handle other components */
	    if (chunk.hasOwnProperty('styledComponentId')) {
	      // $FlowFixMe not sure how to make this pass
	      return [].concat(ruleSet, ['.' + chunk.styledComponentId]);
	    }
	
	    /* Either execute or defer the function */
	    if (typeof chunk === 'function') {
	      return executionContext ? ruleSet.concat.apply(ruleSet, flatten([chunk(executionContext)], executionContext)) : ruleSet.concat(chunk);
	    }
	
	    /* Handle objects */
	    return ruleSet.concat(
	    // $FlowFixMe have to add %checks somehow to isPlainObject
	    isPlainObject(chunk) ? objToCss(chunk) : chunk.toString());
	  }, []);
	};
	
	// 
	// NOTE: This stylis instance is only used to split rules from SSR'd style tags
	var stylisSplitter = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: false,
	  compress: false,
	  semicolon: true
	});
	
	var stylis = new Stylis({
	  global: false,
	  cascade: true,
	  keyframe: false,
	  prefix: true,
	  compress: false,
	  semicolon: false // NOTE: This means "autocomplete missing semicolons"
	});
	
	// Wrap `insertRulePlugin to build a list of rules,
	// and then make our own plugin to return the rules. This
	// makes it easier to hook into the existing SSR architecture
	
	var parsingRules = [];
	// eslint-disable-next-line consistent-return
	var returnRulesPlugin = function returnRulesPlugin(context) {
	  if (context === -2) {
	    var parsedRules = parsingRules;
	    parsingRules = [];
	    return parsedRules;
	  }
	};
	
	var parseRulesPlugin = _insertRulePlugin(function (rule) {
	  parsingRules.push(rule);
	});
	
	stylis.use([parseRulesPlugin, returnRulesPlugin]);
	stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);
	
	var stringifyRules = function stringifyRules(rules, selector, prefix) {
	  var flatCSS = rules.join('').replace(/^\s*\/\/.*$/gm, ''); // replace JS comments
	
	  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;
	
	  return stylis(prefix || !selector ? '' : selector, cssStr);
	};
	
	var splitByRules = function splitByRules(css) {
	  return stylisSplitter('', css);
	};
	
	// 
	
	function isStyledComponent(target) /* : %checks */{
	  return typeof target === 'function' && typeof target.styledComponentId === 'string';
	}
	
	// 
	
	/* This function is DEPRECATED and will be removed on the next major version release.
	 * It was needed to rehydrate all style blocks prepended to chunks before React
	 * tries to rehydrate its HTML stream. Since the master StyleSheet will now detect
	 * the use of streamed style tags and will perform the rehydration earlier when needed
	 * this function will not be needed anymore */
	function consolidateStreamedStyles() {
	  if (false) {
	    // eslint-disable-next-line no-console
	    console.warn('styled-components automatically does streaming SSR rehydration now.\n' + 'Calling consolidateStreamedStyles manually is no longer necessary and a noop now.\n' + '- Please remove the consolidateStreamedStyles call from your client.');
	  }
	}
	
	// 
	/* eslint-disable no-bitwise */
	
	/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
	 * counterparts */
	var charsLength = 52;
	
	/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
	var getAlphabeticChar = function getAlphabeticChar(code) {
	  return String.fromCharCode(code + (code > 25 ? 39 : 97));
	};
	
	/* input a number, usually a hash and convert it to base-52 */
	var generateAlphabeticName = function generateAlphabeticName(code) {
	  var name = '';
	  var x = void 0;
	
	  /* get a char and divide by alphabet-length */
	  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
	    name = getAlphabeticChar(x % charsLength) + name;
	  }
	
	  return getAlphabeticChar(x % charsLength) + name;
	};
	
	// 
	
	var interleave = (function (strings, interpolations) {
	  return interpolations.reduce(function (array, interp, i) {
	    return array.concat(interp, strings[i + 1]);
	  }, [strings[0]]);
	});
	
	// 
	var css = (function (strings) {
	  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    interpolations[_key - 1] = arguments[_key];
	  }
	
	  return flatten(interleave(strings, interpolations));
	});
	
	var stream = {}
	
	// 
	
	
	var SC_ATTR = typeof process !== 'undefined' && ({"NODE_ENV":"production","PUBLIC_DIR":"/Users/carmv/sense-docs/public"}).SC_ATTR || 'data-styled-components';
	var SC_STREAM_ATTR = 'data-styled-streamed';
	var CONTEXT_KEY = '__styled-components-stylesheet__';
	
	var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
	
	var DISABLE_SPEEDY = typeof false === 'boolean' && false || ("production") !== 'production';
	
	// 
	var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;
	
	var extractComps = (function (maybeCSS) {
	  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
	  var existingComponents = [];
	  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
	    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
	    return match;
	  });
	  return existingComponents.map(function (_ref, i) {
	    var componentId = _ref.componentId,
	        matchIndex = _ref.matchIndex;
	
	    var nextComp = existingComponents[i + 1];
	    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
	    return { componentId: componentId, cssFromDOM: cssFromDOM };
	  });
	});
	
	// 
	/* eslint-disable camelcase, no-undef */
	
	var getNonce = (function () {
	  return typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;
	});
	
	// 
	// Helper to call a given function, only once
	var once = (function (cb) {
	  var called = false;
	
	  return function () {
	    if (!called) {
	      called = true;
	      cb();
	    }
	  };
	});
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	// 
	/* These are helpers for the StyleTags to keep track of the injected
	 * rule names for each (component) ID that they're keeping track of.
	 * They're crucial for detecting whether a name has already been
	 * injected.
	 * (This excludes rehydrated names) */
	
	/* adds a new ID:name pairing to a names dictionary */
	var addNameForId = function addNameForId(names, id, name) {
	  if (name) {
	    // eslint-disable-next-line no-param-reassign
	    var namesForId = names[id] || (names[id] = Object.create(null));
	    namesForId[name] = true;
	  }
	};
	
	/* resets an ID entirely by overwriting it in the dictionary */
	var resetIdNames = function resetIdNames(names, id) {
	  // eslint-disable-next-line no-param-reassign
	  names[id] = Object.create(null);
	};
	
	/* factory for a names dictionary checking the existance of an ID:name pairing */
	var hasNameForId = function hasNameForId(names) {
	  return function (id, name) {
	    return names[id] !== undefined && names[id][name];
	  };
	};
	
	/* stringifies names for the html/element output */
	var stringifyNames = function stringifyNames(names) {
	  var str = '';
	  // eslint-disable-next-line guard-for-in
	  for (var id in names) {
	    str += Object.keys(names[id]).join(' ') + ' ';
	  }
	  return str.trim();
	};
	
	/* clones the nested names dictionary */
	var cloneNames = function cloneNames(names) {
	  var clone = Object.create(null);
	  // eslint-disable-next-line guard-for-in
	  for (var id in names) {
	    clone[id] = _extends({}, names[id]);
	  }
	  return clone;
	};
	
	// 
	/* These are helpers that deal with the insertRule (aka speedy) API
	 * They are used in the StyleTags and specifically the speedy tag
	 */
	
	/* retrieve a sheet for a given style tag */
	var sheetForTag = function sheetForTag(tag) {
	  // $FlowFixMe
	  if (tag.sheet) return tag.sheet;
	
	  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
	  var size = document.styleSheets.length;
	  for (var i = 0; i < size; i += 1) {
	    var sheet = document.styleSheets[i];
	    // $FlowFixMe
	    if (sheet.ownerNode === tag) return sheet;
	  }
	
	  /* we should always be able to find a tag */
	  throw new Error();
	};
	
	/* insert a rule safely and return whether it was actually injected */
	var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
	  /* abort early if cssRule string is falsy */
	  if (!cssRule) return false;
	
	  var maxIndex = sheet.cssRules.length;
	
	  try {
	    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
	    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
	  } catch (err) {
	    /* any error indicates an invalid rule */
	    return false;
	  }
	
	  return true;
	};
	
	/* deletes `size` rules starting from `removalIndex` */
	var deleteRules = function deleteRules(sheet, removalIndex, size) {
	  var lowerBound = removalIndex - size;
	  for (var i = removalIndex; i >= lowerBound; i -= 1) {
	    sheet.deleteRule(i);
	  }
	};
	
	// 
	/* eslint-disable flowtype/object-type-delimiter */
	/* eslint-disable react/prop-types */
	
	/* this error is used for makeStyleTag */
	var parentNodeUnmountedErr =  false ? '\nTrying to insert a new style tag, but the given Node is unmounted!\n- Are you using a custom target that isn\'t mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n'.trim() : '';
	
	/* this error is used for tags */
	var throwCloneTagErr = function throwCloneTagErr() {
	  throw new Error( false ? '\nThe clone method cannot be used on the client!\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n'.trim() : '');
	};
	
	/* this marker separates component styles and is important for rehydration */
	var makeTextMarker = function makeTextMarker(id) {
	  return '\n/* sc-component-id: ' + id + ' */\n';
	};
	
	/* add up all numbers in array up until and including the index */
	var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
	  var totalUpToIndex = 0;
	  for (var i = 0; i <= index; i += 1) {
	    totalUpToIndex += sizes[i];
	  }
	
	  return totalUpToIndex;
	};
	
	/* create a new style tag after lastEl */
	var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
	  var el = document.createElement('style');
	  el.setAttribute(SC_ATTR, '');
	
	  var nonce = getNonce();
	  if (nonce) {
	    el.setAttribute('nonce', nonce);
	  }
	
	  /* Work around insertRule quirk in EdgeHTML */
	  el.appendChild(document.createTextNode(''));
	
	  if (target && !tagEl) {
	    /* Append to target when no previous element was passed */
	    target.appendChild(el);
	  } else {
	    if (!tagEl || !target || !tagEl.parentNode) {
	      throw new Error(parentNodeUnmountedErr);
	    }
	
	    /* Insert new style tag after the previous one */
	    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
	  }
	
	  return el;
	};
	
	/* takes a css factory function and outputs an html styled tag factory */
	var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
	  return function (additionalAttrs) {
	    var nonce = getNonce();
	    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', additionalAttrs];
	
	    var htmlAttr = attrs.filter(Boolean).join(' ');
	    return '<style ' + htmlAttr + '>' + css() + '</style>';
	  };
	};
	
	/* takes a css factory function and outputs an element factory */
	var wrapAsElement = function wrapAsElement(css, names) {
	  return function () {
	    var _props;
	
	    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props);
	
	    var nonce = getNonce();
	    if (nonce) {
	      // $FlowFixMe
	      props.nonce = nonce;
	    }
	
	    // eslint-disable-next-line react/no-danger
	    return React__default.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
	  };
	};
	
	var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
	  return function () {
	    return Object.keys(markers);
	  };
	};
	
	/* speedy tags utilise insertRule */
	var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
	  var names = Object.create(null);
	  var markers = Object.create(null);
	  var sizes = [];
	
	  var extractImport = getImportRuleTag !== undefined;
	  /* indicates whther getImportRuleTag was called */
	  var usedImportRuleTag = false;
	
	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }
	
	    var marker = markers[id] = sizes.length;
	    sizes.push(0);
	    resetIdNames(names, id);
	    return marker;
	  };
	
	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    var sheet = sheetForTag(el);
	    var insertIndex = addUpUntilIndex(sizes, marker);
	
	    var injectedRules = 0;
	    var importRules = [];
	    var cssRulesSize = cssRules.length;
	
	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var cssRule = cssRules[i];
	      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
	      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
	        importRules.push(cssRule);
	      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
	        mayHaveImport = false;
	        injectedRules += 1;
	      }
	    }
	
	    if (extractImport && importRules.length > 0) {
	      usedImportRuleTag = true;
	      // $FlowFixMe
	      getImportRuleTag().insertRules(id + '-import', importRules);
	    }
	
	    sizes[marker] += injectedRules; /* add up no of injected rules */
	    addNameForId(names, id, name);
	  };
	
	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	
	    var size = sizes[marker];
	    var sheet = sheetForTag(el);
	    var removalIndex = addUpUntilIndex(sizes, marker);
	    deleteRules(sheet, removalIndex, size);
	    sizes[marker] = 0;
	    resetIdNames(names, id);
	
	    if (extractImport && usedImportRuleTag) {
	      // $FlowFixMe
	      getImportRuleTag().removeRules(id + '-import');
	    }
	  };
	
	  var css = function css() {
	    var _sheetForTag = sheetForTag(el),
	        cssRules = _sheetForTag.cssRules;
	
	    var str = '';
	
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      str += makeTextMarker(id);
	      var marker = markers[id];
	      var end = addUpUntilIndex(sizes, marker);
	      var size = sizes[marker];
	      for (var i = end - size; i < end; i += 1) {
	        var rule = cssRules[i];
	        if (rule !== undefined) {
	          str += rule.cssText;
	        }
	      }
	    }
	
	    return str;
	  };
	
	  return {
	    styleTag: el,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: throwCloneTagErr
	  };
	};
	
	var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
	  var names = Object.create(null);
	  var markers = Object.create(null);
	
	  var extractImport = getImportRuleTag !== undefined;
	  var makeTextNode = function makeTextNode(id) {
	    return document.createTextNode(makeTextMarker(id));
	  };
	
	  /* indicates whther getImportRuleTag was called */
	  var usedImportRuleTag = false;
	
	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }
	
	    var marker = markers[id] = makeTextNode(id);
	    el.appendChild(marker);
	    names[id] = Object.create(null);
	    return marker;
	  };
	
	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    var importRules = [];
	    var cssRulesSize = cssRules.length;
	
	    for (var i = 0; i < cssRulesSize; i += 1) {
	      var rule = cssRules[i];
	      var mayHaveImport = extractImport;
	      if (mayHaveImport && rule.indexOf('@import') !== -1) {
	        importRules.push(rule);
	      } else {
	        mayHaveImport = false;
	        var separator = i === cssRulesSize - 1 ? '' : ' ';
	        marker.appendData('' + rule + separator);
	      }
	    }
	
	    addNameForId(names, id, name);
	
	    if (extractImport && importRules.length > 0) {
	      usedImportRuleTag = true;
	      // $FlowFixMe
	      getImportRuleTag().insertRules(id + '-import', importRules);
	    }
	  };
	
	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	
	    /* create new empty text node and replace the current one */
	    var newMarker = makeTextNode(id);
	    el.replaceChild(newMarker, marker);
	    markers[id] = newMarker;
	    resetIdNames(names, id);
	
	    if (extractImport && usedImportRuleTag) {
	      // $FlowFixMe
	      getImportRuleTag().removeRules(id + '-import');
	    }
	  };
	
	  var css = function css() {
	    var str = '';
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      str += markers[id].data;
	    }
	    return str;
	  };
	
	  return {
	    styleTag: el,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: throwCloneTagErr
	  };
	};
	
	var makeServerTagInternal = function makeServerTagInternal(namesArg, markersArg) {
	  var names = namesArg === undefined ? Object.create(null) : namesArg;
	  var markers = markersArg === undefined ? Object.create(null) : markersArg;
	
	  var insertMarker = function insertMarker(id) {
	    var prev = markers[id];
	    if (prev !== undefined) {
	      return prev;
	    }
	
	    return markers[id] = [''];
	  };
	
	  var insertRules = function insertRules(id, cssRules, name) {
	    var marker = insertMarker(id);
	    marker[0] += cssRules.join(' ');
	    addNameForId(names, id, name);
	  };
	
	  var removeRules = function removeRules(id) {
	    var marker = markers[id];
	    if (marker === undefined) return;
	    marker[0] = '';
	    resetIdNames(names, id);
	  };
	
	  var css = function css() {
	    var str = '';
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      var cssForId = markers[id][0];
	      if (cssForId) {
	        str += makeTextMarker(id) + cssForId;
	      }
	    }
	    return str;
	  };
	
	  var clone = function clone() {
	    var namesClone = cloneNames(names);
	    var markersClone = Object.create(null);
	
	    // eslint-disable-next-line guard-for-in
	    for (var id in markers) {
	      markersClone[id] = [markers[id][0]];
	    }
	
	    return makeServerTagInternal(namesClone, markersClone);
	  };
	
	  var tag = {
	    styleTag: null,
	    getIds: getIdsFromMarkersFactory(markers),
	    hasNameForId: hasNameForId(names),
	    insertMarker: insertMarker,
	    insertRules: insertRules,
	    removeRules: removeRules,
	    css: css,
	    toHTML: wrapAsHtmlTag(css, names),
	    toElement: wrapAsElement(css, names),
	    clone: clone
	  };
	
	  return tag;
	};
	
	var makeServerTag = function makeServerTag() {
	  return makeServerTagInternal();
	};
	
	var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
	  if (IS_BROWSER && !forceServer) {
	    var el = makeStyleTag(target, tagEl, insertBefore);
	    if (DISABLE_SPEEDY) {
	      return makeBrowserTag(el, getImportRuleTag);
	    } else {
	      return makeSpeedyTag(el, getImportRuleTag);
	    }
	  }
	
	  return makeServerTag();
	};
	
	/* wraps a given tag so that rehydration is performed once when necessary */
	var makeRehydrationTag = function makeRehydrationTag(tag, els, extracted, names, immediateRehydration) {
	  /* rehydration function that adds all rules to the new tag */
	  var rehydrate = once(function () {
	    /* add all extracted components to the new tag */
	    for (var i = 0; i < extracted.length; i += 1) {
	      var _extracted$i = extracted[i],
	          componentId = _extracted$i.componentId,
	          cssFromDOM = _extracted$i.cssFromDOM;
	
	      var cssRules = splitByRules(cssFromDOM);
	      tag.insertRules(componentId, cssRules);
	    }
	
	    /* remove old HTMLStyleElements, since they have been rehydrated */
	    for (var _i = 0; _i < els.length; _i += 1) {
	      var el = els[_i];
	      if (el.parentNode) {
	        el.parentNode.removeChild(el);
	      }
	    }
	  });
	
	  if (immediateRehydration) rehydrate();
	
	  return _extends({}, tag, {
	    /* add rehydration hook to insertion methods */
	    insertMarker: function insertMarker(id) {
	      rehydrate();
	      return tag.insertMarker(id);
	    },
	    insertRules: function insertRules(id, cssRules, name) {
	      rehydrate();
	      return tag.insertRules(id, cssRules, name);
	    }
	  });
	};
	
	// 
	
	/* determine the maximum number of components before tags are sharded */
	var MAX_SIZE = void 0;
	if (IS_BROWSER) {
	  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
	  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
	} else {
	  /* for servers we do not need to shard at all */
	  MAX_SIZE = -1;
	}
	
	var sheetRunningId = 0;
	var master = void 0;
	
	var StyleSheet = function () {
	  /* a map from ids to tags */
	  /* deferred rules for a given id */
	  /* this is used for not reinjecting rules via hasNameForId() */
	  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */
	  /* a list of tags belonging to this StyleSheet */
	  /* a tag for import rules */
	  /* current capacity until a new tag must be created */
	  /* children (aka clones) of this StyleSheet inheriting all and future injections */
	
	  function StyleSheet() {
	    var _this = this;
	
	    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
	    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    classCallCheck(this, StyleSheet);
	
	    this.getImportRuleTag = function () {
	      var importRuleTag = _this.importRuleTag;
	
	      if (importRuleTag !== undefined) {
	        return importRuleTag;
	      }
	
	      var firstTag = _this.tags[0];
	      var insertBefore = true;
	
	      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
	    };
	
	    this.id = sheetRunningId += 1;
	    this.sealed = false;
	    this.forceServer = forceServer;
	    this.target = forceServer ? null : target;
	    this.tagMap = {};
	    this.deferred = {};
	    this.rehydratedNames = {};
	    this.ignoreRehydratedNames = {};
	    this.tags = [];
	    this.capacity = 1;
	    this.clones = [];
	  }
	
	  /* rehydrate all SSR'd style tags */
	
	
	  StyleSheet.prototype.rehydrate = function rehydrate() {
	    if (!IS_BROWSER || this.forceServer) {
	      return this;
	    }
	
	    var els = [];
	    var names = [];
	    var extracted = [];
	    var isStreamed = false;
	
	    /* retrieve all of our SSR style elements from the DOM */
	    var nodes = document.querySelectorAll('style[' + SC_ATTR + ']');
	    var nodesSize = nodes.length;
	
	    /* abort rehydration if no previous style tags were found */
	    if (nodesSize === 0) {
	      return this;
	    }
	
	    for (var i = 0; i < nodesSize; i += 1) {
	      // $FlowFixMe: We can trust that all elements in this query are style elements
	      var el = nodes[i];
	
	      /* check if style tag is a streamed tag */
	      isStreamed = !!el.getAttribute(SC_STREAM_ATTR) || isStreamed;
	
	      /* retrieve all component names */
	      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(/\s+/);
	      var elNamesSize = elNames.length;
	      for (var j = 0; j < elNamesSize; j += 1) {
	        var name = elNames[j];
	        /* add rehydrated name to sheet to avoid readding styles */
	        this.rehydratedNames[name] = true;
	        names.push(name);
	      }
	
	      /* extract all components and their CSS */
	      extracted = extracted.concat(extractComps(el.textContent));
	      /* store original HTMLStyleElement */
	      els.push(el);
	    }
	
	    /* abort rehydration if nothing was extracted */
	    var extractedSize = extracted.length;
	    if (extractedSize === 0) {
	      return this;
	    }
	
	    /* create a tag to be used for rehydration */
	    var tag = this.makeTag(null);
	    var rehydrationTag = makeRehydrationTag(tag, els, extracted, names, isStreamed);
	
	    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
	    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
	    this.tags.push(rehydrationTag);
	
	    /* retrieve all component ids */
	    for (var _j = 0; _j < extractedSize; _j += 1) {
	      this.tagMap[extracted[_j].componentId] = rehydrationTag;
	    }
	
	    return this;
	  };
	
	  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
	   * The master StyleSheet is targeted by injectGlobal, keyframes, and components outside of any
	    * StyleSheetManager's context */
	
	
	  /* reset the internal "master" instance */
	  StyleSheet.reset = function reset() {
	    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	    master = new StyleSheet(undefined, forceServer).rehydrate();
	  };
	
	  /* adds "children" to the StyleSheet that inherit all of the parents' rules
	   * while their own rules do not affect the parent */
	
	
	  StyleSheet.prototype.clone = function clone() {
	    var sheet = new StyleSheet(this.target, this.forceServer);
	    /* add to clone array */
	    this.clones.push(sheet);
	
	    /* clone all tags */
	    sheet.tags = this.tags.map(function (tag) {
	      var ids = tag.getIds();
	      var newTag = tag.clone();
	
	      /* reconstruct tagMap */
	      for (var i = 0; i < ids.length; i += 1) {
	        sheet.tagMap[ids[i]] = newTag;
	      }
	
	      return newTag;
	    });
	
	    /* clone other maps */
	    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
	    sheet.deferred = _extends({}, this.deferred);
	
	    return sheet;
	  };
	
	  /* force StyleSheet to create a new tag on the next injection */
	
	
	  StyleSheet.prototype.sealAllTags = function sealAllTags() {
	    this.capacity = 1;
	    this.sealed = true;
	  };
	
	  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
	    var lastEl = tag ? tag.styleTag : null;
	    var insertBefore = false;
	
	    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
	  };
	
	  /* get a tag for a given componentId, assign the componentId to one, or shard */
	  StyleSheet.prototype.getTagForId = function getTagForId(id) {
	    /* simply return a tag, when the componentId was already assigned one */
	    var prev = this.tagMap[id];
	    if (prev !== undefined && !this.sealed) {
	      return prev;
	    }
	
	    var tag = this.tags[this.tags.length - 1];
	
	    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
	    this.capacity -= 1;
	    if (this.capacity === 0) {
	      this.capacity = MAX_SIZE;
	      this.sealed = false;
	      tag = this.makeTag(tag);
	      this.tags.push(tag);
	    }
	
	    return this.tagMap[id] = tag;
	  };
	
	  /* mainly for injectGlobal to check for its id */
	
	
	  StyleSheet.prototype.hasId = function hasId(id) {
	    return this.tagMap[id] !== undefined;
	  };
	
	  /* caching layer checking id+name to already have a corresponding tag and injected rules */
	
	
	  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
	    /* exception for rehydrated names which are checked separately */
	    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
	      return true;
	    }
	
	    var tag = this.tagMap[id];
	    return tag !== undefined && tag.hasNameForId(id, name);
	  };
	
	  /* registers a componentId and registers it on its tag */
	
	
	  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
	    /* don't inject when the id is already registered */
	    if (this.tagMap[id] !== undefined) return;
	
	    var clones = this.clones;
	
	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].deferredInject(id, cssRules);
	    }
	
	    this.getTagForId(id).insertMarker(id);
	    this.deferred[id] = cssRules;
	  };
	
	  /* injects rules for a given id with a name that will need to be cached */
	
	
	  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
	    var clones = this.clones;
	
	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].inject(id, cssRules, name);
	    }
	
	    /* add deferred rules for component */
	    var injectRules = cssRules;
	    var deferredRules = this.deferred[id];
	    if (deferredRules !== undefined) {
	      injectRules = deferredRules.concat(injectRules);
	      delete this.deferred[id];
	    }
	
	    var tag = this.getTagForId(id);
	    tag.insertRules(id, injectRules, name);
	  };
	
	  /* removes all rules for a given id, which doesn't remove its marker but resets it */
	
	
	  StyleSheet.prototype.remove = function remove(id) {
	    var tag = this.tagMap[id];
	    if (tag === undefined) return;
	
	    var clones = this.clones;
	
	    for (var i = 0; i < clones.length; i += 1) {
	      clones[i].remove(id);
	    }
	
	    /* remove all rules from the tag */
	    tag.removeRules(id);
	    /* ignore possible rehydrated names */
	    this.ignoreRehydratedNames[id] = true;
	    /* delete possible deferred rules */
	    delete this.deferred[id];
	  };
	
	  StyleSheet.prototype.toHTML = function toHTML() {
	    return this.tags.map(function (tag) {
	      return tag.toHTML();
	    }).join('');
	  };
	
	  StyleSheet.prototype.toReactElements = function toReactElements() {
	    var id = this.id;
	
	
	    return this.tags.map(function (tag, i) {
	      var key = 'sc-' + id + '-' + i;
	      return React.cloneElement(tag.toElement(), { key: key });
	    });
	  };
	
	  createClass(StyleSheet, null, [{
	    key: 'master',
	    get: function get$$1() {
	      return master || (master = new StyleSheet().rehydrate());
	    }
	
	    /* NOTE: This is just for backwards-compatibility with jest-styled-components */
	
	  }, {
	    key: 'instance',
	    get: function get$$1() {
	      return StyleSheet.master;
	    }
	  }]);
	  return StyleSheet;
	}();
	
	var _StyleSheetManager$ch;
	
	// 
	/* this error is used for makeStyleTag */
	var targetPropErr =  false ? '\nThe StyleSheetManager expects a valid target or sheet prop!\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n'.trim() : '';
	
	var StyleSheetManager = function (_Component) {
	  inherits(StyleSheetManager, _Component);
	
	  function StyleSheetManager() {
	    classCallCheck(this, StyleSheetManager);
	    return possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  StyleSheetManager.prototype.getChildContext = function getChildContext() {
	    var _ref;
	
	    return _ref = {}, _ref[CONTEXT_KEY] = this.sheetInstance, _ref;
	  };
	
	  StyleSheetManager.prototype.componentWillMount = function componentWillMount() {
	    if (this.props.sheet) {
	      this.sheetInstance = this.props.sheet;
	    } else if (this.props.target) {
	      this.sheetInstance = new StyleSheet(this.props.target);
	    } else {
	      throw new Error(targetPropErr);
	    }
	  };
	
	  StyleSheetManager.prototype.render = function render() {
	    /* eslint-disable react/prop-types */
	    // Flow v0.43.1 will report an error accessing the `children` property,
	    // but v0.47.0 will not. It is necessary to use a type cast instead of
	    // a "fixme" comment to satisfy both Flow versions.
	    return React__default.Children.only(this.props.children);
	  };
	
	  return StyleSheetManager;
	}(React.Component);
	
	StyleSheetManager.childContextTypes = (_StyleSheetManager$ch = {}, _StyleSheetManager$ch[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]).isRequired, _StyleSheetManager$ch);
	
	 false ? StyleSheetManager.propTypes = {
	  sheet: PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]),
	  target: PropTypes.shape({
	    appendChild: PropTypes.func.isRequired
	  })
	} : void 0;
	
	// 
	/* eslint-disable no-underscore-dangle */
	/* this error is used for makeStyleTag */
	var sheetClosedErr =  false ? '\nCan\'t collect styles once you\'ve consumed a ServerStyleSheet\'s styles!\nServerStyleSheet is a one off instance for each server-side render cycle.\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n'.trim() : '';
	
	var streamBrowserErr =  false ? 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.' : '';
	
	var ServerStyleSheet = function () {
	  function ServerStyleSheet() {
	    classCallCheck(this, ServerStyleSheet);
	
	    /* The master sheet might be reset, so keep a reference here */
	    this.masterSheet = StyleSheet.master;
	    this.instance = this.masterSheet.clone();
	    this.closed = false;
	  }
	
	  ServerStyleSheet.prototype.complete = function complete() {
	    if (!this.closed) {
	      /* Remove closed StyleSheets from the master sheet */
	      var index = this.masterSheet.clones.indexOf(this.instance);
	      this.masterSheet.clones.splice(index, 1);
	      this.closed = true;
	    }
	  };
	
	  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
	    if (this.closed) {
	      throw new Error(sheetClosedErr);
	    }
	
	    return React__default.createElement(
	      StyleSheetManager,
	      { sheet: this.instance },
	      children
	    );
	  };
	
	  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
	    this.complete();
	    return this.instance.toHTML();
	  };
	
	  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
	    this.complete();
	    return this.instance.toReactElements();
	  };
	
	  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
	    var _this = this;
	
	    {
	      throw new Error(streamBrowserErr);
	    }
	
	    /* the tag index keeps track of which tags have already been emitted */
	    var instance = this.instance;
	
	    var instanceTagIndex = 0;
	
	    var streamAttr = SC_STREAM_ATTR + '="true"';
	    var ourStream = new stream.Readable();
	    // $FlowFixMe
	    ourStream._read = function () {};
	
	    readableStream.on('data', function (chunk) {
	      var tags = instance.tags;
	
	      var html = '';
	
	      /* retrieve html for each new style tag */
	      for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
	        var tag = tags[instanceTagIndex];
	        html += tag.toHTML(streamAttr);
	      }
	
	      /* force our StyleSheets to emit entirely new tags */
	      instance.sealAllTags();
	      /* prepend style html to chunk */
	      ourStream.push(html + chunk);
	    });
	
	    readableStream.on('end', function () {
	      _this.complete();
	      ourStream.push(null);
	    });
	
	    readableStream.on('error', function (err) {
	      _this.complete();
	      ourStream.emit('error', err);
	    });
	
	    return ourStream;
	  };
	
	  return ServerStyleSheet;
	}();
	
	// 
	
	var LIMIT = 200;
	
	var createWarnTooManyClasses = (function (displayName) {
	  var generatedClasses = {};
	  var warningSeen = false;
	
	  return function (className) {
	    if (!warningSeen) {
	      generatedClasses[className] = true;
	      if (Object.keys(generatedClasses).length >= LIMIT) {
	        // Unable to find latestRule in test environment.
	        /* eslint-disable no-console, prefer-template */
	        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs({\n' + '    style: ({ background }) => ({\n' + '      background,\n' + '    }),\n' + '  })`width: 100%;`\n\n' + '  <Component />');
	        warningSeen = true;
	        generatedClasses = {};
	      }
	    }
	  };
	});
	
	// 
	/* eslint-disable max-len */
	/**
	 * Trying to avoid the unknown-prop errors on styled components by filtering by
	 * React's attribute whitelist.
	 *
	 * To regenerate this regex:
	 *
	 * 1. `npm i -g regexgen` (https://github.com/devongovett/regexgen)
	 * 2. Run `regexgen` with the list of space-separated words below as input
	 * 3. Surround the emitted regex with this: `/^(GENERATED_REGEX)$/` -- this will ensure a full string match
	 *    and no false positives from partials
	 **/
	/*
	children dangerouslySetInnerHTML key ref autoFocus defaultValue valueLink defaultChecked checkedLink innerHTML suppressContentEditableWarning onFocusIn onFocusOut className onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown onKeyPress onKeyUp onFocus onBlur onChange onInput onInvalid onSubmit onReset onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onAnimationStart onAnimationEnd onAnimationIteration onTransitionEnd onCopyCapture onCutCapture onPasteCapture onCompositionEndCapture onCompositionStartCapture onCompositionUpdateCapture onKeyDownCapture onKeyPressCapture onKeyUpCapture onFocusCapture onBlurCapture onChangeCapture onInputCapture onSubmitCapture onResetCapture onClickCapture onContextMenuCapture onDoubleClickCapture onDragCapture onDragEndCapture onDragEnterCapture onDragExitCapture onDragLeaveCapture onDragOverCapture onDragStartCapture onDropCapture onMouseDownCapture onMouseEnterCapture onMouseLeaveCapture onMouseMoveCapture onMouseOutCapture onMouseOverCapture onMouseUpCapture onSelectCapture onTouchCancelCapture onTouchEndCapture onTouchMoveCapture onTouchStartCapture onScrollCapture onWheelCapture onAbortCapture onCanPlayCapture onCanPlayThroughCapture onDurationChangeCapture onEmptiedCapture onEncryptedCapture onEndedCapture onErrorCapture onLoadedDataCapture onLoadedMetadataCapture onLoadStartCapture onPauseCapture onPlayCapture onPlayingCapture onProgressCapture onRateChangeCapture onSeekedCapture onSeekingCapture onStalledCapture onSuspendCapture onTimeUpdateCapture onVolumeChangeCapture onWaitingCapture onLoadCapture onAnimationStartCapture onAnimationEndCapture onAnimationIterationCapture onTransitionEndCapture accept acceptCharset accessKey action allowFullScreen allowTransparency alt as async autoComplete autoPlay capture cellPadding cellSpacing charSet challenge checked cite classID className cols colSpan content contentEditable contextMenu controlsList controls coords crossOrigin data dateTime default defer dir disabled download draggable encType form formAction formEncType formMethod formNoValidate formTarget frameBorder headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media mediaGroup method min minLength multiple muted name nonce noValidate open optimum pattern placeholder playsInline poster preload profile radioGroup readOnly referrerPolicy rel required reversed role rows rowSpan sandbox scope scoped scrolling seamless selected shape size sizes span spellCheck src srcDoc srcLang srcSet start step style summary tabIndex target title type useMap value width wmode wrap about datatype inlist prefix property resource typeof vocab autoCapitalize autoCorrect autoSave color itemProp itemScope itemType itemID itemRef results security unselectable accentHeight accumulate additive alignmentBaseline allowReorder alphabetic amplitude arabicForm ascent attributeName attributeType autoReverse azimuth baseFrequency baseProfile baselineShift bbox begin bias by calcMode capHeight clip clipPath clipRule clipPathUnits colorInterpolation colorInterpolationFilters colorProfile colorRendering contentScriptType contentStyleType cursor cx cy d decelerate descent diffuseConstant direction display divisor dominantBaseline dur dx dy edgeMode elevation enableBackground end exponent externalResourcesRequired fill fillOpacity fillRule filter filterRes filterUnits floodColor floodOpacity focusable fontFamily fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontWeight format from fx fy g1 g2 glyphName glyphOrientationHorizontal glyphOrientationVertical glyphRef gradientTransform gradientUnits hanging horizAdvX horizOriginX ideographic imageRendering in in2 intercept k k1 k2 k3 k4 kernelMatrix kernelUnitLength kerning keyPoints keySplines keyTimes lengthAdjust letterSpacing lightingColor limitingConeAngle local markerEnd markerMid markerStart markerHeight markerUnits markerWidth mask maskContentUnits maskUnits mathematical mode numOctaves offset opacity operator order orient orientation origin overflow overlinePosition overlineThickness paintOrder panose1 pathLength patternContentUnits patternTransform patternUnits pointerEvents points pointsAtX pointsAtY pointsAtZ preserveAlpha preserveAspectRatio primitiveUnits r radius refX refY renderingIntent repeatCount repeatDur requiredExtensions requiredFeatures restart result rotate rx ry scale seed shapeRendering slope spacing specularConstant specularExponent speed spreadMethod startOffset stdDeviation stemh stemv stitchTiles stopColor stopOpacity strikethroughPosition strikethroughThickness string stroke strokeDasharray strokeDashoffset strokeLinecap strokeLinejoin strokeMiterlimit strokeOpacity strokeWidth surfaceScale systemLanguage tableValues targetX targetY textAnchor textDecoration textRendering textLength to transform u1 u2 underlinePosition underlineThickness unicode unicodeBidi unicodeRange unitsPerEm vAlphabetic vHanging vIdeographic vMathematical values vectorEffect version vertAdvY vertOriginX vertOriginY viewBox viewTarget visibility widths wordSpacing writingMode x xHeight x1 x2 xChannelSelector xlinkActuate xlinkArcrole xlinkHref xlinkRole xlinkShow xlinkTitle xlinkType xmlBase xmlns xmlnsXlink xmlLang xmlSpace y y1 y2 yChannelSelector z zoomAndPan
	*/
	/* eslint-enable max-len */
	
	var ATTRIBUTE_REGEX = /^((?:s(?:uppressContentEditableWarn|croll|pac)|(?:shape|image|text)Render|(?:letter|word)Spac|vHang|hang)ing|(?:on(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur|Invalid)Captur|alignmentBaselin|(?:limitingConeAng|xlink(?:(?:Arcr|R)o|Tit)|s(?:urfaceSca|ty|ca)|unselectab|baseProfi|fontSty|(?:focus|dragg)ab|multip|profi|tit)l|d(?:ominantBaselin|efaultValu)|a(?:uto(?:Capitaliz|Revers|Sav)|dditiv)|(?:(?:formNoValid|xlinkActu|noValid|accumul|rot)a|autoComple|decelera)t|(?:(?:attribute|item)T|datat)yp|(?:attribute|glyph)Nam|playsInlin|(?:formE|e)ncTyp|(?:writing|input|edge)Mod|(?:xlinkTy|itemSco|keyTy|slo)p|(?:amplitu|mo)d|(?:xmlSpa|non)c|fillRul|(?:dateTi|na)m|r(?:esourc|ol)|xmlBas|wmod)e|(?:glyphOrientationHorizont|loc)al|(?:externalResourcesRequir|select|revers|mut)ed|c(?:o(?:lorInterpolationFilter|ord)s|o(?:lor(?:Interpolation)?|nt(?:rols|ent))|(?:ontentS(?:cript|tyle)Typ|o(?:ntentEditab|lorProfi)l|l(?:assNam|ipRul)|a(?:lcMod|ptur)|it)e|olorRendering|l(?:ipPathUnits|assID)|(?:ontrolsLis|apHeigh)t|h(?:eckedLink|a(?:llenge|rSet)|ildren|ecked)|ell(?:Spac|Padd)ing|o(?:ntextMenu|ls)|(?:rossOrigi|olSpa)n|lip(?:Path)?|ursor|[xy])|glyphOrientationVertical|d(?:angerouslySetInnerHTML|efaultChecked|ownload|isabled|isplay|[xy])|(?:s(?:trikethroughThickn|eaml)es|(?:und|ov)erlineThicknes|r(?:equiredExtension|adiu)|(?:requiredFeatur|tableValu|stitchTil|numOctav|filterR)e|key(?:(?:Splin|Tim)e|Param)|autoFocu|header|bia)s|(?:(?:st(?:rikethroughPosi|dDevia)|(?:und|ov)erlinePosi|(?:textDecor|elev)a|orienta)tio|(?:strokeLinejo|orig)i|formActio|zoomAndPa|onFocusI|directio|(?:vers|act)io|rowSpa|begi|ico)n|o(?:n(?:AnimationIteration|C(?:o(?:mposition(?:Update|Start|End)|ntextMenu|py)|anPlayThrough|anPlay|hange|lick|ut)|(?:(?:Duration|Volume|Rate)Chang|(?:MouseLea|(?:Touch|Mouse)Mo|DragLea)v|Paus)e|Loaded(?:Metad|D)ata|(?:Animation|Touch|Load|Drag)Start|(?:(?:T(?:ransition|ouch)|Animation)E|Suspe)nd|DoubleClick|(?:TouchCanc|Whe)el|(?:Mouse(?:Ent|Ov)e|Drag(?:Ent|Ov)e|Erro)r|TimeUpdate|(?:E(?:n(?:crypt|d)|mpti)|S(?:tall|eek))ed|MouseDown|P(?:rogress|laying)|(?:MouseOu|DragExi|S(?:elec|ubmi)|Rese|Inpu)t|KeyPress|DragEnd|Key(?:Down|Up)|(?:Wait|Seek)ing|(?:MouseU|Dro)p|Scroll|Paste|Focus|Abort|Drag|Play|Load|Blur|Invalid)|rient)|p(?:reserveA(?:spectRatio|lpha)|ointsAt[X-Z]|anose1)|(?:patternContent|ma(?:sk(?:Content)?|rker)|primitive|gradient|pattern|filter)Units|(?:gradientT|patternT|t)ransform|(?:(?:allowTranspar|baseFrequ)enc|re(?:ferrerPolic|adOnl)|(?:(?:st(?:roke|op)O|floodO|fillO|o)pac|integr|secur)it|visibilit|fontFamil|accessKe|propert|summar)y|(?:strokeMiterlimi|(?:specularConsta|repeatCou|fontVaria)n|(?:(?:specularE|e)xpon|renderingInt|asc)en|d(?:iffuseConsta|esce)n|(?:fontSizeAdju|lengthAdju|manife)s|baselineShif|vectorEffec|(?:(?:mar(?:ker|gin)|x)H|accentH|fontW)eigh|a(?:utoCorrec|bou)|markerStar|onFocusOu|intercep|restar|forma|inlis|heigh|lis)t|(?:(?:st(?:rokeDasho|artO)|o)ffs|acceptChars|formTarg|viewTarg|srcS)et|(?:(?:enableBackgrou|markerE)n|s(?:p(?:readMetho|ee)|ee)|formMetho|m(?:arkerMi|etho)|preloa|kin)d|k(?:ernel(?:UnitLength|Matrix)|[1-4])|(?:[xy]ChannelSelect|lightingCol|textAnch|floodCol|stopCol|operat|htmlF)or|(?:allowFullScre|hidd)en|strokeDasharray|systemLanguage|(?:strokeLineca|itemPro|useMa|wra|loo)p|v(?:Mathematical|ert(?:Origin[XY]|AdvY)|alues|ocab)|(?:pointerEve|keyPoi)nts|unicodeRange|(?:(?:allowReord|placehold|frameBord|paintOrd|post|ord)e|repeatDu|d(?:efe|u))r|mathematical|(?:vI|i)deographic|h(?:oriz(?:Origin|Adv)X|ttpEquiv)|u(?:nicodeBidi|[12])|(?:fontStretc|hig)h|(?:(?:mar(?:ker|gin)W|strokeW)id|azimu)th|vAlphabetic|mediaGroup|spellCheck|(?:unitsPerE|optimu|fro)m|r(?:adioGroup|e(?:sults|f[XY]|l)|ows|[xy])|(?:xmlnsXl|valueL)ink|a(?:rabicForm|l(?:phabetic|t)|sync)|pathLength|(?:text|m(?:in|ax))Length|innerHTML|xlinkShow|(?:xlinkHr|glyphR)ef|r(?:e(?:quired|sult|f))?|o(?:verflow|pen)|(?:tabInde|(?:sand|b)bo|viewBo)x|(?:(?:href|xml|src)La|kerni)ng|f(?:o(?:ntSize|rm)|il(?:ter|l))|autoPlay|unicode|p(?:attern|oints)|t(?:arget[XY]|o)|i(?:temRef|n2|s)|divisor|d(?:efault|ata|ir)?|srcDoc|s(?:coped|te(?:m[hv]|p)|pan)|(?:width|size)s|(?:stri|la)ng|prefix|itemID|s(?:t(?:roke|art)|hape|cope|rc)|a(?:ccept|s)|t(?:arget|ype)|typeof|width|value|x(?:mlns)?|label|m(?:edia|a(?:sk|x)|in)|size|href|k(?:ey)?|end|low|x[12]|i[dn]|y[12]|g[12]|by|f[xy]|[yz])$/;
	
	/* From DOMProperty */
	var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
	var ATTRIBUTE_NAME_CHAR = ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
	var isCustomAttribute = RegExp.prototype.test.bind(new RegExp('^(data|aria)-[' + ATTRIBUTE_NAME_CHAR + ']*$'));
	
	var validAttr = (function (name) {
	  return ATTRIBUTE_REGEX.test(name) || isCustomAttribute(name.toLowerCase());
	});
	
	// 
	
	function isTag(target) /* : %checks */{
	  return typeof target === 'string';
	}
	
	// 
	
	/* eslint-disable no-undef */
	function getComponentName(target) {
	  return target.displayName || target.name || 'Component';
	}
	
	// 
	
	var determineTheme = (function (props, fallbackTheme, defaultProps) {
	  // Props should take precedence over ThemeProvider, which should take precedence over
	  // defaultProps, but React automatically puts defaultProps on props.
	
	  /* eslint-disable react/prop-types */
	  var isDefaultTheme = defaultProps && props.theme === defaultProps.theme;
	  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme;
	  /* eslint-enable */
	
	  return theme;
	});
	
	// 
	var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
	var dashesAtEnds = /(^-|-$)/g;
	
	/**
	 * TODO: Explore using CSS.escape when it becomes more available
	 * in evergreen browsers.
	 */
	function escape(str) {
	  return str
	  // Replace all possible CSS selectors
	  .replace(escapeRegex, '-')
	
	  // Remove extraneous hyphens at the start and end
	  .replace(dashesAtEnds, '');
	}
	
	// 
	/**
	 * Creates a broadcast that can be listened to, i.e. simple event emitter
	 *
	 * @see https://github.com/ReactTraining/react-broadcast
	 */
	
	var createBroadcast = function createBroadcast(initialState) {
	  var listeners = {};
	  var id = 0;
	  var state = initialState;
	
	  function publish(nextState) {
	    state = nextState;
	
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in listeners) {
	      var listener = listeners[key];
	      if (listener === undefined) {
	        // eslint-disable-next-line no-continue
	        continue;
	      }
	
	      listener(state);
	    }
	  }
	
	  function subscribe(listener) {
	    var currentId = id;
	    listeners[currentId] = listener;
	    id += 1;
	    listener(state);
	    return currentId;
	  }
	
	  function unsubscribe(unsubID) {
	    listeners[unsubID] = undefined;
	  }
	
	  return { publish: publish, subscribe: subscribe, unsubscribe: unsubscribe };
	};
	
	var _ThemeProvider$childC;
	var _ThemeProvider$contex;
	
	// 
	/* globals React$Element */
	// NOTE: DO NOT CHANGE, changing this is a semver major change!
	var CHANNEL = '__styled-components__';
	var CHANNEL_NEXT = CHANNEL + 'next__';
	
	var CONTEXT_CHANNEL_SHAPE = PropTypes.shape({
	  getTheme: PropTypes.func,
	  subscribe: PropTypes.func,
	  unsubscribe: PropTypes.func
	});
	
	var warnChannelDeprecated = void 0;
	if (false) {
	  warnChannelDeprecated = once(function () {
	    // eslint-disable-next-line no-console
	    console.error('Warning: Usage of `context.' + CHANNEL + '` as a function is deprecated. It will be replaced with the object on `.context.' + CHANNEL_NEXT + '` in a future version.');
	  });
	}
	
	var isFunction = function isFunction(test) {
	  return typeof test === 'function';
	};
	
	/**
	 * Provide a theme to an entire react component tree via context and event listeners (have to do
	 * both context and event emitter as pure components block context updates)
	 */
	
	var ThemeProvider = function (_Component) {
	  inherits(ThemeProvider, _Component);
	
	  function ThemeProvider() {
	    classCallCheck(this, ThemeProvider);
	
	    var _this = possibleConstructorReturn(this, _Component.call(this));
	
	    _this.unsubscribeToOuterId = -1;
	
	    _this.getTheme = _this.getTheme.bind(_this);
	    return _this;
	  }
	
	  ThemeProvider.prototype.componentWillMount = function componentWillMount() {
	    var _this2 = this;
	
	    // If there is a ThemeProvider wrapper anywhere around this theme provider, merge this theme
	    // with the outer theme
	    var outerContext = this.context[CHANNEL_NEXT];
	    if (outerContext !== undefined) {
	      this.unsubscribeToOuterId = outerContext.subscribe(function (theme) {
	        _this2.outerTheme = theme;
	
	        if (_this2.broadcast !== undefined) {
	          _this2.publish(_this2.props.theme);
	        }
	      });
	    }
	
	    this.broadcast = createBroadcast(this.getTheme());
	  };
	
	  ThemeProvider.prototype.getChildContext = function getChildContext() {
	    var _this3 = this,
	        _babelHelpers$extends;
	
	    return _extends({}, this.context, (_babelHelpers$extends = {}, _babelHelpers$extends[CHANNEL_NEXT] = {
	      getTheme: this.getTheme,
	      subscribe: this.broadcast.subscribe,
	      unsubscribe: this.broadcast.unsubscribe
	    }, _babelHelpers$extends[CHANNEL] = function (subscriber) {
	      if (false) {
	        warnChannelDeprecated();
	      }
	
	      // Patch the old `subscribe` provide via `CHANNEL` for older clients.
	      var unsubscribeId = _this3.broadcast.subscribe(subscriber);
	      return function () {
	        return _this3.broadcast.unsubscribe(unsubscribeId);
	      };
	    }, _babelHelpers$extends));
	  };
	
	  ThemeProvider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (this.props.theme !== nextProps.theme) {
	      this.publish(nextProps.theme);
	    }
	  };
	
	  ThemeProvider.prototype.componentWillUnmount = function componentWillUnmount() {
	    if (this.unsubscribeToOuterId !== -1) {
	      this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeToOuterId);
	    }
	  };
	
	  // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
	
	
	  ThemeProvider.prototype.getTheme = function getTheme(passedTheme) {
	    var theme = passedTheme || this.props.theme;
	    if (isFunction(theme)) {
	      var mergedTheme = theme(this.outerTheme);
	      if (false) {
	        throw new Error(process.env.NODE_ENV !== 'production' ? '[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!' : '');
	      }
	      return mergedTheme;
	    }
	    if (!isPlainObject(theme)) {
	      throw new Error( false ? '[ThemeProvider] Please make your theme prop a plain object' : '');
	    }
	    return _extends({}, this.outerTheme, theme);
	  };
	
	  ThemeProvider.prototype.publish = function publish(theme) {
	    this.broadcast.publish(this.getTheme(theme));
	  };
	
	  ThemeProvider.prototype.render = function render() {
	    if (!this.props.children) {
	      return null;
	    }
	    return React__default.Children.only(this.props.children);
	  };
	
	  return ThemeProvider;
	}(React.Component);
	
	ThemeProvider.childContextTypes = (_ThemeProvider$childC = {}, _ThemeProvider$childC[CHANNEL] = PropTypes.func, _ThemeProvider$childC[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$childC);
	ThemeProvider.contextTypes = (_ThemeProvider$contex = {}, _ThemeProvider$contex[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _ThemeProvider$contex);
	
	// 
	
	// HACK for generating all static styles without needing to allocate
	// an empty execution context every single time...
	var STATIC_EXECUTION_CONTEXT = {};
	
	var _StyledComponent = (function (ComponentStyle, constructWithOptions) {
	  var identifiers = {};
	
	  /* We depend on components having unique IDs */
	  var generateId = function generateId(_displayName, parentComponentId) {
	    var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);
	
	    var componentId = void 0;
	
	    /**
	     * only fall back to hashing the component injection order if
	     * a proper displayName isn't provided by the babel plugin
	     */
	    if (!_displayName) {
	      var nr = (identifiers[displayName] || 0) + 1;
	      identifiers[displayName] = nr;
	
	      componentId = displayName + '-' + ComponentStyle.generateName(displayName + nr);
	    } else {
	      componentId = displayName + '-' + ComponentStyle.generateName(displayName);
	    }
	
	    return parentComponentId !== undefined ? parentComponentId + '-' + componentId : componentId;
	  };
	
	  var BaseStyledComponent = function (_Component) {
	    inherits(BaseStyledComponent, _Component);
	
	    function BaseStyledComponent() {
	      var _temp, _this, _ret;
	
	      classCallCheck(this, BaseStyledComponent);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.attrs = {}, _this.state = {
	        theme: null,
	        generatedClassName: ''
	      }, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }
	
	    BaseStyledComponent.prototype.unsubscribeFromContext = function unsubscribeFromContext() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };
	
	    BaseStyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props) {
	      var attrs = this.constructor.attrs;
	
	      var context = _extends({}, props, { theme: theme });
	      if (attrs === undefined) {
	        return context;
	      }
	
	      this.attrs = Object.keys(attrs).reduce(function (acc, key) {
	        var attr = attrs[key];
	        // eslint-disable-next-line no-param-reassign
	        acc[key] = typeof attr === 'function' ? attr(context) : attr;
	        return acc;
	      }, {});
	
	      return _extends({}, context, this.attrs);
	    };
	
	    BaseStyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
	      var _constructor = this.constructor,
	          attrs = _constructor.attrs,
	          componentStyle = _constructor.componentStyle,
	          warnTooManyClasses = _constructor.warnTooManyClasses;
	
	      var styleSheet = this.context[CONTEXT_KEY] || StyleSheet.master;
	
	      // staticaly styled-components don't need to build an execution context object,
	      // and shouldn't be increasing the number of class names
	      if (componentStyle.isStatic && attrs === undefined) {
	        return componentStyle.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, styleSheet);
	      } else {
	        var executionContext = this.buildExecutionContext(theme, props);
	        var className = componentStyle.generateAndInjectStyles(executionContext, styleSheet);
	
	        if (false) {
	          warnTooManyClasses(className);
	        }
	
	        return className;
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      var componentStyle = this.constructor.componentStyle;
	
	      var styledContext = this.context[CHANNEL_NEXT];
	
	      // If this is a staticaly-styled component, we don't need to the theme
	      // to generate or build styles.
	      if (componentStyle.isStatic) {
	        var generatedClassName = this.generateAndInjectStyles(STATIC_EXECUTION_CONTEXT, this.props);
	        this.setState({ generatedClassName: generatedClassName });
	        // If there is a theme in the context, subscribe to the event emitter. This
	        // is necessary due to pure components blocking context updates, this circumvents
	        // that by updating when an event is emitted
	      } else if (styledContext !== undefined) {
	        var subscribe = styledContext.subscribe;
	
	        this.unsubscribeId = subscribe(function (nextTheme) {
	          // This will be called once immediately
	          var theme = determineTheme(_this2.props, nextTheme, _this2.constructor.defaultProps);
	          var generatedClassName = _this2.generateAndInjectStyles(theme, _this2.props);
	
	          _this2.setState({ theme: theme, generatedClassName: generatedClassName });
	        });
	      } else {
	        // eslint-disable-next-line react/prop-types
	        var theme = this.props.theme || {};
	        var _generatedClassName = this.generateAndInjectStyles(theme, this.props);
	        this.setState({ theme: theme, generatedClassName: _generatedClassName });
	      }
	    };
	
	    BaseStyledComponent.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _this3 = this;
	
	      // If this is a statically-styled component, we don't need to listen to
	      // props changes to update styles
	      var componentStyle = this.constructor.componentStyle;
	
	      if (componentStyle.isStatic) {
	        return;
	      }
	
	      this.setState(function (oldState) {
	        var theme = determineTheme(nextProps, oldState.theme, _this3.constructor.defaultProps);
	        var generatedClassName = _this3.generateAndInjectStyles(theme, nextProps);
	
	        return { theme: theme, generatedClassName: generatedClassName };
	      });
	    };
	
	    BaseStyledComponent.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.unsubscribeFromContext();
	    };
	
	    BaseStyledComponent.prototype.render = function render() {
	      var _this4 = this;
	
	      // eslint-disable-next-line react/prop-types
	      var innerRef = this.props.innerRef;
	      var generatedClassName = this.state.generatedClassName;
	      var _constructor2 = this.constructor,
	          styledComponentId = _constructor2.styledComponentId,
	          target = _constructor2.target;
	
	
	      var isTargetTag = isTag(target);
	
	      var className = [
	      // eslint-disable-next-line react/prop-types
	      this.props.className, styledComponentId, this.attrs.className, generatedClassName].filter(Boolean).join(' ');
	
	      var baseProps = _extends({}, this.attrs, {
	        className: className
	      });
	
	      if (isStyledComponent(target)) {
	        baseProps.innerRef = innerRef;
	      } else {
	        baseProps.ref = innerRef;
	      }
	
	      var propsForElement = Object.keys(this.props).reduce(function (acc, propName) {
	        // Don't pass through non HTML tags through to HTML elements
	        // always omit innerRef
	        if (propName !== 'innerRef' && propName !== 'className' && (!isTargetTag || validAttr(propName))) {
	          // eslint-disable-next-line no-param-reassign
	          acc[propName] = _this4.props[propName];
	        }
	
	        return acc;
	      }, baseProps);
	
	      return React.createElement(target, propsForElement);
	    };
	
	    return BaseStyledComponent;
	  }(React.Component);
	
	  var createStyledComponent = function createStyledComponent(target, options, rules) {
	    var _StyledComponent$cont;
	
	    var _options$displayName = options.displayName,
	        displayName = _options$displayName === undefined ? isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')' : _options$displayName,
	        _options$componentId = options.componentId,
	        componentId = _options$componentId === undefined ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
	        _options$ParentCompon = options.ParentComponent,
	        ParentComponent = _options$ParentCompon === undefined ? BaseStyledComponent : _options$ParentCompon,
	        extendingRules = options.rules,
	        attrs = options.attrs;
	
	
	    var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : componentId;
	
	    var componentStyle = new ComponentStyle(extendingRules === undefined ? rules : extendingRules.concat(rules), attrs, styledComponentId);
	
	    var StyledComponent = function (_ParentComponent) {
	      inherits(StyledComponent, _ParentComponent);
	
	      function StyledComponent() {
	        classCallCheck(this, StyledComponent);
	        return possibleConstructorReturn(this, _ParentComponent.apply(this, arguments));
	      }
	
	      StyledComponent.withComponent = function withComponent(tag) {
	        var previousComponentId = options.componentId,
	            optionsToCopy = objectWithoutProperties(options, ['componentId']);
	
	
	        var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));
	
	        var newOptions = _extends({}, optionsToCopy, {
	          componentId: newComponentId,
	          ParentComponent: StyledComponent
	        });
	
	        return createStyledComponent(tag, newOptions, rules);
	      };
	
	      createClass(StyledComponent, null, [{
	        key: 'extend',
	        get: function get$$1() {
	          var rulesFromOptions = options.rules,
	              parentComponentId = options.componentId,
	              optionsToCopy = objectWithoutProperties(options, ['rules', 'componentId']);
	
	
	          var newRules = rulesFromOptions === undefined ? rules : rulesFromOptions.concat(rules);
	
	          var newOptions = _extends({}, optionsToCopy, {
	            rules: newRules,
	            parentComponentId: parentComponentId,
	            ParentComponent: StyledComponent
	          });
	
	          return constructWithOptions(createStyledComponent, target, newOptions);
	        }
	      }]);
	      return StyledComponent;
	    }(ParentComponent);
	
	    StyledComponent.contextTypes = (_StyledComponent$cont = {}, _StyledComponent$cont[CHANNEL] = PropTypes.func, _StyledComponent$cont[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _StyledComponent$cont[CONTEXT_KEY] = PropTypes.oneOfType([PropTypes.instanceOf(StyleSheet), PropTypes.instanceOf(ServerStyleSheet)]), _StyledComponent$cont);
	    StyledComponent.displayName = displayName;
	    StyledComponent.styledComponentId = styledComponentId;
	    StyledComponent.attrs = attrs;
	    StyledComponent.componentStyle = componentStyle;
	    StyledComponent.target = target;
	
	
	    if (false) {
	      StyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
	    }
	
	    return StyledComponent;
	  };
	
	  return createStyledComponent;
	});
	
	// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
	function murmurhash(str) {
	  var l = str.length | 0,
	      h = l | 0,
	      i = 0,
	      k;
	
	  while (l >= 4) {
	    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
	
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	    k ^= k >>> 24;
	    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	
	    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
	
	    l -= 4;
	    ++i;
	  }
	
	  switch (l) {
	    case 3:
	      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
	    case 2:
	      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
	    case 1:
	      h ^= str.charCodeAt(i) & 0xff;
	      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  }
	
	  h ^= h >>> 13;
	  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
	  h ^= h >>> 15;
	
	  return h >>> 0;
	}
	
	// 
	var areStylesCacheable = IS_BROWSER;
	
	var isStaticRules = function isStaticRules(rules, attrs) {
	  for (var i = 0; i < rules.length; i += 1) {
	    var rule = rules[i];
	
	    // recursive case
	    if (Array.isArray(rule) && !isStaticRules(rule)) {
	      return false;
	    } else if (typeof rule === 'function' && !isStyledComponent(rule)) {
	      // functions are allowed to be static if they're just being
	      // used to get the classname of a nested styled component
	      return false;
	    }
	  }
	
	  if (attrs !== undefined) {
	    // eslint-disable-next-line guard-for-in, no-restricted-syntax
	    for (var key in attrs) {
	      var value = attrs[key];
	      if (typeof value === 'function') {
	        return false;
	      }
	    }
	  }
	
	  return true;
	};
	
	var isHRMEnabled = typeof module !== 'undefined' && module.hot && ("production") !== 'production';
	
	/*
	 ComponentStyle is all the CSS-specific stuff, not
	 the React-specific stuff.
	 */
	var _ComponentStyle = (function (nameGenerator, flatten, stringifyRules) {
	  /* combines hashStr (murmurhash) and nameGenerator for convenience */
	  var generateRuleHash = function generateRuleHash(str) {
	    return nameGenerator(murmurhash(str));
	  };
	
	  var ComponentStyle = function () {
	    function ComponentStyle(rules, attrs, componentId) {
	      classCallCheck(this, ComponentStyle);
	
	      this.rules = rules;
	      this.isStatic = !isHRMEnabled && isStaticRules(rules, attrs);
	      this.componentId = componentId;
	
	      if (!StyleSheet.master.hasId(componentId)) {
	        var placeholder =  false ? ['.' + componentId + ' {}'] : [];
	
	        StyleSheet.master.deferredInject(componentId, placeholder);
	      }
	    }
	
	    /*
	     * Flattens a rule set into valid CSS
	     * Hashes it, wraps the whole chunk in a .hash1234 {}
	     * Returns the hash to be injected on render()
	     * */
	
	
	    ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
	      var isStatic = this.isStatic,
	          componentId = this.componentId,
	          lastClassName = this.lastClassName;
	
	      if (areStylesCacheable && isStatic && lastClassName !== undefined && styleSheet.hasNameForId(componentId, lastClassName)) {
	        return lastClassName;
	      }
	
	      var flatCSS = flatten(this.rules, executionContext);
	      var name = generateRuleHash(this.componentId + flatCSS.join(''));
	
	      if (!styleSheet.hasNameForId(componentId, name)) {
	        var css = stringifyRules(flatCSS, '.' + name);
	        styleSheet.inject(this.componentId, css, name);
	      }
	
	      this.lastClassName = name;
	      return name;
	    };
	
	    ComponentStyle.generateName = function generateName(str) {
	      return generateRuleHash(str);
	    };
	
	    return ComponentStyle;
	  }();
	
	  return ComponentStyle;
	});
	
	// 
	// Thanks to ReactDOMFactories for this handy list!
	
	var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
	
	// SVG
	'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
	
	// 
	var _styled = (function (styledComponent, constructWithOptions) {
	  var styled = function styled(tag) {
	    return constructWithOptions(styledComponent, tag);
	  };
	
	  // Shorthands for all valid HTML Elements
	  domElements.forEach(function (domElement) {
	    styled[domElement] = styled(domElement);
	  });
	
	  return styled;
	});
	
	// 
	var replaceWhitespace = function replaceWhitespace(str) {
	  return str.replace(/\s|\\n/g, '');
	};
	
	var _keyframes = (function (nameGenerator, stringifyRules, css) {
	  return function () {
	    var styleSheet = StyleSheet.master;
	    var rules = css.apply(undefined, arguments);
	    var name = nameGenerator(murmurhash(replaceWhitespace(JSON.stringify(rules))));
	    var id = 'sc-keyframes-' + name;
	
	    if (!styleSheet.hasNameForId(id, name)) {
	      styleSheet.inject(id, stringifyRules(rules, name, '@keyframes'), name);
	    }
	
	    return name;
	  };
	});
	
	// 
	var _injectGlobal = (function (stringifyRules, css) {
	  var injectGlobal = function injectGlobal() {
	    var styleSheet = StyleSheet.master;
	    var rules = css.apply(undefined, arguments);
	    var hash = murmurhash(JSON.stringify(rules));
	    var id = 'sc-global-' + hash;
	
	    if (!styleSheet.hasId(id)) {
	      styleSheet.inject(id, stringifyRules(rules));
	    }
	  };
	
	  return injectGlobal;
	});
	
	// 
	var _constructWithOptions = (function (css) {
	  var constructWithOptions = function constructWithOptions(componentConstructor, tag) {
	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
	    if (!reactIs.isValidElementType(tag)) {
	      throw new Error( false ? 'Cannot create styled-component for component: ' + String(tag) : '');
	    }
	
	    /* This is callable directly as a template function */
	    // $FlowFixMe: Not typed to avoid destructuring arguments
	    var templateFunction = function templateFunction() {
	      return componentConstructor(tag, options, css.apply(undefined, arguments));
	    };
	
	    /* If config methods are called, wrap up a new template function and merge options */
	    templateFunction.withConfig = function (config) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
	    };
	    templateFunction.attrs = function (attrs) {
	      return constructWithOptions(componentConstructor, tag, _extends({}, options, {
	        attrs: _extends({}, options.attrs || {}, attrs)
	      }));
	    };
	
	    return templateFunction;
	  };
	
	  return constructWithOptions;
	});
	
	// 
	/* globals ReactClass */
	
	var wrapWithTheme = function wrapWithTheme(Component$$1) {
	  var _WithTheme$contextTyp;
	
	  var componentName = Component$$1.displayName || Component$$1.name || 'Component';
	  var isStatelessFunctionalComponent = typeof Component$$1 === 'function' && !(Component$$1.prototype && 'isReactComponent' in Component$$1.prototype);
	
	  // NOTE: We can't pass a ref to a stateless functional component
	  var shouldSetInnerRef = isStyledComponent(Component$$1) || isStatelessFunctionalComponent;
	
	  var WithTheme = function (_React$Component) {
	    inherits(WithTheme, _React$Component);
	
	    function WithTheme() {
	      var _temp, _this, _ret;
	
	      classCallCheck(this, WithTheme);
	
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	
	      return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {}, _this.unsubscribeId = -1, _temp), possibleConstructorReturn(_this, _ret);
	    }
	
	    // NOTE: This is so that isStyledComponent passes for the innerRef unwrapping
	
	
	    WithTheme.prototype.componentWillMount = function componentWillMount() {
	      var _this2 = this;
	
	      var defaultProps = this.constructor.defaultProps;
	
	      var styledContext = this.context[CHANNEL_NEXT];
	      var themeProp = determineTheme(this.props, undefined, defaultProps);
	      if (styledContext === undefined && themeProp === undefined && ("production") !== 'production') {
	        // eslint-disable-next-line no-console
	        console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps');
	      } else if (styledContext === undefined && themeProp !== undefined) {
	        this.setState({ theme: themeProp });
	      } else {
	        var subscribe = styledContext.subscribe;
	
	        this.unsubscribeId = subscribe(function (nextTheme) {
	          var theme = determineTheme(_this2.props, nextTheme, defaultProps);
	          _this2.setState({ theme: theme });
	        });
	      }
	    };
	
	    WithTheme.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var defaultProps = this.constructor.defaultProps;
	
	      this.setState(function (oldState) {
	        var theme = determineTheme(nextProps, oldState.theme, defaultProps);
	
	        return { theme: theme };
	      });
	    };
	
	    WithTheme.prototype.componentWillUnmount = function componentWillUnmount() {
	      if (this.unsubscribeId !== -1) {
	        this.context[CHANNEL_NEXT].unsubscribe(this.unsubscribeId);
	      }
	    };
	
	    WithTheme.prototype.render = function render() {
	      var props = _extends({
	        theme: this.state.theme
	      }, this.props);
	
	      if (!shouldSetInnerRef) {
	        props.ref = props.innerRef;
	        delete props.innerRef;
	      }
	
	      return React__default.createElement(Component$$1, props);
	    };
	
	    return WithTheme;
	  }(React__default.Component);
	
	  WithTheme.displayName = 'WithTheme(' + componentName + ')';
	  WithTheme.styledComponentId = 'withTheme';
	  WithTheme.contextTypes = (_WithTheme$contextTyp = {}, _WithTheme$contextTyp[CHANNEL] = PropTypes.func, _WithTheme$contextTyp[CHANNEL_NEXT] = CONTEXT_CHANNEL_SHAPE, _WithTheme$contextTyp);
	
	
	  return hoistStatics(WithTheme, Component$$1);
	};
	
	// 
	
	/* eslint-disable */
	var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
	  StyleSheet: StyleSheet
	};
	
	// 
	
	/* Import singletons */
	/* Import singleton constructors */
	/* Import components */
	/* Import Higher Order Components */
	/* Warning if you've imported this file on React Native */
	if (false) {
	  // eslint-disable-next-line no-console
	  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
	}
	
	/* Warning if there are several instances of styled-components */
	if (false) {
	  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;
	
	  if (window['__styled-components-init__'] === 1) {
	    // eslint-disable-next-line no-console
	    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes you application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
	  }
	
	  window['__styled-components-init__'] += 1;
	}
	
	/* Instantiate singletons */
	var ComponentStyle = _ComponentStyle(generateAlphabeticName, flatten, stringifyRules);
	var constructWithOptions = _constructWithOptions(css);
	var StyledComponent = _StyledComponent(ComponentStyle, constructWithOptions);
	
	/* Instantiate exported singletons */
	var keyframes = _keyframes(generateAlphabeticName, stringifyRules, css);
	var injectGlobal = _injectGlobal(stringifyRules, css);
	var styled = _styled(StyledComponent, constructWithOptions);
	
	exports['default'] = styled;
	exports.css = css;
	exports.keyframes = keyframes;
	exports.injectGlobal = injectGlobal;
	exports.isStyledComponent = isStyledComponent;
	exports.consolidateStreamedStyles = consolidateStreamedStyles;
	exports.ThemeProvider = ThemeProvider;
	exports.withTheme = wrapWithTheme;
	exports.ServerStyleSheet = ServerStyleSheet;
	exports.StyleSheetManager = StyleSheetManager;
	exports.__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS;
	//# sourceMappingURL=styled-components.browser.cjs.js.map
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(4)(module)))

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {(function (factory) {
		 true ? (module['exports'] = factory()) :
			typeof define === 'function' && define['amd'] ? define(factory()) :
				(window['stylisRuleSheet'] = factory())
	}(function () {
	
		'use strict'
	
		return function (insertRule) {
			var delimiter = '/*|*/'
			var needle = delimiter+'}'
	
			function toSheet (block) {
				if (block)
					try {
						insertRule(block + '}')
					} catch (e) {}
			}
	
			return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
				switch (context) {
					// property
					case 1:
						// @import
						if (depth === 0 && content.charCodeAt(0) === 64)
							return insertRule(content+';'), ''
						break
					// selector
					case 2:
						if (ns === 0)
							return content + delimiter
						break
					// at-rule
					case 3:
						switch (ns) {
							// @font-face, @page
							case 102:
							case 112:
								return insertRule(selectors[0]+content), ''
							default:
								return content + (at === 0 ? delimiter : '')
						}
					case -2:
						content.split(needle).forEach(toSheet)
				}
			}
		}
	}))
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*
	 *          __        ___
	 *    _____/ /___  __/ (_)____
	 *   / ___/ __/ / / / / / ___/
	 *  (__  ) /_/ /_/ / / (__  )
	 * /____/\__/\__, /_/_/____/
	 *          /____/
	 *
	 * light - weight css preprocessor @licence MIT
	 */
	(function (factory) {/* eslint-disable */
		 true ? (module['exports'] = factory(null)) :
			typeof define === 'function' && define['amd'] ? define(factory(null)) :
				(window['stylis'] = factory(null))
	}(/** @param {*=} options */function factory (options) {/* eslint-disable */
	
		'use strict'
	
		/**
		 * Notes
		 *
		 * The ['<method name>'] pattern is used to support closure compiler
		 * the jsdoc signatures are also used to the same effect
		 *
		 * ----
		 *
		 * int + int + int === n4 [faster]
		 *
		 * vs
		 *
		 * int === n1 && int === n2 && int === n3
		 *
		 * ----
		 *
		 * switch (int) { case ints...} [faster]
		 *
		 * vs
		 *
		 * if (int == 1 && int === 2 ...)
		 *
		 * ----
		 *
		 * The (first*n1 + second*n2 + third*n3) format used in the property parser
		 * is a simple way to hash the sequence of characters
		 * taking into account the index they occur in
		 * since any number of 3 character sequences could produce duplicates.
		 *
		 * On the other hand sequences that are directly tied to the index of the character
		 * resolve a far more accurate measure, it's also faster
		 * to evaluate one condition in a switch statement
		 * than three in an if statement regardless of the added math.
		 *
		 * This allows the vendor prefixer to be both small and fast.
		 */
	
		var nullptn = /^\0+/g /* matches leading null characters */
		var formatptn = /[\0\r\f]/g /* matches new line, null and formfeed characters */
		var colonptn = /: */g /* splits animation rules */
		var cursorptn = /zoo|gra/ /* assert cursor varient */
		var transformptn = /([,: ])(transform)/g /* vendor prefix transform, older webkit */
		var animationptn = /,+\s*(?![^(]*[)])/g /* splits multiple shorthand notation animations */
		var propertiesptn = / +\s*(?![^(]*[)])/g /* animation properties */
		var elementptn = / *[\0] */g /* selector elements */
		var selectorptn = /,\r+?/g /* splits selectors */
		var andptn = /([\t\r\n ])*\f?&/g /* match & */
		var escapeptn = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g /* matches :global(.*) */
		var invalidptn = /\W+/g /* removes invalid characters from keyframes */
		var keyframeptn = /@(k\w+)\s*(\S*)\s*/ /* matches @keyframes $1 */
		var plcholdrptn = /::(place)/g /* match ::placeholder varient */
		var readonlyptn = /:(read-only)/g /* match :read-only varient */
		var beforeptn = /\s+(?=[{\];=:>])/g /* matches \s before ] ; = : */
		var afterptn = /([[}=:>])\s+/g /* matches \s after characters [ } = : */
		var tailptn = /(\{[^{]+?);(?=\})/g /* matches tail semi-colons ;} */
		var whiteptn = /\s{2,}/g /* matches repeating whitespace */
		var pseudoptn = /([^\(])(:+) */g /* pseudo element */
		var writingptn = /[svh]\w+-[tblr]{2}/ /* match writing mode property values */
		var gradientptn = /([\w-]+t\()/g /* match *gradient property */
		var supportsptn = /\(\s*(.*)\s*\)/g /* match supports (groups) */
		var propertyptn = /([\s\S]*?);/g /* match properties leading semicolon */
		var selfptn = /-self|flex-/g /* match flex- and -self in align-self: flex-*; */
		var pseudofmt = /[^]*?(:[rp][el]a[\w-]+)[^]*/ /* extrats :readonly or :placholder from selector */
		var trimptn = /[ \t]+$/ /* match tail whitspace */
		var dimensionptn = /stretch|:\s*\w+\-(?:conte|avail)/ /* match max/min/fit-content, fill-available
	
		/* vendors */
		var webkit = '-webkit-'
		var moz = '-moz-'
		var ms = '-ms-'
	
		/* character codes */
		var SEMICOLON = 59 /* ; */
		var CLOSEBRACES = 125 /* } */
		var OPENBRACES = 123 /* { */
		var OPENPARENTHESES = 40 /* ( */
		var CLOSEPARENTHESES = 41 /* ) */
		var OPENBRACKET = 91 /* [ */
		var CLOSEBRACKET = 93 /* ] */
		var NEWLINE = 10 /* \n */
		var CARRIAGE = 13 /* \r */
		var TAB = 9 /* \t */
		var AT = 64 /* @ */
		var SPACE = 32 /*   */
		var AND = 38 /* & */
		var DASH = 45 /* - */
		var UNDERSCORE = 95 /* _ */
		var STAR = 42 /* * */
		var COMMA = 44 /* , */
		var COLON = 58 /* : */
		var SINGLEQUOTE = 39 /* ' */
		var DOUBLEQUOTE = 34 /* " */
		var FOWARDSLASH = 47 /* / */
		var GREATERTHAN = 62 /* > */
		var PLUS = 43 /* + */
		var TILDE = 126 /* ~ */
		var NULL = 0 /* \0 */
		var FORMFEED = 12 /* \f */
		var VERTICALTAB = 11 /* \v */
	
		/* special identifiers */
		var KEYFRAME = 107 /* k */
		var MEDIA = 109 /* m */
		var SUPPORTS = 115 /* s */
		var PLACEHOLDER = 112 /* p */
		var READONLY = 111 /* o */
		var IMPORT = 169 /* <at>i */
		var CHARSET = 163 /* <at>c */
		var DOCUMENT = 100 /* <at>d */
		var PAGE = 112 /* <at>p */
	
		var column = 1 /* current column */
		var line = 1 /* current line numebr */
		var pattern = 0 /* :pattern */
	
		var cascade = 1 /* #id h1 h2 vs h1#id h2#id  */
		var prefix = 1 /* vendor prefix */
		var escape = 1 /* escape :global() pattern */
		var compress = 0 /* compress output */
		var semicolon = 0 /* no/semicolon option */
		var preserve = 0 /* preserve empty selectors */
	
		/* empty reference */
		var array = []
	
		/* plugins */
		var plugins = []
		var plugged = 0
		var should = null
	
		/* plugin context */
		var POSTS = -2
		var PREPS = -1
		var UNKWN = 0
		var PROPS = 1
		var BLCKS = 2
		var ATRUL = 3
	
		/* plugin newline context */
		var unkwn = 0
	
		/* keyframe animation */
		var keyed = 1
		var key = ''
	
		/* selector namespace */
		var nscopealt = ''
		var nscope = ''
	
		/**
		 * Compile
		 *
		 * @param {Array<string>} parent
		 * @param {Array<string>} current
		 * @param {string} body
		 * @param {number} id
		 * @param {number} depth
		 * @return {string}
		 */
		function compile (parent, current, body, id, depth) {
			var bracket = 0 /* brackets [] */
			var comment = 0 /* comments /* // or /* */
			var parentheses = 0 /* functions () */
			var quote = 0 /* quotes '', "" */
	
			var first = 0 /* first character code */
			var second = 0 /* second character code */
			var code = 0 /* current character code */
			var tail = 0 /* previous character code */
			var trail = 0 /* character before previous code */
			var peak = 0 /* previous non-whitespace code */
	
			var counter = 0 /* count sequence termination */
			var context = 0 /* track current context */
			var atrule = 0 /* track @at-rule context */
			var pseudo = 0 /* track pseudo token index */
			var caret = 0 /* current character index */
			var format = 0 /* control character formating context */
			var insert = 0 /* auto semicolon insertion */
			var invert = 0 /* inverted selector pattern */
			var length = 0 /* generic length address */
			var eof = body.length /* end of file(length) */
			var eol = eof - 1 /* end of file(characters) */
	
			var char = '' /* current character */
			var chars = '' /* current buffer of characters */
			var child = '' /* next buffer of characters */
			var out = '' /* compiled body */
			var children = '' /* compiled children */
			var flat = '' /* compiled leafs */
			var selector /* generic selector address */
			var result /* generic address */
	
			// ...build body
			while (caret < eof) {
				code = body.charCodeAt(caret)
	
				// eof varient
				if (caret === eol) {
					// last character + noop context, add synthetic padding for noop context to terminate
					if (comment + quote + parentheses + bracket !== 0) {
						if (comment !== 0) {
							code = comment === FOWARDSLASH ? NEWLINE : FOWARDSLASH
						}
	
						quote = parentheses = bracket = 0
						eof++
						eol++
					}
				}
	
				if (comment + quote + parentheses + bracket === 0) {
					// eof varient
					if (caret === eol) {
						if (format > 0) {
							chars = chars.replace(formatptn, '')
						}
	
						if (chars.trim().length > 0) {
							switch (code) {
								case SPACE:
								case TAB:
								case SEMICOLON:
								case CARRIAGE:
								case NEWLINE: {
									break
								}
								default: {
									chars += body.charAt(caret)
								}
							}
	
							code = SEMICOLON
						}
					}
	
					// auto semicolon insertion
					if (insert === 1) {
						switch (code) {
							// false flags
							case OPENBRACES:
							case CLOSEBRACES:
							case SEMICOLON:
							case DOUBLEQUOTE:
							case SINGLEQUOTE:
							case OPENPARENTHESES:
							case CLOSEPARENTHESES:
							case COMMA: {
								insert = 0
							}
							// ignore
							case TAB:
							case CARRIAGE:
							case NEWLINE:
							case SPACE: {
								break
							}
							// valid
							default: {
								insert = 0
								length = caret
								first = code
								caret--
								code = SEMICOLON
	
								while (length < eof) {
									switch (body.charCodeAt(length++)) {
										case NEWLINE:
										case CARRIAGE:
										case SEMICOLON: {
											++caret
											code = first
											length = eof
											break
										}
										case COLON: {
											if (format > 0) {
												++caret
												code = first
											}
										}
										case OPENBRACES: {
											length = eof
										}
									}
								}
							}
						}
					}
	
					// token varient
					switch (code) {
						case OPENBRACES: {
							chars = chars.trim()
							first = chars.charCodeAt(0)
							counter = 1
							length = ++caret
	
							while (caret < eof) {
								code = body.charCodeAt(caret)
	
								switch (code) {
									case OPENBRACES: {
										counter++
										break
									}
									case CLOSEBRACES: {
										counter--
										break
									}
								}
	
								if (counter === 0) {
									break
								}
	
								caret++
							}
	
							child = body.substring(length, caret)
	
							if (first === NULL) {
								first = (chars = chars.replace(nullptn, '').trim()).charCodeAt(0)
							}
	
							switch (first) {
								// @at-rule
								case AT: {
									if (format > 0) {
										chars = chars.replace(formatptn, '')
									}
	
									second = chars.charCodeAt(1)
	
									switch (second) {
										case DOCUMENT:
										case MEDIA:
										case SUPPORTS:
										case DASH: {
											selector = current
											break
										}
										default: {
											selector = array
										}
									}
	
									child = compile(current, selector, child, second, depth+1)
									length = child.length
	
									// preserve empty @at-rule
									if (preserve > 0 && length === 0) {
										length = chars.length
									}
	
									// execute plugins, @at-rule context
									if (plugged > 0) {
										selector = select(array, chars, invert)
										result = proxy(ATRUL, child, selector, current, line, column, length, second, depth, id)
										chars = selector.join('')
	
										if (result !== void 0) {
											if ((length = (child = result.trim()).length) === 0) {
												second = 0
												child = ''
											}
										}
									}
	
									if (length > 0) {
										switch (second) {
											case SUPPORTS: {
												chars = chars.replace(supportsptn, supports)
											}
											case DOCUMENT:
											case MEDIA:
											case DASH: {
												child = chars + '{' + child + '}'
												break
											}
											case KEYFRAME: {
												chars = chars.replace(keyframeptn, '$1 $2' + (keyed > 0 ? key : ''))
												child = chars + '{' + child + '}'
	
												if (prefix === 1 || (prefix === 2 && vendor('@'+child, 3))) {
													child = '@' + webkit + child + '@' + child
												} else {
													child = '@' + child
												}
												break
											}
											default: {
												child = chars + child
	
												if (id === PAGE) {
													child = (out += child, '')
												}
											}
										}
									} else {
										child = ''
									}
	
									break
								}
								// selector
								default: {
									child = compile(current, select(current, chars, invert), child, id, depth+1)
								}
							}
	
							children += child
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							atrule = 0
							chars = ''
							child = ''
							code = body.charCodeAt(++caret)
							break
						}
						case CLOSEBRACES:
						case SEMICOLON: {
							chars = (format > 0 ? chars.replace(formatptn, '') : chars).trim()
	
							if ((length = chars.length) > 1) {
								// monkey-patch missing colon
								if (pseudo === 0) {
									first = chars.charCodeAt(0)
	
									// first character is a letter or dash, buffer has a space character
									if ((first === DASH || first > 96 && first < 123)) {
										length = (chars = chars.replace(' ', ':')).length
									}
								}
	
								// execute plugins, property context
								if (plugged > 0) {
									if ((result = proxy(PROPS, chars, current, parent, line, column, out.length, id, depth, id)) !== void 0) {
										if ((length = (chars = result.trim()).length) === 0) {
											chars = '\0\0'
										}
									}
								}
	
								first = chars.charCodeAt(0)
								second = chars.charCodeAt(1)
	
								switch (first + second) {
									case NULL: {
										break
									}
									case IMPORT:
									case CHARSET: {
										flat += chars + body.charAt(caret)
										break
									}
									default: {
										if (chars.charCodeAt(length-1) === COLON)
											break
	
										out += property(chars, first, second, chars.charCodeAt(2))
									}
								}
							}
	
							// reset
							context = 0
							insert = 0
							pseudo = 0
							format = 0
							invert = 0
							chars = ''
							code = body.charCodeAt(++caret)
							break
						}
					}
				}
	
				// parse characters
				switch (code) {
					case CARRIAGE:
					case NEWLINE: {
						// auto insert semicolon
						if (comment + quote + parentheses + bracket + semicolon === 0) {
							// valid non-whitespace characters that
							// may precede a newline
							switch (peak) {
								case CLOSEPARENTHESES:
								case SINGLEQUOTE:
								case DOUBLEQUOTE:
								case AT:
								case TILDE:
								case GREATERTHAN:
								case STAR:
								case PLUS:
								case FOWARDSLASH:
								case DASH:
								case COLON:
								case COMMA:
								case SEMICOLON:
								case OPENBRACES:
								case CLOSEBRACES: {
									break
								}
								default: {
									// current buffer has a colon
									if (pseudo > 0) {
										insert = 1
									}
								}
							}
						}
	
						// terminate line comment
						if (comment === FOWARDSLASH) {
							comment = 0
						} else if (cascade + context === 0) {
							format = 1
							chars += '\0'
						}
	
						// execute plugins, newline context
						if (plugged * unkwn > 0) {
							proxy(UNKWN, chars, current, parent, line, column, out.length, id, depth, id)
						}
	
						// next line, reset column position
						column = 1
						line++
						break
					}
					case SEMICOLON:
					case CLOSEBRACES: {
						if (comment + quote + parentheses + bracket === 0) {
							column++
							break
						}
					}
					default: {
						// increment column position
						column++
	
						// current character
						char = body.charAt(caret)
	
						// remove comments, escape functions, strings, attributes and prepare selectors
						switch (code) {
							case TAB:
							case SPACE: {
								if (quote + bracket + comment === 0) {
									switch (tail) {
										case COMMA:
										case COLON:
										case TAB:
										case SPACE: {
											char = ''
											break
										}
										default: {
											if (code !== SPACE) {
												char = ' '
											}
										}
									}
								}
								break
							}
							// escape breaking control characters
							case NULL: {
								char = '\\0'
								break
							}
							case FORMFEED: {
								char = '\\f'
								break
							}
							case VERTICALTAB: {
								char = '\\v'
								break
							}
							// &
							case AND: {
								// inverted selector pattern i.e html &
								if (quote + comment + bracket === 0 && cascade > 0) {
									invert = 1
									format = 1
									char = '\f' + char
								}
								break
							}
							// ::p<l>aceholder, l
							// :read-on<l>y, l
							case 108: {
								if (quote + comment + bracket + pattern === 0 && pseudo > 0) {
									switch (caret - pseudo) {
										// ::placeholder
										case 2: {
											if (tail === PLACEHOLDER && body.charCodeAt(caret-3) === COLON) {
												pattern = tail
											}
										}
										// :read-only
										case 8: {
											if (trail === READONLY) {
												pattern = trail
											}
										}
									}
								}
								break
							}
							// :<pattern>
							case COLON: {
								if (quote + comment + bracket === 0) {
									pseudo = caret
								}
								break
							}
							// selectors
							case COMMA: {
								if (comment + parentheses + quote + bracket === 0) {
									format = 1
									char += '\r'
								}
								break
							}
							// quotes
							case DOUBLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							case SINGLEQUOTE: {
								if (comment === 0) {
									quote = quote === code ? 0 : (quote === 0 ? code : quote)
								}
								break
							}
							// attributes
							case OPENBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket++
								}
								break
							}
							case CLOSEBRACKET: {
								if (quote + comment + parentheses === 0) {
									bracket--
								}
								break
							}
							// functions
							case CLOSEPARENTHESES: {
								if (quote + comment + bracket === 0) {
									parentheses--
								}
								break
							}
							case OPENPARENTHESES: {
								if (quote + comment + bracket === 0) {
									if (context === 0) {
										switch (tail*2 + trail*3) {
											// :matches
											case 533: {
												break
											}
											// :global, :not, :nth-child etc...
											default: {
												counter = 0
												context = 1
											}
										}
									}
	
									parentheses++
								}
								break
							}
							case AT: {
								if (comment + parentheses + quote + bracket + pseudo + atrule === 0) {
									atrule = 1
								}
								break
							}
							// block/line comments
							case STAR:
							case FOWARDSLASH: {
								if (quote + bracket + parentheses > 0) {
									break
								}
	
								switch (comment) {
									// initialize line/block comment context
									case 0: {
										switch (code*2 + body.charCodeAt(caret+1)*3) {
											// //
											case 235: {
												comment = FOWARDSLASH
												break
											}
											// /*
											case 220: {
												length = caret
												comment = STAR
												break
											}
										}
										break
									}
									// end block comment context
									case STAR: {
										if (code === FOWARDSLASH && tail === STAR) {
											// /*<!> ... */, !
											if (body.charCodeAt(length+2) === 33) {
												out += body.substring(length, caret+1)
											}
											char = ''
											comment = 0
										}
									}
								}
							}
						}
	
						// ignore comment blocks
						if (comment === 0) {
							// aggressive isolation mode, divide each individual selector
							// including selectors in :not function but excluding selectors in :global function
							if (cascade + quote + bracket + atrule === 0 && id !== KEYFRAME && code !== SEMICOLON) {
								switch (code) {
									case COMMA:
									case TILDE:
									case GREATERTHAN:
									case PLUS:
									case CLOSEPARENTHESES:
									case OPENPARENTHESES: {
										if (context === 0) {
											// outside of an isolated context i.e nth-child(<...>)
											switch (tail) {
												case TAB:
												case SPACE:
												case NEWLINE:
												case CARRIAGE: {
													char = char + '\0'
													break
												}
												default: {
													char = '\0' + char + (code === COMMA ? '' : '\0')
												}
											}
											format = 1
										} else {
											// within an isolated context, sleep untill it's terminated
											switch (code) {
												case OPENPARENTHESES: {
													context = ++counter
													break
												}
												case CLOSEPARENTHESES: {
													if ((context = --counter) === 0) {
														format = 1
														char += '\0'
													}
													break
												}
											}
										}
										break
									}
									case TAB:
									case SPACE: {
										switch (tail) {
											case NULL:
											case OPENBRACES:
											case CLOSEBRACES:
											case SEMICOLON:
											case COMMA:
											case FORMFEED:
											case TAB:
											case SPACE:
											case NEWLINE:
											case CARRIAGE: {
												break
											}
											default: {
												// ignore in isolated contexts
												if (context === 0) {
													format = 1
													char += '\0'
												}
											}
										}
									}
								}
							}
	
							// concat buffer of characters
							chars += char
	
							// previous non-whitespace character code
							if (code !== SPACE && code !== TAB) {
								peak = code
							}
						}
					}
				}
	
				// tail character codes
				trail = tail
				tail = code
	
				// visit every character
				caret++
			}
	
			length = out.length
	
			// preserve empty selector
	 		if (preserve > 0) {
	 			if (length === 0 && children.length === 0 && (current[0].length === 0) === false) {
	 				if (id !== MEDIA || (current.length === 1 && (cascade > 0 ? nscopealt : nscope) === current[0])) {
						length = current.join(',').length + 2
	 				}
	 			}
			}
	
			if (length > 0) {
				// cascade isolation mode?
				selector = cascade === 0 && id !== KEYFRAME ? isolate(current) : current
	
				// execute plugins, block context
				if (plugged > 0) {
					result = proxy(BLCKS, out, selector, parent, line, column, length, id, depth, id)
	
					if (result !== void 0 && (out = result).length === 0) {
						return flat + out + children
					}
				}
	
				out = selector.join(',') + '{' + out + '}'
	
				if (prefix*pattern !== 0) {
					if (prefix === 2 && !vendor(out, 2))
						pattern = 0
	
					switch (pattern) {
						// ::read-only
						case READONLY: {
							out = out.replace(readonlyptn, ':'+moz+'$1')+out
							break
						}
						// ::placeholder
						case PLACEHOLDER: {
							out = (
								out.replace(plcholdrptn, '::' + webkit + 'input-$1') +
								out.replace(plcholdrptn, '::' + moz + '$1') +
								out.replace(plcholdrptn, ':' + ms + 'input-$1') + out
							)
							break
						}
					}
	
					pattern = 0
				}
			}
	
			return flat + out + children
		}
	
		/**
		 * Select
		 *
		 * @param {Array<string>} parent
		 * @param {string} current
		 * @param {number} invert
		 * @return {Array<string>}
		 */
		function select (parent, current, invert) {
			var selectors = current.trim().split(selectorptn)
			var out = selectors
	
			var length = selectors.length
			var l = parent.length
	
			switch (l) {
				// 0-1 parent selectors
				case 0:
				case 1: {
					for (var i = 0, selector = l === 0 ? '' : parent[0] + ' '; i < length; ++i) {
						out[i] = scope(selector, out[i], invert, l).trim()
					}
					break
				}
				// >2 parent selectors, nested
				default: {
					for (var i = 0, j = 0, out = []; i < length; ++i) {
						for (var k = 0; k < l; ++k) {
							out[j++] = scope(parent[k] + ' ', selectors[i], invert, l).trim()
						}
					}
				}
			}
	
			return out
		}
	
		/**
		 * Scope
		 *
		 * @param {string} parent
		 * @param {string} current
		 * @param {number} invert
		 * @param {number} level
		 * @return {string}
		 */
		function scope (parent, current, invert, level) {
			var selector = current
			var code = selector.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (selector = selector.trim()).charCodeAt(0)
			}
	
			switch (code) {
				// &
				case AND: {
					switch (cascade + level) {
						case 0:
						case 1: {
							if (parent.trim().length === 0) {
								break
							}
						}
						default: {
							return selector.replace(andptn, '$1'+parent.trim())
						}
					}
					break
				}
				// :
				case COLON: {
					switch (selector.charCodeAt(1)) {
						// g in :global
						case 103: {
							if (escape > 0 && cascade > 0) {
								return selector.replace(escapeptn, '$1').replace(andptn, '$1'+nscope)
							}
							break
						}
						default: {
							// :hover
							return parent.trim() + selector.replace(andptn, '$1'+parent.trim())
						}
					}
				}
				default: {
					// html &
					if (invert*cascade > 0 && selector.indexOf('\f') > 0) {
						return selector.replace(andptn, (parent.charCodeAt(0) === COLON ? '' : '$1')+parent.trim())
					}
				}
			}
	
			return parent + selector
		}
	
		/**
		 * Property
		 *
		 * @param {string} input
		 * @param {number} first
		 * @param {number} second
		 * @param {number} third
		 * @return {string}
		 */
		function property (input, first, second, third) {
			var index = 0
			var out = input + ';'
			var hash = (first*2) + (second*3) + (third*4)
			var cache
	
			// animation: a, n, i characters
			if (hash === 944) {
				return animation(out)
			} else if (prefix === 0 || (prefix === 2 && !vendor(out, 1))) {
				return out
			}
	
			// vendor prefix
			switch (hash) {
				// text-decoration/text-size-adjust/text-shadow/text-align/text-transform: t, e, x
				case 1015: {
					// text-shadow/text-align/text-transform, a
					return out.charCodeAt(10) === 97 ? webkit + out + out : out
				}
				// filter/fill f, i, l
				case 951: {
					// filter, t
					return out.charCodeAt(3) === 116 ? webkit + out + out : out
				}
				// color/column, c, o, l
				case 963: {
					// column, n
					return out.charCodeAt(5) === 110 ? webkit + out + out : out
				}
				// box-decoration-break, b, o, x
				case 1009: {
					if (out.charCodeAt(4) !== 100) {
						break
					}
				}
				// mask, m, a, s
				// clip-path, c, l, i
				case 969:
				case 942: {
					return webkit + out + out
				}
				// appearance: a, p, p
				case 978: {
					return webkit + out + moz + out + out
				}
				// hyphens: h, y, p
				// user-select: u, s, e
				case 1019:
				case 983: {
					return webkit + out + moz + out + ms + out + out
				}
				// background/backface-visibility, b, a, c
				case 883: {
					// backface-visibility, -
					return out.charCodeAt(8) === DASH ? webkit + out + out : out
				}
				// flex: f, l, e
				case 932: {
					if (out.charCodeAt(4) === DASH) {
						switch (out.charCodeAt(5)) {
							// flex-grow, g
							case 103: {
								return webkit + 'box-' + out.replace('-grow', '') + webkit + out + ms + out.replace('grow', 'positive') + out
							}
							// flex-shrink, s
							case 115: {
								return webkit + out + ms + out.replace('shrink', 'negative') + out
							}
							// flex-basis, b
							case 98: {
								return webkit + out + ms + out.replace('basis', 'preferred-size') + out
							}
						}
					}
	
					return webkit + out + ms + out + out
				}
				// order: o, r, d
				case 964: {
					return webkit + out + ms + 'flex' + '-' + out + out
				}
				// justify-items/justify-content, j, u, s
				case 1023: {
					// justify-content, c
					if (out.charCodeAt(8) !== 99) {
						break
					}
	
					cache = out.substring(out.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify')
					return webkit + 'box-pack' + cache + webkit + out + ms + 'flex-pack' + cache + out
				}
				// cursor, c, u, r
				case 1005: {
					return cursorptn.test(out) ? out.replace(colonptn, ':' + webkit) + out.replace(colonptn, ':' + moz) + out : out
				}
				// writing-mode, w, r, i
				case 1000: {
					cache = out.substring(13).trim()
					index = cache.indexOf('-') + 1
	
					switch (cache.charCodeAt(0)+cache.charCodeAt(index)) {
						// vertical-lr
						case 226: {
							cache = out.replace(writingptn, 'tb')
							break
						}
						// vertical-rl
						case 232: {
							cache = out.replace(writingptn, 'tb-rl')
							break
						}
						// horizontal-tb
						case 220: {
							cache = out.replace(writingptn, 'lr')
							break
						}
						default: {
							return out
						}
					}
	
					return webkit + out + ms + cache + out
				}
				// position: sticky
				case 1017: {
					if (out.indexOf('sticky', 9) === -1) {
						return out
					}
				}
				// display(flex/inline-flex/inline-box): d, i, s
				case 975: {
					index = (out = input).length - 10
					cache = (out.charCodeAt(index) === 33 ? out.substring(0, index) : out).substring(input.indexOf(':', 7) + 1).trim()
	
					switch (hash = cache.charCodeAt(0) + (cache.charCodeAt(7)|0)) {
						// inline-
						case 203: {
							// inline-box
							if (cache.charCodeAt(8) < 111) {
								break
							}
						}
						// inline-box/sticky
						case 115: {
							out = out.replace(cache, webkit+cache)+';'+out
							break
						}
						// inline-flex
						// flex
						case 207:
						case 102: {
							out = (
								out.replace(cache, webkit+(hash > 102 ? 'inline-' : '')+'box')+';'+
								out.replace(cache, webkit+cache)+';'+
								out.replace(cache, ms+cache+'box')+';'+
								out
							)
						}
					}
	
					return out + ';'
				}
				// align-items, align-center, align-self: a, l, i, -
				case 938: {
					if (out.charCodeAt(5) === DASH) {
						switch (out.charCodeAt(6)) {
							// align-items, i
							case 105: {
								cache = out.replace('-items', '')
								return webkit + out + webkit + 'box-' + cache + ms + 'flex-' + cache + out
							}
							// align-self, s
							case 115: {
								return webkit + out + ms + 'flex-item-' + out.replace(selfptn, '') + out
							}
							// align-content
							default: {
								return webkit + out + ms + 'flex-line-pack' + out.replace('align-content', '').replace(selfptn, '') + out
							}
						}
					}
					break
				}
				// min/max
				case 973:
				case 989: {
					// min-/max- height/width/block-size/inline-size
					if (out.charCodeAt(3) !== DASH || out.charCodeAt(4) === 122) {
						break
					}
				}
				// height/width: min-content / width: max-content
				case 931:
				case 953: {
					if (dimensionptn.test(input) === true) {
						// stretch
						if ((cache = input.substring(input.indexOf(':') + 1)).charCodeAt(0) === 115)
							return property(input.replace('stretch', 'fill-available'), first, second, third).replace(':fill-available', ':stretch')
						else
							return out.replace(cache, webkit + cache) + out.replace(cache, moz + cache.replace('fill-', '')) + out
					}
					break
				}
				// transform, transition: t, r, a
				case 962: {
					out = webkit + out + (out.charCodeAt(5) === 102 ? ms + out : '') + out
	
					// transitions
					if (second + third === 211 && out.charCodeAt(13) === 105 && out.indexOf('transform', 10) > 0) {
						return out.substring(0, out.indexOf(';', 27) + 1).replace(transformptn, '$1' + webkit + '$2') + out
					}
	
					break
				}
			}
	
			return out
		}
	
		/**
		 * Vendor
		 *
		 * @param {string} content
		 * @param {number} context
		 * @return {boolean}
		 */
		function vendor (content, context) {
			var index = content.indexOf(context === 1 ? ':' : '{')
			var key = content.substring(0, context !== 3 ? index : 10)
			var value = content.substring(index + 1, content.length - 1)
	
			return should(context !== 2 ? key : key.replace(pseudofmt, '$1'), value, context)
		}
	
		/**
		 * Supports
		 *
		 * @param {string} match
		 * @param {string} group
		 * @return {string}
		 */
		function supports (match, group) {
			var out = property(group, group.charCodeAt(0), group.charCodeAt(1), group.charCodeAt(2))
	
			return out !== group+';' ? out.replace(propertyptn, ' or ($1)').substring(4) : '('+group+')'
		}
	
		/**
		 * Animation
		 *
		 * @param {string} input
		 * @return {string}
		 */
		function animation (input) {
			var length = input.length
			var index = input.indexOf(':', 9) + 1
			var declare = input.substring(0, index).trim()
			var out = input.substring(index, length-1).trim()
	
			switch (input.charCodeAt(9)*keyed) {
				case 0: {
					break
				}
				// animation-*, -
				case DASH: {
					// animation-name, n
					if (input.charCodeAt(10) !== 110) {
						break
					}
				}
				// animation/animation-name
				default: {
					// split in case of multiple animations
					var list = out.split((out = '', animationptn))
	
					for (var i = 0, index = 0, length = list.length; i < length; index = 0, ++i) {
						var value = list[i]
						var items = value.split(propertiesptn)
	
						while (value = items[index]) {
							var peak = value.charCodeAt(0)
	
							if (keyed === 1 && (
								// letters
								(peak > AT && peak < 90) || (peak > 96 && peak < 123) || peak === UNDERSCORE ||
								// dash but not in sequence i.e --
								(peak === DASH && value.charCodeAt(1) !== DASH)
							)) {
								// not a number/function
								switch (isNaN(parseFloat(value)) + (value.indexOf('(') !== -1)) {
									case 1: {
										switch (value) {
											// not a valid reserved keyword
											case 'infinite': case 'alternate': case 'backwards': case 'running':
											case 'normal': case 'forwards': case 'both': case 'none': case 'linear':
											case 'ease': case 'ease-in': case 'ease-out': case 'ease-in-out':
											case 'paused': case 'reverse': case 'alternate-reverse': case 'inherit':
											case 'initial': case 'unset': case 'step-start': case 'step-end': {
												break
											}
											default: {
												value += key
											}
										}
									}
								}
							}
	
							items[index++] = value
						}
	
						out += (i === 0 ? '' : ',') + items.join(' ')
					}
				}
			}
	
			out = declare + out + ';'
	
			if (prefix === 1 || (prefix === 2 && vendor(out, 1)))
				return webkit + out + out
	
			return out
		}
	
		/**
		 * Isolate
		 *
		 * @param {Array<string>} current
		 */
		function isolate (current) {
			for (var i = 0, length = current.length, selector = Array(length), padding, element; i < length; ++i) {
				// split individual elements in a selector i.e h1 h2 === [h1, h2]
				var elements = current[i].split(elementptn)
				var out = ''
	
				for (var j = 0, size = 0, tail = 0, code = 0, l = elements.length; j < l; ++j) {
					// empty element
					if ((size = (element = elements[j]).length) === 0 && l > 1) {
						continue
					}
	
					tail = out.charCodeAt(out.length-1)
					code = element.charCodeAt(0)
					padding = ''
	
					if (j !== 0) {
						// determine if we need padding
						switch (tail) {
							case STAR:
							case TILDE:
							case GREATERTHAN:
							case PLUS:
							case SPACE:
							case OPENPARENTHESES:  {
								break
							}
							default: {
								padding = ' '
							}
						}
					}
	
					switch (code) {
						case AND: {
							element = padding + nscopealt
						}
						case TILDE:
						case GREATERTHAN:
						case PLUS:
						case SPACE:
						case CLOSEPARENTHESES:
						case OPENPARENTHESES: {
							break
						}
						case OPENBRACKET: {
							element = padding + element + nscopealt
							break
						}
						case COLON: {
							switch (element.charCodeAt(1)*2 + element.charCodeAt(2)*3) {
								// :global
								case 530: {
									if (escape > 0) {
										element = padding + element.substring(8, size - 1)
										break
									}
								}
								// :hover, :nth-child(), ...
								default: {
									if (j < 1 || elements[j-1].length < 1) {
										element = padding + nscopealt + element
									}
								}
							}
							break
						}
						case COMMA: {
							padding = ''
						}
						default: {
							if (size > 1 && element.indexOf(':') > 0) {
								element = padding + element.replace(pseudoptn, '$1' + nscopealt + '$2')
							} else {
								element = padding + element + nscopealt
							}
						}
					}
	
					out += element
				}
	
				selector[i] = out.replace(formatptn, '').trim()
			}
	
			return selector
		}
	
		/**
		 * Proxy
		 *
		 * @param {number} context
		 * @param {string} content
		 * @param {Array<string>} selectors
		 * @param {Array<string>} parents
		 * @param {number} line
		 * @param {number} column
		 * @param {number} length
		 * @param {number} id
		 * @param {number} depth
		 * @param {number} at
		 * @return {(string|void|*)}
		 */
		function proxy (context, content, selectors, parents, line, column, length, id, depth, at) {
			for (var i = 0, out = content, next; i < plugged; ++i) {
				switch (next = plugins[i].call(stylis, context, out, selectors, parents, line, column, length, id, depth, at)) {
					case void 0:
					case false:
					case true:
					case null: {
						break
					}
					default: {
						out = next
					}
				}
			}
	
			switch (out) {
				case void 0:
				case false:
				case true:
				case null:
				case content: {
					break
				}
				default: {
					return out
				}
			}
		}
	
		/**
		 * Minify
		 *
		 * @param {(string|*)} output
		 * @return {string}
		 */
		function minify (output) {
			return output
				.replace(formatptn, '')
				.replace(beforeptn, '')
				.replace(afterptn, '$1')
				.replace(tailptn, '$1')
				.replace(whiteptn, ' ')
		}
	
		/**
		 * Use
		 *
		 * @param {(Array<function(...?)>|function(...?)|number|void)?} plugin
		 */
		function use (plugin) {
			switch (plugin) {
				case void 0:
				case null: {
					plugged = plugins.length = 0
					break
				}
				default: {
					switch (plugin.constructor) {
						case Array: {
							for (var i = 0, length = plugin.length; i < length; ++i) {
								use(plugin[i])
							}
							break
						}
						case Function: {
							plugins[plugged++] = plugin
							break
						}
						case Boolean: {
							unkwn = !!plugin|0
						}
					}
				}
	 		}
	
	 		return use
		}
	
		/**
		 * Set
		 *
		 * @param {*} options
		 */
		function set (options) {
			for (var name in options) {
				var value = options[name]
				switch (name) {
					case 'keyframe': keyed = value|0; break
					case 'global': escape = value|0; break
					case 'cascade': cascade = value|0; break
					case 'compress': compress = value|0; break
					case 'semicolon': semicolon = value|0; break
					case 'preserve': preserve = value|0; break
					case 'prefix':
						should = null
	
						if (!value) {
							prefix = 0
						} else if (typeof value !== 'function') {
							prefix = 1
						} else {
							prefix = 2
							should = value
						}
				}
			}
	
			return set
		}
	
		/**
		 * Stylis
		 *
		 * @param {string} selector
		 * @param {string} input
		 * @return {*}
		 */
		function stylis (selector, input) {
			if (this !== void 0 && this.constructor === stylis) {
				return factory(selector)
			}
	
			// setup
			var ns = selector
			var code = ns.charCodeAt(0)
	
			// trim leading whitespace
			if (code < 33) {
				code = (ns = ns.trim()).charCodeAt(0)
			}
	
			// keyframe/animation namespace
			if (keyed > 0) {
				key = ns.replace(invalidptn, code === OPENBRACKET ? '' : '-')
			}
	
			// reset, used to assert if a plugin is moneky-patching the return value
			code = 1
	
			// cascade/isolate
			if (cascade === 1) {
				nscope = ns
			} else {
				nscopealt = ns
			}
	
			var selectors = [nscope]
			var result
	
			// execute plugins, pre-process context
			if (plugged > 0) {
				result = proxy(PREPS, input, selectors, selectors, line, column, 0, 0, 0, 0)
	
				if (result !== void 0 && typeof result === 'string') {
					input = result
				}
			}
	
			// build
			var output = compile(array, selectors, input, 0, 0)
	
			// execute plugins, post-process context
			if (plugged > 0) {
				result = proxy(POSTS, output, selectors, selectors, line, column, output.length, 0, 0, 0)
	
				// bypass minification
				if (result !== void 0 && typeof(output = result) !== 'string') {
					code = 0
				}
			}
	
			// reset
			key = ''
			nscope = ''
			nscopealt = ''
			pattern = 0
			line = 1
			column = 1
	
			return compress*code === 0 ? output : minify(output)
		}
	
		stylis['use'] = use
		stylis['set'] = set
	
		if (options !== void 0) {
			set(options)
		}
	
		return stylis
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  text-decoration: none;\n  background: ', ';\n  color: ', ';\n  border: 2px solid white;\n  padding: 0.44em 1.2em;\n  border-radius: 50px;\n  display: inline-block;\n  margin: 0 0.25em;\n  transition: all 0.25s;\n  cursor: pointer;\n  box-shadow: 0 2px 30px 0px rgba(30, 112, 167, 0.39);\n  font-size: ', ';\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 2px 30px 0px rgba(30, 112, 167, 0.6);\n     color: ', ';\n  }\n'], ['\n  text-decoration: none;\n  background: ', ';\n  color: ', ';\n  border: 2px solid white;\n  padding: 0.44em 1.2em;\n  border-radius: 50px;\n  display: inline-block;\n  margin: 0 0.25em;\n  transition: all 0.25s;\n  cursor: pointer;\n  box-shadow: 0 2px 30px 0px rgba(30, 112, 167, 0.39);\n  font-size: ', ';\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 2px 30px 0px rgba(30, 112, 167, 0.6);\n     color: ', ';\n  }\n']);
	
	var _gatsbyLink = __webpack_require__(60);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _styledComponents = __webpack_require__(11);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Button = (0, _styledComponents2.default)(_gatsbyLink2.default)(_templateObject, function (props) {
	  return props.transparent ? 'transparent' : 'white';
	}, function (props) {
	  return props.transparent ? 'inherit' : props.theme.colors.primary;
	}, function (props) {
	  return props.large ? '1.15rem' : '1rem';
	}, function (props) {
	  return props.transparent ? 'inherit' : props.theme.colors.primary;
	});
	
	exports.default = Button;
	module.exports = exports['default'];

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n background: #F9F8F9;\n border-top: 1px solid #ebebeb;\n padding: 1em;\n'], ['\n background: #F9F8F9;\n border-top: 1px solid #ebebeb;\n padding: 1em;\n']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n  text-align: center;\n'], ['\n  text-align: center;\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(11);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Footer = _styledComponents2.default.footer(_templateObject);
	
	var Content = _styledComponents2.default.div(_templateObject2);
	
	exports.default = function () {
	  return _react2.default.createElement(
	    Footer,
	    null,
	    _react2.default.createElement(
	      Content,
	      null,
	      'Sixgill Developer Documentation'
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: 1.5em;\n  margin: 0;\n  line-height: 1em;\n  font-family: color: ', ';\n  font-weight: 400;\n  color: ', ';\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n'], ['\n  font-size: 1.5em;\n  margin: 0;\n  line-height: 1em;\n  font-family: color: ', ';\n  font-weight: 400;\n  color: ', ';\n\n  a {\n    color: inherit;\n    text-decoration: inherit;\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n  border-top: 3px solid ', ';\n  border-bottom: 1px solid #f0f0f0;\n  position: ', ';\n  top: 0;\n  left: 0;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 1.25em 2em;\n  z-index: 99;\n  height: auto;\n\n  ul {\n    padding: 0;\n    list-style: none;\n    margin: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin: 0 0.5em;\n  }\n\n  a {\n    color: inherit;\n    font-weight: inherit;\n    text-decoration: none;\n  }\n\n  .active {\n    color: ', ';\n    font-weight: 600;\n  }\n'], ['\n  border-top: 3px solid ', ';\n  border-bottom: 1px solid #f0f0f0;\n  position: ', ';\n  top: 0;\n  left: 0;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 1.25em 2em;\n  z-index: 99;\n  height: auto;\n\n  ul {\n    padding: 0;\n    list-style: none;\n    margin: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin: 0 0.5em;\n  }\n\n  a {\n    color: inherit;\n    font-weight: inherit;\n    text-decoration: none;\n  }\n\n  .active {\n    color: ', ';\n    font-weight: 600;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(60);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _classnames = __webpack_require__(25);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _styledComponents = __webpack_require__(11);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Logo = _styledComponents2.default.h1(_templateObject, function (props) {
	  return props.theme.monospace;
	}, function (props) {
	  return props.theme.colors.primary;
	});
	
	var Header = _styledComponents2.default.header(_templateObject2, function (props) {
	  return props.theme.colors.primary;
	}, function (props) {
	  return props.fixed ? 'fixed' : 'relative';
	}, function (props) {
	  return props.theme.colors.primary;
	});
	
	var Offset = function Offset(_ref) {
	  var fixed = _ref.fixed,
	      children = _ref.children;
	  return fixed ? _react2.default.createElement(
	    'div',
	    null,
	    children,
	    _react2.default.createElement('div', { style: { height: '68px' } })
	  ) : children;
	};
	
	exports.default = function (_ref2) {
	  var currentPath = _ref2.currentPath,
	      fixed = _ref2.fixed,
	      nav = _ref2.nav;
	  return _react2.default.createElement(
	    Offset,
	    { fixed: fixed },
	    _react2.default.createElement(
	      Header,
	      { fixed: fixed },
	      _react2.default.createElement(
	        Logo,
	        null,
	        _react2.default.createElement(
	          _gatsbyLink2.default,
	          { to: '/' },
	          '<docs.sixgill>'
	        )
	      ),
	      !nav ? _react2.default.createElement(
	        'ul',
	        null,
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _gatsbyLink2.default,
	            {
	              className: (0, _classnames2.default)({
	                active: currentPath === '/guides/getting-started'
	              }),
	              to: '/guides/getting-started'
	            },
	            'Getting started'
	          )
	        ),
	        _react2.default.createElement(
	          'li',
	          null,
	          _react2.default.createElement(
	            _gatsbyLink2.default,
	            {
	              className: (0, _classnames2.default)({
	                active: currentPath.startsWith('/api') && currentPath !== '/apis/overview'
	              }),
	              to: '/apis/overview'
	            },
	            'API Docs'
	          )
	        )
	      ) : nav
	    )
	  );
	};
	
	module.exports = exports['default'];

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _templateObject = _taggedTemplateLiteralLoose(['\n  z-index: 1;\n  background-image: linear-gradient(\n    120deg,\n    ', ' 0%,\n    #002966 100%\n  );\n  color: #fff;\n  padding: 70px;\n  border-radius: 0 0 50% 50% / 4%;\n  display: flex;\n  justify-content: space-between;\n\n  section:first-child {\n    width: 50%;\n    margin-left: 3%;\n  }\n\n  section:last-child {\n    width: 45%;\n  }\n\n  h2 {\n    margin-top: 1.5rem;\n    font-size: 3.5em;\n    margin-bottom: 0.25em;\n    font-weight: bold;\n    letter-spacing: 1.5px;\n    line-height: 1.05em;\n    display: inline-block;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-top: 0;\n    margin-bottom: 1.5em;\n    font-weight: 300;\n  }\n\n  @media ', ' {\n    padding: 50px 15px;\n    flex-direction: column;\n\n    h2 {\n      font-size: 2.5em;\n    }\n\n    h3 {\n      font-size: 1.25em;\n    }\n\n    section:first-child,\n    section:last-child {\n      width: 100%;\n    }\n\n    section:first-child {\n      margin: 0 0 2em 0;\n    }\n  }\n'], ['\n  z-index: 1;\n  background-image: linear-gradient(\n    120deg,\n    ', ' 0%,\n    #002966 100%\n  );\n  color: #fff;\n  padding: 70px;\n  border-radius: 0 0 50% 50% / 4%;\n  display: flex;\n  justify-content: space-between;\n\n  section:first-child {\n    width: 50%;\n    margin-left: 3%;\n  }\n\n  section:last-child {\n    width: 45%;\n  }\n\n  h2 {\n    margin-top: 1.5rem;\n    font-size: 3.5em;\n    margin-bottom: 0.25em;\n    font-weight: bold;\n    letter-spacing: 1.5px;\n    line-height: 1.05em;\n    display: inline-block;\n  }\n\n  h3 {\n    font-size: 1.5em;\n    margin-top: 0;\n    margin-bottom: 1.5em;\n    font-weight: 300;\n  }\n\n  @media ', ' {\n    padding: 50px 15px;\n    flex-direction: column;\n\n    h2 {\n      font-size: 2.5em;\n    }\n\n    h3 {\n      font-size: 1.25em;\n    }\n\n    section:first-child,\n    section:last-child {\n      width: 100%;\n    }\n\n    section:first-child {\n      margin: 0 0 2em 0;\n    }\n  }\n']),
	    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: #f9f8f9;\n  display: flex;\n  justify-content: space-around;\n  margin-top: -2em;\n  padding: 5em 2em 2em 2em;\n\n  div {\n    width: 30%;\n  }\n\n  h3 {\n    color: ', ';\n  }\n\n  p {\n    margin-top: 0;\n  }\n\n  @media ', ' {\n    flex-direction: column;\n\n    div {\n      width: 90%;\n      margin: auto;\n    }\n  }\n'], ['\n  background: #f9f8f9;\n  display: flex;\n  justify-content: space-around;\n  margin-top: -2em;\n  padding: 5em 2em 2em 2em;\n\n  div {\n    width: 30%;\n  }\n\n  h3 {\n    color: ', ';\n  }\n\n  p {\n    margin-top: 0;\n  }\n\n  @media ', ' {\n    flex-direction: column;\n\n    div {\n      width: 90%;\n      margin: auto;\n    }\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(11);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	var _Header = __webpack_require__(69);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Footer = __webpack_require__(382);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	var _Button = __webpack_require__(381);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }
	
	var Hero = _styledComponents2.default.div(_templateObject, function (props) {
	  return props.theme.colors.primary;
	}, function (props) {
	  return props.theme.tablet;
	});
	
	var Philosophy = _styledComponents2.default.section(_templateObject2, function (props) {
	  return props.theme.colors.primary;
	}, function (props) {
	  return props.theme.tablet;
	});
	
	var IndexPage = function (_Component) {
	  _inherits(IndexPage, _Component);
	
	  function IndexPage() {
	    _classCallCheck(this, IndexPage);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  IndexPage.prototype.componentDidMount = function componentDidMount() {};
	
	  IndexPage.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_Header2.default, { currentPath: this.props.location.pathname, fixed: true }),
	      _react2.default.createElement(
	        Hero,
	        null,
	        _react2.default.createElement(
	          'section',
	          null,
	          _react2.default.createElement(
	            'h2',
	            null,
	            'Sixgill'
	          ),
	          _react2.default.createElement(
	            'h3',
	            null,
	            'We are a backbone for governance of the Internet of Everything. Sixgill enables the governance of connected assets\u2014people, places and things\u2014with our universal sensor data services platform for easier, faster, and more flexible IoE application development. We unlock the value of IoE by taking noisy, voluminous data and identifying exception events\u2014the valuable data intersections that are pertinent to business problems that our customers care about in the moment.'
	          ),
	          _react2.default.createElement(
	            _Button2.default,
	            { to: '/guides/getting-started', large: true },
	            'Get Started'
	          ),
	          _react2.default.createElement(
	            _Button2.default,
	            { to: '/apis/overview', large: true, transparent: true },
	            'API Docs'
	          )
	        )
	      ),
	      _react2.default.createElement(
	        Philosophy,
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Sixgill Sense: How it Works'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Sense features and benefits provide a unique combination of technology, services and capacity-maximizing capabilities. With continuous sensor data collection and real-time understanding, Sense helps enterprises know what assets are available, where they are and their operating state while keeping behaviors and actions on track.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Sense 2.0 Product Brief'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Sixgill Sense 2.0 is a complete IoT sensor data platform solution that enables enterprise-wide unified ingestion and sensor data processing for the rapid and uniform development of enterprise applications. With features including a massively scalable architecture, real-time rule triggers, and advanced data correlation features like proximity, the IoT sensor data platform produces actionable, context-enriched insights for sensor and location data.'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            'h3',
	            null,
	            'Sense 2.0 Architecture White Paper'
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            'Sense solves fragmentation and integration problems with a common, cross-enterprise architecture unbounded for scale and unrestricted for extensibility and deployment. Sense fits within the infrastructure of any enterprise for development of a wide range of task-specific applications for sensor-equipped assets.'
	          )
	        )
	      ),
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  };
	
	  return IndexPage;
	}(_react.Component);
	
	exports.default = IndexPage;
	module.exports = exports['default'];

/***/ })

});
//# sourceMappingURL=component---src-pages-index-js-761453e7ff5fc95a4ffe.js.map