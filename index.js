'use strict';

var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	return isFnRegex.test(fnToStr.call(fn));
};
