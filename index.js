'use strict';

var callBound = require('call-bound');
var safeRegexTest = require('safe-regex-test');
var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = require('get-proto');

var toStr = callBound('Object.prototype.toString');
var fnToStr = callBound('Function.prototype.toString');

var getGeneratorFunction = require('generator-function');

// Hack to fix import, see https://github.com/inspect-js/is-generator-function/issues/45
if (typeof getGeneratorFunction === 'object' && typeof getGeneratorFunction.default === 'function') getGeneratorFunction = getGeneratorFunction.default

/** @type {import('.')} */
module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex(fnToStr(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	var GeneratorFunction = getGeneratorFunction();
	return GeneratorFunction && getProto(fn) === GeneratorFunction.prototype;
};
